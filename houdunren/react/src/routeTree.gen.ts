/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './pages/__root'
import { Route as FrontRouteImport } from './pages/front/route'
import { Route as Result500Import } from './pages/result/500'
import { Route as AuthRegisterImport } from './pages/auth/register'
import { Route as AuthLoginImport } from './pages/auth/login'
import { Route as AuthForgetImport } from './pages/auth/forget'
import { Route as FrontVideoIndexImport } from './pages/front/video/index'
import { Route as FrontTopicIndexImport } from './pages/front/topic/index'
import { Route as FrontSubscribeIndexImport } from './pages/front/subscribe/index'
import { Route as FrontSignIndexImport } from './pages/front/sign/index'
import { Route as FrontChapterIndexImport } from './pages/front/chapter/index'
import { Route as FrontLessonIndexImport } from './pages/front/Lesson/index'
import { Route as FrontVideoShowImport } from './pages/front/video/show'
import { Route as FrontTopicIdImport } from './pages/front/topic/$id'
import { Route as FrontChapterIdImport } from './pages/front/chapter/$id'
import { Route as FrontLessonIdImport } from './pages/front/Lesson/$id'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const Result404LazyImport = createFileRoute('/result/404')()
const FrontAboutLazyImport = createFileRoute('/front/about')()
const Error404LazyImport = createFileRoute('/error/404')()

// Create/Update Routes

