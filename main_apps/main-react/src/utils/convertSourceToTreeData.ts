import { PrivilegeResource } from '@/interfaces/common';
import { DataNode } from 'antd/lib/tree';
import arrayUtils from '@/utils/array';

/**
 * 将 source 转换为 Tree 组件可用的数据
 * @param source
 */
function convertSourceToTreeData(source?: any[]) {
  if (!source) return [];
  const loopData = (data: PrivilegeResource[]): DataNode[] => {
    const modifiedData: PrivilegeResource[] = arrayUtils.deepOrder({
      data: data,
      childKey: 'children',
      orderKey: 'orderValue',
      type: 'asc',
    });
    const newData = modifiedData.map((item) => {
      const { description, id, privilegeList = [], children = [] } = item;
      return {
        title: description,
        key: id,
        value: id,
        children: loopData((privilegeList || []).concat(children || [])),
      };
    });
    return newData;
  };
  return loopData(source);
}

export default convertSourceToTreeData;
