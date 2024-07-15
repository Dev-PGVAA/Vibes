import { GetProfileDocument } from '@/__generated__/output'
import { apolloClient } from '@/api/apollo-client'
import { getAccessToken } from './auth/auth.helper'
import type { IUserResponse } from './user.interface'

class UserService {
	async getProfile() {
		const response = await apolloClient.query<IUserResponse>({
			query: GetProfileDocument,
			context: {
				headers: {
					authorization: `Bearer ${getAccessToken()}`,
				},
			},
			fetchPolicy: 'network-only',
		})

		return response
	}
}

export default new UserService()
