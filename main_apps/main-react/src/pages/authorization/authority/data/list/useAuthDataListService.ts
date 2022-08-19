import { useRef, useState, useMemo } from 'react';
import { useImmer } from 'use-immer';
import { message } from 'antd';
import { useRequest } from 'ahooks';
import { ActionType } from '@ant-design/pro-table';
import { dimToOptions, removeEmpty } from '@/utils/json';

export default () => {
  const actionRef = useRef<ActionType>();
  const [clientKey, setClientKey] = useState<string>('');
  const [businessValue, setBusinessValue] = useState<string>('');
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
  const [scopeModalConfig, setScopeModalConfig] = useImmer<{
    visible: boolean;
    formData: any;
  }>({
    visible: false,
    formData: {},
  });

  const { reload } = actionRef.current || {};

  const { data: scopeMap } = useRequest<defs.authorization.DataRuleDTO[]>(
    () =>
      API.authorization.data.listRule.fetch({
        clientKey,
      }),
    {
      refreshDeps: [clientKey],
      ready: !!clientKey,
    },
  );

  const scopeMapOptions = useMemo(
    () =>
      dimToOptions(scopeMap, {
        labelMapping: 'ruleName',
        codeMapping: 'id',
      }),
    [scopeMap],
  );

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
    if (clientKey) {
      const { list, page, total } = await API.authorization.dataRole.listPagination.fetch(
        removeEmpty({
          ...params,
          clientKey,
          businessValue,
        }),
      );
      return {
        data: list || [],
        page,
        success: true,
        total,
      };
    }
    return {
      data: [],
    };
  };

  /** 编辑角色 */
  const handleRoleEdit = (row: defs.authorization.DataRoleVO) => {
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

  /** 设置范围 */
  const handleScopeSet = (row: any) => {
    setScopeModalConfig((config) => {
      config.visible = true;
      config.formData = row;
    });
  };

  /** 给用户授权 */
  const handleAuthorize = (row: defs.authorization.DataRoleVO) => {
    setAuthModalConfig((config) => {
      config.visible = true;
      config.formData = row;
    });
  };

  /** 隐藏弹窗 */
  const handleModalHide = (type: 'edit' | 'auth' | 'scope') => {
    const methodsObj = {
      edit: setEditModalConfig,
      auth: setAuthModalConfig,
      scope: setScopeModalConfig,
    };
    methodsObj[type]((config: any) => {
      config.visible = false;
      config.loading = false;
      config.formData = {};
    });
  };

  return {
    scopeMap,
    actionRef,
    reload,
    clientKey,
    setClientKey,
    businessValue,
    setBusinessValue,
    scopeMapOptions,
    editModalConfig,
    setEditModalConfig,
    authModalConfig,
    scopeModalConfig,
    setAuthModalConfig,
    handleDisable,
    handleDelete,
    handleScopeSet,
    fetchList,
    handleRoleEdit,
    handleRoleAdd,
    handleAuthorize,
    handleModalHide,
  };
};
