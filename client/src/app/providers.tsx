'use client'

import { apolloClient } from '@/api/apollo-client'
import { ApolloProvider } from '@apollo/client/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
	const queryClient = new QueryClient()

	return (
		<ApolloProvider client={apolloClient}>
			<QueryClientProvider client={queryClient}>
				<LazyMotion features={domAnimation}>{children}</LazyMotion>
			</QueryClientProvider>
		</ApolloProvider>
	)
}
