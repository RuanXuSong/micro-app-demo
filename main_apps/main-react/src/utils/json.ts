import { ProTableProps } from '@ant-design/pro-table';
import { message } from 'antd';
import { StoreValue } from 'antd/es/form/interface';

/**
 * 反转object的key和value
 * @param obj
 */
export const reverseObj = (obj: { [x: string]: string | number }) => {
  const reversedObj: { [x: string]: string | number } = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    reversedObj[value] = key;
  });
  return reversedObj;
};

/**
 * 删除对象中无效属性
 * @param params
 */
export const removeEmpty = <T>(obj: object) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (
      !['', null, undefined].includes(obj[key]) &&
      /** 同时排除proTable的自带搜索参数 */
      !['_timestamp', 'current'].includes(key)
    ) {
      newObj[key] = obj[key];
    }
  });
  return newObj as T;
};

/**
 * 获取proTable默认配置
 */
export const getProTableDefaultProps = () =>
  ({
    onRequestError: (error) => {
      console.error(error.message);
      message.error(`数据加载失败,${error.message}`);
    },
  } as ProTableProps<StoreValue, StoreValue>);

export default {
  reverseObj,
  removeEmpty,
};

/**
 * 字典转options
 * @param obj
 */
export const dimToOptions = (
  data: any[] = [],
  mapping?: { labelMapping?: string; codeMapping?: string },
) => {
  const { labelMapping = 'name', codeMapping = 'code' } = mapping || {};
  return data?.map((item) => ({ label: item[labelMapping], value: item[codeMapping] }));
};
