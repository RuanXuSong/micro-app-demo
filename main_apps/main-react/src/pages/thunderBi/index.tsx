// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';
import { useState } from 'react';
import Loading from '@/components/Loading';

function ThunderBi() {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.THUNDER_BI}
        baseRoute={`/${ROUTE_PATH.THUNDER_BI}`}
        onMounted={() => setShowLoading(false)}
        onAftershow={() => setShowLoading(false)}
        url={`${config.thunderBi}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default ThunderBi;
