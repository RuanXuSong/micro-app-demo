import React, { useCallback, useState, useEffect } from 'react';
import { Form, Button, Card, Input, Radio, Select, TreeSelect, message, Modal } from 'antd';
import { Store } from 'antd/es/form/interface';
import { useRequest, history } from 'umi';
import Title from '@/components/Title';
import { DataNode } from 'rc-tree-select/lib/interface';
import {
  RESOURCE_TYPE_MAP,
  LOGIN_CONFIG,
  MAX_TITLE_LENGTH,
  MAX_TEXTAREA_LENGTH,
  MAX_ADDRESS_LENGTH,
} from '@/constant';
import { enumToOptions } from '@/utils/array';
import routerData from '../../../../../mock/route';
import { PrivilegeResource } from '@/interfaces/common';

const routerResource = routerData['/resource'].data as unknown as PrivilegeResource[];
const resource = routerResource;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 7 },
  },
};

export default () => {
  const [form] = Form.useForm();
  const [menu, setMenu] = useState<DataNode[]>([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const { id = '' } = history.location.query || {};

  const treeFormatter = useCallback((list: defs.authorization.ResourceTreeObject[]) => {
    const data: DataNode[] = [];
    list.forEach((item: defs.authorization.ResourceTreeObject) => {
      if (!item.children) {
        data.push({
          title: item.description!,
          value: item.id!,
          key: item.id!,
        });
      } else {
        data.push({
          title: item.description!,
          value: item.id!,
          key: item.id!,
          children: treeFormatter(item.children),
        });
      }
    });
    return data;
  }, []);

  /** 获取父级菜单 */
  const fetchMenu = useCallback(async () => {
    try {
      const result = await API.authorization.resource.listTree.fetch({
        clientKey: LOGIN_CONFIG.clientId,
      });
      setMenu(treeFormatter(result));
    } catch (error) {
      message.error(error.message);
    }
  }, [treeFormatter]);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  const fetchDetail = useCallback(async () => {
    if (id) {
      const result = await API.authorization.resource.detail.fetch({
        id: +id,
      });
      form.setFieldsValue(result);
      setMenuVisible(result.type === RESOURCE_TYPE_MAP.菜单);
      return result;
    }
    return API.authorization.resource.detail.init;
  }, [id]);

  useRequest(fetchDetail, {
    refreshDeps: [fetchDetail],
  });

  const submit = (values: Store) => {
    return API.authorization.resource.newResource.fetch({
      id: +id!,
      ...values,
      clientKey: LOGIN_CONFIG.clientId,
    } as API.authorization.resource.newResource.Params);
  };

  const { loading, run: handleFinish } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('保存成功');
      history.push('/admin/resource/list');
    },
    onError: (error) => {
      console.error(error.message);
      message.error('保存失败');
    },
  });

  /**
   * 批量更新菜单权限
   */
  const updateResource = () => {
    const loopChildren = async (
      children: PrivilegeResource[],
      index: number,
      parentId?: number,
    ) => {
      /** 判断是否结束循环 */
      if (index > children.length - 1) {
        return;
      }
      const currentData = children[index];
      const result = await API.authorization.resource.newResource.fetch({
        resourceKey: currentData.resourceKey,
        /** 帮助后台用companyType判断公司类型 */
        resourceBusinessValue: currentData['companyType'],
        apiUrl: currentData.apiUrl,
        description: currentData.description,
        orderValue: currentData.orderValue,
        icon: currentData.icon,
        parentId,
        comment: currentData.comment,
        isVisible: 1,
        type: RESOURCE_TYPE_MAP.菜单,
        clientKey: LOGIN_CONFIG.clientId,
      });
      currentData['parentId'] = result;
      /** 如果存在children，直接进入内部循环 */
      if (currentData.children && currentData.children.length > 0) {
        loopChildren(currentData.children, 0, result);
      }
      /** 同时进入下一同级循环 */
      loopChildren(children, index + 1, parentId);
    };
    Modal.confirm({
      title: '确认批量更新资源树？',
      onOk: () => loopChildren(resource, 0),
    });
  };

  /**
   * 清除所有资源树
   */
  const deleteAllResource = () => {
    const loopDelete = async (children: DataNode[], index: number) => {
      /** 判断是否结束循环 */
      if (index > children.length - 1) {
        return;
      }
      const currentData = children[index];
      await API.authorization.resource.deleteResource.fetch({
        id: currentData.value + '',
      });
      /** 如果存在children，直接进入内部循环 */
      if (currentData.children && currentData.children.length > 0) {
        loopDelete(currentData.children, 0);
      }
      /** 同时进入下一同级循环 */
      loopDelete(children, index + 1);
    };
    Modal.confirm({
      title: '确认清除所有资源树？',
      onOk: () => loopDelete(menu, 0),
    });
  };

  return (
    <Card
      title={<Title text="新建资源" />}
      extra={
        <div>
          <Button type="primary" danger onClick={deleteAllResource}>
            清空所有资源树
          </Button>
          <Button style={{ marginLeft: 12 }} type="primary" danger onClick={updateResource}>
            批量更新资源树
          </Button>
        </div>
      }
    >
      <Form form={form} onFinish={handleFinish}>
        <Form.Item {...formItemLayout} label="父级菜单" name="parentId" required={false}>
          <TreeSelect treeData={menu} allowClear disabled={false} multiple={false} showSearch />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="资源标识"
          name="resourceKey"
          required
          rules={[{ required: true }]}
        >
          <Input
            maxLength={MAX_ADDRESS_LENGTH}
            placeholder="资源标识不能重复"
            disabled={false}
            allowClear
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="资源URL"
          name="apiUrl"
          required
          rules={[{ required: true }]}
        >
          <Input maxLength={MAX_ADDRESS_LENGTH} disabled={false} allowClear />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="资源类型"
          name="type"
          required
          rules={[{ required: true }]}
        >
          <Select
            onChange={(value) => setMenuVisible(value === RESOURCE_TYPE_MAP.菜单)}
            allowClear
            disabled={false}
            showSearch={false}
            options={enumToOptions(RESOURCE_TYPE_MAP)}
          />
        </Form.Item>
        <Form.Item {...formItemLayout} label="资源顺位" name="orderValue" required={false}>
          <Input maxLength={MAX_TITLE_LENGTH} disabled={false} allowClear />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="拓展字段"
          name="resourceBusinessValue"
          required={false}
        >
          <Input maxLength={MAX_TITLE_LENGTH} disabled={false} allowClear />
        </Form.Item>
        <Form.Item {...formItemLayout} label="图标" name="icon" required={false}>
          <Input maxLength={MAX_TITLE_LENGTH} disabled={false} allowClear />
        </Form.Item>
        <Form.Item {...formItemLayout} label="资源码" name="permissionCode" required={false}>
          <Input maxLength={MAX_TITLE_LENGTH} disabled={false} allowClear />
        </Form.Item>
        {menuVisible && (
          <Form.Item
            {...formItemLayout}
            label="菜单是否可见"
            name="isVisible"
            required
            rules={[{ required: true }]}
          >
            <Radio.Group
              options={[
                { label: '是', value: 1 },
                { label: '否', value: 0 },
              ]}
              disabled={false}
            />
          </Form.Item>
        )}
        <Form.Item
          {...formItemLayout}
          label="资源描述（菜单）"
          name="description"
          required
          rules={[{ required: true }]}
        >
          <Input.TextArea maxLength={MAX_TEXTAREA_LENGTH} autoSize disabled={false} allowClear />
        </Form.Item>
        <Form.Item {...formItemLayout} label="备注" name="comment">
          <Input.TextArea maxLength={MAX_TEXTAREA_LENGTH} autoSize disabled={false} allowClear />
        </Form.Item>
        <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            提交
          </Button>
          <Button onClick={() => history.goBack()} style={{ marginLeft: 10 }}>
            取消
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
