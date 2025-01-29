import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/account/:path*',  '/', '/profile/:path*'],
};

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.SECRET });
  // console.log(token);
  const url = req.nextUrl;

  // Redirect to dashboard if the user is already authenticated
  // and trying to access sign-in, sign-up, or home page
  if (
    token &&
    (url.pathname.startsWith('/account/sign-in') ||
      url.pathname.startsWith('/account/sign-up') ||
      url.pathname.startsWith('/account/verification'))
  ) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!token && url.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/account/sign-in', req.url));
  }

  return NextResponse.next();
}