import { useRef } from 'react';
import { useImmer } from 'use-immer';
import { message, notification } from 'antd';
import { useRequest } from 'ahooks';
import { ActionType } from '@ant-design/pro-table';
import { initialPagination } from '@/constant';
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
   * 重置密码
   */
  const { run: handleResetPassword, loading: resetLoading } = useRequest(
    API.platform.sysOrg.resetPassword.fetch,
    {
      manual: true,
      onSuccess: (secretCode) => {
        message.success('重置成功');
        reload?.();
        secretCode &&
          notification.success({
            message: `密码重置成功`,
            description: `密码为: ${secretCode}`,
            duration: null,
          });
      },
    },
  );

  /**
   * 启用/禁用
   */
  const { run: handleUpdateStatus, loading: updateLoading } = useRequest(
    API.platform.sysOrg.updateStatus.fetch,
    {
      manual: true,
      onSuccess: () => {
        message.success('操作成功');
        reload?.();
      },
    },
  );

  /**
   * 角色删除
   * @param id
   */
  const { run: handleDelete, loading: deleteLoading } = useRequest(
    API.authorization.resourceRole.resourceDelete.fetch,
    {
      manual: true,
      onSuccess: () => {
        message.success('删除成功');
        reload?.();
      },
    },
  );

  /**
   * 获取普通分页列表
   * @param params
   */
  const fetchList = async (params?: { pageSize?: number; current?: number }) => {
    const { list, page, total } = await API.platform.sysOrg.pageList.fetch(
      removeEmpty({
        ...params,
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

  /** 编辑企业 */
  const handleCompanyEdit = (row: defs.platform.TenantInformation) => {
    setEditModalConfig((config) => {
      config.visible = true;
      config.loading = true;
      config.formData = row;
    });
  };

  /** 新建企业 */
  const handleCompanyAdd = () => {
    setEditModalConfig((config) => {
      config.visible = true;
      config.formData = {};
    });
  };

  /** 给企业授权 */
  const handleAuthorize = (row: defs.platform.TenantInformation) => {
    setAuthModalConfig((config) => {
      config.visible = true;
      config.loading = true;
      config.formData = row;
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

  const loading = resetLoading || updateLoading || deleteLoading;

  return {
    loading,
    actionRef,
    reload,
    editModalConfig,
    setEditModalConfig,
    authModalConfig,
    setAuthModalConfig,
    handleDelete,
    fetchList,
    handleCompanyEdit,
    handleUpdateStatus,
    handleResetPassword,
    handleCompanyAdd,
    handleAuthorize,
    handleModalHide,
  };
};
