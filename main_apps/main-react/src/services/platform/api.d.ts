type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

interface AjaxResponse<T> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}

declare namespace defs {
  export namespace platform {
    export class CommonResponse {
      /** code */
      code?: number;

      /** msg */
      msg?: string;

      /** success */
      success?: boolean;
    }

    export class CookieItemVO {
      /** domain */
      domain?: string;

      /** expireAt */
      expireAt?: string;

      /** expireIn */
      expireIn?: number;

      /** httpOnly */
      httpOnly?: boolean;

      /** name */
      name?: string;

      /** refreshToken */
      refreshToken?: string;

      /** value */
      value?: string;
    }

    export class LoginResultVO {
      /** cookie列表 */
      cookieItemList?: Array<defs.platform.CookieItemVO>;

      /** 是否302跳转 */
      redirect?: boolean;

      /** 跳转url */
      redirectUrl?: string;
    }

    export class Page<T0 = any> {
      /** list */
      list?: Array<T0>;

      /** page */
      page?: number;

      /** pageSize */
      pageSize?: number;

      /** total */
      total?: number;

      /** totalPage */
      totalPage?: number;
    }

    export class TenantInformation {
      /** createBy */
      createBy?: string;

      /** createTime */
      createTime?: string;

      /** 描述 */
      description?: string;

      /** 负责人 */
      director?: string;

      /** 企业代码（可为空） */
      enterpriseCode?: string;

      /** 企业名称（可为空） */
      enterpriseName?: string;

      /** id */
      id?: string;

      /** 0未删除1已删除 */
      isDeleted?: number;

      /** 租户logo */
      logo?: string;

      /** 租户编码 */
      orgCode?: string;

      /** 租户名称 */
      orgName?: string;

      /** 负责人手机号（默认绑定租户管理员） */
      phone?: string;

      /** 帐号状态 0 禁用/1 启用 */
      status?: number;

      /** updateBy */
      updateBy?: string;

      /** updateTime */
      updateTime?: string;

      /** 有效期 */
      validBefore?: string;
    }

    export class TheTenantDetailsDto {
      /** createBy */
      createBy?: string;

      /** createTime */
      createTime?: string;

      /** 描述 */
      description?: string;

      /** 负责人 */
      director?: string;

      /** 管理员账号 */
      directorUsername?: string;

      /** 企业代码（可为空） */
      enterpriseCode?: string;

      /** 企业名称（可为空） */
      enterpriseName?: string;

      /** id */
      id?: string;

      /** 0未删除1已删除 */
      isDeleted?: number;

      /** 租户logo */
      logo?: string;

      /** 租户编码 */
      orgCode?: string;

      /** 租户名称 */
      orgName?: string;

      /** 负责人手机号（默认绑定租户管理员） */
      phone?: string;

      /** 帐号状态 0 禁用/1 启用 */
      status?: number;

      /** updateBy */
      updateBy?: string;

      /** updateTime */
      updateTime?: string;

      /** 当前用户数 */
      userNum?: number;

      /** 有效期 */
      validBefore?: string;
    }

    export class TheTenantListPageFilter {
      /** 负责人 */
      director?: string;

      /** offset */
      offset?: number;

      /** 租户编码 */
      orgCode?: string;

      /** 租户名称 */
      orgName?: string;

      /** 页码 */
      page?: number;

      /** 页容量 */
      pageSize?: number;

      /** 负责人手机号（默认绑定租户管理员） */
      phone?: string;

      /** 帐号状态 0 禁用/1 启用 */
      status?: number;

      /** 有效期 */
      validBefore?: string;
    }

    export class TheUserInformation {
      /** 头像 */
      avatar?: string;

      /** createBy */
      createBy?: string;

      /** createTime */
      createTime?: string;

      /** 邮箱 */
      email?: string;

      /** id */
      id?: string;

      /** 0未删除1已删除 */
      isDeleted?: number;

      /** 昵称 */
      name?: string;

      /** 所属租户编码 */
      orgId?: string;

      /** 手机号 */
      phone?: string;

      /** 性别 */
      sex?: number;

      /** 帐号状态 0 禁用/1 启用 */
      status?: number;

      /** updateBy */
      updateBy?: string;

      /** updateTime */
      updateTime?: string;

      /** userId */
      userId?: number;

      /** 登录账号 */
      userName?: string;
    }

    export class UserListPageFilter {
      /** 昵称 */
      name?: string;

      /** offset */
      offset?: number;

      /** 租户id */
      orgId?: string;

      /** 页码 */
      page?: number;

      /** 页容量 */
      pageSize?: number;

      /** 手机号 */
      phone?: string;

      /** 帐号状态 0 禁用/1 启用 */
      status?: number;

      /** 登录账号 */
      userName?: string;
    }

    export class UserLoginDTO {
      /** 登录码 */
      loginCode?: string;

      /** 登录账号 */
      loginName?: string;

      /** 登录密码 */
      loginPassword?: string;

      /** 登录类型，2密码登录 */
      loginType?: number;

      /** 是否302跳转 */
      redirect?: boolean;

      /** 跳转url */
      redirectUrl?: string;
    }
  }
}

