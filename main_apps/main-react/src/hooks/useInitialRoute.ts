import { useMemo } from 'react';
import { INITIAL_PATH } from '@/constant';
import { isEmpty } from 'lodash';
import { useModel } from 'umi';

export default function useInitialRoute() {
  const { initialState } = useModel('@@initialState');
  const { menus = [] } = initialState || {};
  const { getAuthority, ready } = useModel('authority');

  const getInitialRoute = () => {
    if (isEmpty(menus)) {
      const routes = getAuthority('children');
      return routes[0] ?? '/';
    }
    return INITIAL_PATH;
  };

  const initialRoute = useMemo(() => getInitialRoute(), [menus, ready]);

  return { initialRoute };
}
