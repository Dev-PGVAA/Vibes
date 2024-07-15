import { GetTracksByNameDocument } from '@/__generated__/output'
import { apolloClient } from '@/api/apollo-client'
import { getAccessToken } from '../user/auth/auth.helper'
import type { ITrackResponse } from './track.interface'

class TrackService {
	async getTrackByName(name: string) {
		const response = await apolloClient.query<ITrackResponse>({
			query: GetTracksByNameDocument,
			variables: { name },
			context: {
				headers: {
					Authorization: `Bearer ${getAccessToken()}`,
				},
			},
		})

		return response.data
	}
}

export default new TrackService()
