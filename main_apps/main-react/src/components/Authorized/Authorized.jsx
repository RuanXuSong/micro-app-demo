import { Result } from 'antd';
import check from './CheckPermissions';
import NoMatch from '../NoMatch';

const Authorized = ({ children, authority, noMatch = NoMatch }) => {
  const childrenRender = typeof children === 'undefined' ? null : children;
  const dom = check(authority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default Authorized;
