export const content = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'MainPage',
    component: () => import('../pages/MainPage'),
    children: [
      {
        path: '/main/foo',
        name: 'Foo',
        component: () => import('../pages/FooPage')
      }
    ]
  },
  {
    path: '/teste',
    name: 'SearchField',
    component: () => import('../pages/MainPage/molecules/SearchField')
  },
  {
    path: '/testeCard',
    name: 'TesteCard',
    component: () => import('../pages/MainPage/molecules/CardComponent')
  },
  {
    path: '/testeInput',
    name: 'TesteInput',
    component: () => import('../pages/MainPage/atom/InputText')
  },
  {
    path: '/testingProp/:value',
    name: 'testingProp',
    component: () => import('../pages/FooPage'),
    props: true
  },
  {
    path: '/testMessage',
    name: 'testMessage',
    component: () => import('@/modules/sharedComponents/atom/MessageComponent')
  }
]
