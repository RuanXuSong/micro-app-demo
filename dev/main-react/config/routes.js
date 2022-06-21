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
                redirect: '/thunderBi/dashboards',
              },
              {
                path: '/thunderBi',
                redirect: '/thunderBi/dashboards',
              },
              {
                path: '/biSheng',
                redirect: '/biSheng/dashboard/analysis',
              },
              {
                path: '/thunderBi',
                name: 'thunderBi',
                icon: 'TrademarkOutlined',
                component: './thunderBi',
                exact: false,
              },
              {
                path: '/dataFront',
                name: 'dataFront',
                icon: 'StarOutlined',
                component: './dataFront',
                exact: false,
              },
              {
                path: '/biSheng',
                name: 'biSheng',
                icon: 'StarOutlined',
                component: './biSheng',
                exact: false,
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
