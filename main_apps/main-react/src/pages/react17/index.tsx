// @ts-ignore
import config from '../../config';

function React17() {
  return (
    <div style={{ height: '100%' }}>
      <micro-app name="react17" baseRoute="/react17" url={`${config['react17']}`} keep-alive />
    </div>
  );
}

export default React17;
