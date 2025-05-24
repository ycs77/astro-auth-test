import type { APIRoute } from 'astro'
import { getSession, refreshSession } from '@/sessions'

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const session = getSession(cookies)

  session.delete('token')
  refreshSession(cookies)

  return redirect('/', 307)
}
