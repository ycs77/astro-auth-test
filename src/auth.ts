import type { AstroSharedContext } from 'astro'
import { TOKEN } from '@/constant'

// 確認是否已登錄
export async function isLoggedIn(content: AstroSharedContext): Promise<boolean> {
  return (await content.session?.get('token')) === TOKEN
}
