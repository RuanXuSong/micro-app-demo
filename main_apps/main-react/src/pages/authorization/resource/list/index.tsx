import React, { useRef, useState } from 'react';
import { message, Button, Modal } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { history } from 'umi';
import Detail from '../components/Detail';
import { initialPagination, LOGIN_CONFIG } from '@/constant';
import { deleteEmptyChildren } from '@/utils/array';
import LinkButtons from '@/components/LinkButtons';

export default () => {
  const actionRef = useRef<ActionType>();
  const [detailId, setDetailId] = useState<number | null>(null);
  const [treeModal, setTreeModal] = useState(true);

  /**
   * 删除资源
   * @param id
   */
  const deleteResource = async (id: number) => {
    try {
      await API.authorization.resource.deleteResource.fetch({
        id: id + '',
      });
      message.success('删除成功!');
      actionRef.current?.reload();
    } catch (error) {
      message.error(error.message);
    }
  };

  /**
   * 获取不带分页的树形结构的资源列表
   */
  const fetchTreeList = async () => {
    const result = await API.authorization.resource.listTree.fetch({
      clientKey: LOGIN_CONFIG.clientId,
    });
    return {
      data: deleteEmptyChildren(result) as defs.authorization.ResourceObjects[],
    };
  };

  /**
   * 获取普通分页列表
   * @param params
   */
  const fetchList = async (params?: { pageSize?: number; current?: number }) => {
    const { list, page, total } = await API.authorization.resource.listPagination.fetch({
      ...params,
      clientKey: LOGIN_CONFIG.clientId,
      page: params?.current || initialPagination.page,
      pageSize: params?.pageSize || initialPagination.pageSize,
    });
    return {
      data: list || [],
      page,
      success: true,
      total,
    };
  };

  const columns: ProColumns<defs.authorization.ResourceObjects>[] = [
    {
      title: '资源URL',
      dataIndex: 'apiUrl',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
    },
    {
      title: '资源标识',
      dataIndex: 'resourceKey',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '资源类型',
      dataIndex: 'type',
      align: 'left',
      ellipsis: false,
      copyable: false,
      valueType: 'text',
      hideInSearch: false,
      valueEnum: {
        0: { text: '菜单', type: 0 },
        1: { text: '按钮', type: 1 },
      },
    },
    {
      title: '资源描述（菜单）',
      dataIndex: 'description',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '备注',
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
      render: (_, row) => (
        <LinkButtons
          buttons={[
            {
              name: '查看',
              key: 'view',
              onClick: () => setDetailId(row.id!),
            },
            {
              name: '编辑',
              key: 'edit',
              path: `/admin/resource/edit?id=${row.id}`,
            },
            {
              name: '删除',
              key: 'delete',
              onClick: () =>
                Modal.confirm({
                  title: '确认删除？',
                  onOk: () => deleteResource(row.id!),
                  okText: '是',
                  cancelText: '否',
                }),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <>
      <ProTable
        style={{ padding: '18px 22px' }}
        actionRef={actionRef}
        request={treeModal ? fetchTreeList : fetchList}
        onRequestError={(error) => {
          console.error(error.message);
          message.error(`数据加载失败,${error.message}`);
        }}
        columns={columns}
        bordered
        rowKey="id"
        pagination={
          treeModal
            ? false
            : {
                size: 'default',
              }
        }
        dateFormatter="string"
        headerTitle="资源列表"
        tableAlertRender={false}
        toolBarRender={() => [
          <Button
            onClick={() => {
              setTreeModal(!treeModal);
              actionRef.current?.reload();
            }}
            key="1"
          >
            切换为{treeModal ? '分页' : '树型'}列表
          </Button>,
          <Button
            onClick={() => history.push('/authorization/resource/edit')}
            key="add"
            type="primary"
          >
            <PlusOutlined />
            新增资源
          </Button>,
        ]}
      />
      <Detail id={detailId} visible={!!detailId} toggleVisible={() => setDetailId(null)} />
    </>
  );
};
