import React, { useEffect } from 'react';
import { Modal, Form, Spin, message } from 'antd';
import { isEmpty } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import styles from './index.module.less';
import { useModel } from 'umi';
import { LOGIN_CONFIG, RESOURCE_TYPE_ENUM } from '@/constant';
import { removeEmpty } from '@/utils/json';
import { isNumber } from 'lodash';
import TableItem from '@/components/TableItem';
import { ProColumns } from '@ant-design/pro-table';

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
  const { resourceList } = useModel('resourceData');

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
      form.setFieldsValue(formData);
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
    const { resourceIds = [], ...restValues } = values;
    setTip('数据保存中，请稍候...');

    const payload = removeEmpty({
      ...restValues,
      clientKey: LOGIN_CONFIG.clientId,
      id: directorRoleId,
      resourceIds: resourceIds.filter((item: string) => isNumber(item)),
    }) as defs.authorization.RoleDTO;

    return API.platform.sysRole.resourceSave.fetch(payload);
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

  const columns: ProColumns<defs.platform.ResourceTreeObject>[] = [
    {
      title: '资源名称',
      dataIndex: 'description',
      align: 'left',
      copyable: false,
      valueType: 'text',
    },
    {
      title: '资源标识',
      dataIndex: 'resourceKey',
      align: 'left',
      copyable: false,
      valueType: 'text',
    },
    {
      title: '资源类型',
      dataIndex: 'type',
      align: 'left',
      copyable: false,
      valueType: 'text',
      render: (type) => (type === RESOURCE_TYPE_ENUM.路由级资源 ? '路由级资源' : '页面级资源'),
    },
  ];

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
      width={800}
      onOk={() => form.submit()}
      onCancel={handleCancel}
      confirmLoading={submitting}
    >
      <Spin spinning={loading && submitting} tip={tip}>
        <Form form={form} onFinish={handleFinish} {...formLayout} className={styles.formWrap}>
          <Form.Item label="权限列表" name="resourceIds" noStyle>
            <TableItem search={false} rowKey="id" columns={columns} dataSource={resourceList} />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
