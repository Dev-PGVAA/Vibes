import genreService from '@/services/genre/genre.service'
import { useQuery } from '@tanstack/react-query'

export function useGenres() {
	let { data, isLoading, error, refetch } = useQuery({
		queryKey: ['genres'],
		queryFn: () => genreService.getAllGenres(),
	})

	return { data, isLoading, error, refetch }
}
