import trackService from '@/services/track/track.service'
import { useQuery } from '@tanstack/react-query'

export function useTrack() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['track'],
		queryFn: () => trackService.getTrackByName(''),
	})

	return { data, isLoading, error }
}
