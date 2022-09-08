import React, { useEffect, useMemo } from 'react';
import { Modal, Form, Spin, Input, message, Select } from 'antd';
import { isEmpty, isNil } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import { removeEmpty } from '@/utils/json';
import { useModel } from 'umi';

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

export default ({
  visible,
  toggleVisible,
  formData,
  loading,
  reload,
  clientKey,
  scopeMap,
  scopeMapOptions,
  orgCode,
  disabledAction,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  loading: boolean;
  reload?: () => void;
  clientKey: string;
  scopeMap?: defs.platform.DataRuleDTO[];
  scopeMapOptions: any[];
  orgCode?: string;
  disabledAction?: boolean;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { id } = formData;
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};
  const { orgCode: userOrgCode } = userInfo || {};

  useEffect(() => {
    if (!isEmpty(formData)) {
      const { dataRuleDTOList = [] } = formData || {};

      const ruleIdList = dataRuleDTOList.map(
        (item: defs.authorization.DataRuleDTO) => item.ruleKeyId,
      );

      form.setFieldsValue({
        ...formData,
        ruleIdList: ruleIdList,
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

  // 获得 id 与 ruleKeyId 映射（后端保存 ruleIdList 需要 id，回填需要 ruleKeyId）
  const modifiedIdMap = useMemo(() => {
    const newObj = {};
    if (!scopeMap) return newObj;
    scopeMap.forEach((item) => {
      const { id, ruleKeyId } = item;
      if (!isNil(ruleKeyId)) {
        newObj[ruleKeyId] = id;
      }
    });
    return newObj;
  }, [scopeMap]);

  const submit = (values: Store) => {
    setTip('数据保存中，请稍候...');

    const payload = removeEmpty({
      ...values,
      clientKey,
      id,
      ruleIdList: values?.ruleIdList?.map((item: string) => modifiedIdMap[item]) ?? [],
      businessValue: orgCode ?? userOrgCode,
    }) as defs.authorization.DataRoleInputDTO;

    return API.platform.sysRole.roleDataSave.fetch(payload);
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
        <Form form={form} onFinish={handleFinish} {...halfFormLayout}>
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

          <Form.Item
            label="限制菜单"
            name="ruleIdList"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select mode="multiple" placeholder="请选择" options={scopeMapOptions} />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
