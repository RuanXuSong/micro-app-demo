import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Checkbox } from 'antd';
import { history } from 'umi';
import Title from '@/components/Title';
import FooterToolbar from '@/components/FooterToolbar';
import ProTable, { ProColumns, ProTableProps } from '@ant-design/pro-table';
import { deleteEmptyChildren, deepFlatten } from '@/utils/array';
import DetailValue from '@/components/DetailValue';
import { LOGIN_CONFIG } from '@/constant';
import { useRequest } from 'ahooks';

const colLayout = {
  lg: {
    span: 8,
  },
  md: {
    span: 12,
  },
  sm: {
    span: 24,
  },
};

interface ResourceInter {
  id: number;
  checked: boolean;
}

export default () => {
  const [form] = Form.useForm();
  const [resources, setResources] = useState<ResourceInter[]>([]); // 传给后端的资源ids
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]); // 左侧表格中的选中行的key
  const [detail, setDetail] = useState<defs.authorization.ResourcePageObject>();
  const [list, setList] = useState<defs.authorization.ResourceTreeObject[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<number[]>([]);
  const { id } = history.location.query || {};

  /**
   * 获取不带分页的树形结构的资源列表
   */
  const fetchTreeList = async () => {
    return API.authorization.resource.listTree.fetch({
      clientKey: LOGIN_CONFIG.clientId,
    });
  };

  const { run: fetchTree } = useRequest(fetchTreeList, {
    manual: true,
    onSuccess: (result) => {
      const currentList = deleteEmptyChildren(result) as defs.authorization.ResourceTreeObject[];
      // 把树形结构打平，并把每个功能权限的checkbox设为false
      const ids = deepFlatten(currentList).map((item) =>
        item.privilegeList!.map((privilege) => privilege.id),
      );
      const res = ids.flat().map((id) => ({
        id: id!,
        checked: false,
      }));
      // 回显功能按钮
      const resourceVOList = detail?.resourceVOList || [];
      const privilegeIds = resourceVOList
        .filter((i: defs.authorization.ResourceTreeObject) => i.type === 1)
        .map((item: defs.authorization.ResourceTreeObject) => item.id);
      const currentResources = res.map((item) =>
        privilegeIds.indexOf(item.id) > -1
          ? {
              id: item.id,
              checked: true,
            }
          : item,
      );
      setResources(currentResources);
      // 回显菜单
      const keys = resourceVOList!
        .filter((i: defs.authorization.ResourceTreeObject) => i.type === 0)
        .map((item: defs.authorization.ResourceTreeObject) => item.id!);
      let newKeys = [];
      const parendsIds = resourceVOList.filter(
        (i: defs.authorization.ResourceTreeObject) => i.parentId,
      );
      const childrenIds = deepFlatten(currentList).filter((item) =>
        parendsIds.some((i: defs.authorization.ResourceTreeObject) => i.parentId === item.parentId),
      );
      // parend下children未全选则不传parendId
      if (parendsIds.length === childrenIds.length) {
        newKeys = keys;
      } else {
        newKeys = keys.filter((item: number) => !childrenIds.some((i) => i.parentId === item));
      }
      setSelectedRowKeys(newKeys);
      setExpandedKeys(newKeys);
      setResources(res);
      setList(currentList);
    },
  });

  /**
   * 获取详情
   */
  const fetchDetail = () => {
    if (id) {
      return API.authorization.resourceRole.resourceRoleDetailUser.fetch({
        clientKey: LOGIN_CONFIG.clientId,
        roleId: +id,
      });
    }
    return Promise.resolve(new defs.authorization.RoleDTO());
  };

  useRequest(fetchDetail, {
    refreshDeps: [id],
    onSuccess: (result) => {
      const { role, comment, resourceVOList, ...rest } = result;
      setDetail(result);
      // 回显表单数据
      form.setFieldsValue({
        ...rest,
        role,
        comment,
      });
      fetchTree();
    },
  });

  const columns: ProColumns<defs.authorization.ResourceTreeObject>[] = [
    {
      title: '系统/菜单',
      dataIndex: 'description',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '功能按钮',
      dataIndex: 'id',
      align: 'left',
      copyable: false,
      valueType: 'text',
      hideInSearch: true,
      width: 700,
      render: (_, record: defs.authorization.ResourceTreeObject) => {
        return record.privilegeList && record.privilegeList.length ? (
          <>
            {record.privilegeList.map((item) => {
              const res = resources.find((resource) => resource.id === item.id);
              const checked = res ? res.checked : false;
              return (
                <Checkbox checked={checked} key={item.id} disabled>
                  {item.description}
                </Checkbox>
              );
            })}
          </>
        ) : (
          <span>-</span>
        );
      },
    },
  ];

  return (
    <>
      <Form form={form}>
        <Card
          title={<Title text="角色信息" />}
          style={{
            marginBottom: 16,
          }}
        >
          <Row gutter={16}>
            <Col {...colLayout}>
              <Form.Item label="角色名称" name="role">
                <DetailValue />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={16}>
              <Form.Item label="角色描述" name="comment">
                <DetailValue />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card
          title={<Title text="角色权限" />}
          style={{
            marginBottom: 16,
          }}
        >
          <ProTable
            dataSource={list}
            options={false}
            search={false}
            columns={columns}
            bordered
            rowKey="id"
            pagination={false}
            dateFormatter="string"
            headerTitle="权限列表"
            tableAlertRender={false}
            rowSelection={
              { selectedRowKeys, checkStrictly: false } as ProTableProps<
                defs.authorization.ResourceTreeObject,
                {}
              >['rowSelection']
            }
            expandable={{
              expandedRowKeys: expandedKeys,
              onExpandedRowsChange: (expandedKeys) => setExpandedKeys(expandedKeys as number[]),
            }}
          />
        </Card>
        <FooterToolbar>
          <Button type="primary" onClick={() => history.goBack()}>
            返回
          </Button>
        </FooterToolbar>
      </Form>
    </>
  );
};
