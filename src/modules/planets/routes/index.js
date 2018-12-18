export const planet = [
  {
    path: '/homeworld',
    name: 'homeworld',
    component: () => import('../pages/Homeworld'),
    props: true,
    children: [
      {
        path: '/homeworld-info/',
        name: 'homeworldinfo',
        component: () => import('../pages/homeworldInfo'),
        props: true
      }
    ]
  }
]
