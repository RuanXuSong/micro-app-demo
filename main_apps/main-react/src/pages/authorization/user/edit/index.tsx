import React, { useEffect } from 'react';
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
import { phoneValidator } from '@/utils/validators';

const formLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 17,
  },
};

export default ({
  visible,
  toggleVisible,
  formData,
  loading,
  reload,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  loading: boolean;
  reload?: () => void;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { id } = formData;

  const { data: roleList } = useRequest(API.authorization.resourceRole.resourceRoleList.fetch, {
    manual: true,
  });

  useEffect(() => {
    if (!isEmpty(formData)) {
      const roleList = formData.roleList || [];
      form.setFieldsValue({
        ...formData,
        roleList: roleList.length > 0 ? roleList[0].roleId : null,
      });
    }
    // fetchRoleList({ clientKey: LOGIN_CONFIG.clientId });
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

    // TODO: 联调
    console.log('values: ', values);

    // const payload = {
    //   ...formData,
    //   ...values,
    //   roleList: roleList
    //     ?.filter(item => values.roleList === item.id)
    //     .map(item => ({ roleId: item.id, roleName: item.role })),
    // } as defs.platform.AddingUserAccountDTO;

    // if (formData.userCode) {
    //   return API.platform.platformUserAccountManagement.editBaseInfo.fetch({
    //     ...payload,
    //     password: payload.password ? payload.password : null,
    //   } as defs.platform.AddingUserAccountDTO);
    // }
    // return API.platform.platformUserAccountManagement.add.fetch(payload);
    return Promise.resolve();
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
            name="account"
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
            label="用户昵称"
            name="nickName"
            rules={[
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="userPhone"
            rules={[
              {
                whitespace: true,
              },
              {
                required: true,
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
                required: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="联系人"
            name="nickName"
            rules={[
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <div className={styles.uploadWrap}>
            <UploadFormItem
              formItemProps={formLayout}
              label="头像"
              name="certificateUrls"
              maxCount={1}
              accept={FILE_TYPE_MAP['图片'].join(',')}
              uploadProps={{
                listType: 'picture-card',
              }}
              required
              requiredMessage="请上传"
            >
              <PlusOutlined />
            </UploadFormItem>
          </div>

          <Form.Item label="性别" name="sex">
            <Select
              placeholder="请选择"
              options={roleList?.map((item) => ({
                label: item.role,
                value: item.id!,
              }))}
            />
          </Form.Item>
          <Form.Item label="状态" name="sex">
            <Select
              placeholder="请选择"
              options={roleList?.map((item) => ({
                label: item.role,
                value: item.id!,
              }))}
            />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
