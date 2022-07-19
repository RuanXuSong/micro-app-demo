/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-05-18 12:00:35
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-07-13 15:46:51
 */
import { orderBy } from 'lodash-es';

export type OrderType = 'desc' | 'asc';

export interface DeepOrderProps<T> {
  data: T[];
  childKey: string;
  orderKey: string;
  type: OrderType;
}

export default {
  /**
   * 根据某个字段 递归排序
   */
  deepOrder<T>(props: DeepOrderProps<T>) {
    const { data = [], childKey, orderKey, type = 'asc' } = props;
    const loopOrder = (params: DeepOrderProps<T>) => {
      const { data = [], childKey, orderKey, type = 'asc' } = params;
      return orderBy(data, orderKey, type).map((item: T) => {
        const children: T[] = item[childKey] || [];
        if (children && children.length > 0) {
          item[childKey] = loopOrder({
            data: children,
            childKey,
            orderKey,
            type,
          });
        }
        return item;
      });
    };
    return loopOrder({ data, childKey, orderKey, type });
  },
};

/** 根据后端返回的树形结构做遍历，删除children为[]的字段 */
/** 因为如果存在children字段，antd的table会认为该节点下还有children */
export const deleteEmptyChildren = (list: defs.authorization.ResourceTreeObject[]) => {
  if (!list.length) return [];
  const res = list.map((item) => {
    if (item.children!.length === 0) {
      delete item.children;
    } else {
      deleteEmptyChildren(item.children!);
    }
    return item;
  });
  return res;
};

/**
 * 获取枚举对象左侧的keys
 * @param enumObj
 */
export const enumKeys = (enumObj: Object) => {
  const keys: (string | number)[] = [];
  const allKeys = Object.keys(enumObj).reverse();
  for (let i = 0; i < allKeys.length; i += 1) {
    // enum 遍历key有个特点 左侧定义的key依次放到最后面，如果右侧的value有number类型也会添加到Object.key里面
    // 这里判断如果出现了keys里面存在value的情况 即可终止循环
    if (keys.includes(enumObj[allKeys[i]])) {
      break;
    }
    keys.push(allKeys[i]);
  }
  return keys.reverse();
};

/**
 * 枚举对象转换成options
 * @param enumObj
 */
export const enumToOptions = (enumObj: Object) =>
  enumKeys(enumObj).map((key) => ({ label: key, value: enumObj[key] }));

/**
 * 枚举对象转换成 proTable 需要的 valueEnum
 * @param enumObj
 */
export const enumToValueEnum = (enumObj: Object) => {
  const valueEnum = {};
  enumKeys(enumObj).forEach((key) => {
    const value = enumObj[key];
    valueEnum[value] = {
      text: key,
      status: value,
    };
  });
  return valueEnum;
};

/**
 * 递归地将带children的数组展平
 */
export const deepFlatten = <T>(list: T[], key = 'children') => {
  const result: T[] = [];
  const flatten = (arry: T[]) =>
    arry.forEach((item: T) => {
      const newItem = { ...item };
      delete newItem[key];
      result.push(newItem);
      if (item[key] && Array.isArray(item[key])) {
        flatten(item[key]);
      }
    }, []);
  flatten(list);
  return result;
};

/**
 * 任意列表转换成 valueEnum
 * @param list
 * @param textKey
 * @param statusKey
 */
export const listToValueEnum = <T>({
  list,
  textKey,
  statusKey,
}: {
  list: T[];
  textKey: string;
  statusKey: string;
}) => {
  const valueEnum = {};
  list &&
    list.forEach((item) => {
      valueEnum[item[statusKey]] = {
        text: item[textKey],
        status: item[statusKey],
      };
    });
  return valueEnum;
};
