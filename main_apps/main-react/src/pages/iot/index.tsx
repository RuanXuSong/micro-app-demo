/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function IOT() {
  return (
    <div style={{ height: '100%' }}>
      <micro-app
        name={ROUTE_PATH.IOT}
        baseRoute={`/${ROUTE_PATH.IOT}`}
        url={`${config.iot}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default IOT;
