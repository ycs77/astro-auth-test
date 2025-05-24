import { defineMiddleware } from 'astro/middleware'
import { isLoggedIn } from '@/auth'

export const onRequest = defineMiddleware(async (context, next) => {
  // only guest
  if (['/', '/login'].includes(context.url.pathname) && await isLoggedIn(context.cookies)) {
    return context.redirect('/dashboard')
  }

  // only auth
  if (['/dashboard', '/logout'].includes(context.url.pathname) && !await isLoggedIn(context.cookies)) {
    return context.redirect('/login')
  }

  return await next()
})
