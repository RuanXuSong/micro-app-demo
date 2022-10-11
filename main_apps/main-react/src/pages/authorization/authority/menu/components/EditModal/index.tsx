import { useEffect, useState } from 'react';
import { Modal, Form, Spin, Input, message, TreeSelect } from 'antd';
import { isEmpty, isNil, isNumber } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import { useModel } from '@umijs/max';
import { LOGIN_CONFIG, SMART_DATA_CODE } from '@/constant';
import styles from './index.module.less';
import { getResourceIds } from '@/utils/getResourceIds';
import { removeEmpty } from '@/utils/json';
import { ProColumns } from '@ant-design/pro-table';
import TableItem from '@/components/TableItem';

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
  resourceList,
  resourceTreeData,
  orgCode,
  disabledAction,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  loading: boolean;
  reload?: () => void;
  resourceList: any;
  resourceTreeData: any;
  orgCode?: string;
  disabledAction?: boolean;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { id } = formData;
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};
  const { orgCode: userOrgCode } = userInfo || {};
  const [treeModalVisible, setTreeModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!isEmpty(formData)) {
      const { resourceMap = {} } = formData || {};

      const resourceIds = getResourceIds(resourceMap);
      if (!isEmpty(resourceMap['敏捷应用'])) {
        resourceIds.push(SMART_DATA_CODE);
      }
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
    const { resourceIds = [], modalResourceIds, ...rest } = values;
    setTip('数据保存中，请稍候...');

    const payload = removeEmpty({
      ...rest,
      clientKey: LOGIN_CONFIG.clientId,
      id,
      businessValue: orgCode ?? userOrgCode,
      resourceIds: resourceIds.filter((item: string) => isNumber(item)),
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

  const columns: ProColumns<defs.platform.ResourceTreeObject>[] = [
    {
      title: '资源名称',
      dataIndex: 'description',
      align: 'left',
      copyable: false,
      valueType: 'text',
    },
  ];

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
          disabled: disabledAction,
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
            <Form.Item
              label="拥有资源"
              name="resourceIds"
              rules={[
                {
                  required: true,
                  message: '请选择拥有资源',
                },
              ]}
            >
              <TreeSelect treeData={resourceTreeData} allowClear multiple placeholder="请选择" />
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
        width={800}
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
          <TableItem
            disabled={disabledAction}
            search={false}
            rowKey="id"
            columns={columns}
            dataSource={resourceList}
          />
        </Form.Item>
      </Modal>
    </Form>
  );
};

export default EditModal;
