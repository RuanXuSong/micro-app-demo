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
const AuthorityMenuList = Loadable({
  loader: () => import('../pages/authorization/authority/menu/list'),
  loading: Loading,
  delay: 150,
});
const AuthorityDataList = Loadable({
  loader: () => import('../pages/authorization/authority/data/list'),
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
const CentralList = Loadable({
  loader: () => import('../pages/authorization/central'),
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
  '/authority/menu': {
    title: '菜单管理',
    component: <AuthorityMenuList />,
  },
  '/authority/data': {
    title: '数据管理',
    component: <AuthorityDataList />,
  },
  '/user/list': {
    title: '用户管理',
    component: <UserList />,
  },
  '/company/list': {
    title: '企业管理',
    component: <CompanyList />,
  },
  '/central': {
    title: '个人中心',
    component: <CentralList />,
  },
};

export const getTabsComponent = (key: string) => {
  let newKey = key;
  if (key.includes('?')) {
    newKey = key.split('?')[0];
  }

  const tab = TABS_CONFIG[`${newKey.replace('/cloud', '')}`];
  return tab;
};
