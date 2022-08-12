import React, { useEffect } from 'react';
import { Modal, Form, Spin, message } from 'antd';
import { isEmpty } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import styles from './index.module.less';
import TreeItem from '@/components/TreeItem';
import { useModel } from 'umi';
import { LOGIN_CONFIG } from '@/constant';
import { removeEmpty } from '@/utils/json';

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
  const { directorRoleId } = formData;
  const { initialState } = useModel('@@initialState');
  const { authResourceData } = initialState || {};

  const { run } = useRequest(
    (directorRoleId) =>
      API.authorization.resource.listUserResourceData.fetch({
        clientKey: LOGIN_CONFIG.clientId,
        roleId: directorRoleId,
      }),
    {
      manual: true,
      onSuccess: (resourceList) => {
        const newIds: number[] = [];
        resourceList.forEach((item) => {
          const { id, privilegeList = [] } = item;
          newIds.push(id!);
          if (!isEmpty(privilegeList)) {
            privilegeList.forEach((child) => {
              newIds.push(child.id!);
            });
          }
        });
        form.setFieldsValue({
          resourceIds: newIds,
        });
      },
    },
  );

  useEffect(() => {
    if (visible) {
      run(directorRoleId);
    }
  }, [visible]);

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

  const submit = (values: Store) => {
    setTip('数据保存中，请稍候...');

    const payload = removeEmpty({
      ...values,
      clientKey: LOGIN_CONFIG.clientId,
      id: directorRoleId,
    }) as defs.authorization.RoleDTO;

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
          <Form.Item label="权限列表" name="resourceIds" noStyle>
            <TreeItem treeData={authResourceData} />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
