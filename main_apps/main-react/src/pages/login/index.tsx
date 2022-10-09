import LoginForm from '@/components/LoginForm';
import styles from './index.module.less';
import { Link } from 'umi';

const { UserName, Password, Submit } = LoginForm;

const Login = () => {
  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.contentWrap}>
        <div className={styles.left}>
          <img src={require('@/assets/login-left.png')} />
        </div>
        <div className={styles.right}>
          <div className={styles.titleWrap}>
            <div className={styles.title}>「 雷数云平台 」</div>
            <div className={styles.subtitle}>助力企业搭建高效平台</div>
          </div>
          <div className={styles.formWrap}>
            <LoginForm onSubmit={handleSubmit}>
              <UserName
                name="userName"
                placeholder="用户名"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <Password
                name="password"
                placeholder="密码"
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />

              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Link to="/login">忘记密码</Link>
              </div>
              <Submit loading={false}>登录</Submit>
            </LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
