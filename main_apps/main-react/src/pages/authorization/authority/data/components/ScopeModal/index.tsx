import { useEffect, useRef, useState } from 'react';
import { Modal, Form, Spin, message, Table } from 'antd';
import { isEmpty } from 'lodash-es';
import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { useRequest } from 'ahooks';
import useSpinning from '@/hooks/useSpinning';
import { ColumnsType } from 'antd/es/table/interface';
import classNames from 'classnames';
import { isEqual } from 'lodash';
import styles from './index.module.less';
import { initRequest } from '@/common';
import { removeEmpty } from '@/utils/json';

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
  orgCode,
  disabledAction,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData: Store;
  reload?: () => void;
  clientKey: string;
  orgCode?: string;
  disabledAction?: boolean;
}) => {
  const [form] = Form.useForm();
  const { tip, setTip } = useSpinning();
  const { dataRuleDTOList = [], id, businessValue } = formData;
  const [selectedId, setSelectedId] = useState<number>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const originKeysRef = useRef<string[]>();

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys as string[]);
  };

  useEffect(() => {
    if (!isEmpty(dataRuleDTOList)) {
      setSelectedId(dataRuleDTOList[0].id);
    }
  }, [dataRuleDTOList]);

  const { run: fetchListRule, loading } = useRequest(API.authorization.data.detail.fetch, {
    manual: true,
    onSuccess: (response) => {
      const { businessValueList = [] } = response;

      setSelectedRowKeys(businessValueList);
      originKeysRef.current = businessValueList;
    },
  });

  useEffect(() => {
    if (visible && selectedId) {
      fetchListRule({
        ruleId: selectedId,
      });
    }
  }, [visible, selectedId]);

  const { data: scopeList, run: handleFetchList } = useRequest(fetchList, {
    manual: true,
  });

  useEffect(() => {
    if (!visible) return;
    const { originRuleInterface = '' } =
      dataRuleDTOList?.find((item: defs.authorization.DataRuleDTO) => item.id === selectedId) || {};
    originRuleInterface &&
      handleFetchList(
        originRuleInterface,
        removeEmpty({
          orgCode,
        }),
      );
  }, [visible, selectedId]);

  const handleCancel = () => {
    toggleVisible();
    form.resetFields();
  };

  const submit = () => {
    setTip('数据保存中，请稍候...');
    const selectedRule = dataRuleDTOList.find(
      (item: defs.authorization.DataRuleDTO) => item.id === selectedId,
    );

    return API.platform.sysRole.ruleDataSave.fetch({
      ...selectedRule,
      businessValue,
      roleId: id,
      clientKey,
      id: selectedId,
      businessValueList: selectedRowKeys ?? [],
    });
  };

  const { run: handleFinish, loading: submitting } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('设置成功');
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
      dataIndex: 'createdBy',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ];

  const handleReset = () => {
    setSelectedRowKeys([]);
  };

  const rowSelection = {
    selectedRowKeys: selectedRowKeys ?? [],
    onChange: onSelectChange,
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
        disabled: disabledAction,
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
            {dataRuleDTOList.map((item: defs.authorization.DataRuleDTO) => (
              <div className={styles.selectItem}>
                <span
                  className={classNames(
                    styles.label,
                    selectedId === item.id ? styles.selected : {},
                  )}
                  onClick={() => {
                    if (!isEqual(selectedRowKeys || [], originKeysRef.current || [])) {
                      message.error('请先保存再切换规则！');
                      return;
                    }
                    setSelectedId(item.id);
                  }}
                >
                  {item.ruleName}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <Table
              loading={loading}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={scopeList}
              rowKey={(record) => `${record.id}`}
            />
          </div>
        </div>
      </Spin>
    </Modal>
  );
};

/** 请求范围右边列表 */
const fetchList = async (url: string, params = {}) => {
  try {
    const request = await initRequest();
    const result = await request.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    });
    if (result) {
      if (!result.success) {
        throw new Error(JSON.stringify(result));
      } else {
        return result.data || undefined;
      }
    } else {
      throw new Error(JSON.stringify({ message: '接口未响应' }));
    }
  } catch (err) {
    message.error('列表接口请求失败！');
  }
};
