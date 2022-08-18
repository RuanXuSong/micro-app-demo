import convertSourceToTreeData from '@/utils/convertSourceToTreeData';
import { useRequest } from 'ahooks';
import { getResourceList } from '@/utils/getResourceList';

export default () => {
  const { data: resourceList } = useRequest(API.platform.sysUser.myResourceList.fetch);

  return {
    resourceList: getResourceList(resourceList),
    resourceTreeData: convertSourceToTreeData(resourceList),
  };
};
