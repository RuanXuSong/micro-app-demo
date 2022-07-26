/*
 * @文件描述: 企业管理
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-07-26 15:41:38
 */
import React from 'react';
import { message, Button } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
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
    handleCompanyAdd,
    handleCompanyEdit,
    handleModalHide,
    authModalConfig,
    handleAuthorize,
  } = useCompanyListService();

  const columns: ProColumns<defs.authorization.ResourceRole>[] = [
    {
      title: '角色名称',
      dataIndex: 'account',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '角色描述',
      dataIndex: 'role',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '拥有资源',
      dataIndex: 'comment',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
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
        headerTitle="权限列表"
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
