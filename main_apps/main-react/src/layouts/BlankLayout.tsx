import React, { useEffect } from 'react';
import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import { UseRequestProvider } from 'ahooks';
import { THROTTLE_INTERVAL } from '@/constant';
import { PREFIX_CLASS } from '@/constant';
import useAuth from '@/hooks/useAuth';
import { useModel, useLocation, useOutlet } from '@umijs/max';

const Layout: React.FC<any> = () => {
  const location = useLocation();
  const { ready } = useModel('authority');
  const element = useOutlet();
  // 权限管理
  useAuth(location.pathname);

  useEffect(() => {
    window.addEventListener(
      'popstate',
      function (e) {
        console.log('popstate: ', e);
        // router.replace(href.replace(origin, ''))
      },
      false,
    );
  }, []);
  return (
    <UseRequestProvider
      value={{
        /** 全局请求的默认配置 */
        onError: (error: Error) => {
          console.error(error);
          if (error) {
            try {
              const errorJSON = JSON.parse(error.message);
              message.error(errorJSON.message);
            } catch (err: any) {
              message.error(err.message);
            }
          }
        },
        throttleInterval: THROTTLE_INTERVAL,
      }}
    >
      <ConfigProvider locale={zhCN} prefixCls={PREFIX_CLASS}>
        {ready && element}
      </ConfigProvider>
    </UseRequestProvider>
  );
};

export default Layout;
