import type { AstroCookies } from 'astro'
import { TOKEN } from '@/constant'
import { getSession } from '@/sessions'

export async function isLoggedIn(cookies: AstroCookies): Promise<boolean> {
  const session = getSession(cookies)

  return session.get('token') === TOKEN
}
