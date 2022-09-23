/*
 * @文件描述: 模板历史
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 仇艳
 * @LastEditTime: 2022-09-22 16:38:20
 */
import React from 'react';
import { message, Select } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { HISTORY_STATUS_MAP } from '@/constant';
import LinkButtons from '@/components/LinkButtons';
import useTemplateHistoryListService from './useTemplateHistoryListService';

export default () => {
  const { loading, actionRef, fetchList, handleTemplateRetry } = useTemplateHistoryListService();

  const columns: ProColumns<defs.platform.TenantInformation>[] = [
    {
      title: (_, type) => (type === 'form' ? '关键字' : '模板缩略图'),
      dataIndex: 'orgCode',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      order: 3,
      render: (_, row) => <img alt="模板缩略图" src={row.orgCode} width={72} />,
    },
    {
      title: (_, type) => (type === 'form' ? '套餐' : '模板套餐名称'),
      dataIndex: 'orgName',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      order: 1,
      renderFormItem: () => <Select allowClear></Select>,
    },
    {
      title: (_, type) => (type === 'form' ? '子系统' : '所属子系统'),
      dataIndex: 'director',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      order: 2,
      renderFormItem: () => <Select allowClear></Select>,
    },
    {
      title: '标签',
      dataIndex: 'phone',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'phone',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      valueEnum: {
        [HISTORY_STATUS_MAP.失败]: {
          text: '失败',
          status: 'Error',
        },
        [HISTORY_STATUS_MAP.成功]: {
          text: '成功',
          status: 'Success',
          disabled: true,
        },
        [HISTORY_STATUS_MAP.创建中]: {
          text: '创建中',
          status: 'Processing',
        },
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
                name: '重试',
                key: 'retry',
                onClick: () => handleTemplateRetry({ id: row?.id!, status: row?.status! }),
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
        columns={columns}
        bordered
        rowKey="id"
        pagination={{
          size: 'default',
        }}
        dateFormatter="string"
        headerTitle="模板历史"
        tableAlertRender={false}
      />
    </>
  );
};
