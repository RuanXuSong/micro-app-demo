/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-05-20 09:57:13
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-07-28 17:53:31
 */
import { useMemo, useState } from 'react';
import { useModel } from 'umi';
import { LOGIN_CONFIG } from '@/constant';

export default function useAuth() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const { refresh } = useModel('@@initialState');

  const isLogin = useMemo(() => !!accessToken, [accessToken]);

  const clearToken = () => {
    setAccessToken('');
    localStorage.removeItem('accessToken');
    /** 退出登录应重置初始化数据，否则可能引起一些问题 */
    // setInitialState({ menus: [], privileges: [], userInfo: {} });
    refresh();
  };

  return {
    isLogin: LOGIN_CONFIG.isSSO || isLogin,
    accessToken,
    saveToken: (token: string) => {
      setAccessToken(token);
      localStorage.setItem('accessToken', token);
    },
    clearToken,
  };
}
