import { isEmpty } from 'lodash-es';
import convertSourceToTreeData from '@/utils/convertSourceToTreeData';
import { useRequest } from 'ahooks';
import { getResourceList } from '@/utils/getResourceList';
import { setAuthority } from '@/utils/authority';

export default () => {
  const { data: resourceList } = useRequest(API.platform.sysUser.myResourceList.fetch, {
    onSuccess: (resourceArr) => {
      if (!isEmpty(resourceArr)) {
        setAuthority(
          resourceArr.map((item) => item.apiUrl!),
          'children',
        );
      }
    },
  });

  return {
    resourceList: getResourceList(resourceList),
    resourceTreeData: convertSourceToTreeData(resourceList),
  };
};
