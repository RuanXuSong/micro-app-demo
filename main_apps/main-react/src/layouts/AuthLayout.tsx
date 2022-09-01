import ProLayout, { BasicLayoutProps, MenuDataItem } from '@ant-design/pro-layout';
import React, { useEffect, useRef } from 'react';
import { Link, connect, history, useModel } from 'umi';
import Authorized from '@/utils/Authorized';
import logo from '../assets/logo.svg';
import microApp from '@micro-zoe/micro-app';
import styles from './index.module.less';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import Iconfont from '@/components/Iconfont';
import NoMatch from '@/components/NoMatch';
import { BaseMenuProps } from '@ant-design/pro-layout/lib/components/SiderMenu/BaseMenu';
import RightContent from '@/components/GlobalHeader/RightContent';
import useInitialRoute from '@/hooks/useInitialRoute';

const AuthLayout = (props: any) => {
  const { initialState } = useModel('@@initialState');
  const { menus = [], userInfo } = initialState || {};
  const { checkAuth } = useModel('authority');
  const { initialRoute } = useInitialRoute();

  const menuDataRender: BasicLayoutProps['menuDataRender'] = (menuList) => {
    const menuData = menuList
      .map((item) => {
        if (item.hidden) return null;
        const localItem = {
          ...item,
          children: item.children ? menuDataRender!(item.children) : undefined,
        };
        return Authorized.check(menus, localItem);
      })
      .filter((item) => !!item);
    return menuData;
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
  const menuDataRef = useRef<MenuDataItem[]>([]);
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

  const handleMenuCollapse = (payload: boolean) => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  /** 渲染菜单元素 */
  const renderMenuItem: BaseMenuProps['subMenuItemRender'] = (menuItemProps, defaultDom) => {
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

  return (
    <ProLayout
      logo={userInfo?.orgLogo ?? logo}
      {...props}
      {...settings}
      title={userInfo?.orgName ?? '雷数云平台'}
      className="auth-layout"
      onCollapse={handleMenuCollapse}
      onMenuHeaderClick={() => history.push(initialRoute)}
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
      itemRender={(route, _params, routes, paths) => {
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
      <Authorized authority={checkAuth(location.pathname)} noMatch={NoMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

function mapStateToProps(state: any) {
  const {
    router: { location },
    global,
    settings,
  } = state;
  const menuKey = location.pathname;
  return { menuKey, collapsed: global.collapsed, settings };
}

export default connect(mapStateToProps)(AuthLayout);
