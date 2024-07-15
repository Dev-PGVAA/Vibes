'use client'

import { apolloClient } from '@/api/apollo-client'
import { ApolloProvider } from '@apollo/client/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<ApolloProvider client={apolloClient}>{children}</ApolloProvider>
		</QueryClientProvider>
	)
}
