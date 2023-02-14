// @ts-ignore
import config from '../../config';

function React16() {
  return (
    <div style={{ height: '100%' }}>
      <div>123</div>
      <micro-app name="react16" baseRoute="/react16" url={`${config['react16']}`} keep-alive />
    </div>
  );
}

export default React16;
