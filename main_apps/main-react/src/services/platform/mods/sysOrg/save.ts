/**
 * @description 新建租户
 */

import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = '';

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/api/org/save', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || '';
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
