/*
 * @文件描述: 用户管理
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-26 15:44:19
 */
import React from 'react';
import { message, Button, Modal, Select } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { ROLE_STATUS_MAP, SEX_ENUM } from '@/constant';
import { PlusOutlined } from '@ant-design/icons';
import { enumToValueEnum } from '@/utils/array';
import LinkButtons from '@/components/LinkButtons';
import Edit from '../edit';
import useUserListService from './useUserListService';
import { useModel } from 'umi';
import useCompanySelect from '@/hooks/useCompanySelect';

const UserList = () => {
  const { showCompanySelect } = useCompanySelect('cloud_user_list_company');
  const { companyIdMapOptions } = useModel('company');
  const {
    loading,
    actionRef,
    reload,
    editModalConfig,
    orgId,
    setOrgId,
    fetchList,
    handleUpdateStatus,
    handleUserAdd,
    handleUserEdit,
    handleModalHide,
  } = useUserListService();

  const columns: ProColumns<defs.platform.TheUserInformation>[] = [
    {
      title: '企业名称',
      dataIndex: 'orgId',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: !showCompanySelect,
      hideInTable: true,
      renderFormItem: () => (
        <Select allowClear value={orgId} onChange={setOrgId} options={companyIdMapOptions}></Select>
      ),
    },
    {
      title: '登录账号',
      dataIndex: 'userName',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '用户名称',
      dataIndex: 'name',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      align: 'left',
      valueType: 'text',
      hideInSearch: false,
      hideInTable: true,
    },
    {
      title: '负责人手机号',
      dataIndex: 'phone',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      render: (_, row) => <img alt="头像" src={row.avatar} width={72} />,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      valueEnum: SEX_ENUM,
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
                name: '禁用',
                key: 'disable',
                onClick: () =>
                  Modal.confirm({
                    title: '确认禁用？',
                    onOk: () =>
                      row.id &&
                      handleUpdateStatus({
                        status: ROLE_STATUS_MAP.禁用,
                        id: row.id,
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
                    id: row.id,
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
        loading={loading}
        style={{ padding: '18px 22px' }}
        actionRef={actionRef}
        request={fetchList as any}
        onRequestError={(error) => {
          console.error(error.message);
          message.error(`数据加载失败,${error.message}`);
        }}
        onReset={() => setOrgId('')}
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
        orgId={orgId}
      />
    </>
  );
};

export default UserList;
