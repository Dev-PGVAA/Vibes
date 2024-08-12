'use server'

import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'

import {
	type TUserDataState,
	transformUserToState
} from '../auth/transform-user-to-state'

import type { ITokenInside } from '@/services/user/auth/auth.interface'
import authService, { EnumTokens } from '@/services/user/auth/auth.service'

export async function getServerAuth(): Promise<TUserDataState | null> {
	const JWT_SECRET = process.env.JWT_SECRET
	let accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = cookies().get(EnumTokens.REFRESH_TOKEN)?.value

	if (!refreshToken) return null

	if (!accessToken) {
		try {
			const data = await authService.getNewTokensByRefresh(refreshToken)
			accessToken = data?.GetNewTokens.accessToken
		} catch (error) {
			return null
		}
	}

	try {
		if (!accessToken) {
			return null
		}

		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(`${JWT_SECRET}`)
		)

		if (!payload) return null

		return transformUserToState(payload)
	} catch (error) {
		return null
	}
}
