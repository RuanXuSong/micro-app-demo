import React, { useEffect } from 'react';
import { Modal, Form, Spin, Input, message, DatePicker } from 'antd';
import { isEmpty, isNil } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import UploadFormItem from '@/components/UploadFormItem';
import { FILE_TYPE_MAP } from '@/utils/upload';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import ExclamationCircleOutlined from '@ant-design/icons/lib/icons/ExclamationCircleOutlined';
import styles from './index.module.less';
import { phoneValidator } from '@/utils/validators';
import classNames from 'classnames';

const formLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const rowLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: { span: 20 },
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

  // const { data: roleList } = useRequest(API.authorization.resourceRole.resourceRoleList.fetch, {
  //   manual: true,
  // });

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
      title={`${!isNil(id) ? '编辑' : '新建'}企业`}
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
            label="企业编码"
            name="account"
            tooltip={{
              icon: <ExclamationCircleOutlined />,
              title: '企业编码将作为企业下所有账号后缀',
            }}
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
            label="企业名称"
            name="nickName"
            rules={[
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>

          <div className={styles.rowWrap}>
            <UploadFormItem
              formItemProps={formLayout}
              label="企业logo"
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

          <div className={styles.rowWrap}>
            <Form.Item
              label="企业代码"
              name="userPhone"
              rules={[
                {
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </div>
          <Form.Item
            label="负责人"
            name="email"
            rules={[
              {
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>

          <Form.Item
            label="负责人手机号"
            name="email"
            rules={[
              {
                whitespace: true,
              },
              {
                validator: phoneValidator,
              },
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item label="有效期" name="date">
            <DatePicker />
          </Form.Item>
          <div className={classNames(styles.rowWrap, styles.description)}>
            <Form.Item
              label="描述"
              name="description"
              rules={[
                {
                  whitespace: true,
                },
                {
                  required: true,
                },
              ]}
              {...rowLayout}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </div>
        </Form>
      </Spin>
    </Modal>
  );
};
