import { useMemo } from 'react';
import { useModel } from '@umijs/max';

export default function useCompanySelect(resourceKey: string) {
  const { initialState } = useModel('@@initialState');
  const { privileges = [] } = initialState || {};

  const showCompanySelect = useMemo(
    () => privileges.some((item) => item.resourceKey === resourceKey),
    [privileges, resourceKey],
  );

  return {
    showCompanySelect,
  };
}