const FrontRouteRoute = FrontRouteImport.update({
  path: '/front',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/index.lazy').then((d) => d.Route))

const Result404LazyRoute = Result404LazyImport.update({
  path: '/result/404',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/result/404.lazy').then((d) => d.Route))

const FrontAboutLazyRoute = FrontAboutLazyImport.update({
  path: '/about',
  getParentRoute: () => FrontRouteRoute,
} as any).lazy(() => import('./pages/front/about.lazy').then((d) => d.Route))

const Error404LazyRoute = Error404LazyImport.update({
  path: '/error/404',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/error/404.lazy').then((d) => d.Route))

const Result500Route = Result500Import.update({
  path: '/result/500',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  path: '/auth/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthForgetRoute = AuthForgetImport.update({
  path: '/auth/forget',
  getParentRoute: () => rootRoute,
} as any)

const FrontVideoIndexRoute = FrontVideoIndexImport.update({
  path: '/video/',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontTopicIndexRoute = FrontTopicIndexImport.update({
  path: '/topic/',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontSubscribeIndexRoute = FrontSubscribeIndexImport.update({
  path: '/subscribe/',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontSignIndexRoute = FrontSignIndexImport.update({
  path: '/sign/',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontChapterIndexRoute = FrontChapterIndexImport.update({
  path: '/chapter/',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontLessonIndexRoute = FrontLessonIndexImport.update({
  path: '/Lesson/',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontVideoShowRoute = FrontVideoShowImport.update({
  path: '/video/show',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontTopicIdRoute = FrontTopicIdImport.update({
  path: '/topic/$id',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontChapterIdRoute = FrontChapterIdImport.update({
  path: '/chapter/$id',
  getParentRoute: () => FrontRouteRoute,
} as any)

const FrontLessonIdRoute = FrontLessonIdImport.update({
  path: '/Lesson/$id',
  getParentRoute: () => FrontRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/front': {
      id: '/front'
      path: '/front'
      fullPath: '/front'
      preLoaderRoute: typeof FrontRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth/forget': {
      id: '/auth/forget'
      path: '/auth/forget'
      fullPath: '/auth/forget'
      preLoaderRoute: typeof AuthForgetImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/register': {
      id: '/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof rootRoute
    }
    '/result/500': {
      id: '/result/500'
      path: '/result/500'
      fullPath: '/result/500'
      preLoaderRoute: typeof Result500Import
      parentRoute: typeof rootRoute
    }
    '/error/404': {
      id: '/error/404'
      path: '/error/404'
      fullPath: '/error/404'
      preLoaderRoute: typeof Error404LazyImport
      parentRoute: typeof rootRoute
    }
    '/front/about': {
      id: '/front/about'
      path: '/about'
      fullPath: '/front/about'
      preLoaderRoute: typeof FrontAboutLazyImport
      parentRoute: typeof FrontRouteImport
    }
    '/result/404': {
      id: '/result/404'
      path: '/result/404'
      fullPath: '/result/404'
      preLoaderRoute: typeof Result404LazyImport
      parentRoute: typeof rootRoute
    }
    '/front/Lesson/$id': {
      id: '/front/Lesson/$id'
      path: '/Lesson/$id'
      fullPath: '/front/Lesson/$id'
      preLoaderRoute: typeof FrontLessonIdImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/chapter/$id': {
      id: '/front/chapter/$id'
      path: '/chapter/$id'
      fullPath: '/front/chapter/$id'
      preLoaderRoute: typeof FrontChapterIdImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/topic/$id': {
      id: '/front/topic/$id'
      path: '/topic/$id'
      fullPath: '/front/topic/$id'
      preLoaderRoute: typeof FrontTopicIdImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/video/show': {
      id: '/front/video/show'
      path: '/video/show'
      fullPath: '/front/video/show'
      preLoaderRoute: typeof FrontVideoShowImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/Lesson/': {
      id: '/front/Lesson/'
      path: '/Lesson'
      fullPath: '/front/Lesson'
      preLoaderRoute: typeof FrontLessonIndexImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/chapter/': {
      id: '/front/chapter/'
      path: '/chapter'
      fullPath: '/front/chapter'
      preLoaderRoute: typeof FrontChapterIndexImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/sign/': {
      id: '/front/sign/'
      path: '/sign'
      fullPath: '/front/sign'
      preLoaderRoute: typeof FrontSignIndexImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/subscribe/': {
      id: '/front/subscribe/'
      path: '/subscribe'
      fullPath: '/front/subscribe'
      preLoaderRoute: typeof FrontSubscribeIndexImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/topic/': {
      id: '/front/topic/'
      path: '/topic'
      fullPath: '/front/topic'
      preLoaderRoute: typeof FrontTopicIndexImport
      parentRoute: typeof FrontRouteImport
    }
    '/front/video/': {
      id: '/front/video/'
      path: '/video'
      fullPath: '/front/video'
      preLoaderRoute: typeof FrontVideoIndexImport
      parentRoute: typeof FrontRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  FrontRouteRoute: FrontRouteRoute.addChildren({
    FrontAboutLazyRoute,
    FrontLessonIdRoute,
    FrontChapterIdRoute,
    FrontTopicIdRoute,
    FrontVideoShowRoute,
    FrontLessonIndexRoute,
    FrontChapterIndexRoute,
    FrontSignIndexRoute,
    FrontSubscribeIndexRoute,
    FrontTopicIndexRoute,
    FrontVideoIndexRoute,
  }),
  AuthForgetRoute,
  AuthLoginRoute,
  AuthRegisterRoute,
  Result500Route,
  Error404LazyRoute,
  Result404LazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/front",
        "/auth/forget",
        "/auth/login",
        "/auth/register",
        "/result/500",
        "/error/404",
        "/result/404"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/front": {
      "filePath": "front/route.tsx",
      "children": [
        "/front/about",
        "/front/Lesson/$id",
        "/front/chapter/$id",
        "/front/topic/$id",
        "/front/video/show",
        "/front/Lesson/",
        "/front/chapter/",
        "/front/sign/",
        "/front/subscribe/",
        "/front/topic/",
        "/front/video/"
      ]
    },
    "/auth/forget": {
      "filePath": "auth/forget.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/auth/register": {
      "filePath": "auth/register.tsx"
    },
    "/result/500": {
      "filePath": "result/500.tsx"
    },
    "/error/404": {
      "filePath": "error/404.lazy.tsx"
    },
    "/front/about": {
      "filePath": "front/about.lazy.tsx",
      "parent": "/front"
    },
    "/result/404": {
      "filePath": "result/404.lazy.tsx"
    },
    "/front/Lesson/$id": {
      "filePath": "front/Lesson/$id.tsx",
      "parent": "/front"
    },
    "/front/chapter/$id": {
      "filePath": "front/chapter/$id.tsx",
      "parent": "/front"
    },
    "/front/topic/$id": {
      "filePath": "front/topic/$id.tsx",
      "parent": "/front"
    },
    "/front/video/show": {
      "filePath": "front/video/show.tsx",
      "parent": "/front"
    },
    "/front/Lesson/": {
      "filePath": "front/Lesson/index.tsx",
      "parent": "/front"
    },
    "/front/chapter/": {
      "filePath": "front/chapter/index.tsx",
      "parent": "/front"
    },
    "/front/sign/": {
      "filePath": "front/sign/index.tsx",
      "parent": "/front"
    },
    "/front/subscribe/": {
      "filePath": "front/subscribe/index.tsx",
      "parent": "/front"
    },
    "/front/topic/": {
      "filePath": "front/topic/index.tsx",
      "parent": "/front"
    },
    "/front/video/": {
      "filePath": "front/video/index.tsx",
      "parent": "/front"
    }
  }
}
ROUTE_MANIFEST_END */
