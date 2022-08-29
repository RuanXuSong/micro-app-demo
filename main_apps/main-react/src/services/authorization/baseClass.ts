class BindUserDTO {
  /** 客户端标识 */
  clientKey = '';

  /** 角色id列表 */
  roleIds = [];

  /** 用户id */
  userId = undefined;
}

class BusinessQueryDTO {
  /** 拓展字段列表 */
  businessValueList = [];

  /** 客户端标识 */
  clientKey = '';

  /** 分页参数 */
  page = undefined;

  /** 分页参数 */
  pageSize = undefined;

  /** 角色名称 */
  roleName = '';
}

class ClientConfig {
  /** clientKey */
  clientKey = '';

  /** clientName */
  clientName = '';

  /** createdAt */
  createdAt = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = false;

  /** 描述 */
  note = '';

  /** secret */
  secret = '';

  /** updatedAt */
  updatedAt = '';
}

class DataModule {
  /** clientKey */
  clientKey = '';

  /** createdAt */
  createdAt = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = undefined;

  /** moduleName */
  moduleName = '';

  /** type */
  type = '';

  /** updatedAt */
  updatedAt = '';
}

class DataRole {
  /** businessValue */
  businessValue = '';

  /** clientKey */
  clientKey = '';

  /** comment */
  comment = '';

  /** createdAt */
  createdAt = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = false;

  /** role */
  role = '';

  /** updatedAt */
  updatedAt = '';
}

class DataRoleInputDTO {
  /** businessValue */
  businessValue = '';

  /** clientKey */
  clientKey = '';

  /** comment */
  comment = '';

  /** createdAt */
  createdAt = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = false;

  /** role */
  role = '';

  /** ruleIdList */
  ruleIdList = [];

  /** updatedAt */
  updatedAt = '';
}

class DataRoleVO {
  /** businessValue */
  businessValue = '';

  /** clientKey */
  clientKey = '';

  /** comment */
  comment = '';

  /** createdAt */
  createdAt = '';

  /** dataRuleDTOList */
  dataRuleDTOList = [];

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = false;

  /** role */
  role = '';

  /** updatedAt */
  updatedAt = '';
}

class DataRuleDTO {
  /** businessValue */
  businessValue = '';

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

  /** ruleKeyDescription */
  ruleKeyDescription = '';

  /** ruleKeyId */
  ruleKeyId = undefined;

  /** ruleName */
  ruleName = '';

  /** updatedAt */
  updatedAt = '';
}

class DataRuleDefinition {
  /** businessValue */
  businessValue = '';

  /** clientKey */
  clientKey = '';

  /** createdAt */
  createdAt = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = false;

  /** moduleId */
  moduleId = undefined;

  /** originRuleInterface */
  originRuleInterface = '';

  /** parentBusinessId */
  parentBusinessId = '';

  /** parentRuleKeyId */
  parentRuleKeyId = undefined;

  /** ruleDataType */
  ruleDataType = '';

  /** ruleKey */
  ruleKey = '';

  /** ruleKeyDescription */
  ruleKeyDescription = '';

  /** updatedAt */
  updatedAt = '';
}

class DataScopeDTO {
  /** businessValue */
  businessValue = '';

  /** clientKey */
  clientKey = '';

  /** dataModuleId */
  dataModuleId = undefined;

  /** ruleKeyList */
  ruleKeyList = [];

  /** userId */
  userId = undefined;
}

class DataScopeResultDTO {
  /** businessValueList */
  businessValueList = [];

  /** dataType */
  dataType = '';

  /** ruleKey */
  ruleKey = '';
}

class OrgTreeDTO {
  /** 子部门 */
  children = [];

  /** id */
  id = undefined;

  /** 是否可选 */
  option = undefined;

  /**  顺序 */
  orderValue = undefined;

  /** 组织机构名称 */
  orgName = '';

  /**  父id */
  parentId = undefined;

  /** 人员列表 */
  personListDTOList = [];
}

class PagingEntity {
  /** list */
  list = [];

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** total */
  total = undefined;
}

class PersonListDTO {
  /** 头像图片id */
  avatarId = undefined;

  /** 头像Url */
  avatarUrl = '';

  /** 常用联系人关联id */
  contactId = undefined;

  /** 性别，枚举值 female、male */
  gender = '';

  /** 主键id */
  id = undefined;

  /** 是否是主要任职 */
  isPrimary = false;

  /** 姓名 */
  name = '';

  /** 顺序 */
  orderValue = undefined;

  /** 组织id */
  orgId = undefined;

  /** 组织机构名称 */
  orgName = '';

  /** 职务 */
  position = '';

  /** status */
  status = undefined;

  /** statusName */
  statusName = '';

  /** 手机号 */
  telephone = '';

  /** 用户id */
  userId = undefined;
}

class QueryRoleDTO {
  /** 拓展业务字段，非必填 */
  businessValue = '';

  /** clientKey，必填 */
  clientKey = '';

  /** 限制规则id list */
  dataRuleIds = [];

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 角色名称 */
  roleName = '';

  /** userId */
  userId = undefined;
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

class ResourcePageObject {
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

  /** ResourceObjects列表 */
  resourceVOList = [];

  /** 角色名称 */
  role = '';

  /** 角色状态 */
  status = undefined;

  /** 更新时间 */
  updatedAt = '';

  /** 用户id列表 */
  userIdList = [];
}

class ResourceRole {
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

  /** 角色名称 */
  role = '';

  /** 角色状态 */
  status = undefined;

  /** 更新时间 */
  updatedAt = '';
}

class ResourceTreeObject {
  /** api url */
  apiUrl = '';

  /** 子节点 */
  children = [];

  /** 备注 */
  comment = '';

  /** 描述 */
  description = '';

  /** 图标 */
  icon = '';

  /** id */
  id = undefined;

  /** 是否默认可见 */
  isVisible = undefined;

  /** 资源顺位 */
  orderValue = undefined;

  /** 父级id */
  parentId = undefined;

  /** 页面子元素 */
  privilegeList = [];

  /** 拓展字段 */
  resourceBusinessValue = '';

  /** 资源标志 */
  resourceKey = '';

  /** 类型 */
  type = undefined;
}

class ResourcesForDetails {
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

  /** 父级菜单名称 */
  parentName = '';

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

class RoleBindUserDTO {
  /** roleId */
  roleId = undefined;

  /** userIdList */
  userIdList = [];
}

class RoleDTO {
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

  /** 资源id列表 */
  resourceIds = [];

  /** 角色名称 */
  role = '';

  /** 角色状态 */
  status = undefined;

  /** 更新时间 */
  updatedAt = '';

  /** 用户id列表 */
  userIds = [];
}

class UserQueryDTO {
  /** 客户端标识 */
  clientKey = '';

  /** 用户id列表 */
  userIds = [];
}

class UserReduceRoleDTO {
  /** 角色id列表 */
  roleIds = [];

  /** 用户id */
  userId = undefined;
}

export const authorization = {
  BindUserDTO,
  BusinessQueryDTO,
  ClientConfig,
  DataModule,
  DataRole,
  DataRoleInputDTO,
  DataRoleVO,
  DataRuleDTO,
  DataRuleDefinition,
  DataScopeDTO,
  DataScopeResultDTO,
  OrgTreeDTO,
  PagingEntity,
  PersonListDTO,
  QueryRoleDTO,
  ResourceObjects,
  ResourcePageObject,
  ResourceRole,
  ResourceTreeObject,
  ResourcesForDetails,
  RoleBindUserDTO,
  RoleDTO,
  UserQueryDTO,
  UserReduceRoleDTO,
};
