/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function BiSheng() {
  return (
    <div style={{ height: '100%' }}>
      <micro-app
        name={ROUTE_PATH.BI_SHENG}
        baseRoute={`/${ROUTE_PATH.BI_SHENG}`}
        url={`${config.biSheng}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default BiSheng;
