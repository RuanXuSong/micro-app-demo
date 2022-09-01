import React from 'react';
import { ConfigProvider, message } from 'antd';
import { Inspector } from 'react-dev-inspector';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import { UseRequestProvider } from 'ahooks';
import { THROTTLE_INTERVAL } from '@/constant';
import { PREFIX_CLASS } from '@/constant';
import useAuth from '@/hooks/useAuth';

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

const Layout: React.FC<any> = ({ children, location }) => {
  // 权限管理
  useAuth(location.pathname);
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
            } catch (err) {
              message.error(err.message);
            }
          }
        },
        throttleInterval: THROTTLE_INTERVAL,
      }}
    >
      <ConfigProvider locale={zhCN} prefixCls={PREFIX_CLASS}>
        <InspectorWrapper>{children}</InspectorWrapper>
      </ConfigProvider>
    </UseRequestProvider>
  );
};

export default Layout;
