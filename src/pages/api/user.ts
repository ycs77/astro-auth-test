import type { APIRoute } from 'astro'
import { TOKEN } from '@/constant'

// 模擬第三方 API 回傳用戶資料
export const GET: APIRoute = async ({ request }) => {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '')

  if (token !== TOKEN) {
    return new Response('Unauthorized', { status: 401 })
  }

  return new Response(
    JSON.stringify({
      user: {
        id: 7,
        name: 'John Doe',
        email: 'astro123@example.com',
      },
    })
  )
}
