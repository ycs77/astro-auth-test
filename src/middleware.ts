import { defineMiddleware } from 'astro/middleware'
import { isLoggedIn } from '@/auth'

export const onRequest = defineMiddleware(async (context, next) => {
  // guest only: 只能由訪客訪問的路徑
  if (['/login/'].includes(context.url.pathname) && await isLoggedIn(context.cookies)) {
    return context.redirect('/dashboard/')
  }

  // auth only: 只能由已登錄用戶訪問的路徑
  if (['/dashboard/'].includes(context.url.pathname) && !await isLoggedIn(context.cookies)) {
    return context.redirect('/login/')
  }

  return await next()
})
