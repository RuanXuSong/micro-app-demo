import { dimToOptions } from '@/utils/json';
import { useRequest } from 'ahooks';

export default () => {
  const { data: companyMap, refresh: reloadCompanyData } = useRequest(
    API.platform.sysOrg.orgList.fetch,
  );

  return {
    // 公司id
    companyIdMapOptions: dimToOptions(companyMap, { labelMapping: 'orgName', codeMapping: 'id' }),
    // 公司
    companyMapOptions: dimToOptions(companyMap, {
      labelMapping: 'orgName',
      codeMapping: 'orgCode',
    }),
    reloadCompanyData,
  };
};
