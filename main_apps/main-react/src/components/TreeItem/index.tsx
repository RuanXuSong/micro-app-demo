import React, { Key } from 'react';
import { Tree, TreeProps } from 'antd';
import type { DataNode, EventDataNode } from 'antd/es/tree';
import { isEmpty } from 'lodash';

interface CheckInfo {
  event: 'check';
  node: EventDataNode;
  checked: boolean;
  nativeEvent: MouseEvent;
  checkedNodes: DataNode[];
  checkedNodesPositions?: {
    node: DataNode;
    pos: string;
  }[];
  halfCheckedKeys?: Key[];
}

type CheckedValueType = { checked: Key[]; halfChecked: Key[] };
interface TreeItemProps extends TreeProps {
  value?: Key[];
  onChange?: (value: Key[]) => void;
  treeData?: DataNode[];
}

export default ({ value = [], onChange, treeData = [] }: TreeItemProps) => {
  const onCheck = (checkedValue: CheckedValueType, info: CheckInfo) => {
    const { node, checked } = info || {};
    const { children = [] } = node || {};
    let checkValues = checkedValue.checked;

    // 取消上级时自动取消下级选择
    const loopCheck = (treeNodesList?: DataNode[]) => {
      if (!treeNodesList || isEmpty(treeNodesList)) return;
      const treeKeys = treeNodesList.map((item) => item.key);
      if (!checked) {
        checkValues = checkValues.filter((item) => !treeKeys.includes(item));
      }
      treeNodesList.forEach((item) => {
        if (!isEmpty(item.children)) {
          loopCheck(item.children);
        }
      });
    };

    loopCheck(children);

    onChange?.(checkValues);
  };

  return (
    <Tree
      checkable
      defaultExpandAll
      onCheck={onCheck as TreeProps['onCheck']}
      checkedKeys={value}
      treeData={treeData}
      checkStrictly
    />
  );
};
