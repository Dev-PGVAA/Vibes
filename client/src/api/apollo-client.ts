import { ApolloClient, InMemoryCache } from '@apollo/client'
import { loadErrorMessages } from '@apollo/client/dev'

loadErrorMessages()
export const apolloClient = new ApolloClient({
	uri: process.env.GRAPHQL_SERVER_URL,
	cache: new InMemoryCache(),
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json',
	},
})
