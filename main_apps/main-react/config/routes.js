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
                    fontIcon: 'icon-homepage',
                  },
                  {
                    path: '/auth/authorization/authority/list',
                    name: '权限管理',
                    component: './authorization/authority/list',
                    fontIcon: 'icon-authority',
                  },
                  {
                    path: '/auth/authorization/user/list',
                    name: '用户管理',
                    component: './authorization/user/list',
                    fontIcon: 'icon-person',
                  },
                  {
                    path: '/auth/authorization/company/list',
                    name: '企业管理',
                    component: './authorization/company/list',
                    fontIcon: 'icon-company',
                  },
                  {
                    path: '/auth/authorization/central/list',
                    name: '个人中心',
                    component: './authorization/user/list',
                    fontIcon: 'icon-person',
                  },
                  {
                    path: '/auth/authorization/resource/edit',
                    name: '新增资源',
                    component: './authorization/resource/edit',
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
                path: '/biSheng/auth/homepage',
                redirect: '/auth/homepage',
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
