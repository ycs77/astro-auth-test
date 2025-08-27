import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ session, redirect }) => {
  // 刪除完整的 session
  session?.destroy()

  return redirect('/', 307)
}
