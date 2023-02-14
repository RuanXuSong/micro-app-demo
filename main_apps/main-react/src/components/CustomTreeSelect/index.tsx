import { Key, useEffect, useState } from 'react';
import { TreeSelect } from 'antd';
import styles from './index.module.less';
import { TreeSelectProps } from 'rc-tree-select/lib/TreeSelect';

interface CustomTreeSelectProps extends TreeSelectProps {
  value?: Key[];
  onChange?: (value: Key[]) => void;
  onSearch?: (value: string) => void;
}

export default ({ value = [], onChange, ...props }: CustomTreeSelectProps) => {
  const [overflow, setOverflow] = useState<boolean>(false);
  /** 超出高度则溢出 */
  useEffect(() => {
    const containerHeight =
      document.getElementsByClassName('cloud-select-selector')[0].clientHeight;
    const contentHeight = document.getElementsByClassName('cloud-select-selection-overflow')[0]
      .clientHeight;

    setOverflow(contentHeight > containerHeight);
  }, [value]);

  return (
    <TreeSelect
      value={value}
      onChange={onChange}
      {...props}
      className={overflow ? styles.overflowTree : styles.tree}
    />
  );
};
