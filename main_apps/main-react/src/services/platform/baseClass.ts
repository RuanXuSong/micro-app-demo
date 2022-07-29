class CommonResponse {
  /** code */
  code = undefined;

  /** msg */
  msg = '';

  /** success */
  success = false;
}

class CookieItemVO {
  /** domain */
  domain = '';

  /** expireAt */
  expireAt = '';

  /** expireIn */
  expireIn = undefined;

  /** httpOnly */
  httpOnly = false;

  /** name */
  name = '';

  /** refreshToken */
  refreshToken = '';

  /** value */
  value = '';
}

class LoginResultVO {
  /** cookie列表 */
  cookieItemList = [];

  /** 是否302跳转 */
  redirect = false;

  /** 跳转url */
  redirectUrl = '';
}

class Page {
  /** list */
  list = [];

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** total */
  total = undefined;

  /** totalPage */
  totalPage = undefined;
}

class TenantInformation {
  /** createBy */
  createBy = '';

  /** createTime */
  createTime = '';

  /** 描述 */
  description = '';

  /** 负责人 */
  director = '';

  /** 企业代码（可为空） */
  enterpriseCode = '';

  /** 企业名称（可为空） */
  enterpriseName = '';

  /** id */
  id = '';

  /** 0未删除1已删除 */
  isDeleted = undefined;

  /** 租户logo */
  logo = '';

  /** 租户编码 */
  orgCode = '';

  /** 租户名称 */
  orgName = '';

  /** 负责人手机号（默认绑定租户管理员） */
  phone = '';

  /** 帐号状态 0 禁用/1 启用 */
  status = undefined;

  /** updateBy */
  updateBy = '';

  /** updateTime */
  updateTime = '';

  /** 有效期 */
  validBefore = '';
}

class TheTenantDetailsDto {
  /** createBy */
  createBy = '';

  /** createTime */
  createTime = '';

  /** 描述 */
  description = '';

  /** 负责人 */
  director = '';

  /** 管理员账号 */
  directorUsername = '';

  /** 企业代码（可为空） */
  enterpriseCode = '';

  /** 企业名称（可为空） */
  enterpriseName = '';

  /** id */
  id = '';

  /** 0未删除1已删除 */
  isDeleted = undefined;

  /** 租户logo */
  logo = '';

  /** 租户编码 */
  orgCode = '';

  /** 租户名称 */
  orgName = '';

  /** 负责人手机号（默认绑定租户管理员） */
  phone = '';

  /** 帐号状态 0 禁用/1 启用 */
  status = undefined;

  /** updateBy */
  updateBy = '';

  /** updateTime */
  updateTime = '';

  /** 当前用户数 */
  userNum = undefined;

  /** 有效期 */
  validBefore = '';
}

class TheTenantListPageFilter {
  /** 负责人 */
  director = '';

  /** offset */
  offset = undefined;

  /** 租户编码 */
  orgCode = '';

  /** 租户名称 */
  orgName = '';

  /** 页码 */
  page = undefined;

  /** 页容量 */
  pageSize = undefined;

  /** 负责人手机号（默认绑定租户管理员） */
  phone = '';

  /** 帐号状态 0 禁用/1 启用 */
  status = undefined;

  /** 有效期 */
  validBefore = '';
}

class TheUserInformation {
  /** 头像 */
  avatar = '';

  /** createBy */
  createBy = '';

  /** createTime */
  createTime = '';

  /** 邮箱 */
  email = '';

  /** id */
  id = '';

  /** 0未删除1已删除 */
  isDeleted = undefined;

  /** 昵称 */
  name = '';

  /** 所属租户编码 */
  orgId = '';

  /** 手机号 */
  phone = '';

  /** 性别 */
  sex = undefined;

  /** 帐号状态 0 禁用/1 启用 */
  status = undefined;

  /** updateBy */
  updateBy = '';

  /** updateTime */
  updateTime = '';

  /** userId */
  userId = undefined;

  /** 登录账号 */
  userName = '';
}

class UserListPageFilter {
  /** 昵称 */
  name = '';

  /** offset */
  offset = undefined;

  /** 租户id */
  orgId = '';

  /** 页码 */
  page = undefined;

  /** 页容量 */
  pageSize = undefined;

  /** 手机号 */
  phone = '';

  /** 帐号状态 0 禁用/1 启用 */
  status = undefined;

  /** 登录账号 */
  userName = '';
}

class UserLoginDTO {
  /** 登录码 */
  loginCode = '';

  /** 登录账号 */
  loginName = '';

  /** 登录密码 */
  loginPassword = '';

  /** 登录类型，2密码登录 */
  loginType = undefined;

  /** 是否302跳转 */
  redirect = false;

  /** 跳转url */
  redirectUrl = '';
}

export const platform = {
  CommonResponse,
  CookieItemVO,
  LoginResultVO,
  Page,
  TenantInformation,
  TheTenantDetailsDto,
  TheTenantListPageFilter,
  TheUserInformation,
  UserListPageFilter,
  UserLoginDTO,
};
