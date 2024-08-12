'use client'

import { ApolloProvider } from '@apollo/client/react'
import { LazyMotion, domAnimation } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { apolloClient } from '@/api/apollo-client'

export function Providers({ children }: PropsWithChildren) {
	return (
		<ApolloProvider client={apolloClient}>
			<LazyMotion features={domAnimation}>{children}</LazyMotion>
		</ApolloProvider>
	)
}
