import { useQuery } from '@apollo/client'

import { GetTracksByNameDocument } from '@/__generated__/output'
import { getAccessToken } from '@/services/user/auth/auth.helper'

export function useTrack() {
	const {
		data,
		loading: isLoading,
		error
	} = useQuery(GetTracksByNameDocument, {
		variables: { name: '' },
		context: {
			headers: {
				Authorization: `Bearer ${getAccessToken()}`
			}
		}
	})

	return { data, isLoading, error }
}
