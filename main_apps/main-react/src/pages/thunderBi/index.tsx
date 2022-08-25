import React, { useState } from 'react';
import Loading from '@/components/Loading';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function ThunderBi() {
  const [showLoading, setLoading] = useState(true);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.THUNDER_BI}
        baseRoute={`/${ROUTE_PATH.THUNDER_BI}`}
        url={`${config.thunderBi}`}
        onMounted={() => setLoading(false)}
        onAftershow={() => setLoading(false)}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default ThunderBi;
