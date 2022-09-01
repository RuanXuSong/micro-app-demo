import { useState } from 'react';
import { reloadAuthorized } from '@/utils/Authorized';
import { useModel } from 'umi';
import { isEmpty } from 'lodash';

export default () => {
  const [auth, setAuth] = useState<Record<string, string[]>>({});
  const { initialState } = useModel('@@initialState');
  const { authorityList } = initialState || {};
  const [ready, setReady] = useState<boolean>(false);
  const getAuthority = (key: 'cloud' | 'children' = 'cloud') => {
    if (!auth) {
      return [];
    }

    return Array.isArray(auth) ? auth : auth[key];
  };

  const setAuthority = (authority: string[], key: 'cloud' | 'children' = 'cloud') => {
    const cloudAuthority = typeof authority === 'string' ? [authority] : authority;
    const originAuthority = auth || {};
    originAuthority[key] = cloudAuthority.filter((item) => item !== '/cloud');
    setAuth(originAuthority);
    reloadAuthorized();
  };

  const checkAuth = (pathname: string, key: 'cloud' | 'children' = 'cloud') => {
    let authList = getAuthority(key);
    if (key === 'cloud' && isEmpty(authList)) {
      if (!isEmpty(authorityList)) {
        setAuthority(authorityList!);
      }
      authList = authorityList || [];
    }
    if (!ready) return true;
    if (!authList) return false;
    for (let i = 0; i < authList.length; i++) {
      if (pathname.startsWith(authList[i])) return true;
    }
    return false;
  };

  return {
    ready,
    setReady,
    getAuthority,
    setAuthority,
    checkAuth,
  };
};
