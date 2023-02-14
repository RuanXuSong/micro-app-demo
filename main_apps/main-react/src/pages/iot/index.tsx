// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function IOT() {
  return (
    <div style={{ height: '100%' }}>
      <micro-app
        name={ROUTE_PATH.IOT}
        baseRoute={`/${ROUTE_PATH.IOT}`}
        url={`${config['smart-iot']}`}
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default IOT;
