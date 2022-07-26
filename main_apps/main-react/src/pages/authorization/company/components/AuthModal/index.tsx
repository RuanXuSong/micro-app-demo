import React, { useEffect } from 'react';
import { Modal, Form, Spin, message } from 'antd';
import { isEmpty } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import ExclamationCircleOutlined from '@ant-design/icons/lib/icons/ExclamationCircleOutlined';
import styles from './index.module.less';
import { DataNode } from 'antd/lib/tree';
import TreeItem from '@/components/TreeItem';

const treeData: DataNode[] = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

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
  console.log('id: ', id);

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
      title="企业授权"
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={412}
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
            noStyle
          >
            <TreeItem treeData={treeData} />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
