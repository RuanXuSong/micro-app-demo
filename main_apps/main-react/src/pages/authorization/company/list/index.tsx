/*
 * @文件描述: 企业管理
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-19 16:05:27
 */
import React from 'react';
import { message, Button, Modal } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { ROLE_STATUS_MAP } from '@/constant';
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
    handleResetPassword,
    handleUpdateStatus,
    handleCompanyAdd,
    handleCompanyEdit,
    handleModalHide,
    authModalConfig,
    handleAuthorize,
  } = useCompanyListService();

  const columns: ProColumns<defs.authorization.ResourceRole>[] = [
    {
      title: '企业编码',
      dataIndex: 'orgCode',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '企业名称',
      dataIndex: 'orgName',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '负责人',
      dataIndex: 'director',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '负责人手机号',
      dataIndex: 'phone',
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
      dataIndex: 'validBefore',
      align: 'left',
      copyable: false,
      valueType: 'date',
      hideInSearch: false,
      hideInTable: true,
    },
    {
      title: '有效期',
      dataIndex: 'validBefore',
      align: 'left',
      copyable: false,
      valueType: 'dateTime',
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
                onClick: () => handleAuthorize(row),
              },
              {
                name: '禁用',
                key: 'disable',
                onClick: () =>
                  Modal.confirm({
                    title: '确认禁用？',
                    onOk: () =>
                      row.id &&
                      handleUpdateStatus({
                        status: ROLE_STATUS_MAP.禁用,
                        id: `${row.id}`,
                      }),
                  }),
                hidden: ROLE_STATUS_MAP.禁用 === +row.status!,
              },
              {
                name: '启用',
                key: 'enable',
                onClick: async () =>
                  row.id &&
                  handleUpdateStatus({
                    status: ROLE_STATUS_MAP.正常,
                    id: `${row.id}`,
                  }),
                hidden: ROLE_STATUS_MAP.禁用 !== +row.status!,
              },
              {
                name: '重置密码',
                key: 'reset',
                onClick: () =>
                  Modal.confirm({
                    title: '确认重置密码？',
                    onOk: () =>
                      row.id &&
                      handleResetPassword({
                        id: `${row.id}`,
                      }),
                  }),
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
        request={fetchList as any}
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
