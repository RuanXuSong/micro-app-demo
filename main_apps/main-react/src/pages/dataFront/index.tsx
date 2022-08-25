import React, { useState } from 'react';
import Loading from '@/components/Loading';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function DataFront() {
  const [showLoading, setLoading] = useState(true);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.DATA_FRONT}
        baseRoute={`/${ROUTE_PATH.DATA_FRONT}`}
        url={`${config.dataFront}`}
        onMounted={() => setLoading(false)}
        onAftershow={() => setLoading(false)}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default DataFront;
