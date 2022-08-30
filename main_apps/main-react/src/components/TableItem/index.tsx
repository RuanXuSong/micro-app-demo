import React, { Key, useEffect, useRef, useState } from 'react';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { TableRowSelection } from 'antd/es/table/interface';
import compareArr from '@/utils/compareArr';
import { isEmpty } from 'lodash';
import { deepFlatten } from '@/utils/array';
import styles from './index.module.less';

interface TableItemProps extends Omit<ProTableProps<any, any>, 'onChange'> {
  value?: Key[];
  onChange?: (value: Key[]) => void;
  disabled?: boolean;
}

export default ({
  value = [],
  onChange,
  disabled,
  rowKey,
  dataSource,
  ...props
}: TableItemProps) => {
  let prevKeysArrRef = useRef<Key[]>([]);
  let prevRowsArrRef = useRef<any[]>([]);
  const [firstRendered, setFirstRendered] = useState(true);
  const rowSelection: TableRowSelection<defs.platform.ResourceTreeObject> = {
    selectedRowKeys: value,
    onChange: (selectedRowKeys, selectedRows) => {
      if (disabled) {
        return;
      }
      let modifiedSelectedRowKeys = [...selectedRowKeys];
      const { add = [], del = [] } = compareArr(prevKeysArrRef.current, selectedRowKeys);
      const addRows = selectedRows.filter((item) => add.includes(item[rowKey as string]));
      const delRows = prevRowsArrRef.current.filter((item) => del.includes(item[rowKey as string]));

      const loopAdd = (rows: any[]) => {
        for (let i = 0; i < rows.length; i++) {
          const { children } = rows[i] || {};
          modifiedSelectedRowKeys.push(rows[i][rowKey as string]);
          if (!isEmpty(children)) {
            loopAdd(children);
          }
        }
      };

      loopAdd(addRows);

      const loopDel = (rows: any[]) => {
        for (let i = 0; i < rows.length; i++) {
          const { children } = rows[i] || {};
          modifiedSelectedRowKeys = modifiedSelectedRowKeys.filter(
            (key) => key !== rows[i][rowKey as string],
          );
          if (!isEmpty(children)) {
            loopDel(children);
          }
        }
      };

      loopDel(delRows);

      const modifiedRowKeys = [...new Set(modifiedSelectedRowKeys)];

      onChange?.(modifiedRowKeys);
      prevKeysArrRef.current = [...modifiedRowKeys];
      const newDataSource = [...(dataSource || [])];
      prevRowsArrRef.current =
        deepFlatten(newDataSource).filter((item) =>
          modifiedRowKeys.includes(item[rowKey as string]),
        ) ?? [];
    },
  };

  useEffect(() => {
    if (firstRendered && !isEmpty(value)) {
      prevKeysArrRef.current = value;
      const newDataSource = [...(dataSource || [])];
      prevRowsArrRef.current =
        deepFlatten(newDataSource)?.filter((item) => value.includes(item[rowKey as string])) ?? [];
      setFirstRendered(false);
    }
  }, [value]);

  return (
    <ProTable
      className={disabled ? styles.disabled : {}}
      rowSelection={{ ...rowSelection, checkStrictly: true, selections: false }}
      rowKey={rowKey}
      dataSource={dataSource}
      {...props}
    />
  );
};
