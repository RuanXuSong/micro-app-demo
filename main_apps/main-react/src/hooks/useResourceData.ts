import convertSourceToTreeData from '@/utils/convertSourceToTreeData';
import { getResourceList } from '@/utils/getResourceList';
import { useRequest } from 'ahooks';

export default function useResourceData() {
  /**
   * 获取资源列表
   */
  const { data: resourceList, run: fetchResourceList } = useRequest(
    API.platform.sysUser.myResourceList.fetch,
  );

  return {
    resourceList: getResourceList(resourceList),
    resourceTreeData: convertSourceToTreeData(resourceList),
    fetchResourceList,
  };
}
