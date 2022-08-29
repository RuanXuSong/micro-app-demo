import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import React, { useEffect, useRef } from 'react';
import { Link, connect, history, useModel } from 'umi';
import Authorized from '@/utils/Authorized';
import NoMatch from '@/components/NoMatch';
import logo from '@/assets/logo.svg';
import styles from './index.module.less';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import { BaseMenuProps } from '@ant-design/pro-layout/lib/components/SiderMenu/BaseMenu';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getAuthority } from '@/utils/authority';

const BasicLayout = (props: any) => {
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};
  const { resourceList } = useModel('resourceData');
  const authList = getAuthority('children');

  const menuDataRender = (menuList: any) =>
    menuList.map((item: any) => {
      if (item.hidden) return null;
      const localItem = {
        ...item,
        children: item.children ? menuDataRender!(item.children) : undefined,
      };
      const resourceKeys = resourceList.map((item) => `/${item.resourceKey}`);
      return resourceKeys.includes(localItem.key) ? localItem : null;
    });
  const {
    dispatch,
    children,
    settings,
    headerCollapsed,
    location = {
      pathname: '/',
    },
  } = props;
  const menuDataRef = useRef<MenuDataItem[]>([]);

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
    const { customIcon, name, pro_layout_parentKeys = [] } = menuItemProps;
    const isChild = !isEmpty(pro_layout_parentKeys);
    return (
      <div className={classNames(!isChild ? styles.menuItemWrap : styles.childMenuItem)}>
        <img src={require(`@/assets/icon/${customIcon}.png`)} alt={name} />
        <div className={styles.menuTitle}>{defaultDom}</div>
      </div>
    );
  };

  const checkIncludeAuth = (pathname: string) => {
    for (let i = 0; i < authList.length; i++) {
      if (pathname.startsWith(authList[i])) return true;
    }
    return false;
  };

  return (
    <ProLayout
      className={headerCollapsed ? 'collapsed-basic-layout' : 'basic-layout'}
      logo={userInfo?.orgLogo ?? logo}
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
        if (!menuData) return [];
        // 筛选菜单为精准匹配路由
        const modifiedData = menuData.filter((item) => !(item.path!.indexOf('/*') > -1));
        menuDataRef.current = modifiedData || [];
        return modifiedData || [];
      }}
    >
      <Authorized authority={checkIncludeAuth(location.pathname)} noMatch={NoMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

export default connect(({ global, settings }: any) => ({
  collapsed: global.collapsed,
  headerCollapsed: global.headerCollapsed,
  settings,
}))(BasicLayout);
