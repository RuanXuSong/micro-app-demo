/*
 * @文件描述: 权限菜单管理（角色管理）
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-18 12:35:34
 */
import React from 'react';
import { message, Button, Select } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import LinkButtons from '@/components/LinkButtons';
import EditModal from '../components/EditModal';
import AuthModal from '../components/AuthModal';
import useAuthMenuListService from './useAuthMenuListService';
import { useModel } from 'umi';
import useCompanySelect from '@/hooks/useCompanySelect';
import TextEllipsis from '@/components/TextEllipsis';

export default () => {
  const { companyMapOptions } = useModel('company');
  const { showCompanySelect } = useCompanySelect('cloud_authority_menu_company');
  const {
    orgCode,
    setOrgCode,
    actionRef,
    reload,
    editModalConfig,
    fetchList,
    handleRoleAdd,
    handleRoleEdit,
    handleModalHide,
    authModalConfig,
    resourceList,
    resourceTreeData,
    fetchResourceList,
    handleAuthorize,
  } = useAuthMenuListService();

  const columns: ProColumns<defs.platform.RightsManagementRoleDtoList>[] = [
    {
      title: '企业名称',
      dataIndex: 'orgCode',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: !showCompanySelect,
      hideInTable: true,
      renderFormItem: () => (
        <Select
          allowClear
          options={companyMapOptions}
          onChange={(value) => {
            setOrgCode(value as string);
            fetchResourceList?.({ orgCode: value as string });
          }}
        ></Select>
      ),
    },
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
    },
    {
      title: '拥有资源',
      dataIndex: 'resourceList',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      render: (_, row) => {
        const { resourceMap = [] } = row || {};
        const resourceList: string[] = [];
        Object.keys(resourceMap).forEach((key) => {
          resourceMap[key].forEach((item: any) => {
            resourceList.push(item.description);
          });
        });
        return <TextEllipsis text={resourceList.join(',')} />;
      },
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
                onClick: () => handleRoleEdit(row),
              },
              {
                name: '授权',
                key: 'authorize',
                onClick: () => handleAuthorize(row),
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
        request={fetchList}
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
        headerTitle="菜单权限列表"
        tableAlertRender={false}
        toolBarRender={() => [
          <Button onClick={handleRoleAdd} key="add" type="primary">
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
        resourceList={resourceList}
        resourceTreeData={resourceTreeData}
      />
      <AuthModal
        visible={authModalConfig.visible}
        formData={authModalConfig.formData}
        toggleVisible={() => handleModalHide('auth')}
        reload={reload}
        orgCode={orgCode}
      />
    </>
  );
};
