import { AUTH_KEY_LIST } from '@/constant';
import { useMemo } from 'react';
import { useModel } from '@umijs/max';

export default function useTemplateAuth() {
  const { initialState } = useModel('@@initialState');
  const { privileges = [] } = initialState || {};

  const templateAuthMap = useMemo(() => {
    const map = {};
    AUTH_KEY_LIST.forEach(({ name, key }) => {
      map[name] = privileges.some((item) => item.resourceKey === key);
    });
    return map;
  }, [privileges]);

  return {
    templateAuthMap,
  };
}
