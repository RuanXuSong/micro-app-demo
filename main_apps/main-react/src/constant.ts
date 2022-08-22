/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-28 18:10:42
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-22 18:29:16
 */
/**
 * 初始化分页数据
 */
export const initialPagination = {
  page: 1,
  pageSize: 10,
};

export const THROTTLE_INTERVAL = 500;

/** 获取 验证码方式枚举 */
export enum SmsTypeEnum {
  注册 = 0,
  修改密码 = 1,
  登录 = 2,
}

// 后端返回的code
export enum LoginFailure {
  TOKEN缺失 = 60001,
  TOKEN无效 = 60002,
  TOKEN过期 = 60003,
  TOKEN有效但未注册 = 60004,
}

/** 资源类型枚举 */
export enum RESOURCE_TYPE_MAP {
  菜单 = 0,
  按钮 = 1,
}

/**
 * 登录配置
 */
export const LOGIN_CONFIG = Object.freeze({
  /** 应用ID */
  clientId: 'manage-center',
  /** 是否是单点登录 */
  isSSO: true,
  /** 密钥 */
  secret: '',
});

/** 角色状态枚举 */
export enum ROLE_STATUS_MAP {
  禁用 = 0,
  正常 = 1,
}

/** 性别枚举 */
export enum SEX_ENUM {
  女 = 0,
  男 = 1,
}

/** 最大标题长度 */
export const MAX_TITLE_LENGTH = 30;

/** 最大地址/邮箱长度 */
export const MAX_ADDRESS_LENGTH = 100;

/** 最大描述长度 */
export const MAX_DESCRIPTION_LENGTH = 200;

/** 最大长文本长度 */
export const MAX_TEXTAREA_LENGTH = 500;

/** tab 类型 */
export enum TabCloseType {
  line = 'line',
  card = 'card',
  EditableCard = 'editable-card',
}

/** 默认头像地址 */
export const AVATAR_URL =
  'https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1658819849135012474.png';

export enum ROUTE_PATH {
  THUNDER_BI = 'smart-bi',
  SWIFT_SCREEN = 'smart-visualization',
  DATA_FRONT = 'smart-data',
  BI_SHENG = 'smart-lowcode',
  IOT = 'smart-iot',
}

export enum RESOURCE_TYPE_ENUM {
  路由级资源 = 0,
  页面级资源 = 1,
}

// 敏捷应用对应code
export const SMART_DATA_CODE = 0;
