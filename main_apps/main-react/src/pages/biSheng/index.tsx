import React, { useState } from 'react';
import Loading from '@/components/Loading';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function BiSheng() {
  const [showLoading, setLoading] = useState(true);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.BI_SHENG}
        baseRoute={`/${ROUTE_PATH.BI_SHENG}`}
        url={`${config.biSheng}`}
        keep-alive
        onMounted={() => setLoading(false)}
        onAftershow={() => setLoading(false)}
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default BiSheng;
