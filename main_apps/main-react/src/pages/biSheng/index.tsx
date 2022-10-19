// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';
import Loading from '@/components/Loading';
import useLoading from '@/hooks/useLoading';

function BiSheng() {
  const { loading } = useLoading(ROUTE_PATH.BI_SHENG);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={loading} />
      <micro-app
        name={ROUTE_PATH.BI_SHENG}
        baseRoute={`/${ROUTE_PATH.BI_SHENG}`}
        url={`${config.biSheng}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default BiSheng;
