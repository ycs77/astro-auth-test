/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface SessionData {
    token: string

    errors: Record<string, string[]>
  }
}
