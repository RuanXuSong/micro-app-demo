// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';
import { useEffect } from 'react';

function DataFront() {
  useEffect(() => {
    // 监听keep-alive模式下的应用状态
    window.addEventListener('appstate-change', function (e: any) {
      if (e.detail.appState === 'afterhidden') {
        console.log('已卸载');
      } else if (e.detail.appState === 'beforeshow') {
        console.log('即将重新渲染');
      } else if (e.detail.appState === 'aftershow') {
        console.log('已经重新渲染');
      }
    });
  }, []);
  return (
    <div style={{ height: '100%' }}>
      <micro-app
        name={ROUTE_PATH.DATA_FRONT}
        baseRoute={`/${ROUTE_PATH.DATA_FRONT}`}
        url={`${config['smart-data']}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default DataFront;
