import React, { useRef } from 'react';
import { message, Button, Modal } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { history } from 'umi';
import { initialPagination, ROLE_STATUS_MAP, LOGIN_CONFIG } from '@/constant';
import { PlusOutlined } from '@ant-design/icons';
import { enumToValueEnum } from '@/utils/array';
import LinkButtons from '@/components/LinkButtons';
import { useRequest } from 'ahooks';
import { removeEmpty } from '@/utils/json';
import { Store } from 'antd/es/form/interface';

export default () => {
  const actionRef = useRef<ActionType>();

  /**
   * 启用/禁用
   */
  const { run: handleDisable } = useRequest(API.authorization.role.update.fetch, {
    manual: true,
    onSuccess: () => {
      message.success('操作成功');
      actionRef.current?.reload();
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
      actionRef.current?.reload();
    },
  });

  const columns: ProColumns<defs.authorization.ResourceRole>[] = [
    {
      title: '角色名称',
      dataIndex: 'role',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '角色描述',
      dataIndex: 'comment',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      width: '30%',
      render: (_, row) => row.comment,
    },
    {
      title: '角色状态',
      dataIndex: 'status',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      valueEnum: enumToValueEnum(ROLE_STATUS_MAP),
    },
    {
      title: '操作',
      dataIndex: 'id',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      render: (_, row) => {
        return (
          <LinkButtons
            buttons={[
              {
                name: '查看',
                key: 'view',
                path: `/admin/authorization/detail?id=${row.id}`,
              },
              {
                name: '编辑',
                key: 'edit',
                path: `/admin/authorization/edit?id=${row.id}`,
              },
              {
                name: '禁用',
                key: 'disable',
                onClick: () =>
                  Modal.confirm({
                    title: '确认禁用？',
                    onOk: () =>
                      handleDisable({
                        ...row,
                        status: ROLE_STATUS_MAP.禁用,
                        id: row.id,
                        clientKey: LOGIN_CONFIG.clientId,
                        role: row.role,
                      }),
                  }),
                hidden: ROLE_STATUS_MAP.禁用 === +row.status!,
              },
              {
                name: '启用',
                key: 'enable',
                onClick: async () =>
                  handleDisable({
                    ...row,
                    status: ROLE_STATUS_MAP.正常,
                    id: row.id,
                    clientKey: LOGIN_CONFIG.clientId,
                    role: row.role,
                  }),
                hidden: ROLE_STATUS_MAP.禁用 !== +row.status!,
              },
              {
                name: '删除',
                key: 'delete',
                onClick: () =>
                  Modal.confirm({
                    title: '确认删除？',
                    onOk: () =>
                      handleDelete({
                        clientKey: LOGIN_CONFIG.clientId,
                        id: row.id!,
                      }),
                    okText: '是',
                    cancelText: '否',
                  }),
              },
            ]}
          />
        );
      },
    },
  ];

  return (
    <ProTable
      actionRef={actionRef}
      request={async (params: Store) => {
        const { list, page, total } = await API.authorization.resourceRole.listPagination.fetch(
          removeEmpty({
            ...params,
            roleName: params.role,
            clientKey: LOGIN_CONFIG.clientId,
            page: '' + (params?.current || initialPagination.page),
            pageSize: '' + (params?.pageSize || initialPagination.pageSize),
          }),
        );
        return {
          data: list || [],
          page,
          success: true,
          total,
        };
      }}
      onRequestError={(error) => {
        console.error(error.message);
        message.error(`数据加载失败,${error.message}`);
      }}
      columns={columns}
      bordered
      rowKey="id"
      pagination={{
        size: 'default',
      }}
      dateFormatter="string"
      headerTitle="角色列表"
      tableAlertRender={false}
      toolBarRender={() => [
        <Button
          onClick={() => history.push('/authorization/character/edit')}
          key="add"
          type="primary"
        >
          <PlusOutlined />
          新增角色
        </Button>,
      ]}
    />
  );
};
