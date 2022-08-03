import { PrivilegeResource } from '@/interfaces/common';
import { MenuDataItem } from '@ant-design/pro-layout';
import { isEmpty } from 'lodash-es';

/**
 * 将后台返回的权限资源，转换成应用的菜单
 * @param resources
 */
function convertResourceToMenu(list: PrivilegeResource[]): MenuDataItem[] {
  return list.map((item) => {
    if (!isEmpty(item.children)) {
      return {
        name: item.description,
        key: `${item.apiUrl}`,
        customIcon: item.icon,
        path: item.apiUrl,
        children: convertResourceToMenu(item.children),
      };
    }
    return {
      name: item.description,
      key: `${item.apiUrl}`,
      customIcon: item.icon,
      path: item.apiUrl,
    };
  });
}

export default convertResourceToMenu;
