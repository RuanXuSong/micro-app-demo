/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useState, useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { connect } from 'umi';
import Loading from '@/components/Loading';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';

const mockUser = {
  userName: 'admin',
  avatar: AVATAR_URL,
};

function DataFront(props) {
  const [showLoading, setLoading] = useState(true);

  function handleData(data) {
    const { dispatch } = props;
    if (type === 'setCurrentUser') {
      // TODO: 对接数融权限
      dispatch({
        type: 'user/setCurrentUser',
        payload: mockUser,
      });
    }
  }

  useEffect(() => {
    microApp.addDataListener(ROUTE_PATH.DATA_FRONT, handleData);
    return function clearup() {
      microApp.removeDataListener(ROUTE_PATH.DATA_FRONT, handleData);
      microApp.clearDataListener(ROUTE_PATH.DATA_FRONT);
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name={ROUTE_PATH.DATA_FRONT}
        baseRoute={`/${ROUTE_PATH.DATA_FRONT}`}
        url={`${config.dataFront}`}
        onMounted={() => setLoading(false)}
        onAftershow={() => {
          props.dispatch({
            type: 'user/setCurrentUser',
            payload: mockUser,
          });
          setLoading(false);
        }}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(DataFront);
