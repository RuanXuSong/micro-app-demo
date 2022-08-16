/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useState, useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { connect } from 'umi';
import { Spin } from 'antd';
import Loading from '@/components/Loading';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

let userInfo;

function BiSheng(props) {
  const [showLoading, setLoading] = useState(true);

  function handleData(data) {
    const { payload, type } = data || {};
    const { dispatch } = props;
    if (type === 'setCurrentUser') {
      const { realname, avatar } = payload || {};
      const newPayload = {
        ...payload,
        userName: realname,
        avatar,
      };
      dispatch({
        type: 'user/setCurrentUser',
        payload: newPayload,
      });
      userInfo = newPayload;
    }
  }

  useEffect(() => {
    microApp.addDataListener('biSheng', handleData);
    return function clearup() {
      microApp.removeDataListener('biSheng', handleData);
      microApp.clearDataListener('biSheng');
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.BI_SHENG}
        baseRoute={`/${ROUTE_PATH.BI_SHENG}`}
        url={config.biSheng}
        keep-alive
        onMounted={() => setLoading(false)}
        onAftershow={() => {
          userInfo &&
            props.dispatch({
              type: 'user/setCurrentUser',
              payload: userInfo,
            });
          setLoading(false);
        }}
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(BiSheng);
