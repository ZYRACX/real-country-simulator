import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of paths where you want to block logged-in users
const authPages = ['/auth/login', '/auth/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the user is trying to access an auth page
  if (authPages.includes(pathname)) {
    // Example: Check for a login token in cookies (e.g., 'token')
    const token = request.cookies.get('token');

    // If token exists, redirect to /game
    if (token) {
      const url = request.nextUrl.clone();
      url.pathname = '/game';
      return NextResponse.redirect(url);
    }
  }

  // Continue to the requested page if no token or not on auth pages
  return NextResponse.next();
}

// Specify which paths this middleware applies to
export const config = {
  matcher: ['/auth/:path*'], // Apply middleware to all /auth routes
};
