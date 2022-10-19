// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';
import Loading from '@/components/Loading';
import useLoading from '@/hooks/useLoading';

function ThunderBi() {
  const { loading } = useLoading(ROUTE_PATH.THUNDER_BI);
  return (
    <div style={{ height: '100%' }}>
      <Loading loading={loading} />
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
