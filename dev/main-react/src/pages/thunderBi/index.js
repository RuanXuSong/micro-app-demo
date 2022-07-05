/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useState, useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { connect } from 'umi';
import { Spin } from 'antd';
import Loading from '@/components/Loading';
import config, { LOGOUT_PATH } from '../../config';

function ThunderBi(props) {
  const [showLoading, setLoading] = useState(true);

  function handleData(data) {
    const { payload, type } = data || {};
    const { dispatch } = props;
    if (type === 'setCurrentUser') {
      const { name, profile_image_url } = payload;
      dispatch({
        type: 'user/setCurrentUser',
        payload: {
          ...payload,
          name,
          avatar: profile_image_url,
        },
      });
    }
  }

  useEffect(() => {
    microApp.addDataListener('thunderBi', handleData);
    return function clearup() {
      microApp.removeDataListener('thunderBi', handleData);
      microApp.clearDataListener('thunderBi');
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name="thunderBi"
        baseRoute="/thunderBi"
        url={config.thunderBi}
        onMounted={() => setLoading(false)}
        onAftershow={() => setLoading(false)}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(ThunderBi);
