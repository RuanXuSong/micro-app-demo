import { useRef, useState } from 'react';
import { useImmer } from 'use-immer';
import { message } from 'antd';
import { useRequest } from 'ahooks';
import { ActionType } from '@ant-design/pro-table';
import { initialPagination } from '@/constant';
import { removeEmpty } from '@/utils/json';
import { getResourceIds } from '@/utils/getResourceIds';

export default () => {
  const actionRef = useRef<ActionType>();
  const [orgId, setOrgId] = useState<string>();
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
  }>({
    visible: false,
    formData: {},
  });

  const { reload } = actionRef.current || {};

  /**
   * 启用/禁用
   */
  const { run: handleDisable } = useRequest(API.authorization.role.update.fetch, {
    manual: true,
    onSuccess: () => {
      message.success('操作成功');
      reload?.();
    },
  });

  /**
   * 角色删除
   * @param id
   */
  const { run: handleDelete } = useRequest(API.authorization.resourceRole.resourceDelete.fetch, {
    manual: true,
    onSuccess: () => {
      message.success('删除成功');
      reload?.();
    },
  });

  /**
   * 获取普通分页列表
   * @param params
   */
  const fetchList = async (params?: { pageSize?: number; current?: number }) => {
    const { list, page, total } = await API.platform.sysRole.pageList.fetch(
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

  /** 编辑角色 */
  const handleRoleEdit = (row: defs.authorization.ResourceRole) => {
    setEditModalConfig((config) => {
      config.visible = true;
      config.loading = true;
      config.formData = row;
    });
  };

  /** 新建角色 */
  const handleRoleAdd = () => {
    setEditModalConfig((config) => {
      config.visible = true;
      config.formData = {};
    });
  };

  /** 给企业授权 */
  const handleAuthorize = (row: defs.platform.RightsManagementRoleDtoList) => {
    const { resourceMap } = row || {};
    const resourceIds = getResourceIds(resourceMap);
    setAuthModalConfig((config) => {
      config.visible = true;
      config.formData = { ...row, resourceIds };
    });
  };

  /** 隐藏弹窗 */
  const handleModalHide = (type: 'edit' | 'auth') => {
    const methodsObj = {
      edit: setEditModalConfig,
      auth: setAuthModalConfig,
    };
    methodsObj[type]((config: any) => {
      config.visible = false;
      config.loading = false;
      config.formData = {};
    });
  };

  return {
    orgId,
    setOrgId,
    actionRef,
    reload,
    editModalConfig,
    setEditModalConfig,
    authModalConfig,
    setAuthModalConfig,
    handleDisable,
    handleDelete,
    fetchList,
    handleRoleEdit,
    handleRoleAdd,
    handleAuthorize,
    handleModalHide,
  };
};
