import { useRef } from 'react';
import { useImmer } from 'use-immer';
import { ActionType } from '@ant-design/pro-table';
import { initialPagination, LOGIN_CONFIG } from '@/constant';
import { removeEmpty } from '@/utils/json';

export default () => {
  const actionRef = useRef<ActionType>();
  const [editModalConfig, setEditModalConfig] = useImmer<{
    visible: boolean;
    formData: any;
    loading: boolean;
  }>({
    visible: false,
    formData: {},
    loading: false,
  });
  const [authModalConfig, setAuthModalConfig] = useImmer<{
    visible: boolean;
    formData: any;
    loading: boolean;
  }>({
    visible: false,
    formData: {},
    loading: false,
  });

  const { reload } = actionRef.current || {};
  /**
   * TODO
   * 获取详情
   * @param params
   */
  const fetchList = async (params?: { pageSize?: number; current?: number }) => {
    const { list, page, total } = await API.authorization.resource.listPagination.fetch(
      removeEmpty({
        ...params,
        clientKey: LOGIN_CONFIG.clientId,
        page: params?.current || initialPagination.page,
        pageSize: params?.pageSize || initialPagination.pageSize,
      }),
    );
    return {
      data: list || [],
      page,
      success: true,
      total,
    };
  };

  /** 修改密码 */
  const handlePasswordEdit = (id: string) => {
    setEditModalConfig((config) => {
      config.visible = true;
      config.formData = { id };
    });
  };

  /** 隐藏弹窗 */
  const handleModalHide = (type: 'edit' | 'auth') => {
    const methodsObj = {
      edit: setEditModalConfig,
      auth: setAuthModalConfig,
    };
    methodsObj[type]((config) => {
      config.visible = false;
      config.loading = false;
      config.formData = {};
    });
  };

  return {
    actionRef,
    reload,
    editModalConfig,
    setEditModalConfig,
    authModalConfig,
    setAuthModalConfig,
    fetchList,
    handlePasswordEdit,
    handleModalHide,
  };
};