declare namespace API {
  export namespace platform {
    /**
     * 登录接口
     */
    export namespace authorization {
      /**
       * Post登录
       * /api/authorization/login
       */
      export namespace login {
        export class Params {}

        export type Response = defs.platform.LoginResultVO;

        export const init: Response;

        export function fetch(
          bodyParams: defs.platform.UserLoginDTO,
        ): Promise<Response>;
      }

      /**
       * token过期刷新
       * /api/authorization/refresh
       */
      export namespace refresh {
        export class Params {
          /** refreshToken */
          refreshToken?: string;
        }

        export type Response = defs.platform.LoginResultVO;

        export const init: Response;

        export function fetch(params?: Params): Promise<Response>;
      }

      /**
       * 发送验证码
       * /api/authorization/sendSms
       */
      export namespace sendSms {
        export class Params {
          /** phoneNumber */
          phoneNumber?: string;
          /** type */
          type?: number;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params?: Params): Promise<Response>;
      }

      /**
       * 验证验证码
       * /api/authorization/verifySms
       */
      export namespace verifySms {
        export class Params {
          /** code */
          code?: string;
          /** phoneNumber */
          phoneNumber?: string;
          /** type */
          type?: number;
        }

        export type Response = defs.platform.CommonResponse;

        export const init: Response;

        export function fetch(params?: Params): Promise<Response>;
      }
    }

    /**
     * Health Check Controller
     */
    export namespace healthCheck {
      /**
       * healthCheck
       * /system/health/check
       */
      export namespace healthCheck {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * healthCheck
       * /system/health/check
       */
      export namespace headCheck {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * healthCheck
       * /system/health/check
       */
      export namespace postCheck {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * healthCheck
       * /system/health/check
       */
      export namespace putCheck {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * healthCheck
       * /system/health/check
       */
      export namespace deleteCheck {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * healthCheck
       * /system/health/check
       */
      export namespace optionsCheck {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * healthCheck
       * /system/health/check
       */
      export namespace patchCheck {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }
    }

    /**
     * TenantInformation接口
     */
    export namespace sysOrg {
      /**
       * 租户详情
       * /api/org/detail
       */
      export namespace detail {
        export class Params {
          /** id */
          id: string;
        }

        export type Response = defs.platform.TheTenantDetailsDto;

        export const init: Response;

        export function fetch(params?: Params): Promise<Response>;
      }

      /**
       * 查看所有租户（分页）
       * /api/org/page
       */
      export namespace pageList {
        export class Params {}

        export type Response = defs.platform.Page<
          defs.platform.TenantInformation
        >;

        export const init: Response;

        export function fetch(
          bodyParams: defs.platform.TheTenantListPageFilter,
        ): Promise<Response>;
      }

      /**
       * 新建租户
       * /api/org/save
       */
      export namespace save {
        export class Params {}

        export type Response = string;

        export const init: Response;

        export function fetch(
          bodyParams: defs.platform.TenantInformation,
        ): Promise<Response>;
      }

      /**
       * 更改租户
       * /api/org/update
       */
      export namespace update {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(
          bodyParams: defs.platform.TenantInformation,
        ): Promise<Response>;
      }

      /**
       * 禁用租户
       * /api/org/updateStatus
       */
      export namespace updateStatus {
        export class Params {
          /** id */
          id: string;
          /** status */
          status: number;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params?: Params): Promise<Response>;
      }
    }

    /**
     * TheUserInformation接口
     */
    export namespace sysUser {
      /**
       * 用户详情
       * /api/user/detail
       */
      export namespace detail {
        export class Params {
          /** id */
          id: string;
        }

        export type Response = defs.platform.TheUserInformation;

        export const init: Response;

        export function fetch(params?: Params): Promise<Response>;
      }

      /**
       * 个人信息
       * /api/user/myself
       */
      export namespace myself {
        export class Params {}

        export type Response = defs.platform.TheUserInformation;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 查询所有用户（分页）
       * /api/user/page
       */
      export namespace pageList {
        export class Params {}

        export type Response = defs.platform.Page<
          defs.platform.TheUserInformation
        >;

        export const init: Response;

        export function fetch(
          bodyParams: defs.platform.UserListPageFilter,
        ): Promise<Response>;
      }

      /**
       * 创建用户
       * /api/user/save
       */
      export namespace save {
        export class Params {}

        export type Response = string;

        export const init: Response;

        export function fetch(
          bodyParams: defs.platform.TheUserInformation,
        ): Promise<Response>;
      }

      /**
       * 更改用户
       * /api/user/update
       */
      export namespace update {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(
          bodyParams: defs.platform.TheUserInformation,
        ): Promise<Response>;
      }

      /**
       * 修改密码
       * /api/user/updatePassword
       */
      export namespace updatePassword {
        export class Params {
          /** newPwd */
          newPwd: string;
          /** oldPwd */
          oldPwd: string;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params?: Params): Promise<Response>;
      }

      /**
       * 设置用户状态
       * /api/user/updateStatus
       */
      export namespace updateStatus {
        export class Params {
          /** id */
          id: string;
          /** status */
          status: number;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params?: Params): Promise<Response>;
      }
    }
  }
}
