export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        routes: [
          {
            path: '/login',
            component: './login/index',
          },
          {
            path: '/cloud',
            component: '../layouts/AuthLayout',
            routes: [
              {
                path: '/cloud',
                name: '首页',
                customIcon: 'data-front',
                routes: [
                  {
                    path: '/cloud/homepage',
                    name: '首页',
                    component: './homepage',
                  },
                  {
                    path: '/cloud/company/list',
                    name: '企业管理',
                    component: './authorization/company/list',
                  },
                  {
                    path: '/cloud/user/list',
                    name: '用户管理',
                    component: './authorization/user/list',
                  },
                  {
                    path: '/cloud/authority',
                    name: '权限管理',
                    routes: [
                      {
                        path: '/cloud/authority/menu',
                        name: '菜单权限',
                        component: './authorization/authority/menu/list',
                      },
                      {
                        path: '/cloud/authority/data',
                        name: '数据权限',
                        component: './authorization/authority/data/list',
                      },
                    ],
                  },
                  {
                    path: '/cloud/central',
                    name: '个人中心',
                    component: './authorization/central',
                  },
                  {
                    path: '/cloud/template',
                    name: '模板中心',
                    routes: [
                      {
                        path: '/cloud/template/package',
                        name: '模板套餐',
                        component: './authorization/template/package/list',
                      },
                      {
                        path: '/cloud/template/history',
                        name: '模板历史',
                        component: './authorization/template/history/list',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
              {
                path: '/smart-data',
                name: '数融平台',
                customIcon: 'data-front',
                component: './dataFront',
              },
              {
                path: '/smart-data/*',
                name: '数融平台',
                customIcon: 'data-front',
                component: './dataFront',
              },
              {
                path: '/smart-lowcode',
                name: '敏捷应用',
                customIcon: 'bisheng',
                component: './biSheng',
              },
              {
                path: '/smart-lowcode/*',
                name: '敏捷应用',
                customIcon: 'bisheng',
                component: './biSheng',
              },
              {
                path: '/smart-bi',
                name: '数智平台',
                customIcon: 'thunder-bi',
                component: './thunderBi',
              },
              {
                path: '/smart-bi/*',
                name: '数智平台',
                customIcon: 'thunder-bi',
                component: './thunderBi',
              },
              {
                path: '/smart-visualization',
                name: '敏捷大屏',
                customIcon: 'thunder-bi',
                component: './swiftScreen',
              },
              {
                path: '/smart-visualization/*',
                name: '敏捷大屏',
                customIcon: 'thunder-bi',
                component: './swiftScreen',
              },
              {
                path: '/smart-iot',
                name: '物联网',
                customIcon: 'data-front',
                component: './iot',
              },
              {
                path: '/smart-iot/*',
                name: '物联网',
                customIcon: 'data-front',
                component: './iot',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
