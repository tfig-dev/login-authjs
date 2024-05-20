import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('session');
  const session = request.cookies.get('session')?.value;
  console.log('cookie', cookie);
  console.log('session', session);

  if (!cookie) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/in'],
};
