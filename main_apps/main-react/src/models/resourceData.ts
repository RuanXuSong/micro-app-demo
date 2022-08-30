import { message } from 'antd';
import { useModel } from 'umi';
import { isEmpty } from 'lodash-es';
import convertSourceToTreeData from '@/utils/convertSourceToTreeData';
import { useRequest } from 'ahooks';
import { getResourceList } from '@/utils/getResourceList';

export default () => {
  const { initialState } = useModel('@@initialState');
  const { authorityList } = initialState || {};
  const { setAuthority, setReady } = useModel('authority');
  const { data: resourceList } = useRequest(API.platform.sysUser.myResourceList.fetch, {
    onSuccess: (resourceArr) => {
      if (!isEmpty(authorityList)) {
        setAuthority(authorityList!);
      }
      if (!isEmpty(resourceArr)) {
        setAuthority(
          resourceArr.map((item) => item.apiUrl!),
          'children',
        );
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
      } catch (err) {
        message.error(err);
      }
      if (!isEmpty(authorityList)) {
        setAuthority(authorityList!);
      }
      setReady(true);
    },
  });

  // useEffect(() => {
  //   if (!isEmpty(authorityList)) {
  //     console.log('authorityList: ', authorityList);
  //     setAuthority(authorityList!);
  //   }
  // }, [authorityList]);

  return {
    resourceList: getResourceList(resourceList),
    resourceTreeData: convertSourceToTreeData(resourceList),
  };
};
