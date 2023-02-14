// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function DataFront() {
  return (
    <div style={{ height: '100%' }}>
      <micro-app
        name={ROUTE_PATH.DATA_FRONT}
        baseRoute={`/${ROUTE_PATH.DATA_FRONT}`}
        url={`${config['smart-data']}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default DataFront;
