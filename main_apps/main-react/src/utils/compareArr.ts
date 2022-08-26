import { isNil } from 'lodash-es';
import { ReactText } from 'react';

export default (beforeArr: ReactText[], afterArr: ReactText[]) => {
  const resObj: Record<string, ReactText[]> = {
      add: [],
      del: [],
    },
    originObj = {};
  // 把第一个数组去重放入 originObj
  for (let i = 0; i < beforeArr.length; i++) {
    originObj[beforeArr[i]] = beforeArr[i];
  }
  // 遍历第二个数组，查看其元素是否在 originObj 中
  for (let j = 0; j < afterArr.length; j++) {
    if (isNil(originObj[afterArr[j]])) {
      resObj.add.push(afterArr[j]);
    } else {
      delete originObj[afterArr[j]];
    }
  }
  for (let k in originObj) {
    resObj.del.push(originObj[k]);
  }
  return resObj;
};
