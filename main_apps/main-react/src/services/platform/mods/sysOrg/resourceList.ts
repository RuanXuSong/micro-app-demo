/**
 * @description 企业权限树状列表
 */

import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = [];

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/api/org/resourceList', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || [];
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
