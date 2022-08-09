class ClientKey {
  /** 客户端id */
  clientKey = '';

  /** 客户端名称 */
  clientName = '';

  /** id */
  id = undefined;
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

class DataRuleDTO {
  /** businessValueList */
  businessValueList = [];

  /** clientKey */
  clientKey = '';

  /** createdAt */
  createdAt = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = undefined;

  /** moduleId */
  moduleId = undefined;

  /** moduleName */
  moduleName = '';

  /** originRuleInterface */
  originRuleInterface = '';

  /** ruleDataList */
  ruleDataList = [];

  /** ruleKeyDescription */
  ruleKeyDescription = '';

  /** ruleKeyId */
  ruleKeyId = undefined;

  /** ruleName */
  ruleName = '';

  /** updatedAt */
  updatedAt = '';
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

class ResourceObjects {
  /** api url */
  apiUrl = '';

  /** 客户端标志 */
  clientKey = '';

  /** 备注 */
  comment = '';

  /** 创建时间 */
  createdAt = '';

  /** 描述 */
  description = '';

  /** 图标 */
  icon = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = undefined;

  /** 是否默认可见 */
  isVisible = undefined;

  /** 资源顺位 */
  orderValue = undefined;

  /** 父级菜单id */
  parentId = undefined;

  /** 资源码 */
  permissionCode = '';

  /** 资源拓展字段 */
  resourceBusinessValue = '';

  /** 资源标志 */
  resourceKey = '';

  /** 类型 */
  type = undefined;

  /** 更新时间 */
  updatedAt = '';
}

class RightsManagementRoleDtoList {
  /** 拓展字段值 */
  businessValue = '';

  /** 客户端标志 */
  clientKey = '';

  /** 备注 */
  comment = '';

  /** 创建时间 */
  createdAt = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = false;

  /** 操作范围（0：可删可编辑 1：不可删可编辑 2：可删不可编辑 3：不可删不可编辑） */
  operationRange = undefined;

  /** 拥有资源 */
  resourceList = [];

  /** 角色名称 */
  role = '';

  /** 角色状态 */
  status = undefined;

  /** 更新时间 */
  updatedAt = '';
}

class ScreeningRoleList {
  /** offset */
  offset = undefined;

  /** 企业code */
  orgCode = '';

  /** 页码 */
  page = undefined;

  /** 页容量 */
  pageSize = undefined;

  /** 角色名称 */
  role = '';

  /** 权限类型 */
  type = undefined;
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

  /** 管理员角色id */
  directorRoleId = undefined;

  /** 企业代码（可为空） */
  enterpriseCode = '';

  /** 企业名称（可为空） */
  enterpriseName = '';

  /** id */
  id = '';

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

  /** 管理员角色id */
  directorRoleId = undefined;

  /** 管理员账号 */
  directorUsername = '';

  /** 企业代码（可为空） */
  enterpriseCode = '';

  /** 企业名称（可为空） */
  enterpriseName = '';

  /** id */
  id = '';

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
  ClientKey,
  CookieItemVO,
  DataRuleDTO,
  LoginResultVO,
  Page,
  ResourceObjects,
  RightsManagementRoleDtoList,
  ScreeningRoleList,
  TenantInformation,
  TheTenantDetailsDto,
  TheTenantListPageFilter,
  TheUserInformation,
  UserListPageFilter,
  UserLoginDTO,
};
