import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Security and performance headers
  const headers = {
    // Security
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Performance - Cache static assets aggressively
    'Cache-Control': request.nextUrl.pathname.startsWith('/_next/static')
      ? 'public, max-age=31536000, immutable'
      : request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff2?)$/)
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate',
  };

  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/webpack-hmr (hot module reload)
     */
    '/((?!api|_next/webpack-hmr).*)',
  ],
};
