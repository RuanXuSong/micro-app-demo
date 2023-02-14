/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout from '@ant-design/pro-layout';
import { Link, connect, history } from 'umi';
import RightContent from '@/components/GlobalHeader/RightContent';
import logo from '../assets/logo.svg';
import { useOutlet } from '@umijs/max';

/** Use Authorized check all menu item */
const menuDataRender = () => {
  return [
    { name: 'react16平台', path: '/react16' },
    { name: 'react17平台', path: '/react17' },
  ];
};

const BasicLayout = (props) => {
  const {
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  const element = useOutlet();

  return (
    <ProLayout
      logo={logo}
      {...props}
      {...settings}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
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
    >
      {element}
    </ProLayout>
  );
};

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
