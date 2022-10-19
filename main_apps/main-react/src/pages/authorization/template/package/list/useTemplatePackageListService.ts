import { useEffect, useRef, useState } from 'react';
import { message } from 'antd';
import { useRequest } from 'ahooks';
import { useImmer } from 'use-immer';
import { removeEmpty } from '@/utils/json';
import {
  initialPagination,
  PACKAGE_PAGE_SIZE,
  TEMPLATE_INTERVAL_TIME,
  TEMPLATE_STATUS_MAP,
} from '@/constant';
import useTemplateAuth from '@/hooks/useTemplateAuth';

// 卡片宽度
const CARD_WIDTH = 316;

export default () => {
  const [selectedItem, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [margin, setMargin] = useState(0);
  const taskClearRef = useRef({});

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

  const [markDownConfig, setMarkDownConfig] = useImmer<{
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
  const handleCreateTemplate = (value: { packageId: string; name: string }) => {
    const { name, packageId } = value;
    setCreateModalConfig((config) => {
      config.visible = true;
      config.loading = true;
      config.data = { name };
    });
    createTemplate({ packageId });
  };
  const { run: createTemplate } = useRequest(API.platform.template.createTemplatePackage.fetch, {
    manual: true,
    onSuccess: (data) => {
      // 模板开始创建修改所有子系统状态为创建中
      data?.templateList?.map((template) => (template.status = TEMPLATE_STATUS_MAP.创建中));

      setCreateModalConfig((config) => {
        config.visible = true;
        config.loading = false;
        config.data = data;
      });

      if (data?.templateList?.length) {
        // 每个子系统需要调用接口去创建
        data?.templateList?.forEach((template) => {
          handleTemplateRetry({ orgTemplateId: template.orgTemplateId });
          // 加入定时任务
          const clear = setInterval(() => {
            runTask({ orgTemplateId: template?.orgTemplateId! });
          }, TEMPLATE_INTERVAL_TIME);
          taskClearRef.current[template?.orgTemplateId!] = clear;
        });
      }
    },
  });

  /** 预览模板 */
  const handlePreviewTemplate = (value: { packageId: string }) => {
    setPreviewModalConfig((config) => {
      config.visible = true;
      config.loading = true;
    });
    previewTemplate(value);
  };
  const { run: previewTemplate } = useRequest(API.platform.template.detailTemplatePackage.fetch, {
    manual: true,
    onSuccess: (data) => {
      setPreviewModalConfig((config) => {
        config.visible = true;
        config.loading = false;
        config.data = data;
      });
    },
  });

  /** 查看模板指南 */
  const handleViewMarkDown = async (name: string, fileUrl: string) => {
    const result = await fetch(fileUrl);
    const data = await result.text();
    setMarkDownConfig((config) => {
      config.visible = true;
      config.data = { name, data };
    });
  };

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
      } else {
        message.success('操作成功');
      }
    },
  });

  /** 定时获取子系统创建的任务详情 */
  const { run: runTask } = useRequest(API.platform.template.detailTemplate.fetch, {
    manual: true,
    onSuccess: (data) => {
      if ([TEMPLATE_STATUS_MAP.创建中, TEMPLATE_STATUS_MAP.未创建].includes(data?.status!)) {
        return;
      }
      const newData = createModalConfig?.data;
      const templateList = createModalConfig?.data?.templateList?.filter(
        (item: { orgTemplateId: string | undefined }) => item.orgTemplateId !== data.orgTemplateId,
      );
      const newTemplateList = [...templateList, data];
      setCreateModalConfig((config) => {
        config.data = { ...newData, templateList: newTemplateList };
      });
      // 异步接口返回结果，取消定时任务
      if (
        data.status !== TEMPLATE_STATUS_MAP.创建中 &&
        Object.keys(taskClearRef?.current)?.includes(data?.orgTemplateId!)
      ) {
        clearInterval(taskClearRef?.current?.[data?.orgTemplateId!]);
      }
    },
  });

  useEffect(() => {
    const clearAll = () => {
      const taskClearMap = taskClearRef?.current || {};

      Object.keys(taskClearMap).forEach((key) => {
        clearInterval(taskClearMap[key]);
      });
      taskClearRef.current = {};
    };
    if (!createModalConfig.visible) {
      clearAll();
    }
    return () => clearAll();
  }, [createModalConfig.visible]);

  /** 隐藏弹窗 */
  const handleModalHide = (type: 'create' | 'preview' | 'markdown') => {
    const methodsObj = {
      create: setCreateModalConfig,
      preview: setPreviewModalConfig,
      markdown: setMarkDownConfig,
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
    const remainWidth = totalWidth % CARD_WIDTH;
    const maxCount = Math.floor(totalWidth / CARD_WIDTH);
    const count = remainWidth > maxCount * 20 ? maxCount : maxCount - 1;
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
    markDownConfig,
    handleViewMarkDown,
    handleModalHide,
    setSelected,
    handleTemplateRetry,
    fetchList,
    handleCreateTemplate,
    handlePreviewTemplate,
    getRef,
    templateAuthMap,
  };
};
