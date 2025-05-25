import type { AstroCookies, AstroCookieSetOptions } from 'astro'
import { createCookieSessionStorage } from 'astro-cookie-session'

// Session 資料類型
interface SessionData {
  token: string
}

// Flash 資料類型
interface FlashData {
  errors: Record<string, string[]>
}

// Cookie Session 設定
const cookieName = 'astro.session'
const cookieSetOptions: AstroCookieSetOptions = {
  httpOnly: true,
  secure: import.meta.env.PROD,
  path: '/',
  maxAge: 120 * 60, // 2 hours
  sameSite: 'lax',
}

export const { getSession } = createCookieSessionStorage<SessionData, FlashData>({
  cookieName,
  cookieSetOptions,
})

export function refreshSession(cookies: AstroCookies) {
  const cookieDeleteOptions = { ...cookieSetOptions }
  delete cookieDeleteOptions.expires
  delete cookieDeleteOptions.maxAge
  delete cookieDeleteOptions.encode

  cookies.delete(cookieName, cookieDeleteOptions)
}
