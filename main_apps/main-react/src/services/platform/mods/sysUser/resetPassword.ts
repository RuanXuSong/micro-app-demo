/**
 * @description 重置密码并发送新密码至负责人手机号
 */

import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = undefined;

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/api/user/resetPassword', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || undefined;
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}