import { LOGOUT_PATH } from '@/config';
import { Result, Button } from 'antd';
import React from 'react';
import { Link } from 'umi';

export default (
  <Result
    status={403}
    title="403"
    subTitle="抱歉，您当前没有权限"
    extra={
      <Button type="primary">
        <Link to={LOGOUT_PATH}>重新登录</Link>
      </Button>
    }
  />
);
