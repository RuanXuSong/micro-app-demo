import { Result, Button } from 'antd';

export default (
  <Result
    status={403}
    title="403"
    subTitle="抱歉，您当前没有权限"
    extra={
      <Button type="primary" onClick={() => (window.location.href = '')}>
        重新登录
      </Button>
    }
  />
);
