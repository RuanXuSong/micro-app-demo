import React from 'react';
import { Modal, Spin, Image, List, Button, Tag } from 'antd';

import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';

import img from '../../assets/preview.png';
import styles from './index.module.less';

export default ({
  visible,
  toggleVisible,
  data,
  reload,
}: {
  visible: boolean;
  toggleVisible: () => void;
  data: Store;
  reload?: () => void;
}) => {
  const loadingStatus = false;

  return (
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title="企业敏捷应用模板"
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={537}
      onCancel={toggleVisible}
      confirmLoading={loadingStatus}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={loadingStatus}
          onClick={() => {
            toggleVisible();
            reload && reload();
          }}
        >
          确定
        </Button>,
      ]}
    >
      <Spin spinning={loadingStatus}>
        <List
          className="demo-loadmore-list"
          loading={loadingStatus}
          itemLayout="horizontal"
          dataSource={data.systemList}
          size="small"
          renderItem={(item: any) => (
            <List.Item actions={[<a>预览</a>]}>
              <List.Item.Meta
                avatar={
                  <Image src={item.image ?? img} className={styles.preview} preview={false} />
                }
                title={
                  <div>
                    {item?.name}&nbsp;&nbsp;
                    {item?.tags?.map((term: string) => (
                      <Tag className={styles.featureTag} key={term}>
                        {term}
                      </Tag>
                    ))}
                  </div>
                }
                description={<div className={styles.description}>{item.description}</div>}
              />
            </List.Item>
          )}
        />
      </Spin>
    </Modal>
  );
};
