'use server'

import { NextRequest, NextResponse } from 'next/server'

export async function middleware(
	request: NextRequest,
	response: NextResponse
) {}

export const config = {
	matcher: ['/admin-panel/:path*', '/singer-panel/:path']
}
