import { GraphQLError } from 'graphql'

export function checkIsTypeof(value: any, msg: string, type: string) {
	if (type === 'object' && value === null) throw new GraphQLError(`${msg}`)
	if (type === 'array' && Array.isArray(value)) throw new GraphQLError(`${msg}`)
	if (typeof value !== type) throw new GraphQLError(`${msg}`)
}
