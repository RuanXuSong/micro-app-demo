/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-05-21 17:31:50
 * @LastEditors: 廖军
 * @LastEditTime: 2020-07-11 09:52:01
 */

import React, { useCallback, useState } from 'react';
import { Modal, Form, Row, Col, Spin } from 'antd';
import { FormInstance } from 'antd/lib/form';
import DetailValue from '@/components/DetailValue';
import { useRequest } from 'umi';
import { RESOURCE_TYPE_MAP } from '@/constant';

export default ({
  visible,
  toggleVisible,
  id,
}: {
  visible: boolean;
  toggleVisible: () => void;
  id: number | null;
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const fetchDetail = useCallback(async () => {
    if (id) {
      setLoading(true);
      const result = await API.authorization.resource.detail.fetch({
        id,
      });
      form.setFieldsValue({ ...result, type: RESOURCE_TYPE_MAP[result.type!] });
      setLoading(false);
    }
  }, [id]);

  useRequest(fetchDetail, {
    refreshDeps: [fetchDetail],
  });

  return (
    <Modal
      width={650}
      centered
      visible={visible}
      destroyOnClose
      forceRender
      getContainer={false} // -> 如果modal里面装form，这个配置必须，否则会报错
      title="资源详情"
      onCancel={toggleVisible}
      footer={null}
    >
      <DetailContent form={form} loading={loading} />
    </Modal>
  );
};

const DetailContent = ({ form, loading }: { form: FormInstance; loading: boolean }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <Spin spinning={loading}>
      <Form form={form} {...layout}>
        <Row>
          <Col span={12}>
            <Form.Item label="资源标识" name="resourceKey">
              <DetailValue />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="资源顺位" name="orderValue">
              <DetailValue />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="资源URL" name="apiUrl">
              <DetailValue />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="资源类型" name="type">
              <DetailValue />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="拓展字段" name="resourceBusinessValue">
              <DetailValue />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="资源码" name="permissionCode">
              <DetailValue />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="父级菜单" name="parentId">
              <DetailValue />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="资源描述" name="description">
              <DetailValue />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="备注" name="comment">
              <DetailValue />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};
