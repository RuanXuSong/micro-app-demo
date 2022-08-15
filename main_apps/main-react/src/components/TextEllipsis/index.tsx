/*
 * @文件描述: 字符串超出长度处理-目前主要用于table中
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-08-15 16:54:23
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-15 16:54:28
 */

import React from 'react';
import { Tooltip } from 'antd';
import string from '@/utils/string';

export default ({ text = '', maxLength = 50 }: { text?: string; maxLength?: number }) => {
  return text?.length > maxLength ? (
    <Tooltip title={text}>
      <span>{string.textEllipsis(text, maxLength)}</span>
    </Tooltip>
  ) : (
    <span>{text}</span>
  );
};
