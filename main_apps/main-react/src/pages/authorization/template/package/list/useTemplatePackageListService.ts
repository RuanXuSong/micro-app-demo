import { useRef, useState } from 'react';
import { message } from 'antd';
import { useRequest } from 'ahooks';
import { ActionType } from '@ant-design/pro-table';
import { useImmer } from 'use-immer';

export default () => {
  const actionRef = useRef<ActionType>();
  const [selectedItem, setSelected] = useState(0);

  const { reload } = actionRef.current || {};

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

  /**
   * 获取普通分页列表
   * @param params
   */
  const fetchList = async (params?: { pageSize?: number; current?: number }) => {
    // const { list, page, total } = await API.platform.sysOrg.pageList.fetch(
    //   removeEmpty({
    //     ...params,
    //     page: params?.current || initialPagination.page,
    //     pageSize: params?.pageSize || initialPagination.pageSize,
    //   }),
    // );
    console.log(params);

    return {
      // data: list || [],
      data: [],
      page: 1,
      success: true,
      total: 12,
    };
  };

  /** 创建模板 */
  const handleCreateTemplate = (row: any) => {
    setCreateModalConfig((config) => {
      config.visible = true;
      config.loading = true;
      config.data = row;
    });
  };

  /** 预览模板 */
  const handlePreviewTemplate = (row: any) => {
    setPreviewModalConfig((config) => {
      config.visible = true;
      config.loading = true;
      config.data = row;
    });
  };

  /** 重试 */
  const { run: handleTemplateRetry, loading } = useRequest(API.platform.sysOrg.updateStatus.fetch, {
    manual: true,
    onSuccess: () => {
      message.success('删除成功');
      reload?.();
    },
  });

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

  return {
    loading: loading,
    actionRef,
    selectedItem,
    createModalConfig,
    previewModalConfig,
    handleModalHide,
    setCreateModalConfig,
    setSelected,
    reload,
    handleTemplateRetry,
    fetchList,
    handleCreateTemplate,
    handlePreviewTemplate,
  };
};
