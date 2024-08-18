import { useQuery } from '@apollo/client'

import { GetCountriesRatingDocument } from '@/__generated__/output'
import { getAccessToken } from '@/services/user/auth/auth.helper'

export type TCountriesRating = {
	GetCountriesRating: {
		country: string
		count: number
		icon: string
	}[]
}

export function useGetCountriesRating() {
	const { data, loading: isLoading } = useQuery<TCountriesRating>(
		GetCountriesRatingDocument,
		{
			notifyOnNetworkStatusChange: true,
			context: {
				headers: {
					authorization: `Bearer ${getAccessToken()}`
				}
			}
		}
	)

	return { data: data?.GetCountriesRating, isLoading }
}
