import { isEmpty } from 'lodash-es';
import convertSourceToTreeData from '@/utils/convertSourceToTreeData';
import { useRequest } from 'ahooks';

export default () => {
  const { data: resourceList, run: reloadResourceList } = useRequest(
    API.platform.sysUser.myResourceList.fetch,
  );

  return {
    resourceList: getResourceList(resourceList),
    resourceTreeData: convertSourceToTreeData(resourceList),
    reloadResourceList,
  };
};

/** 把 privilegeList 放到 children 中展示 */
const getResourceList = (tableList?: defs.platform.ResourceTreeObject[]) => {
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
