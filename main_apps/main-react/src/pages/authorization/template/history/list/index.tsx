/*
 * @文件描述: 模板历史
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 仇艳
 * @LastEditTime: 2022-09-28 15:22:06
 */
import React from 'react';
import { message, Select } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { HISTORY_STATUS_MAP, TEMPLATE_CLIENT_ENUM } from '@/constant';
import LinkButtons from '@/components/LinkButtons';
import useTemplateHistoryListService from './useTemplateHistoryListService';
import { enumToValueEnum } from '@/utils/array';

export default () => {
  const { loading, actionRef, templatePackageList, fetchList, handleTemplateRetry } =
    useTemplateHistoryListService();

  const columns: ProColumns<defs.platform.TemListDTO>[] = [
    {
      title: (_, type) => (type === 'form' ? '关键字' : '模板缩略图'),
      dataIndex: 'keyword',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      order: 3,
      render: (_, row) => <img alt="模板缩略图" src={row.templatePicture} width={72} />,
    },
    {
      title: '模板套餐名称',
      dataIndex: 'packageName',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '套餐',
      dataIndex: 'packageId',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      hideInTable: true,
      order: 1,
      renderFormItem: () => (
        <Select allowClear>
          {templatePackageList?.map((item) => (
            <Select.Option value={item?.id!} key={item?.id}>
              {item?.name}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: (_, type) => (type === 'form' ? '子系统' : '所属子系统'),
      dataIndex: 'clientKey',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      order: 2,
      valueEnum: enumToValueEnum(TEMPLATE_CLIENT_ENUM),
    },
    {
      title: '标签',
      dataIndex: 'templateTags',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      render: (_, row) => {
        const tags = JSON.parse(row?.templateTags || '[]');
        return tags.join('、');
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
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
        },
        [HISTORY_STATUS_MAP.创建中]: {
          text: '创建中',
          status: 'Processing',
        },
        [HISTORY_STATUS_MAP.未创建]: {
          text: '未创建',
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
          row.status === HISTORY_STATUS_MAP.失败 && (
            <LinkButtons
              buttons={[
                {
                  name: '重试',
                  key: 'retry',
                  onClick: () => handleTemplateRetry({ orgTemplateId: row?.orgTemplateId }),
                },
              ]}
            />
          )
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
        rowKey="orgTemplateId"
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
