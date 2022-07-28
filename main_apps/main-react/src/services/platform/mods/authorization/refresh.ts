/**
 * @description token过期刷新
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = new defs.platform.LoginResultVO();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/api/authorization/refresh', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.platform.LoginResultVO();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
