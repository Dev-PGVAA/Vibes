import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'

// import { InMemoryCache } from '@apollo/experimental-nextjs-app-support'

export const apolloClient = new ApolloClient({
	connectToDevTools: process.env.NODE_ENV === 'development',
	ssrMode: typeof window === 'undefined',
	link: new HttpLink({
		uri: process.env.GRAPHQL_SERVER_URL,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	}),
	cache: new InMemoryCache()
})
