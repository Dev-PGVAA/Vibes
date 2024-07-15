import { GraphQLError } from 'graphql'

export function checkLength(
	value: string,
	msg: string,
	minLength?: number,
	maxLength?: number
): boolean {
	if (minLength && value.length < minLength) {
		throw new GraphQLError(`${msg}`)
	}
	if (maxLength && value.length > maxLength) {
		throw new GraphQLError(`${msg}`)
	}
	return true
}
