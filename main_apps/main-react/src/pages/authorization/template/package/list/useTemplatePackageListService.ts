import { useEffect, useState } from 'react';
import { message } from 'antd';
import { useRequest } from 'ahooks';
import { useImmer } from 'use-immer';
import { removeEmpty } from '@/utils/json';
import { initialPagination, PACKAGE_PAGE_SIZE, TEMPLATE_STATUS_MAP } from '@/constant';
import useTemplateAuth from '@/hooks/useTemplateAuth';

// 卡片宽度
const CARD_WIDTH = 316;

export default () => {
  const [selectedItem, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [taskIds, setTaskIds] = useState<string[]>([]);
  const [margin, setMargin] = useState(0);

  const [result, setResult] = useState<defs.platform.Page<defs.platform.TemPackageDTO>>({
    list: [],
    page: 1,
    total: 0,
  });

  const [createModalConfig, setCreateModalConfig] = useImmer<{
    visible: boolean;
    data: any;
    loading: boolean;
  }>({
    visible: false,
    data: {},
    loading: false,
  });

  const [previewModalConfig, setPreviewModalConfig] = useImmer<{
    visible: boolean;
    data: any;
    loading: boolean;
  }>({
    visible: false,
    data: {},
    loading: false,
  });

  const { templateAuthMap } = useTemplateAuth();

  /**
   * 获取普通分页列表
   * @param params
   */
  const fetchList = async (params?: { pageSize?: number; current?: number }) => {
    setLoading(true);
    const {
      list = [],
      page = 1,
      total = 0,
    } = await API.platform.template.listTemplatePackage.fetch(
      removeEmpty({
        ...params,
        page: params?.current || initialPagination.page,
        pageSize: params?.pageSize || PACKAGE_PAGE_SIZE,
      }),
    );
    setLoading(false);
    setResult({
      list,
      page,
      total,
    });
  };

  /** 进入页面第一次请求 */
  useEffect(() => {
    fetchList();
  }, []);

  /** 创建模板 */
  const { run: handleCreateTemplate } = useRequest(
    API.platform.template.createTemplatePackage.fetch,
    {
      manual: true,
      onSuccess: (data) => {
        setCreateModalConfig((config) => {
          config.visible = true;
          config.loading = true;
          config.data = data;
        });
        if (data?.templateList?.length) {
          // 每个子系统需要调用接口去创建
          data?.templateList?.map((template) =>
            handleTemplateRetry({ orgTemplateId: template.orgTemplateId }),
          );
        }
      },
    },
  );

  /** 预览模板 */
  const { run: handlePreviewTemplate } = useRequest(
    API.platform.template.detailTemplatePackage.fetch,
    {
      manual: true,
      onSuccess: (data) => {
        setPreviewModalConfig((config) => {
          config.visible = true;
          config.loading = true;
          config.data = data;
        });
      },
    },
  );

  /** 创建或者重试 */
  const { run: handleTemplateRetry } = useRequest(API.platform.template.createTemplate.fetch, {
    manual: true,
    onSuccess: (data) => {
      if (createModalConfig?.visible) {
        const newData = createModalConfig?.data;
        const templateList = createModalConfig?.data?.templateList.filter(
          (item: { orgTemplateId: string | undefined }) =>
            item.orgTemplateId !== data.orgTemplateId,
        );
        const newTemplateList = [...templateList, data];
        setCreateModalConfig((config) => {
          config.loading = false;
          config.data = { ...newData, templateList: newTemplateList };
        });
        // 获取异步接口的子系统，加入定时任务中
        if (data.status === TEMPLATE_STATUS_MAP.创建中) {
          setTaskIds([...taskIds, data?.orgTemplateId!]);
        }
      } else {
        message.success('操作成功');
      }
    },
  });

  /** 定时获取子系统创建的任务详情 */
  const { run: runTask, cancel: cancelTask } = useRequest(
    API.platform.template.detailTemplate.fetch,
    {
      manual: true,
      ready: createModalConfig.visible,
      // refreshDeps: [taskIds.length],
      pollingInterval: 10000,
      pollingWhenHidden: true,
      onSuccess: (data) => {
        const newData = createModalConfig?.data;
        const templateList = createModalConfig?.data?.templateList.filter(
          (item: { orgTemplateId: string | undefined }) =>
            item.orgTemplateId !== data.orgTemplateId,
        );
        const newTemplateList = [...templateList, data];
        setCreateModalConfig((config) => {
          config.data = { ...newData, templateList: newTemplateList };
        });
        // 异步接口返回结果，取消定时任务
        if (data.status !== TEMPLATE_STATUS_MAP.创建中 && taskIds.includes(data?.orgTemplateId!)) {
          cancelTask();
          setTaskIds(taskIds.filter((id) => id !== data.orgTemplateId));
        }
      },
    },
  );

  useEffect(() => {
    if (taskIds?.length) {
      taskIds.forEach((id) => runTask({ orgTemplateId: id }));
    } else {
      cancelTask();
    }
    if (!createModalConfig.visible) {
      cancelTask();
    }
  }, [taskIds]);

  /** 隐藏弹窗 */
  const handleModalHide = (type: 'create' | 'preview') => {
    const methodsObj = {
      create: setCreateModalConfig,
      preview: setPreviewModalConfig,
    };
    methodsObj[type]((config) => {
      config.visible = false;
      config.loading = false;
      config.data = {};
    });
  };
  /** ref 函数 */
  const getRef = (dom: HTMLDivElement) => {
    if (!dom) return;
    const totalWidth = dom.clientWidth;
    if (!totalWidth) return;
    // 一行几个
    const count = Math.floor(totalWidth / CARD_WIDTH) - 1;
    // 根据余下的宽度算出每个的左右边距
    const margin = Math.floor((totalWidth - count * CARD_WIDTH) / count / 2);
    setMargin(margin);
  };

  return {
    ...result,
    margin,
    loading,
    selectedItem,
    createModalConfig,
    previewModalConfig,
    handleModalHide,
    setCreateModalConfig,
    setSelected,
    handleTemplateRetry,
    fetchList,
    handleCreateTemplate,
    handlePreviewTemplate,
    getRef,
    templateAuthMap,
  };
};
