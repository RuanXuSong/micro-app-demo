import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';
import { useEffect } from 'react';
import { Link, connect, history, useModel, useLocation, useKeepOutlets } from '@umijs/max';
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
import Footer from '@/components/Footer';

const AuthLayout = (props: any) => {
  const location = useLocation();
  const { initialState } = useModel('@@initialState');
  const tabsElements = useKeepOutlets();

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
  const { dispatch, settings, collapsed } = props;
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
    const { pro_layout_parentKeys = [], customIcon } = menuItemProps;
    const isChild = !isEmpty(pro_layout_parentKeys);
    return isChild ? (
      <div
        className={classNames(!isChild ? styles.menuItemWrap : styles.childMenuItem)}
        style={collapsed ? { paddingLeft: 2 } : {}}
      >
        <Iconfont
          name={customIcon}
          className={styles.fontIcon}
          style={{ marginRight: collapsed ? 14 : 10 }}
        />

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
      footerRender={() => <Footer />}
      itemRender={(route, _params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      menuDataRender={() => menuDataRender(menus)}
      rightContentRender={() => <RightContent />}
    >
      <Authorized authority={checkAuth(location.pathname)} noMatch={NoMatch}>
        {tabsElements}
      </Authorized>
    </ProLayout>
  );
};

function mapStateToProps(state: any) {
  const { global, settings } = state;
  return { collapsed: global.collapsed, settings };
}

export default connect(mapStateToProps)(AuthLayout);
