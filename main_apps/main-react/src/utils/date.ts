import dayjs from 'dayjs';

/**
 * 格式化日期
 * @param date
 * @param format
 */
export const formatDate = (date: string | Date | number, format = 'YYYY-MM-DD') => {
  return dayjs(date).format(format);
};

/**
 * 格式化搜索日期
 * @param date
 * @param format
 */
export const formatSearchDate = (
  date: string | Date | number | null = null,
  format = 'YYYY-MM-DD HH:mm:ss',
) => {
  if (!date) {
    return null;
  }
  return dayjs(date).format(format);
};

/**
 * 当前月是否是大月
 * @param {*} month
 */
export const isBigMonth = (month: number) => {
  return [1, 3, 5, 7, 8, 10, 12].includes(month);
};

export default {
  formatDate,
  isBigMonth,
};
