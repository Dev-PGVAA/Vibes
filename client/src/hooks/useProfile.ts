import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { saveTokenStorage } from '@/services/user/auth/auth.helper'
import authService from '@/services/user/auth/auth.service'
import userService from '@/services/user/user.service'
import { transformUserToState } from '@/utils/auth/transform-user-to-state'

export function useProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		refetchInterval: 1000 * 60 * 30, // 30 minutes in milliseconds
	})

	const { isSuccess, data: dataTokens } = useQuery({
		queryKey: ['new tokens'],
		queryFn: () => authService.getNewTokens(),
		enabled: !data?.data.GetProfile,
	})

	useEffect(() => {
		if (!isSuccess) return

		if (dataTokens.data?.GetNewTokens?.accessToken)
			saveTokenStorage(dataTokens.data.GetNewTokens.accessToken)
	}, [isSuccess])
	let profile = null

	try {
		profile = data?.data.GetProfile
	} catch (error) {
		profile === null
	}

	const userState = profile ? transformUserToState(profile.profile) : null

	return {
		isLoading,
		user: {
			...profile,
			...userState,
		},
	}
}
