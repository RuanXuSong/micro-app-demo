/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useState, useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { connect } from 'umi';
import { Spin } from 'antd';
import config from '../../config';

function BiSheng(props) {
  const [showLoading, hideLoading] = useState(true);

  function handleData(data) {
    const { payload, type } = data || {};
    const { dispatch } = props;
    if (type === 'setCurrentUser') {
      const { realname, avatar } = payload;
      dispatch({
        type: 'user/setCurrentUser',
        payload: {
          ...payload,
          name: realname,
          avatar,
        },
      });
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
      {showLoading && <Spin style={{ position: 'fixed', left: '50%', top: '50%' }} />}
      <micro-app
        name="biSheng"
        baseRoute="/biSheng"
        url={config.biSheng}
        keep-alive
        onMounted={() => hideLoading(false)}
      />
    </div>
  );
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(BiSheng);
