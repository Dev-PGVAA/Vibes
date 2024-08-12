import { useQuery } from '@apollo/client'

import { GetAllGenresDocument } from '@/__generated__/output'
import type { IGenreResponse } from '@/services/genre/genre.interface'

export function useGenres() {
	const {
		data,
		loading: isLoading,
		error,
		refetch
	} = useQuery<IGenreResponse>(GetAllGenresDocument, {
		fetchPolicy: 'cache-first'
	})

	return { data: data?.GetAllGenres, isLoading, error, refetch }
}
