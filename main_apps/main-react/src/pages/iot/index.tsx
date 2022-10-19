// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';
import Loading from '@/components/Loading';
import { useState } from 'react';

function IOT() {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.IOT}
        baseRoute={`/${ROUTE_PATH.IOT}`}
        url={`${config.iot}`}
        onMounted={() => setShowLoading(false)}
        onAftershow={() => setShowLoading(false)}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default IOT;
