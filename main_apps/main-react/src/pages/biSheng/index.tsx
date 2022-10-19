// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';
import { useState } from 'react';
import Loading from '@/components/Loading';

function BiSheng() {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.BI_SHENG}
        baseRoute={`/${ROUTE_PATH.BI_SHENG}`}
        url={`${config.biSheng}`}
        onMounted={() => setShowLoading(false)}
        onAftershow={() => setShowLoading(false)}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default BiSheng;
