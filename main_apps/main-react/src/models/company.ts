import { dimToOptions } from '@/utils/json';
import { useRequest } from 'ahooks';

export default () => {
  const { data: companyMap } = useRequest(API.platform.sysOrg.orgList.fetch);

  return {
    // 公司
    companyMapOptions: dimToOptions(companyMap, { labelMapping: 'orgName', codeMapping: 'id' }),
  };
};
