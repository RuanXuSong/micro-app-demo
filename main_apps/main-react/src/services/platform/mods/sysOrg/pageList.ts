/**
 * @description 查看所有租户（分页）
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = new defs.platform.Page();

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/api/org/page', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.platform.Page();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
