import { PrivilegeResource } from '@/interfaces/common';

/** 从角色 resourceMap 中获取所有资源 id 列表 */
export const getResourceIds = (resourceMap?: Record<string, PrivilegeResource[]>) => {
  const resourceIds: number[] = [];
  if (!resourceMap) return [];
  Object.keys(resourceMap).forEach((key: string) => {
    resourceIds.push(...resourceMap[key].map((item) => item.id));
  });
  return resourceIds;
};
