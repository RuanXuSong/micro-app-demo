type ValueType = object | number | string;

const payTypeOne = 1; // 订单付款
const payStatusOne = 1; // 交易创建，等待买家付款
const payStatusFour = 4; // 未付款交易超时关闭，或支付完成后全额退款

export default {
  /**
   * 为小于10的数字在前面补零。如9补零后为09
   * @param val
   */
  fillZero(val: number | string) {
    if (typeof val === 'number' && val >= 10) {
      return val;
    }
    return `0${val}`;
  },

  /**
   * 用于字符长度超过指定个数自动截取并添加...
   */
  textEllipsis(text: string, length: number) {
    if (text.length > length && length > 0) {
      return `${text.substring(0, length)}...`;
    }
    return text;
  },

  /**
   * 获取指定分隔符点后面的最后字符串
   * @param (sourceStr splitStr) 源字符串 裁剪字符节点
   * @returns {string} 最后一个裁剪字符后面的字符串
   */
  getLastSubstring(sourceStr = '', splitStr = '') {
    return sourceStr.substring(sourceStr.lastIndexOf(splitStr) + splitStr.length, sourceStr.length);
  },

  /**
   * 值格式化为string
   * @param value
   */
  valueToString(value: ValueType | ValueType[]) {
    if (typeof value === 'string') {
      return value;
    }
    return JSON.stringify(value);
  },

  /**
   * @功能描述: 复制文本
   * @参数: text 复制对象的内容
   * @返回值:
   */
  copyText(text: string) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  },
  /**
   * 将在线图片地址转成base64
   * @param url
   * @param width
   * @param height
   */
  imgUrlToBase64(url: string, width: number, height: number) {
    let canvas: HTMLCanvasElement | null = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        canvas!.width = width;
        canvas!.height = height;
        ctx!.drawImage(img, 0, 0, width, height);

        const dataURL = canvas!.toDataURL('image/');
        canvas = null;
        resolve(dataURL);
      };
      img.onerror = (error) => {
        reject(error);
      };
      img.src = url;
    });
  },
};

/**
 * 分转换成元
 * @param price
 */
export const centToYuan = (price?: number, fixedNum = 2) =>
  price || price === 0 ? (price / 100).toFixed(fixedNum) : '';

/**
 * 元转换成分
 * @param price
 */
export const yuanToCent = (price: number) => price * 100;

/**
 * @功能描述: 转换为私密格式(默认为前五后五明文)
 * @参数: @param phone
 * @返回值: 私密格式的数字
 */
export const transformSecretCode = (code?: string, sliceNum = 5) => {
  return code ? `${code.slice(0, sliceNum)}****${code.slice(-sliceNum)}` : '';
};

// 姓名私密化，只保留姓氏
export const transformSecretName = (name?: string) => {
  const reg = /(?<=.)./g;
  return name?.replace(reg, '*');
};

/**
 * 获取电话或传真的显示字符串
 * @param val
 */
export const getPhoneGroupText = (val?: string) => {
  const arr = val?.split('-') ?? [];
  if (arr.filter((str) => !!str).length === 2) {
    return val;
  }
  return arr.join('');
};

/**
 * 判断是否需要手动查询
 * @param
 * PayType===1 订单付款
 * PayStatus===1 交易创建，等待买家付款  PayStatus===4 未付款交易超时关闭，或支付完成后全额退款
 */
export const isManualQuery = (payType: number, payStatus: number) => {
  if (payType === payTypeOne && (payStatus === payStatusOne || payStatus === payStatusFour)) {
    return true;
  }
  return false;
};
