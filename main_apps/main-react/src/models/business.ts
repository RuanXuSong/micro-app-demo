import { dimToOptions } from '@/utils/json';
import { useRequest } from 'ahooks';

export default () => {
  const { data: clientMap } = useRequest(API.platform.clientKey.list.fetch);

  return {
    // 限制菜单
    businessMapOptions: dimToOptions(clientMap, {
      labelMapping: 'clientName',
      codeMapping: 'clientKey',
    }),
  };
};
