import React from 'react';
import { ConfigProvider } from 'antd';
import { Inspector } from 'react-dev-inspector';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

const Layout = ({ children }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <InspectorWrapper>{children}</InspectorWrapper>
    </ConfigProvider>
  );
};

export default Layout;
