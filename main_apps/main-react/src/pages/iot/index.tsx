// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';
import Loading from '@/components/Loading';
import useLoading from '@/hooks/useLoading';

function IOT() {
  const { loading } = useLoading(ROUTE_PATH.IOT);
  return (
    <div style={{ height: '100%' }}>
      <Loading loading={loading} />
      <micro-app
        name={ROUTE_PATH.IOT}
        baseRoute={`/${ROUTE_PATH.IOT}`}
        url={`${config['smart-iot']}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default IOT;
