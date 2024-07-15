import {
	GetNewTokensDocument,
	LoginDocument,
	LogoutDocument,
	RegisterDocument,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo-client'
import type { IFormData } from '@/types/auth.types'
import { removeFromStorage, saveTokenStorage } from './auth.helper'
import type { IAuthResponse } from './auth.interface'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken',
}

class AuthService {
	async main(type: 'login' | 'register', data: IFormData) {
		const response = await apolloClient.mutate<IAuthResponse>({
			mutation: type === 'login' ? LoginDocument : RegisterDocument,
			variables: { data },
		})

		if (type === 'login' && response.data?.Login.accessToken)
			saveTokenStorage(response.data.Login.accessToken)

		if (type === 'register' && response.data?.Register.accessToken)
			saveTokenStorage(response.data.Register.accessToken)

		return response
	}

	async getNewTokens() {
		const response = await apolloClient.mutate<IAuthResponse>({
			mutation: GetNewTokensDocument,
		})

		if (response.data?.GetNewTokens.accessToken)
			saveTokenStorage(response.data.GetNewTokens.accessToken)

		return response
	}

	async getNewTokensByRefresh(refreshToken: string) {
		const response = await apolloClient.mutate<IAuthResponse>({
			mutation: GetNewTokensDocument,
			context: {
				headers: {
					Cookie: `refreshToken=${refreshToken}`,
				},
			},
		})

		return response.data
	}

	async logout() {
		const response = await apolloClient.mutate<boolean>({
			mutation: LogoutDocument,
		})

		if (response.data) removeFromStorage()

		localStorage.clear()
		sessionStorage.clear()

		return response
	}
}

export default new AuthService()
