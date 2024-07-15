import { NextRequest, NextResponse } from 'next/server'

// FIXME: need refactor - midelware
export async function middleware(
	request: NextRequest,
	response: NextResponse
) {}

export const config = {
	matcher: ['/me/admin/:path*', '/me/singer/:path*'],
}
