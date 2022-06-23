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
                path: '/dataFront',
                name: 'dataFront',
                customIcon: 'data-front',
                component: './dataFront',
                exact: false,
              },
              {
                path: '/biSheng',
                name: 'biSheng',
                customIcon: 'bisheng',
                component: './biSheng',
                exact: false,
              },
              {
                path: '/thunderBi',
                name: 'thunderBi',
                customIcon: 'thunder-bi',
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
