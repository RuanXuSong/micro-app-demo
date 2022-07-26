import { isPhone } from './regex';

/**
 * 手机号码校验
 * @param _rule
 * @param value
 * @param callback
 */
export const phoneValidator = (_: unknown, value: string, callback: (message?: string) => void) => {
  if (value && !isPhone(value)) {
    callback('请输入有效的电话号码');
  } else {
    callback();
  }
};

/**
 * 密码校验
 * @param firstPassword
 */
export const checkPassword = (_: unknown, value: string, callback: (msg?: string) => void) => {
  if (value && !/^(?=.*[a-zA-Z\W_])(?=.*[0-9]).{8,20}$/.test(value)) {
    callback('由8-20个数字+字母或符号组成，不可纯数字');
  } else {
    callback();
  }
};

/**
 * 昵称校验
 * @param firstPassword
 */
export const checkNickName = (_: unknown, value: string, callback: (msg?: string) => void) => {
  if (value && !/^[\u4e00-\u9fa5a-zA-Z]{2,20}$/.test(value)) {
    callback('由2-20个中文或英文组成');
  } else {
    callback();
  }
};

/**
 * 第二次输入的密码和第一次的进行比较
 * @param firstPassword
 */
export const compareToFirstPassword =
  (firstPassword?: string) => (_: unknown, value: string, callback: (msg?: string) => void) => {
    if (value && value !== firstPassword) {
      callback('两次输入的密码不一致');
    } else {
      callback();
    }
  };

export default {
  phoneValidator,
  checkPassword,
  checkNickName,
};
