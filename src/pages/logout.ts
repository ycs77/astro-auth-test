import type { APIRoute } from 'astro'
import { getSession, resetSession } from '@/sessions'

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const session = getSession(cookies)

  // 刪除 session 中的 token
  session.delete('token')

  // 重設 session
  resetSession(cookies)

  return redirect('/', 307)
}
