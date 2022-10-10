import { useModel } from 'umi';
import { removeEmpty } from './../../../../utils/json';
import { useRef, useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { message } from 'antd';
import { useRequest } from 'ahooks';
import { ActionType } from '@ant-design/pro-table';
import { initialPagination } from '@/constant';

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
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};
  const [orgId, setOrgId] = useState<string>('');
  const disabledAction = orgId !== userInfo?.orgId;
  const { reload } = actionRef.current || {};

  useEffect(() => {
    if (userInfo?.orgId) {
      setOrgId(userInfo?.orgId);
    }
  }, [userInfo]);

  /**
   * 启用/禁用
   */
  const { run: handleUpdateStatus } = useRequest(API.platform.sysUser.updateStatus.fetch, {
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

  useEffect(() => {
    reload?.();
  }, [orgId]);

  /**
   * 获取普通分页列表
   * @param params
   */
  const fetchList = async (params?: { pageSize?: number; current?: number }) => {
    const { list, page, total } = await API.platform.sysUser.pageList.fetch(
      removeEmpty({
        ...params,
        page: params?.current || initialPagination.page,
        pageSize: params?.pageSize || initialPagination.pageSize,
        orgId,
      }),
    );
    return {
      data: list || [],
      page,
      success: true,
      total,
    };
  };

  /** 编辑用户 */
  const handleUserEdit = (row: defs.platform.TheUserInformation) => {
    setEditModalConfig((config) => {
      config.visible = true;
      config.loading = true;
      config.formData = row;
    });
  };

  /** 新增用户 */
  const handleUserAdd = () => {
    setEditModalConfig((config) => {
      config.visible = true;
      config.formData = {};
    });
  };

  /** 隐藏弹窗 */
  const handleModalHide = () =>
    setEditModalConfig((config) => {
      config.visible = false;
      config.loading = false;
      config.formData = {};
    });

  return {
    actionRef,
    disabledAction,
    reload,
    editModalConfig,
    orgId,
    setOrgId,
    handleUpdateStatus,
    handleDelete,
    fetchList,
    handleUserAdd,
    handleUserEdit,
    handleModalHide,
  };
};
