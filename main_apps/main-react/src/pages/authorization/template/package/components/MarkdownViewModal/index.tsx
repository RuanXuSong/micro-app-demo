import { Modal, Button } from 'antd';
import ReactMarkdown from 'react-markdown';

export default ({
  visible,
  toggleVisible,
  data,
}: {
  visible: boolean;
  data: string;
  toggleVisible: () => void;
}) => {
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
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            toggleVisible();
          }}
        >
          确定
        </Button>,
      ]}
    >
      <ReactMarkdown source={data} />
    </Modal>
  );
};
