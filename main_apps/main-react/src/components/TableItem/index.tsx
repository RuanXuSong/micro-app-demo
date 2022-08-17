import React, { Key } from 'react';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { TableRowSelection } from 'antd/es/table/interface';

interface TableItemProps extends Omit<ProTableProps<any, any>, 'onChange'> {
  value?: Key[];
  onChange?: (value: Key[]) => void;
}

export default ({ value = [], onChange, ...props }: TableItemProps) => {
  const rowSelection: TableRowSelection<defs.platform.ResourceTreeObject> = {
    selectedRowKeys: value,
    onChange: (selectedRowKeys) => {
      onChange?.(selectedRowKeys);
    },
  };

  return <ProTable rowSelection={{ ...rowSelection, checkStrictly: true }} {...props} />;
};
