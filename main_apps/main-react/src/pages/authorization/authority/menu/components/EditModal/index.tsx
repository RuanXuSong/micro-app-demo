import React, { useEffect, useState } from 'react';
import { Modal, Form, Spin, Input, message, TreeSelect } from 'antd';
import { isEmpty, isNil } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import { connect, useModel } from 'umi';
import { LOGIN_CONFIG } from '@/constant';
import TreeItem from '@/components/TreeItem';
import styles from './index.module.less';

const formLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 20,
  },
};

const halfFormLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 10,
  },
};

const EditModal = ({
  visible,
  toggleVisible,
  formData,
  loading,
  reload,
  currentUser,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  loading: boolean;
  reload?: () => void;
  currentUser?: any;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { id } = formData;
  const { orgCode } = currentUser || {};
  const { initialState } = useModel('@@initialState');
  const { authResourceData } = initialState || {};
  const [treeModalVisible, setTreeModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!isEmpty(formData)) {
      const { resourceList = [] } = formData || {};

      const resourceIds = resourceList.map((item: defs.platform.ResourceObjects) => item.id);
      form.setFieldsValue({
        ...formData,
        resourceIds,
        modalResourceIds: resourceIds,
      });
    }
    return () => {
      form.resetFields();
    };
  }, [formData]);

  const handleCancel = () => {
    toggleVisible();
    form.resetFields();
  };

  const submit = (values: Store) => {
    setTip('数据保存中，请稍候...');

    const payload = {
      ...values,
      clientKey: LOGIN_CONFIG.clientId,
      id,
      businessValue: orgCode,
    } as defs.authorization.RoleDTO;

    return API.authorization.resourceRole.resourceSave.fetch(payload);
  };

  const { run: handleFinish, loading: submitting } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('保存成功');
      form.resetFields();
      toggleVisible();
      reload?.();
    },
  });

  return (
    <Form form={form} onFinish={handleFinish} {...halfFormLayout}>
      <Modal
        centered
        visible={visible}
        forceRender
        maskClosable={false}
        title={`${!isNil(id) ? '编辑' : '新建'}角色`}
        okButtonProps={{
          htmlType: 'submit',
        }}
        width={800}
        onOk={() => form.submit()}
        onCancel={handleCancel}
        confirmLoading={submitting}
      >
        <Spin spinning={loading && submitting} tip={tip}>
          <Form.Item
            label="角色名称"
            name="role"
            rules={[
              {
                whitespace: true,
              },
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="角色描述"
            name="comment"
            {...formLayout}
            rules={[
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <div className={styles.treeWrap}>
            <div className={styles.cover} onClick={() => setTreeModalVisible(true)} />
            <Form.Item label="拥有资源" name="resourceIds">
              <TreeSelect treeData={authResourceData} allowClear multiple placeholder="请选择" />
            </Form.Item>
          </div>
        </Spin>
      </Modal>
      <Modal
        centered
        visible={treeModalVisible}
        forceRender
        maskClosable={false}
        title="拥有资源"
        width={412}
        onOk={() => {
          form.setFieldsValue({ resourceIds: form.getFieldValue('modalResourceIds') });
          setTreeModalVisible(false);
        }}
        onCancel={() => {
          form.setFieldsValue({ modalResourceIds: form.getFieldValue('resourceIds') });
          setTreeModalVisible(false);
        }}
        confirmLoading={submitting}
      >
        <Form.Item label="拥有资源" name="modalResourceIds" noStyle>
          <TreeItem treeData={authResourceData} />
        </Form.Item>
      </Modal>
    </Form>
  );
};

export default connect(({ user }: any) => ({
  currentUser: user.currentUser,
}))(EditModal);
