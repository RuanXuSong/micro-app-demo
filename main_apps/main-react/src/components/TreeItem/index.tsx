import React, { Key } from 'react';
import { Tree, TreeProps } from 'antd';
import type { DataNode } from 'antd/es/tree';

interface TreeItemProps extends TreeProps {
  value?: Key[];
  onChange?: (value: Key[]) => void;
  treeData?: DataNode[];
}

export default ({ value, onChange, treeData = [] }: TreeItemProps) => {
  const onCheck = (checkedKeysValue: Key[]) => {
    onChange?.(checkedKeysValue);
  };

  return (
    <Tree
      checkable
      defaultExpandAll
      onCheck={(values) => onCheck(values as Key[])}
      checkedKeys={value}
      treeData={treeData}
    />
  );
};
