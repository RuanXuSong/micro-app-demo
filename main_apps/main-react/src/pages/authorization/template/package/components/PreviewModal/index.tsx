import React from 'react';
import { Modal, Spin, Image, List, Button, Tag } from 'antd';

import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';

import img from '../../assets/preview.png';
import styles from './index.module.less';
import { enumToValueEnum } from '@/utils/array';
import { TEMPLATE_CLIENT_ENUM } from '@/constant';

export default ({
  visible,
  toggleVisible,
  data,
  templateAuthMap,
}: {
  visible: boolean;
  toggleVisible: () => void;
  data: Store;
  templateAuthMap: Object;
}) => {
  const loadingStatus = false;

  return (
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title={data.name}
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
        <List
          className="demo-loadmore-list"
          loading={loadingStatus}
          itemLayout="horizontal"
          dataSource={data.templateList}
          size="small"
          renderItem={(item: any) => (
            <List.Item
              actions={
                item?.redirectUrl &&
                templateAuthMap[`${item.name}预览`] && [
                  <a href={item.templateRedirectUrl} target="_blank" rel="noopener">
                    预览
                  </a>,
                ]
              }
            >
              <List.Item.Meta
                avatar={
                  <Image src={item.picture ?? img} className={styles.preview} preview={false} />
                }
                title={
                  <div>
                    {enumToValueEnum(TEMPLATE_CLIENT_ENUM)[item.clientKey]?.text}-{item?.name}
                    &nbsp;&nbsp;
                    {item?.tags &&
                      JSON.parse(item?.tags || '[]')?.map((term: string) => (
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
