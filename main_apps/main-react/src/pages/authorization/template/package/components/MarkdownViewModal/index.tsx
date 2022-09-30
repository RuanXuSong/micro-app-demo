import React from 'react';
import { Modal, Spin, Button } from 'antd';
import ReactMarkdown from 'react-markdown';

import 'antd/lib/form';

export default ({
  visible,
  toggleVisible,
  data,
}: {
  visible: boolean;
  data: string;
  toggleVisible: () => void;
}) => {
  const loadingStatus = false;

  return (
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title="模板指南"
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={600}
      onCancel={toggleVisible}
      confirmLoading={loadingStatus}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={loadingStatus}
          onClick={() => {
            toggleVisible();
          }}
        >
          确定
        </Button>,
      ]}
    >
      <Spin spinning={loadingStatus}>
        <ReactMarkdown source={data} />
      </Spin>
    </Modal>
  );
};
