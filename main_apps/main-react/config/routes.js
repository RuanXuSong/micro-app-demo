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
            path: '/login',
            component: './login/index',
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
                    path: '/auth/company/list',
                    name: '企业管理',
                    component: './authorization/company/list',
                    fontIcon: 'icon-company',
                  },
                  {
                    path: '/auth/user/list',
                    name: '用户管理',
                    component: './authorization/user/list',
                    fontIcon: 'icon-person',
                  },
                  {
                    path: '/auth/authority',
                    name: '权限管理',
                    fontIcon: 'icon-authority',
                    routes: [
                      {
                        path: '/auth/authority/menu',
                        name: '菜单权限',
                        component: './authorization/authority/menu/list',
                        fontIcon: 'icon-menu',
                      },
                      {
                        path: '/auth/authority/data',
                        name: '数据权限',
                        component: './authorization/authority/data/list',
                        fontIcon: 'icon-data',
                      },
                    ],
                  },
                  {
                    path: '/auth/central',
                    name: '个人中心',
                    component: './authorization/central',
                    fontIcon: 'icon-person',
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
                path: '/thunderBi',
                name: '大屏配置',
                customIcon: 'thunder-bi',
                component: './thunderBi',
              },
              {
                path: '/swift-screen',
                name: '敏捷大屏',
                customIcon: 'thunder-bi',
                component: './swiftScreen',
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
