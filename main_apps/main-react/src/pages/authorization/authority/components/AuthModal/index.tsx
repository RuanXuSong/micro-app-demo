import React, { useEffect, useState } from 'react';
import { Modal, Form, Spin, message, List, Checkbox } from 'antd';
import { isEmpty } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import ExclamationCircleOutlined from '@ant-design/icons/lib/icons/ExclamationCircleOutlined';
import styles from './index.module.less';
import { useImmer } from 'use-immer';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { LOGIN_CONFIG } from '@/constant';

/**
 * 初始化分页数据
 */
export const initialPagination = {
  page: 1,
  pageSize: 6,
};

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
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [paginationConfig, setPaginationConfig] = useImmer(initialPagination);

  const {
    data: userList,
    run: fetchList,
    loading: loading,
  } = useRequest(API.platform.sysUser.pageList.fetch, {
    manual: true,
  });

  const { run: fetchAuthList, loading: authLoading } = useRequest(
    API.authorization.resourceRole.resourceRoleDetailUser.fetch,
    {
      manual: true,
      onSuccess: (response) => {
        const { userIdList = [] } = response;
        setCheckedIds(userIdList);
      },
    },
  );

  useEffect(() => {
    if (visible) {
      fetchList(paginationConfig);
      fetchAuthList({
        clientKey: LOGIN_CONFIG.clientId,
        roleId: id,
      });
    }
  }, [visible, paginationConfig]);

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

  const submit = () => {
    setTip('数据保存中，请稍候...');

    return API.authorization.resourceRole.resourceSaveAddUser.fetch({
      clientKey: LOGIN_CONFIG.clientId,
      id,
      userIds: checkedIds.map((item) => +item),
      resourceIds: [],
      role: formData.role,
    });
  };

  const { run: handleFinish, loading: submitting } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('授权成功');
      form.resetFields();
      toggleVisible();
      reload?.();
    },
  });

  const onChange = (e: CheckboxChangeEvent, item: defs.platform.TheUserInformation) => {
    let newIds = [...checkedIds];
    if (e.target.checked) {
      newIds.push(+item.userId!);
    } else {
      newIds = newIds.filter((childId) => childId !== item.userId);
    }
    setCheckedIds(newIds);
  };

  const renderItem = (item: defs.platform.TheUserInformation) => (
    <List.Item>
      <Checkbox checked={checkedIds.includes(+item.userId!)} onChange={(e) => onChange(e, item)}>
        <div className={styles.userName}>
          {item.userName}
          {item.phone ? `(${item.phone.slice(-4)})` : ''}
        </div>
      </Checkbox>
    </List.Item>
  );

  return (
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title="用户授权"
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={442}
      onOk={() => form.submit()}
      onCancel={handleCancel}
      confirmLoading={submitting}
      wrapClassName="auth-modal"
    >
      <Spin spinning={loading && submitting && authLoading} tip={tip}>
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
            <List
              loading={loading}
              className={styles.listWrap}
              size="small"
              dataSource={userList?.list}
              pagination={{
                ...paginationConfig,
                current: paginationConfig.page,
                onChange: (page) => {
                  setPaginationConfig((config) => {
                    config.page = page;
                  });
                },
                showQuickJumper: true,
              }}
              renderItem={renderItem}
            />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
