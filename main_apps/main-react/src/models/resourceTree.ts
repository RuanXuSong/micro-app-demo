/*
 * @文件描述: 全部资源树级菜单
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-08-02 17:09:38
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-03 14:35:56
 */

import { LOGIN_CONFIG } from '@/constant';
import { PrivilegeResource } from '@/interfaces/common';
import convertSourceToTreeData from '@/utils/convertSourceToTreeData';
import { useRequest } from 'ahooks';

export default () => {
  const { data: sourceData } = useRequest<PrivilegeResource[]>(() =>
    API.authorization.resource.listTree.fetch({
      clientKey: LOGIN_CONFIG.clientId,
    }),
  );

  return {
    resourceData: convertSourceToTreeData(sourceData),
  };
};
