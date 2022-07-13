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
            component: '../layouts/BasicLayout',
            routes: [
              {
                path: '/',
                redirect: '/dataFront',
              },
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
                path: '/authorization',
                name: '权限管理',
                title: '权限管理',
                customIcon: 'authorization',
                routes: [
                  {
                    path: '/authorization/resource/list',
                    name: '资源管理',
                    component: './authorization/resource/list',
                    customIcon: 'auth-resource',
                  },
                  {
                    path: '/authorization/character/list',
                    name: '角色管理',
                    component: './authorization/character/list',
                    customIcon: 'auth-character',
                  },
                  {
                    path: '/authorization/resource/edit',
                    name: '新增资源',
                    component: './authorization/resource/edit',
                    hidden: true,
                  },
                  {
                    path: '/authorization/character/edit',
                    name: '新增角色',
                    component: './authorization/character/edit',
                    hidden: true,
                  },
                ],
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
