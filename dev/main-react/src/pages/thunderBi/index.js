/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useState, useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { Spin } from 'antd';
import config from '../../config';

function ThunderBi() {
  const [showLoading, hideLoading] = useState(true);

  // function handleData(data) {
  //   console.log('来自react17的数据', data);
  // }

  // useEffect(() => {
  //   microApp.addDataListener('thunderBi', handleData)
  //   return function clearup () {
  //     microApp.removeDataListener('thunderBi', handleData)
  //     microApp.clearDataListener('thunderBi')
  //   }
  // }, [])

  return (
    <div style={{ height: '100%' }}>
      {showLoading && <Spin style={{ position: 'fixed', left: '50%', top: '50%' }} />}
      <micro-app
        name="thunderBi"
        baseRoute="/micro-app/thunderBi"
        url={config.thunderBi}
        keep-alive
        // data={{ from: '来自基座的数据' }}
        onMounted={() => hideLoading(false)}
        // destroy
        // inline
      />
    </div>
  );
}

export default ThunderBi;
