/*
 * @文件描述: 全部资源树级菜单
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-08-02 17:09:38
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-02 17:13:43
 */

import { LOGIN_CONFIG } from '@/constant';
import { PrivilegeResource } from '@/interfaces/common';
import { useRequest } from 'ahooks';
import { DataNode } from 'antd/lib/tree';

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

/**
 * 将 source 转换为 Tree 组件可用的数据
 * @param source
 */
function convertSourceToTreeData(source?: PrivilegeResource[]) {
  if (!source) return [];
  const loopData = (data: PrivilegeResource[]): DataNode[] => {
    const newData = data.map((item) => {
      const { description, id, privilegeList = [] } = item;
      return {
        title: description,
        key: id,
        children: privilegeList ? loopData(privilegeList) : [],
      };
    });
    return newData;
  };
  return loopData(source);
}
