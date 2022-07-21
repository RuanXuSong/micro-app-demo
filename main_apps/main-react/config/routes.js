export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        routes: [
          {
            path: '/',
            redirect: '/auth/homepage',
          },
          {
            path: '/auth',
            component: '../layouts/AuthLayout',
            routes: [
              {
                path: '/auth',
                name: '首页',
                customIcon: 'data-front',
                component: '../layouts/TabPanelLayout',
                routes: [
                  {
                    path: '/auth/homepage',
                    name: '首页',
                    component: './homepage',
                    customIcon: 'auth-resource',
                  },
                  {
                    path: '/auth/authorization/resource/list',
                    name: '资源管理',
                    component: './authorization/resource/list',
                    customIcon: 'auth-resource',
                  },
                  {
                    path: '/auth/authorization/user/list',
                    name: '用户管理',
                    component: './authorization/user/list',
                    customIcon: 'auth-character',
                  },
                  {
                    path: '/auth/authorization/tenant/list',
                    name: '租户管理',
                    component: './authorization/tenant/list',
                    customIcon: 'auth-character',
                  },
                  {
                    path: '/auth/authorization/resource/edit',
                    name: '新增资源',
                    component: './authorization/resource/edit',
                    hidden: true,
                  },
                  {
                    path: '/auth/authorization/user/edit',
                    name: '新增用户',
                    component: './authorization/user/edit',
                    hidden: true,
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
                path: '/dataFront',
                name: '数融',
                customIcon: 'data-front',
                component: './dataFront',
              },
              {
                path: '/biSheng/dashboard/analysis',
                name: '快速开发',
                customIcon: 'bisheng',
                component: './biSheng',
              },
              {
                path: '/thunderBi/dashboards',
                name: '大屏配置',
                customIcon: 'thunder-bi',
                component: './thunderBi',
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
