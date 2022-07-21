/*
 * @文件描述: 用户管理
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-07-21 17:09:32
 */
import React from 'react';
import { message, Button, Modal } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { ROLE_STATUS_MAP, LOGIN_CONFIG } from '@/constant';
import { PlusOutlined } from '@ant-design/icons';
import { enumToValueEnum } from '@/utils/array';
import LinkButtons from '@/components/LinkButtons';
import Edit from '../Edit';
import useUserListService from './useUserListService';

export default () => {
  const {
    actionRef,
    reload,
    editModalConfig,
    fetchList,
    handleDisable,
    handleUserAdd,
    handleUserEdit,
    handleModalHide,
  } = useUserListService();

  const columns: ProColumns<defs.authorization.ResourceRole>[] = [
    {
      title: '登录账号',
      dataIndex: 'account',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '用户昵称',
      dataIndex: 'role',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '企业名称',
      dataIndex: 'comment',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      hideInTable: true,
      valueEnum: enumToValueEnum(ROLE_STATUS_MAP),
    },

    {
      title: '手机号',
      dataIndex: 'comment',
      align: 'left',
      valueType: 'text',
      hideInSearch: false,
      hideInTable: true,
      valueEnum: enumToValueEnum(ROLE_STATUS_MAP),
    },
    {
      title: '负责人手机号',
      dataIndex: 'comment',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      render: (_, row) => row.comment,
    },
    {
      title: '邮箱',
      dataIndex: 'role',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '头像',
      dataIndex: 'comment',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      render: (_, row) => row.comment,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      render: (_, row) => row.comment,
    },
    {
      title: '状态',
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
                name: '编辑',
                key: 'edit',
                onClick: () => handleUserEdit(row),
              },
              {
                name: '授权',
                key: 'authorize',
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
            ]}
          />
        );
      },
    },
  ];

  return (
    <>
      <ProTable
        style={{ padding: '18px 22px' }}
        actionRef={actionRef}
        // TODO:联调
        request={fetchList as any}
        // request={async (params: Store) => {
        //   const { list, page, total } = await API.authorization.resourceRole.listPagination.fetch(
        //     removeEmpty({
        //       ...params,
        //       roleName: params.role,
        //       clientKey: LOGIN_CONFIG.clientId,
        //       page: '' + (params?.current || initialPagination.page),
        //       pageSize: '' + (params?.pageSize || initialPagination.pageSize),
        //     }),
        //   );
        //   return {
        //     data: list || [],
        //     page,
        //     success: true,
        //     total,
        //   };
        // }}
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
        headerTitle="用户列表"
        tableAlertRender={false}
        toolBarRender={() => [
          <Button onClick={handleUserAdd} key="add" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
      <Edit
        visible={editModalConfig.visible}
        formData={editModalConfig.formData}
        loading={editModalConfig.loading}
        toggleVisible={handleModalHide}
        reload={reload}
      />
    </>
  );
};
