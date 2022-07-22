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
const ResourceList = Loadable({
  loader: () => import('../pages/authorization/resource/list'),
  loading: Loading,
  delay: 150,
});
const CompanyList = Loadable({
  loader: () => import('../pages/authorization/company/list'),
  loading: Loading,
  delay: 150,
});
const CharacterList = Loadable({
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
  '/authorization/resource/list': {
    title: '资源管理',
    component: <ResourceList />,
  },
  '/authorization/user/list': {
    title: '用户管理',
    component: <CharacterList />,
  },
  '/authorization/company/list': {
    title: '企业管理',
    component: <CompanyList />,
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
