import React, { useCallback, useState } from 'react';
import { Form, Button, Card, Input, message, Row, Col, Checkbox } from 'antd';
import { Store } from 'antd/es/form/interface';
import { history } from 'umi';

import Title from '@/components/Title';
import FooterToolbar from '@/components/FooterToolbar';
import ProTable, { ProColumns, ProTableProps } from '@ant-design/pro-table';
import { deleteEmptyChildren, deepFlatten } from '@/utils/array';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { LOGIN_CONFIG, MAX_TITLE_LENGTH, MAX_TEXTAREA_LENGTH } from '@/constant';
import { useRequest } from 'ahooks';
import { uniq } from 'lodash-es';

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
  const [list, setList] = useState<defs.authorization.ResourceTreeObject[]>([]); // 树形结构数据
  const [resources, setResources] = useState<ResourceInter[]>([]); // 传给后端的资源ids
  const [detail, setDetail] = useState<defs.authorization.ResourcePageObject>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.ReactText[]>([]); // 左侧表格中的选中行的key
  const { id = '' } = history.location.query || {};

  /** 找到parentId对应的id */
  const getParentIds = useCallback(
    (parentId: number, data: defs.authorization.ResourceTreeObject[]) => {
      const parentIds: number[] = [];
      const findParentId = (data: defs.authorization.ResourceTreeObject[], parentId: number) => {
        if (parentId) {
          const res = data.find((item) => item.id === parentId)!.parentId!;
          parentIds.push(res);
          findParentId(data, res);
        }
      };
      findParentId(deepFlatten(data), parentId);
      return parentIds.slice(0, -1);
    },
    [],
  );

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
    // 新增模式下 获取资源树
    fetchTree();
    return Promise.resolve(new defs.authorization.ResourcePageObject());
  };

  useRequest(fetchDetail, {
    refreshDeps: [id],
    onSuccess: (result) => {
      if (!id || !result) {
        return;
      }
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

  const handleCheckboxChange = (
    e: CheckboxChangeEvent,
    privilegeId: number,
    record: defs.authorization.ResourceTreeObject,
  ) => {
    const { checked } = e.target;
    const res = resources.map((resource) =>
      resource.id === privilegeId ? { id: privilegeId, checked } : resource,
    );
    setResources(res);
    if (checked) {
      // 当前功能权限所对应的菜单的所有父级菜单也被选中
      const parentIds = [...getParentIds(record.parentId!, list), record.parentId!];
      setSelectedRowKeys([
        ...new Set([...selectedRowKeys, record.id!, ...parentIds, record.parentId!]),
      ]);
    }
  };

  /** 全选 */
  const allSelected = () => {
    const currentList = deepFlatten(list).map((item) => item.id!);
    setSelectedRowKeys(currentList);
    const currentResources = resources.map((item) => ({
      id: item.id,
      checked: true,
    }));
    setResources(currentResources);
  };

  /** 清空 */
  const clearSelected = () => {
    setSelectedRowKeys([]);
    const currentResources = resources.map((item) => ({
      id: item.id,
      checked: false,
    }));
    setResources(currentResources);
  };

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
                <Checkbox
                  checked={checked}
                  key={item.id}
                  onChange={(e) => handleCheckboxChange(e, item.id!, record)}
                >
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

  /**
   * 提交
   * @param values
   */
  const submit = (values: Store) => {
    const { role, comment } = values;
    const resourceIds = resources.filter((resource) => resource.checked).map((item) => item.id);
    // parend下有children选择，parendId也要传
    const parendIds = deepFlatten(list).filter((item) =>
      selectedRowKeys.find((i) => i === item.id),
    );
    const parendIdsSelected = uniq(
      parendIds.filter((item) => item.parentId).map((i) => i.parentId),
    );
    const params = {
      clientKey: LOGIN_CONFIG.clientId,
      role,
      comment,
      resourceIds: [
        ...new Set([...resourceIds, ...selectedRowKeys, ...parendIdsSelected]),
      ] as number[],
    };
    return API.authorization.resourceRole.resourceSave.fetch({ ...params, id: +id! });
  };

  const { loading, run: handleFinish } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('保存成功');
      history.push('/admin/authorization/list');
    },
    onError: (error) => {
      console.error(error.message);
      message.error('保存失败');
    },
  });

  return (
    <>
      <Form form={form} onFinish={handleFinish}>
        <Card
          title={<Title text="新增角色" />}
          style={{
            marginBottom: 16,
          }}
        >
          <Row gutter={16}>
            <Col {...colLayout}>
              <Form.Item label="角色名称" name="role" required rules={[{ required: true }]}>
                <Input maxLength={MAX_TITLE_LENGTH} disabled={false} allowClear />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={16}>
              <Form.Item label="&ensp;角色描述" name="comment" required={false}>
                <Input.TextArea maxLength={MAX_TEXTAREA_LENGTH} disabled={false} allowClear />
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
              {
                selectedRowKeys,
                onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
                checkStrictly: false,
                /**
                 * 全选与取消全选，包含了对按钮级全选的控制，所以这里需要自定义操作
                 */
                onSelectAll: (selected) => {
                  if (selected) {
                    allSelected();
                  } else {
                    clearSelected();
                  }
                },
              } as ProTableProps<defs.authorization.ResourceTreeObject, {}>['rowSelection']
            }
            expandable={{ defaultExpandAllRows: true }}
          />
        </Card>
        <FooterToolbar>
          <Button type="primary" onClick={() => form.submit()} loading={loading}>
            提交
          </Button>
        </FooterToolbar>
      </Form>
    </>
  );
};
