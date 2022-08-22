import React, { useEffect, useMemo } from 'react';
import { Modal, Form, Spin, Input, Select, message } from 'antd';
import { isEmpty, isNil } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import UploadFormItem from '@/components/UploadFormItem';
import { FILE_TYPE_MAP } from '@/utils/upload';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import styles from './index.module.less';
import { emailValidator, phoneValidator, userAccountValidator } from '@/utils/validators';
import { ROLE_STATUS_MAP, SEX_ENUM } from '@/constant';
import { enumToOptions } from '@/utils/array';
import { removeEmpty } from '@/utils/json';
import { useModel } from 'umi';

const formLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

export default ({
  visible,
  toggleVisible,
  formData,
  loading,
  reload,
  orgId,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  loading: boolean;
  reload?: () => void;
  orgId?: string;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { id } = formData;
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};
  const { orgCode: userOrgCode } = userInfo || {};
  const { companyMap } = useModel('company');

  useEffect(() => {
    if (!isEmpty(formData)) {
      form.setFieldsValue({
        ...formData,
        avatar: formData?.avatar
          ? [
              {
                uid: '1',
                name: '头像',
                status: 'done',
                url: formData?.avatar,
                size: 0,
              },
            ]
          : [],
      });
    }

    return () => {
      form.resetFields();
    };
  }, [formData]);

  const orgCode = useMemo(() => {
    return companyMap?.find((item) => item.id === orgId)?.orgCode;
  }, [orgId]);

  const handleCancel = () => {
    toggleVisible();
    form.resetFields();
  };

  const submit = (values: Store) => {
    setTip('数据保存中，请稍候...');

    const payload = removeEmpty({
      ...formData,
      ...values,
      avatar: values.avatar.map((item: Store) => item.url || item.response.data.url)[0],
    }) as defs.platform.TheUserInformation;

    if (!id) {
      payload.orgId = orgId;
    }

    if (id) {
      return API.platform.sysUser.update.fetch(payload);
    }
    return API.platform.sysUser.save.fetch(payload);
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
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title={`${!isNil(id) ? '编辑' : '新增'}用户`}
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={800}
      onOk={() => form.submit()}
      onCancel={handleCancel}
      confirmLoading={submitting}
    >
      <Spin spinning={loading && submitting} tip={tip}>
        <Form form={form} onFinish={handleFinish} {...formLayout} className={styles.formWrap}>
          <Form.Item
            label="登录账号"
            name="userName"
            tooltip="11位以内的英文数字"
            rules={[
              {
                whitespace: true,
              },
              {
                required: true,
              },
              {
                validator: userAccountValidator,
              },
            ]}
          >
            <Input placeholder="请输入" addonAfter={`@${orgCode ?? userOrgCode}`} />
          </Form.Item>
          <Form.Item
            label="用户昵称"
            name="name"
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
            label="手机号"
            name="phone"
            rules={[
              {
                whitespace: true,
              },
              {
                required: true,
              },
              {
                validator: phoneValidator,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                whitespace: true,
              },
              {
                validator: emailValidator,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <div className={styles.uploadWrap}>
            <UploadFormItem
              formItemProps={formLayout}
              label="头像"
              name="avatar"
              maxCount={1}
              accept={FILE_TYPE_MAP['图片'].join(',')}
              uploadProps={{
                listType: 'picture-card',
              }}
              required
              requiredMessage="请上传头像"
            >
              <PlusOutlined />
            </UploadFormItem>
          </div>

          <Form.Item label="性别" name="sex">
            <Select placeholder="请选择" options={enumToOptions(SEX_ENUM)} />
          </Form.Item>
          <Form.Item label="状态" name="status">
            <Select placeholder="请选择" options={enumToOptions(ROLE_STATUS_MAP)} />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
