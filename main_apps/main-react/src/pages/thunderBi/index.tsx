import React from 'react';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function ThunderBi() {
  return (
    <div style={{ height: '100%' }}>
      <micro-app
        name={ROUTE_PATH.THUNDER_BI}
        baseRoute={`/${ROUTE_PATH.THUNDER_BI}`}
        url={`${config.thunderBi}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default ThunderBi;
