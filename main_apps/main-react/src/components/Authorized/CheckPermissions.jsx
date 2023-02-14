import { CURRENT } from './renderAuthorize'; // eslint-disable-next-line import/no-cycle

import PromiseRender from './PromiseRender';
import NoMatch from '../NoMatch';

/**
 * 通用权限检查方法 Common check permissions method
 *
 * @param { 权限菜单 } authMenu
 * @param { 当前菜单 } currentMenu
 * @param { 未通过的组件 | no pass components } Exception
 */
const checkPermissions = (authMenu, currentMenu, Exception) => {
  // 没有判定权限,返回 403 页面
  if (!authMenu) {
    return NoMatch;
  }

  if (authMenu === true || currentMenu.key === '/cloud') {
    return currentMenu;
  }
  // 数组处理
  if (Array.isArray(authMenu)) {
    const getTotalKey = () => {
      const keys = [];

      const loopKey = (newMenu) => {
        newMenu.forEach((item) => {
          keys.push(item.key);
          if (item.children) {
            loopKey(item.children);
          }
        });
      };
      loopKey(authMenu);
      return keys;
    };
    const totalKeys = getTotalKey();
    if (Array.isArray(currentMenu)) {
      if (currentMenu.some((item) => totalKeys.includes(item.key))) {
        return currentMenu;
      }
    } else if (totalKeys.includes(currentMenu.key)) {
      return currentMenu;
    }

    return Exception;
  }

  throw new Error('unsupported parameters');
};

export { checkPermissions };

function check(authMenu, currentMenu) {
  return checkPermissions(authMenu, currentMenu, null);
}

export default check;
