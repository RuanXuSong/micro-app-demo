import React from 'react';
import { Modal, Spin, Image, Badge, List, Button } from 'antd';

import 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { HISTORY_STATUS_MAP, TEMPLATE_STATUS_COLOR_MAP, TEMPLATE_STATUS_MAP } from '@/constant';

import img from '../../assets/preview.png';
import styles from './index.module.less';
import { SyncOutlined } from '@ant-design/icons';

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
      title={
        <div>
          <SyncOutlined spin />
          &nbsp;&nbsp;企业敏捷应用模板&nbsp;&nbsp;
          <Badge color="#108ee9" />
          <span className={styles.title}>创建中</span>
        </div>
      }
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
            <List.Item
              actions={[
                item?.status! === HISTORY_STATUS_MAP.失败 ? <span>重试</span> : <a>查看</a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Image src={item.image ?? img} className={styles.preview} preview={false} />
                }
                title={item?.name}
                description={
                  <div>
                    {item?.status === TEMPLATE_STATUS_MAP.创建中 ? (
                      <SyncOutlined spin style={{ marginRight: 5 }} />
                    ) : (
                      <Badge color={TEMPLATE_STATUS_COLOR_MAP[item?.status]} />
                    )}
                    <span style={{ color: TEMPLATE_STATUS_COLOR_MAP[item?.status] }}>
                      {HISTORY_STATUS_MAP[item?.status]}
                    </span>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Spin>
    </Modal>
  );
};
