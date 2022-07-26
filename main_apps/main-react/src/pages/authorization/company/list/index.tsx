/*
 * @文件描述: 企业管理
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-07-26 15:31:40
 */
import React from 'react';
import { message, Button, Modal } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { ROLE_STATUS_MAP, LOGIN_CONFIG } from '@/constant';
import { PlusOutlined } from '@ant-design/icons';
import { enumToValueEnum } from '@/utils/array';
import LinkButtons from '@/components/LinkButtons';
import EditModal from '../components/EditModal';
import AuthModal from '../components/AuthModal';
import useCompanyListService from './useCompanyListService';

export default () => {
  const {
    actionRef,
    reload,
    editModalConfig,
    fetchList,
    handleDisable,
    handleCompanyAdd,
    handleCompanyEdit,
    handleModalHide,
    authModalConfig,
    handleAuthorize,
  } = useCompanyListService();

  const columns: ProColumns<defs.authorization.ResourceRole>[] = [
    {
      title: '企业编码',
      dataIndex: 'account',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '企业名称',
      dataIndex: 'role',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '负责人',
      dataIndex: 'comment',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '负责人手机号',
      dataIndex: 'comment',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
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
      title: '有效期',
      dataIndex: 'date',
      align: 'left',
      copyable: false,
      valueType: 'date',
      hideInSearch: false,
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
                onClick: () => handleCompanyEdit(row),
              },
              {
                name: '授权',
                key: 'authorize',
                onClick: () => {
                  handleAuthorize(row);
                },
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
        headerTitle="企业列表"
        tableAlertRender={false}
        toolBarRender={() => [
          <Button onClick={handleCompanyAdd} key="add" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
      <EditModal
        visible={editModalConfig.visible}
        formData={editModalConfig.formData}
        loading={editModalConfig.loading}
        toggleVisible={() => handleModalHide('edit')}
        reload={reload}
      />
      <AuthModal
        visible={authModalConfig.visible}
        formData={authModalConfig.formData}
        loading={authModalConfig.loading}
        toggleVisible={() => handleModalHide('auth')}
        reload={reload}
      />
    </>
  );
};
