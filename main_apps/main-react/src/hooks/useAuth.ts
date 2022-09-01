import { message } from 'antd';
import { isEmpty } from 'lodash-es';
import { useEffect } from 'react';

import { history, useModel } from 'umi';

export default function useAuth() {
  const { getAuthority, ready } = useModel('authority');
  const { initialState } = useModel('@@initialState');
  const { menus = [] } = initialState || {};

  useEffect(() => {
    // 如果没有云平台权限，选择其他的平台
    if (isEmpty(menus)) {
      if (ready) {
        const routes = getAuthority('children');
        if (!isEmpty(routes)) {
          history.replace(routes[0]);
        } else {
          message.warn('您没有访问权限，请联系管理员！');
          history.replace('/404');
        }
      }
    }
  }, [ready]);
}
