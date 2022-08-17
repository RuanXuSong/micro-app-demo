/*
 * @文件描述: 权限数据管理
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-17 18:21:27
 */
import React, { useEffect } from 'react';
import { message, Button, Row, Col, Select } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import LinkButtons from '@/components/LinkButtons';
import EditModal from '../components/EditModal';
import AuthModal from '../components/AuthModal';
import useAuthDataListService from './useAuthDataListService';
import styles from './index.module.less';
import ScopeModal from '../components/ScopeModal';
import { useModel } from 'umi';
import { isEmpty } from 'lodash';
import useCompanySelect from '@/hooks/useCompanySelect';

export default () => {
  const {
    actionRef,
    reload,
    clientKey,
    setClientKey,
    businessValue,
    setBusinessValue,
    scopeMap,
    scopeMapOptions,
    editModalConfig,
    fetchList,
    handleRoleAdd,
    handleRoleEdit,
    handleScopeSet,
    handleModalHide,
    authModalConfig,
    scopeModalConfig,
    handleAuthorize,
  } = useAuthDataListService();
  const { businessMapOptions } = useModel('business');
  const { showCompanySelect } = useCompanySelect('auth_authority_data_company');
  const { companyMapOptions, companyMap } = useModel('company');

  useEffect(() => {
    if (!isEmpty(businessMapOptions)) {
      setClientKey(businessMapOptions[0].value);
    }
  }, [businessMapOptions]);

  const columns: ProColumns<defs.authorization.DataRoleVO>[] = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      hideInTable: true,
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
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
      title: '限制菜单',
      dataIndex: 'dataRuleDTOList',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      render: (_, row) => {
        const { dataRuleDTOList = [] } = row || {};
        return dataRuleDTOList.map((item) => item.ruleName).join(',');
      },
    },
    {
      title: '操作',
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
              {
                name: '设置范围',
                key: 'scope',
                onClick: () => handleScopeSet(row),
              },
            ]}
          />
        );
      },
    },
  ];

  return (
    <>
      <div className={styles.searchWrap}>
        <Row>
          {showCompanySelect && (
            <Col span="8" className={styles.formItemWrap}>
              <div className={styles.label}>企业名称：</div>
              <div className={styles.inputWrap}>
                <Select
                  value={businessValue}
                  onChange={(value) => {
                    setBusinessValue(value);
                    reload?.();
                  }}
                  allowClear
                  placeholder="请选择"
                  options={companyMapOptions}
                />
              </div>
            </Col>
          )}
          <Col span="6" className={styles.formItemWrap}>
            <div className={styles.label}>子系统：</div>
            <div className={styles.inputWrap}>
              <Select
                value={clientKey}
                onChange={(value) => {
                  setClientKey(value);
                  reload?.();
                }}
                allowClear
                placeholder="请选择"
                options={businessMapOptions}
              />
            </div>
          </Col>
        </Row>
      </div>
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
        dateFormatter="string"
        headerTitle="数据权限列表"
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
        clientKey={clientKey}
        scopeMapOptions={scopeMapOptions}
      />
      <AuthModal
        visible={authModalConfig.visible}
        formData={authModalConfig.formData}
        toggleVisible={() => handleModalHide('auth')}
        reload={reload}
        orgId={companyMap?.find((item) => item.orgCode === businessValue)?.id}
      />
      <ScopeModal
        visible={scopeModalConfig.visible}
        formData={scopeModalConfig.formData}
        toggleVisible={() => handleModalHide('scope')}
        reload={reload}
        clientKey={clientKey}
        orgCode={businessValue}
        scopeMap={scopeMap}
        scopeMapOptions={scopeMapOptions}
      />
    </>
  );
};
