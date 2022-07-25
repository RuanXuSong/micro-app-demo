import React from 'react';
import { Spin } from 'antd';
import Loadable from 'react-loadable';

const Loading = () => (
  <Spin
    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
  />
);
const Homepage = Loadable({
  loader: () => import('../pages/homepage'),
  loading: Loading,
  delay: 150,
});
const AuthorityList = Loadable({
  loader: () => import('../pages/authorization/authority/list'),
  loading: Loading,
  delay: 150,
});
const CompanyList = Loadable({
  loader: () => import('../pages/authorization/company/list'),
  loading: Loading,
  delay: 150,
});
const UserList = Loadable({
  loader: () => import('../pages/authorization/user/list'),
  loading: Loading,
  delay: 150,
});

export interface TabModel {
  title: string;
  tabKey?: string;
  component: any;
}

const TABS_CONFIG = {
  '/homepage': {
    title: '首页',
    component: <Homepage />,
  },
  '/authorization/authority/list': {
    title: '权限管理',
    component: <AuthorityList />,
  },
  '/authorization/user/list': {
    title: '用户管理',
    component: <UserList />,
  },
  '/authorization/company/list': {
    title: '企业管理',
    component: <CompanyList />,
  },
  '/authorization/central/list': {
    title: '个人中心',
    component: <UserList />,
  },
};

export const getTabsComponent = (key: string) => {
  let newKey = key;
  if (key.includes('?')) {
    newKey = key.split('?')[0];
  }

  const tab = TABS_CONFIG[`${newKey.replace('/auth', '')}`];
  return tab;
};
