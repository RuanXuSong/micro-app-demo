import { message } from 'antd';
import { useModel } from '@umijs/max';
import { preFetch } from '@micro-zoe/micro-app';
import { isEmpty } from 'lodash-es';
import convertSourceToTreeData from '@/utils/convertSourceToTreeData';
import { useRequest } from 'ahooks';
import { getResourceList } from '@/utils/getResourceList';
import config from '@/config';

export default () => {
  const { setAuthority, setReady } = useModel('authority');
  const { data: resourceList } = useRequest(API.platform.sysUser.myResourceList.fetch, {
    onSuccess: (resourceArr) => {
      console.log('resourceArr: ', resourceArr);

      if (!isEmpty(resourceArr)) {
        setAuthority(
          resourceArr.map((item) => item.apiUrl!),
          'children',
        );
        const appList = resourceArr
          .map((item) => item.resourceKey)
          .filter((item) => item !== 'manage-center')
          .map((item) => ({ name: item, url: config[item] }));
        console.log('appList: ', appList);
        // 预加载减少首屏白屏时间
        preFetch(appList);
      }
      setReady(true);
    },
    onError: (err: Error) => {
      try {
        const errMessage = JSON.parse(err.message)?.message ?? '';
        if (errMessage) {
          message.error(errMessage);
        } else {
          message.error(err);
        }
      } catch (err: any) {
        message.error(err.message);
      }
      setReady(true);
    },
  });

  return {
    resourceList: getResourceList(resourceList),
    resourceTreeData: convertSourceToTreeData(resourceList),
  };
};
