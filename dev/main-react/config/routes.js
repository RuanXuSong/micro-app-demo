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
                path: '/dataFront',
                name: 'dataFront',
                icon: 'StarOutlined',
                component: './dataFront',
                exact: false,
              },
              {
                path: '/react17',
                name: 'react17',
                icon: 'TrademarkOutlined',
                component: './react17/react17',
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
