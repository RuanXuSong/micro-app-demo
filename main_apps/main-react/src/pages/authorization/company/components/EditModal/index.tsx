import React, { useEffect } from 'react';
import { Modal, Form, Spin, Input, message, DatePicker, Select } from 'antd';
import { isNil } from 'lodash-es';
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
import moment from 'moment';
import { removeEmpty } from '@/utils/json';
import { useModel } from 'umi';
import { disabledDate } from '@/utils/getDisabledDate';
import { enumToOptions } from '@/utils/array';
import { ROLE_STATUS_MAP } from '@/constant';

const formLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

const rowLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: { span: 19 },
};

export default ({
  visible,
  toggleVisible,
  formData,
  reload,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  reload?: () => void;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { id } = formData;
  const { reloadCompanyData } = useModel('company');

  /** 企业详情 */
  const { run: fetchDetail, loading: detailLoading } = useRequest(
    API.platform.sysOrg.detail.fetch,
    {
      onSuccess: (response) => {
        form.setFieldsValue({
          ...response,
          validBefore: response.validBefore ? moment(response.validBefore) : null,
          logo: response?.logo
            ? [
                {
                  uid: '1',
                  name: 'logo',
                  status: 'done',
                  url: response?.logo,
                  size: 0,
                },
              ]
            : [],
        });
      },
      manual: true,
    },
  );

  useEffect(() => {
    visible && id && fetchDetail({ id });
    return () => {
      form.resetFields();
    };
  }, [id, visible]);

  const handleCancel = () => {
    toggleVisible();
    form.resetFields();
  };

  const handleSuccess = () => {
    message.success('保存成功');
    form.resetFields();
    toggleVisible();
    reload?.();
    reloadCompanyData();
  };

  /** 编辑企业 */
  const { run: handleOrgEdit, loading: editLoading } = useRequest(
    API.platform.sysOrg.update.fetch,
    {
      onSuccess: handleSuccess,
      manual: true,
    },
  );

  /** 新建企业 */
  const { run: handleOrgAdd, loading: addLoading } = useRequest(API.platform.sysOrg.save.fetch, {
    onSuccess: handleSuccess,
    manual: true,
  });

  const submit = (values: Store) => {
    setTip('数据保存中，请稍候...');

    const payload = removeEmpty({
      ...formData,
      ...values,
      logo: values.logo.map((item: Store) => item.url || item.response.data.url)[0],
    }) as defs.platform.TheUserInformation;

    if (id) {
      return handleOrgEdit(payload);
    }
    return handleOrgAdd(payload);
  };

  const { run: handleFinish, loading: submitting } = useRequest(submit, {
    manual: true,
  });

  const loadingStatus = detailLoading || submitting || editLoading || addLoading;

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
      confirmLoading={loadingStatus}
    >
      <Spin spinning={loadingStatus} tip={tip}>
        <Form form={form} onFinish={handleFinish} {...formLayout} className={styles.formWrap}>
          <Form.Item
            label="企业编码"
            name="orgCode"
            tooltip={{
              icon: <ExclamationCircleOutlined />,
              title: '企业编码将作为企业下所有账号后缀\n需要输入20位以内字母，区分大小写',
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
            <Input disabled={!!id} placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="企业名称"
            name="orgName"
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

          <div className={styles.rowWrap}>
            <UploadFormItem
              formItemProps={formLayout}
              label="企业logo"
              name="logo"
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
              name="enterpriseCode"
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
            name="director"
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
            label="负责人手机号"
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

          {!!id && (
            <Form.Item
              label="管理员账号"
              name="directorUsername"
              rules={[
                {
                  whitespace: true,
                },
                {
                  validator: phoneValidator,
                },
              ]}
            >
              <Input disabled placeholder="请输入" />
            </Form.Item>
          )}
          <Form.Item
            label="有效期"
            name="validBefore"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker disabledDate={disabledDate} />
          </Form.Item>
          {!!id && (
            <>
              <Form.Item
                label="状态"
                name="status"
                rules={[
                  {
                    whitespace: true,
                  },
                  {
                    required: true,
                  },
                ]}
              >
                <Select options={enumToOptions(ROLE_STATUS_MAP)} placeholder="请选择" />
              </Form.Item>

              <Form.Item
                label="当前用户数"
                name="userNum"
                rules={[
                  {
                    whitespace: true,
                  },
                  {
                    validator: phoneValidator,
                  },
                ]}
              >
                <Input disabled placeholder="请输入" />
              </Form.Item>
            </>
          )}

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
