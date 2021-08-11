
/**
 * @roxi/routify 2.18.3
 * File generated Wed Aug 11 2021 13:05:07 GMT+0200 (Srednjeevropski poletni čas)
 */

export const __version = "2.18.3"
export const __timestamp = "2021-08-11T11:05:07.768Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/admin/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/admin/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "dashboard.svelte",
          "filepath": "/admin/dashboard.svelte",
          "name": "dashboard",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/admin/dashboard.svelte",
          "importPath": "../src/pages/admin/dashboard.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/admin/dashboard",
          "id": "_admin_dashboard",
          "component": () => import('../src/pages/admin/dashboard.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "maps.svelte",
          "filepath": "/admin/maps.svelte",
          "name": "maps",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/admin/maps.svelte",
          "importPath": "../src/pages/admin/maps.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/admin/maps",
          "id": "_admin_maps",
          "component": () => import('../src/pages/admin/maps.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "settings.svelte",
          "filepath": "/admin/settings.svelte",
          "name": "settings",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/admin/settings.svelte",
          "importPath": "../src/pages/admin/settings.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/admin/settings",
          "id": "_admin_settings",
          "component": () => import('../src/pages/admin/settings.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "tables.svelte",
          "filepath": "/admin/tables.svelte",
          "name": "tables",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/admin/tables.svelte",
          "importPath": "../src/pages/admin/tables.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/admin/tables",
          "id": "_admin_tables",
          "component": () => import('../src/pages/admin/tables.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/admin/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/admin",
      "id": "_admin__layout",
      "component": () => import('../src/pages/admin/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/auth/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/auth/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "login.svelte",
          "filepath": "/auth/login.svelte",
          "name": "login",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/auth/login.svelte",
          "importPath": "../src/pages/auth/login.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/auth/login",
          "id": "_auth_login",
          "component": () => import('../src/pages/auth/login.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "register.svelte",
          "filepath": "/auth/register.svelte",
          "name": "register",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/auth/register.svelte",
          "importPath": "../src/pages/auth/register.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/auth/register",
          "id": "_auth_register",
          "component": () => import('../src/pages/auth/register.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/auth/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/auth",
      "id": "_auth__layout",
      "component": () => import('../src/pages/auth/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "landing.svelte",
      "filepath": "/landing.svelte",
      "name": "landing",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/landing.svelte",
      "importPath": "../src/pages/landing.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/landing",
      "id": "_landing",
      "component": () => import('../src/pages/landing.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "profile.svelte",
      "filepath": "/profile.svelte",
      "name": "profile",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/ales/code/svelte-routify-notus-vite/src/pages/profile.svelte",
      "importPath": "../src/pages/profile.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/profile",
      "id": "_profile",
      "component": () => import('../src/pages/profile.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

