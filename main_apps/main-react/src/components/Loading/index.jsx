import { Spin } from 'antd';
import './index.less';

export default ({ loading }) => loading && <Spin size="large" className="loadingIcon" />;
