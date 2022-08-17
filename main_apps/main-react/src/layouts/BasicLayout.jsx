/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, connect, history, useModel } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { Result, Button, Menu } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getMatchMenu } from '@umijs/route-utils';
import logo from '../assets/logo.svg';
import microApp, { removeDomScope } from '@micro-zoe/micro-app';
import styles from './index.module.less';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { isEmpty } from 'lodash';

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);

/** Use Authorized check all menu item */
const menuDataRender = (menuList) =>
  menuList.map((item) => {
    if (item.hidden) return null;
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return Authorized.check(item.authority, localItem, null);
  });

const BasicLayout = (props) => {
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  const menuDataRef = useRef([]);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subMenuCollapsed, setSubMenuCollapsed] = useState(false);

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/setCurrentUser',
        payload: userInfo,
      });
    }
  }, [userInfo]);

  useEffect(() => {
    const { pathname = '' } = props.location || {};
    // 重定向到权限管理页
    if (/^\/authorization\/?$/.test(pathname)) {
      history.replace('/authorization/resource/list');
    }
  }, [props]);

  const handleMenuCollapse = (payload) => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  /** 渲染菜单元素 */
  const renderMenuItem = (menuItemProps, defaultDom) => {
    const { customIcon, name, pro_layout_parentKeys = [] } = menuItemProps;
    const isChild = !isEmpty(pro_layout_parentKeys);
    return (
      <div className={classNames(!isChild ? styles.menuItemWrap : styles.childMenuItem)}>
        <img src={require(`@/assets/icon/${customIcon}.png`)} alt={name} />
        <div className={styles.menuTitle}>{defaultDom}</div>
      </div>
    );
  };

  const authorized = useMemo(
    () =>
      getMatchMenu(location.pathname || '/', menuDataRef.current).pop() || {
        authority: undefined,
      },
    [location.pathname],
  );
  return (
    <ProLayout
      logo={logo}
      {...props}
      {...settings}
      onCollapse={handleMenuCollapse}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return renderMenuItem(menuItemProps, defaultDom);
        }
        return <Link to={menuItemProps.path}>{renderMenuItem(menuItemProps, defaultDom)}</Link>;
      }}
      splitMenus
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => {
        return null;
      }}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
      postMenuData={(menuData) => {
        // 筛选菜单为精准匹配路由
        const modifiedData = menuData.filter((item) => !(item.path.indexOf('/*') > -1));
        menuDataRef.current = modifiedData || [];
        return modifiedData || [];
      }}
    >
      <Authorized authority={authorized.authority} noMatch={noMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
