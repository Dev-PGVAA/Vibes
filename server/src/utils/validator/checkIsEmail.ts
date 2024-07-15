import { GraphQLError } from 'graphql'

export function checkIsEmail(email: string, msg: string) {
	const re = /\S+@\S+\.\S+/
	if (!re.test(email)) {
		throw new GraphQLError(msg)
	}
}
