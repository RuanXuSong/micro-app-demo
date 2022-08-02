/*
 * @文件描述: 运行时配置，可以在项目运行过程中执行一些操作。
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-25 13:43:18
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-02 16:33:41
 */
import { history } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';
import arrayUtils, { deepFlatten } from '@/utils/array';
import { isEmpty } from 'lodash-es';
import { PrivilegeResource } from './interfaces/common';
import { DataNode } from 'antd/lib/tree';
import { LOGIN_CONFIG } from './constant';
import { message } from 'antd';

/** 初始化数据 */
export async function getInitialState() {
  let menus: MenuDataItem[] = [];
  const privileges: PrivilegeResource[] = [];
  let authTreeData: DataNode[] = [];

  if (LOGIN_CONFIG.isSSO) {
    try {
      /** 获取菜单资源 */
      const source = (await API.authorization.resource.listTree.fetch({
        clientKey: LOGIN_CONFIG.clientId,
      })) as unknown as PrivilegeResource[];
      authTreeData = convertSourceToTreeData(source);
      const routes: PrivilegeResource[] = arrayUtils.deepOrder({
        data: source, // require('../mock/route').default['/resource'].data,
        childKey: 'children',
        orderKey: 'orderValue',
        type: 'asc',
      });
      const flatRoutes = deepFlatten(routes);
      flatRoutes.forEach((route) => {
        route.privilegeList && privileges.push(...route.privilegeList);
      });
      menus = convertResourceToMenu(routes);
      /** 没有菜单权限时候应该调整到登录页面 */
      if (menus.length === 0) {
        message.warn('您没有访问权限，请联系管理员！');
        history.replace('/404');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return {
    menus,
    privileges,
    authTreeData,
  };
}

/**
 * 将后台返回的权限资源，转换成应用的菜单
 * @param resources
 */
function convertResourceToMenu(list: PrivilegeResource[]): MenuDataItem[] {
  return list.map((item) => {
    if (!isEmpty(item.children)) {
      return {
        name: item.description,
        key: `${item.apiUrl}`,
        customIcon: item.icon,
        path: item.apiUrl,
        children: convertResourceToMenu(item.children),
      };
    }
    return {
      name: item.description,
      key: `${item.apiUrl}`,
      customIcon: item.icon,
      path: item.apiUrl,
    };
  });
}

/**
 * 将 source 转换为 Tree 组件可用的数据
 * @param source
 */
function convertSourceToTreeData(source: PrivilegeResource[]) {
  const loopData = (data: PrivilegeResource[]): DataNode[] => {
    const newData = data.map((item) => {
      const { description, id, privilegeList = [] } = item;
      return {
        title: description,
        key: id,
        children: privilegeList ? loopData(privilegeList) : [],
      };
    });
    return newData;
  };
  return loopData(source);
}
