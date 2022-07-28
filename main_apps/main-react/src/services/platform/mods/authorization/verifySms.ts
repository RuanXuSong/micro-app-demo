/**
 * @description 验证验证码
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = new defs.platform.CommonResponse();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.post(
    backEndUrl + '/api/authorization/verifySms',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.platform.CommonResponse();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
