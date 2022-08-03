import { PrivilegeResource } from '@/interfaces/common';
import { DataNode } from 'antd/lib/tree';

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

export default convertSourceToTreeData;
