import React from 'react';
import { Modal, Spin, Button } from 'antd';
import Editor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';
import 'react-markdown-editor-lite/lib/index.css';

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
  const mdEditor = React.useRef(null);
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
        <Editor
          ref={mdEditor}
          value={data}
          style={{
            height: '500px',
          }}
          view={{ menu: false, md: false, html: true }}
          renderHTML={(text) => <ReactMarkdown source={text} />}
        />
      </Spin>
    </Modal>
  );
};
