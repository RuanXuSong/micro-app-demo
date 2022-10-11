import { Form, Button, Input, Upload, Spin } from 'antd';
import styles from './index.module.less';
import { FILE_TYPE_MAP, getPublicUploadProps, handleUpload } from '@/utils/upload';
import { connect } from '@umijs/max';
import { AVATAR_URL } from '@/constant';
import EditModal from './components/EditModal';
import useCentralService from './useCentralService';
import DetailValue from '@/components/DetailValue';

const formLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

const Central = (props: any) => {
  const {
    form,
    tip,
    submitting,
    handleFinish,
    editModalConfig,
    handlePasswordEdit,
    handleModalHide,
  } = useCentralService(props);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Spin spinning={submitting} tip={tip}>
          <Form form={form} {...formLayout} onFinish={handleFinish}>
            <div className={styles.title}>个人资料</div>
            <div className={styles.infoWrap}>
              <div className={styles.avatarWrap}>
                <Form.Item
                  label="id"
                  name="id"
                  hidden
                  rules={[
                    {
                      whitespace: true,
                    },
                  ]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
                <Form.Item
                  label="头像"
                  name="avatar"
                  valuePropName="fileList"
                  getValueFromEvent={handleUpload}
                  getValueProps={(value) => {
                    const modifiedValue = value ?? [];
                    return {
                      fileList: Array.isArray(modifiedValue)
                        ? modifiedValue
                        : [{ url: modifiedValue }],
                    };
                  }}
                >
                  <Upload
                    {...getPublicUploadProps()}
                    maxCount={1}
                    accept={FILE_TYPE_MAP['图片'].join(',')}
                    multiple={false}
                    listType="picture-card"
                    defaultFileList={[
                      {
                        uid: '1',
                        name: '默认头像',
                        status: 'done',
                        response: '网络请求失败',
                        url: AVATAR_URL,
                      },
                    ]}
                    showUploadList={{
                      showRemoveIcon: false,
                    }}
                  >
                    <Button type="primary">更换</Button>
                  </Upload>
                </Form.Item>
              </div>

              <Form.Item
                label="用户名称"
                name="name"
                rules={[
                  {
                    whitespace: true,
                  },
                ]}
              >
                <DetailValue />
              </Form.Item>
              <Form.Item
                label="账号密码"
                name="password"
                rules={[
                  {
                    whitespace: true,
                  },
                ]}
              >
                <Button className={styles.editBtn} type="link" onClick={handlePasswordEdit}>
                  修改密码
                </Button>
              </Form.Item>

              <div className={styles.submitWrap}>
                <Button type="primary" htmlType="submit" className={styles.submitBtn}>
                  保存
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </div>
      <EditModal
        visible={editModalConfig.visible}
        formData={editModalConfig.formData}
        loading={editModalConfig.loading}
        toggleVisible={() => handleModalHide('edit')}
      />
    </div>
  );
};

export default connect(({ user }: any) => ({
  currentUser: user.currentUser,
}))(Central);
