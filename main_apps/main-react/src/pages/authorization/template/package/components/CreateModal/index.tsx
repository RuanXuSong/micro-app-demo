import { Modal, Spin, Image, Badge, List, Button } from 'antd';

import { Store } from 'antd/es/form/interface';
import {
  HISTORY_STATUS_MAP,
  TEMPLATE_CLIENT_ENUM,
  TEMPLATE_STATUS_COLOR_MAP,
  TEMPLATE_STATUS_MAP,
} from '@/constant';

import img from '../../assets/preview.png';
import styles from './index.module.less';
import { SyncOutlined } from '@ant-design/icons';
import { enumToValueEnum } from '@/utils/array';

export default ({
  visible,
  loading,
  toggleVisible,
  data,
  handleTemplateRetry,
  reload,
  templateAuthMap,
}: {
  visible: boolean;
  loading: boolean;
  toggleVisible: () => void;
  data: Store;
  handleTemplateRetry: ({ orgTemplateId }: { orgTemplateId: string }) => void;
  reload?: () => void;
  templateAuthMap: Object;
}) => {
  const modalStatus = data?.templateList?.every((item: { status: HISTORY_STATUS_MAP }) =>
    [HISTORY_STATUS_MAP.失败, HISTORY_STATUS_MAP.成功].includes(item?.status),
  );

  const failStatus = data?.templateList?.some(
    (item: { status: HISTORY_STATUS_MAP }) => item?.status === HISTORY_STATUS_MAP.失败,
  );

  return (
    <Modal
      centered
      visible={visible}
      forceRender
      maskClosable={false}
      title={
        <div>
          {!modalStatus ? (
            <>
              <SyncOutlined spin />
              &nbsp;&nbsp;{data.name}&nbsp;&nbsp;
              <Badge color="#108ee9" />
              <span className={styles.readyTitle}>创建中</span>
            </>
          ) : (
            <>
              &nbsp;&nbsp;{data.name}&nbsp;&nbsp;
              {failStatus ? (
                <span className={styles.failTitle}>
                  <Badge color="#FF0000" />
                  失败
                </span>
              ) : (
                <span className={styles.successTitle}>
                  <Badge color="#17F9AD" />
                  已完成
                </span>
              )}
            </>
          )}
        </div>
      }
      okButtonProps={{
        htmlType: 'submit',
      }}
      width={537}
      onCancel={toggleVisible}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            toggleVisible();
            reload && reload();
          }}
        >
          确定
        </Button>,
      ]}
    >
      <Spin spinning={loading}>
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={data.templateList}
          size="small"
          renderItem={(item: any) => (
            <List.Item
              actions={[
                item?.status! === HISTORY_STATUS_MAP.失败
                  ? templateAuthMap[
                      `${enumToValueEnum(TEMPLATE_CLIENT_ENUM)[item.clientKey]?.text}重试`
                    ] && (
                      <span
                        className={styles.action}
                        onClick={() => handleTemplateRetry({ orgTemplateId: item?.orgTemplateId! })}
                        tabIndex={1}
                      >
                        重试
                      </span>
                    )
                  : item?.redirectUrl &&
                    templateAuthMap[
                      `${enumToValueEnum(TEMPLATE_CLIENT_ENUM)[item.clientKey]?.text}查看`
                    ] && (
                      <a
                        className={styles.action}
                        href={item.redirectUrl}
                        target="_blank"
                        rel="noopener"
                      >
                        查看
                      </a>
                    ),
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Image src={item.picture ?? img} className={styles.preview} preview={false} />
                }
                title={item?.name}
                description={
                  <div>
                    {[TEMPLATE_STATUS_MAP.创建中, TEMPLATE_STATUS_MAP.未创建].includes(
                      item?.status,
                    ) ? (
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
