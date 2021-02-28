import { IRoute } from 'umi'
import { Component } from 'react'

export const routes: IRoute[] = [
  {
    path: '/login',
    exact: false,
    wrappers: ['@/layouts/UserLayout'],
    component: '@/pages/users/login',
  },
  {
    path: '/logout',
    exact: true,
    component: '@/pages/users/logout',
  },
  {
    path: '/forgot',
    exact: false,
    wrappers: ['@/layouts/UserLayout'],
    component: '@/pages/users/forgot',
  },
  {
    path: '/reset',
    exact: false,
    wrappers: ['@/layouts/UserLayout'],
    component: '@/pages/users/reset',
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    wrappers: ['@/layouts/SecurityLayout'],
    exact: false,
    routes: [
      {
        path: '/',
        redirect: '/account',
      },

      //Account
      {
        exact: false,
        path: '/account',
        name: 'Account',
        icon: 'user',
        // access: 'canReadAccount',
        routes: [
          {
            exact: true,
            path: '/account',
            component: '@/pages/account/account.page',
          },
          {
            exact: true,
            path: '/account/profile',
            component: '@/pages/account/profile.page',
          },
          {
            exact: true,
            path: '/account/profile/:id',
            component: '@/pages/account/[id].page',
          },
        ],
      },
    ],
  },
]
