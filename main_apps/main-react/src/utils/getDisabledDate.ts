import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import moment from 'moment';

export const disabledDate: RangePickerProps<any>['disabledDate'] = (current) => {
  // 不可筛选今天和以前的日期
  return current && current < moment().endOf('day');
};
