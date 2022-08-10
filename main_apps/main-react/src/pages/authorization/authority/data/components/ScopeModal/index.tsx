import React, { useEffect, useState } from 'react';
import { Modal, Form, Spin, message, Table } from 'antd';
import { isEmpty } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import { ColumnsType } from 'antd/es/table/interface';
import classNames from 'classnames';
import { useImmer } from 'use-immer';
import { isEqual } from 'lodash';
import styles from './index.module.less';

/**
 * 初始化分页数据
 */
export const initialPagination = {
  page: 1,
  pageSize: 6,
};

export default ({
  visible,
  toggleVisible,
  formData,
  reload,
  clientKey,
  scopeMapOptions,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  reload?: () => void;
  clientKey: string;
  scopeMapOptions: any;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { businessValue } = formData;
  const [selectedRowKeysObj, setSelectedRowKeysObj] = useImmer<Record<string, string[]>>({});
  const [selectedId, setSelectedId] = useState<number>();

  const [ruleInfoObj, setRuleInfoObj] = useImmer<
    Record<string, { businessValues: string[]; listData: string[] }>
  >({});

  const { listData = [], businessValues = [] } = ruleInfoObj[selectedId!] || {};

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeysObj((config) => {
      if (selectedId) {
        config[selectedId] = newSelectedRowKeys as string[];
      }
    });
  };

  useEffect(() => {
    if (!isEmpty(scopeMapOptions)) {
      setSelectedId(scopeMapOptions[0].value);
    }
  }, [scopeMapOptions]);

  const rowSelection = {
    selectedRowKeys: selectedRowKeysObj[selectedId!] ?? [],
    onChange: onSelectChange,
  };

  const { run: fetchListRule, loading } = useRequest(API.platform.sysRole.listRule.fetch, {
    manual: true,
    onSuccess: (response) => {
      const selectedKeysObj = {};
      const ruleInfoObj = {};
      response?.forEach((item) => {
        const { ruleKeyId, businessValueList, ruleDataList } = item;

        if (ruleKeyId) {
          selectedKeysObj[ruleKeyId] = businessValueList || [];
          ruleInfoObj[ruleKeyId] = {
            businessValues: businessValueList,
            listData: ruleDataList,
          };
        }
      });

      setRuleInfoObj(() => ruleInfoObj);
      setSelectedRowKeysObj(() => selectedKeysObj);
    },
  });

  useEffect(() => {
    if (visible) {
      fetchListRule({
        businessValue,
        clientKey,
      });
    }
  }, [visible]);

  const handleCancel = () => {
    toggleVisible();
    form.resetFields();
  };

  const submit = () => {
    setTip('数据保存中，请稍候...');

    return API.authorization.data.saveRule.fetch({
      clientKey,
      id: selectedId,
      ruleKeyId: selectedId,
      ruleName: scopeMapOptions.find((item: any) => item.value === selectedId)?.label ?? '',
      businessValueList: selectedRowKeysObj[selectedId!] ?? [],
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

  const columns: ColumnsType<any> = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '创建人',
      dataIndex: 'userName',
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
    },
  ];

  const handleReset = () => {
    setSelectedRowKeysObj((config) => {
      config[selectedId!] = [];
    });
  };

  return (
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title="设置范围"
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={640}
      onOk={handleFinish}
      onCancel={handleCancel}
      okText="提交"
      cancelText="重置"
      cancelButtonProps={{
        onClick: () => handleReset(),
      }}
      confirmLoading={submitting}
      wrapClassName="scope-modal"
    >
      <Spin spinning={submitting} tip={tip}>
        <div className={styles.contentWrap}>
          <div className={styles.left}>
            {scopeMapOptions.map((item: { label: string; value: number }) => (
              <div className={styles.selectItem}>
                <span
                  className={classNames(
                    styles.label,
                    selectedId === item.value ? styles.selected : {},
                  )}
                  onClick={() => {
                    if (!isEqual(selectedRowKeysObj[selectedId!], businessValues)) {
                      message.error('请先保存再切换规则！');
                      return;
                    }
                    setSelectedId(item.value);
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <Table
              loading={loading}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={listData}
              rowKey={(record) => `${record.id}`}
            />
          </div>
        </div>
      </Spin>
    </Modal>
  );
};
