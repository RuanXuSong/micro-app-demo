import React from 'react';
import { CURRENT } from './renderAuthorize'; // eslint-disable-next-line import/no-cycle

import PromiseRender from './PromiseRender';

/**
 * 通用权限检查方法 Common check permissions method
 *
 * @param { 权限菜单 } authMenu
 * @param { 当前菜单 } currentMenu
 * @param { 未通过的组件 | no pass components } Exception
 */
const checkPermissions = (authMenu, currentMenu, Exception) => {
  // 没有判定权限.默认查看所有
  if (!authMenu) {
    return currentMenu;
  }

  if (currentMenu.key === '/auth') {
    return currentMenu;
  }
  // 数组处理
  if (Array.isArray(authMenu)) {
    if (Array.isArray(currentMenu)) {
      if (currentMenu.some((item) => authMenu.map((child) => child.key).includes(item.key))) {
        return currentMenu;
      }
    } else if (authMenu.map((item) => item.key).includes(currentMenu.key)) {
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
