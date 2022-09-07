import React, { useEffect, useState } from 'react';
import { Modal, Form, Spin, Input, message } from 'antd';
import { isEmpty } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import { compareToFirstPassword } from '@/utils/validators';
import { LOGOUT_PATH } from '@/config';

const formLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

export default ({
  visible,
  toggleVisible,
  formData,
  loading,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  loading: boolean;
  reload?: () => void;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const [currentPassword, setCurrentPassword] = useState<string>();

  useEffect(() => {
    if (!isEmpty(formData)) {
      const roleList = formData.roleList || [];
      form.setFieldsValue({
        ...formData,
        roleList: roleList.length > 0 ? roleList[0].roleId : null,
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

  const submit = (values: any) => {
    setTip('数据保存中，请稍候...');
    const { confirmPassword, ...rest } = values;

    return API.platform.sysUser.updatePassword.fetch(rest);
  };

  const { run: handleFinish, loading: submitting } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('修改成功，请重新登陆');
      form.resetFields();
      toggleVisible();
      setTimeout(() => {
        window.location.href = LOGOUT_PATH;
      }, 1000);
    },
  });

  return (
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title="密码修改"
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={422}
      onOk={() => form.submit()}
      onCancel={handleCancel}
      confirmLoading={submitting}
    >
      <Spin spinning={loading && submitting} tip={tip}>
        <Form form={form} onFinish={handleFinish} {...formLayout}>
          <Form.Item
            label="旧密码"
            name="oldPwd"
            rules={[
              {
                whitespace: true,
              },
              {
                required: true,
              },
            ]}
          >
            <Input type="password" placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="新密码"
            name="newPwd"
            rules={[
              {
                whitespace: true,
              },
              {
                required: true,
              },
            ]}
          >
            <Input
              type="password"
              placeholder="请输入"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="确认新密码"
            name="confirmPassword"
            rules={[
              {
                whitespace: true,
              },
              {
                required: true,
              },
              {
                validator: compareToFirstPassword(currentPassword),
              },
            ]}
          >
            <Input type="password" placeholder="请输入" />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
