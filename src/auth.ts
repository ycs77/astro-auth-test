import type { AstroCookies } from 'astro'
import { TOKEN } from '@/constant'
import { getSession } from '@/sessions'

// 確認是否已登錄
export async function isLoggedIn(cookies: AstroCookies): Promise<boolean> {
  const session = getSession(cookies)

  return session.get('token') === TOKEN
}
