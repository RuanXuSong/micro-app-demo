import React from 'react';
import { Form, Button, Input, Upload } from 'antd';
import { history } from 'umi';
import { LOGIN_CONFIG } from '@/constant';
import { useRequest } from 'ahooks';
import styles from './index.module.less';
import { FILE_TYPE_MAP } from '@/utils/upload';
import { AVATAR_URL } from '@/constant';
import EditModal from './components/EditModal';
import useCentralService from './useCentralService';

const formLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

export default () => {
  const [form] = Form.useForm();
  const { id = '' } = history.location.query || {};
  const { reload, editModalConfig, handlePasswordEdit, handleModalHide } = useCentralService();

  /**
   * 获取详情
   */
  const fetchDetail = () => {
    if (id) {
      return API.authorization.resourceRole.resourceRoleDetailUser.fetch({
        clientKey: LOGIN_CONFIG.clientId,
        roleId: +id,
      });
    }
    return Promise.resolve(new defs.authorization.RoleDTO());
  };

  useRequest(fetchDetail, {
    refreshDeps: [id],
    onSuccess: (result) => {
      const { role, comment, resourceVOList, ...rest } = result;
      // 回显表单数据
      form.setFieldsValue({
        ...rest,
        role,
        comment,
      });
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Form form={form} {...formLayout}>
          <div className={styles.title}>个人资料</div>
          <div className={styles.infoWrap}>
            <div className={styles.avatarWrap}>
              <Form.Item label="头像" name="avatar">
                <Upload
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
              label="账号名称"
              name="account"
              rules={[
                {
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
            <div className={styles.passwordWrap}>
              <Form.Item
                label="账号密码"
                name="password"
                rules={[
                  {
                    whitespace: true,
                  },
                ]}
              >
                <Input type="password" placeholder="请输入" />
              </Form.Item>
              <Button
                className={styles.editBtn}
                type="link"
                onClick={() => handlePasswordEdit(`${id}`)}
              >
                修改
              </Button>
            </div>
            <div className={styles.submitWrap}>
              <Button type="primary" className={styles.submitBtn}>
                保存
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <EditModal
        visible={editModalConfig.visible}
        formData={editModalConfig.formData}
        loading={editModalConfig.loading}
        toggleVisible={() => handleModalHide('edit')}
        reload={reload}
      />
    </div>
  );
};
