import { isEmpty } from 'lodash-es';

/** 把 privilegeList 放到 children 中展示 */
export const getResourceList = (tableList?: defs.platform.ResourceTreeObject[]) => {
  if (isEmpty(tableList)) return [];
  const loopList = (dataList: any[]) => {
    return dataList.map((item: any) => {
      const { children = [], privilegeList = [], ...restItem } = item;
      if (!isEmpty(children) || !isEmpty(privilegeList)) {
        restItem.children = (!isEmpty(children) ? loopList(children) : []).concat(
          privilegeList || [],
        );
      }
      return restItem;
    });
  };
  return loopList(tableList!);
};
