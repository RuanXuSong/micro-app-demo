/**
 * @description 发送验证码
 */

import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = undefined;

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/api/authorization/sendSms', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
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