import { formatDate } from '@/utils/date';
import styles from './index.module.less';

export default () => (
  <div className={styles.copyright}>
    <span>
      杭州雷数科技有限公司 版权所有 ©️ 2017-{formatDate(new Date(), 'YYYY')} All Rights Reserved
    </span>
    <a
      href="http://beian.miit.gov.cn"
      target="_blank"
      rel="noopener noreferrer"
      className={styles['copyright-link']}
    >
      浙ICP备17054225号-1
    </a>
  </div>
);
