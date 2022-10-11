import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { useEffect, useRef } from 'react';
import { Link, connect, history, useModel, useOutlet, useLocation } from '@umijs/max';
import Authorized from '@/utils/Authorized';
import NoMatch from '@/components/NoMatch';
import logo from '@/assets/logo.svg';
import styles from './index.module.less';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import { BaseMenuProps } from '@ant-design/pro-layout/lib/components/SiderMenu/BaseMenu';
import RightContent from '@/components/GlobalHeader/RightContent';
import useInitialRoute from '@/hooks/useInitialRoute';
import { MENU_ICONS_OBJ } from '@/constant';
import convertResourceToMenu from '@/utils/convertResourceToMenu';

const BasicLayout = (props: any) => {
  const element = useOutlet();
  const { initialState } = useModel('@@initialState');
  const { userInfo } = initialState || {};
  const { resourceList } = useModel('resourceData');
  const menus = convertResourceToMenu(resourceList);
  const { checkAuth } = useModel('authority');
  const { initialRoute } = useInitialRoute();
  const location = useLocation();

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
  const { dispatch, settings, headerCollapsed } = props;
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
    const { pathname = '' } = location || {};
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
    const { name, key, pro_layout_parentKeys = [] } = menuItemProps;
    const isChild = !isEmpty(pro_layout_parentKeys);
    const customIcon = MENU_ICONS_OBJ[key!] || {};
    return (
      <div className={classNames(!isChild ? styles.menuItemWrap : styles.childMenuItem)}>
        <img src={require(`@/assets/icon/${customIcon}.png`)} alt={name} />
        <div className={styles.menuTitle}>{defaultDom}</div>
      </div>
    );
  };

  return (
    <ProLayout
      className={headerCollapsed ? 'collapsed-basic-layout' : 'basic-layout'}
      logo={userInfo?.orgLogo ?? logo}
      {...props}
      {...settings}
      title={userInfo?.orgName ?? '雷数云平台'}
      onCollapse={handleMenuCollapse}
      menus={menus}
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
      menuDataRender={() => menuDataRender(menus)}
      rightContentRender={() => <RightContent />}
      postMenuData={(menuData: any[]) => {
        if (!menuData) return [];
        // 筛选菜单为精准匹配路由
        const modifiedData = menuData.filter((item) => !(item.path!.indexOf('/*') > -1));
        menuDataRef.current = modifiedData || [];
        return modifiedData || [];
      }}
    >
      <Authorized authority={checkAuth(location.pathname, 'children')} noMatch={NoMatch}>
        {element}
      </Authorized>
    </ProLayout>
  );
};

export default connect(({ global, settings }: any) => ({
  collapsed: global.collapsed,
  headerCollapsed: global.headerCollapsed,
  settings,
}))(BasicLayout);
