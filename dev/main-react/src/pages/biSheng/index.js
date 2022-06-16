/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useState, useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { Spin } from 'antd';
import config from '../../config';

function BiSheng() {
  const [showLoading, hideLoading] = useState(true);

  return (
    <div style={{ height: '100%' }}>
      {showLoading && <Spin style={{ position: 'fixed', left: '50%', top: '50%' }} />}
      <micro-app
        name="biSheng"
        baseRoute="/micro-app/biSheng"
        url={config.biSheng}
        keep-alive
        onMounted={() => hideLoading(false)}
      />
    </div>
  );
}

export default BiSheng;
