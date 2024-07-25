import { GetAllGenresDocument } from '@/__generated__/output'
import type { IGenreResponse } from '@/services/genre/genre.interface'
import { useQuery } from '@apollo/client'

export function useGenres() {
	const {
		data,
		loading: isLoading,
		error,
		refetch,
	} = useQuery<IGenreResponse>(GetAllGenresDocument, {
		fetchPolicy: 'network-only',
	})

	return { data: data?.GetAllGenres, isLoading, error, refetch }
}
