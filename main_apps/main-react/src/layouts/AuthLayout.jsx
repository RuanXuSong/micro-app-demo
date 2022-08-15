/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, connect, history, useModel } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { Result, Button, Menu, Tabs } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getMatchMenu } from '@umijs/route-utils';
import logo from '../assets/logo.svg';
import microApp, { removeDomScope } from '@micro-zoe/micro-app';
import initialState from '@/.umi/plugin-initial-state/models/initialState';
import styles from './index.module.less';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import Iconfont from '@/components/Iconfont';

const { TabPane } = Tabs;

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

const AuthLayout = (props) => {
  const { initialState } = useModel('@@initialState');
  const { menus = [], userInfo } = initialState || {};
  const menuDataRender = (menuList) => {
    return menuList.map((item) => {
      if (item.hidden) return null;
      const localItem = {
        ...item,
        children: item.children ? menuDataRender(item.children) : undefined,
      };
      return Authorized.check(menus, localItem);
    });
  };
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
    collapsed,
  } = props;
  const menuDataRef = useRef([]);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subMenuCollapsed, setSubMenuCollapsed] = useState(false);
  useEffect(() => {
    microApp.setGlobalData({ showDropDown: true });

    return () => {
      microApp.setGlobalData({ showDropDown: false });
    };
  }, []);

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
    const { customIcon, fontIcon, name, pro_layout_parentKeys = [] } = menuItemProps;
    const isChild = !isEmpty(pro_layout_parentKeys);
    return isChild ? (
      <div
        className={classNames(!isChild ? styles.menuItemWrap : styles.childMenuItem)}
        style={collapsed ? { paddingLeft: 2 } : {}}
      >
        {fontIcon ? (
          <Iconfont
            name={fontIcon}
            className={styles.fontIcon}
            style={{ marginRight: collapsed ? 14 : 10 }}
          />
        ) : (
          <img src={require(`@/assets/icon/${customIcon}.png`)} alt={name} />
        )}
        <div className={styles.menuTitle}>{defaultDom}</div>
      </div>
    ) : null;
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
      className="auth-layout"
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
      subMenuItemRender={(menuItemProps, defaultDom) => renderMenuItem(menuItemProps, defaultDom)}
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
        menuDataRef.current = menuData || [];
        return menuData || [];
      }}
    >
      <Authorized authority={authorized.authority} noMatch={noMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

function mapStateToProps(state) {
  const {
    router: { location },
    global,
    settings,
  } = state;
  const menuKey = location.pathname;
  return { menuKey, collapsed: global.collapsed, settings };
}

export default connect(mapStateToProps)(AuthLayout);
