export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/dataFront',
              },
              {
                path: '/thunderBi',
                redirect: '/thunderBi/dashboards',
              },
              {
                path: '/dataFront',
                name: 'dataFront',
                icon: 'StarOutlined',
                component: './dataFront',
                exact: false,
              },
              {
                path: '/thunderBi',
                name: 'thunderBi',
                icon: 'TrademarkOutlined',
                component: './thunderBi',
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
