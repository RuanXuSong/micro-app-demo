/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useState } from 'react';
import Loading from '@/components/Loading';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

function IOT() {
  const [showLoading, setLoading] = useState(true);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.IOT}
        baseRoute={`/${ROUTE_PATH.IOT}`}
        url={`${config.iot}`}
        onMounted={() => setLoading(false)}
        onAftershow={() => {
          setLoading(false);
        }}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default IOT;
