import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { useRequest } from 'ahooks';
import { Form, message } from 'antd';
import useSpinning from '@/hooks/useSpinning';

export default ({ currentUser, dispatch }: any) => {
  const [form] = Form.useForm();
  const [editModalConfig, setEditModalConfig] = useImmer<{
    visible: boolean;
    formData: any;
    loading: boolean;
  }>({
    visible: false,
    formData: {},
    loading: false,
  });
  const [authModalConfig, setAuthModalConfig] = useImmer<{
    visible: boolean;
    formData: any;
    loading: boolean;
  }>({
    visible: false,
    formData: {},
    loading: false,
  });
  const { tip, setTip } = useSpinning();

  // 重新获取用户信息
  const reload = () =>
    dispatch({
      type: 'user/fetchCurrent',
    });

  useEffect(() => {
    const { avatar, ...rest } = currentUser;
    // 回显表单数据
    form.setFieldsValue({
      ...rest,
      avatar: avatar
        ? [
            {
              uid: '1',
              name: '头像',
              status: 'done',
              url: avatar,
              size: 0,
            },
          ]
        : [],
    });
  }, []);

  const submit = (values: any) => {
    setTip('数据保存中，请稍候...');
    const { avatar, ...rest } = values;

    if (values.avatar) {
      rest.avatar = values.avatar?.file?.response?.data?.url;
    }

    return API.platform.sysUser.update.fetch(rest);
  };
  const { run: handleFinish, loading: submitting } = useRequest(submit, {
    manual: true,
    onSuccess: () => {
      message.success('保存成功');
      reload?.();
    },
  });

  /** 修改密码 */
  const handlePasswordEdit = () => {
    setEditModalConfig((config) => {
      config.visible = true;
      config.formData = { id: form.getFieldValue('id') };
    });
  };

  /** 隐藏弹窗 */
  const handleModalHide = (type: 'edit' | 'auth') => {
    const methodsObj = {
      edit: setEditModalConfig,
      auth: setAuthModalConfig,
    };
    methodsObj[type]((config) => {
      config.visible = false;
      config.loading = false;
      config.formData = {};
    });
  };

  return {
    tip,
    form,
    submitting,
    handleFinish,
    editModalConfig,
    setEditModalConfig,
    authModalConfig,
    setAuthModalConfig,
    handlePasswordEdit,
    handleModalHide,
  };
};
