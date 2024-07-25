import { useEffect } from 'react'

import {
	GetNewTokensDocument,
	GetProfileDocument,
} from '@/__generated__/output'
import {
	getAccessToken,
	saveTokenStorage,
} from '@/services/user/auth/auth.helper'
import type { IAuthResponse } from '@/services/user/auth/auth.interface'
import type { IUserResponse } from '@/services/user/user.interface'
import { transformUserToState } from '@/utils/auth/transform-user-to-state'
import { useMutation, useQuery } from '@apollo/client'

export function useProfile() {
	const { data, loading: isLoading } = useQuery<IUserResponse>(
		GetProfileDocument,
		{
			context: {
				headers: {
					authorization: `Bearer ${getAccessToken()}`,
				},
			},
			pollInterval: 1000 * 60 * 30,
		}
	)

	const [mutate, { data: dataTokens, error }] = useMutation<IAuthResponse>(
		GetNewTokensDocument,
		{
			onCompleted: () => {
				console.log(dataTokens)
				if (dataTokens?.GetNewTokens.accessToken)
					saveTokenStorage(dataTokens.GetNewTokens.accessToken)
			},
		}
	)

	useEffect(() => {
		if (!data?.GetProfile) mutate()
	}, [data?.GetProfile])

	useEffect(() => {
		if (error) return

		if (dataTokens?.GetNewTokens.accessToken)
			saveTokenStorage(dataTokens.GetNewTokens.accessToken)
	}, [error])
	let profile = null

	try {
		profile = data?.GetProfile
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
