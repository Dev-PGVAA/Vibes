import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
	  }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
}

export type AuthReturn = {
	__typename?: 'AuthReturn'
	accessToken: Scalars['String']['output']
	avatar: Scalars['String']['output']
	email: Scalars['String']['output']
	id: Scalars['String']['output']
	isHaveAgeLimit: Scalars['Boolean']['output']
	name: Scalars['String']['output']
	password: Scalars['String']['output']
	refreshToken: Scalars['String']['output']
	role: Scalars['String']['output']
	typeofAuth: Scalars['String']['output']
}

export type BanSinger = {
	__typename?: 'BanSinger'
	isBan: Scalars['Boolean']['output']
}

export type CreateGenreInput = {
	description: Scalars['String']['input']
	title: Scalars['String']['input']
}

export type CreateTrackInput = {
	audio: Scalars['String']['input']
	authorId: Scalars['String']['input']
	cover: Scalars['String']['input']
	duration: Scalars['Float']['input']
	genreId: Scalars['String']['input']
	isHaveAgeLimit: Scalars['Boolean']['input']
	name: Scalars['String']['input']
}

export type CreateUserInput = {
	birthday: Scalars['String']['input']
	email: Scalars['String']['input']
	name: Scalars['String']['input']
	password: Scalars['String']['input']
}

export type DeleteGenre = {
	__typename?: 'DeleteGenre'
	isDeleted: Scalars['Boolean']['output']
}

export type DeleteTrack = {
	__typename?: 'DeleteTrack'
	isDeleted: Scalars['Boolean']['output']
}

export type ForgotPasswordResponse = {
	__typename?: 'ForgotPasswordResponse'
	isSentEmail: Scalars['Boolean']['output']
}

export type Genre = {
	__typename?: 'Genre'
	description: Scalars['String']['output']
	id: Scalars['String']['output']
	slug: Scalars['String']['output']
	title: Scalars['String']['output']
}

export type LoginUserInput = {
	email: Scalars['String']['input']
	password: Scalars['String']['input']
}

export type Mutation = {
	__typename?: 'Mutation'
	BanSinger: BanSinger
	CreateGenre: Genre
	CreateTrack: Track
	DeleteGenre: DeleteGenre
	DeleteTrack: DeleteTrack
	ForgotPassword: ForgotPasswordResponse
	GetNewTokens: AuthReturn
	Login: AuthReturn
	Logout: Scalars['Boolean']['output']
	MutateToSinger: User
	Register: AuthReturn
	UpdateGenre: Genre
	UpdateProfile: User
	UpdateTrack: Track
}

export type MutationBanSingerArgs = {
	id: Scalars['String']['input']
}

export type MutationCreateGenreArgs = {
	data: CreateGenreInput
}

export type MutationCreateTrackArgs = {
	data: CreateTrackInput
}

export type MutationDeleteGenreArgs = {
	id: Scalars['String']['input']
}

export type MutationDeleteTrackArgs = {
	id: Scalars['String']['input']
}

export type MutationForgotPasswordArgs = {
	email: Scalars['String']['input']
}

export type MutationLoginArgs = {
	data: LoginUserInput
}

export type MutationRegisterArgs = {
	data: CreateUserInput
}

export type MutationUpdateGenreArgs = {
	data: UpdateGenreInput
}

export type MutationUpdateProfileArgs = {
	data: UpdateUserInput
}

export type MutationUpdateTrackArgs = {
	data: UpdateTrackInput
}

export type Query = {
	__typename?: 'Query'
	GetAllGenres: Array<Genre>
	GetGenreById: Genre
	GetGenresBySlug: Genre
	GetProfile: User
	GetSingersByName: Array<Singer>
	GetTrackById: Track
	GetTracksByName: Array<Track>
	TakeSingers: TakeSingers
}

export type QueryGetGenreByIdArgs = {
	id: Scalars['String']['input']
}

export type QueryGetGenresBySlugArgs = {
	slug: Scalars['String']['input']
}

export type QueryGetSingersByNameArgs = {
	name: Scalars['String']['input']
}

export type QueryGetTrackByIdArgs = {
	id: Scalars['String']['input']
}

export type QueryGetTracksByNameArgs = {
	name: Scalars['String']['input']
}

export type QueryTakeSingersArgs = {
	data: TakeSingersInput
}

export type Singer = {
	__typename?: 'Singer'
	avatar: Scalars['String']['output']
	id: Scalars['String']['output']
	name: Scalars['String']['output']
}

export type TakeSingers = {
	__typename?: 'TakeSingers'
	isHasMore: Scalars['Boolean']['output']
	items: Array<Singer>
}

export type TakeSingersInput = {
	skip: Scalars['Float']['input']
	take: Scalars['Float']['input']
}

export type Track = {
	__typename?: 'Track'
	albom: Scalars['String']['output']
	audio: Scalars['String']['output']
	author: Scalars['String']['output']
	cover: Scalars['String']['output']
	duration: Scalars['String']['output']
	genreId: Scalars['String']['output']
	id: Scalars['String']['output']
	isHaveAgeLimit: Scalars['Boolean']['output']
	name: Scalars['String']['output']
}

export type UpdateGenreInput = {
	description?: InputMaybe<Scalars['String']['input']>
	id: Scalars['String']['input']
	title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateTrackInput = {
	audio?: InputMaybe<Scalars['String']['input']>
	authorId?: InputMaybe<Scalars['String']['input']>
	cover?: InputMaybe<Scalars['String']['input']>
	duration?: InputMaybe<Scalars['Float']['input']>
	genreId?: InputMaybe<Scalars['String']['input']>
	id: Scalars['String']['input']
	isHaveAgeLimit?: InputMaybe<Scalars['Boolean']['input']>
	name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserInput = {
	avatar?: InputMaybe<Scalars['String']['input']>
	name?: InputMaybe<Scalars['String']['input']>
}

export type User = {
	__typename?: 'User'
	avatar: Scalars['String']['output']
	email: Scalars['String']['output']
	id: Scalars['String']['output']
	isHaveAgeLimit: Scalars['Boolean']['output']
	name: Scalars['String']['output']
	password: Scalars['String']['output']
	role: Scalars['String']['output']
	typeofAuth: Scalars['String']['output']
}

export type CreateGenreMutationVariables = Exact<{
	data: CreateGenreInput
}>

export type CreateGenreMutation = {
	__typename?: 'Mutation'
	CreateGenre: {
		__typename?: 'Genre'
		id: string
		title: string
		slug: string
		description: string
	}
}

export type DeleteGenreMutationVariables = Exact<{
	id: Scalars['String']['input']
}>

export type DeleteGenreMutation = {
	__typename?: 'Mutation'
	DeleteGenre: { __typename?: 'DeleteGenre'; isDeleted: boolean }
}

export type GetAllGenresQueryVariables = Exact<{ [key: string]: never }>

export type GetAllGenresQuery = {
	__typename?: 'Query'
	GetAllGenres: Array<{
		__typename?: 'Genre'
		id: string
		title: string
		slug: string
		description: string
	}>
}

export type GetGenreByIdQueryVariables = Exact<{
	id: Scalars['String']['input']
}>

export type GetGenreByIdQuery = {
	__typename?: 'Query'
	GetGenreById: {
		__typename?: 'Genre'
		id: string
		title: string
		slug: string
		description: string
	}
}

export type GetGenresBySlugQueryVariables = Exact<{
	slug: Scalars['String']['input']
}>

export type GetGenresBySlugQuery = {
	__typename?: 'Query'
	GetGenresBySlug: {
		__typename?: 'Genre'
		id: string
		title: string
		slug: string
		description: string
	}
}

export type UpdateGenreMutationVariables = Exact<{
	data: UpdateGenreInput
}>

export type UpdateGenreMutation = {
	__typename?: 'Mutation'
	UpdateGenre: {
		__typename?: 'Genre'
		id: string
		title: string
		slug: string
		description: string
	}
}

export type CreateTrackMutationVariables = Exact<{
	data: CreateTrackInput
}>

export type CreateTrackMutation = {
	__typename?: 'Mutation'
	CreateTrack: {
		__typename?: 'Track'
		name: string
		duration: string
		cover: string
		audio: string
		isHaveAgeLimit: boolean
	}
}

export type DeleteTrackMutationVariables = Exact<{
	id: Scalars['String']['input']
}>

export type DeleteTrackMutation = {
	__typename?: 'Mutation'
	DeleteTrack: { __typename?: 'DeleteTrack'; isDeleted: boolean }
}

export type GetTrackByIdQueryVariables = Exact<{
	id: Scalars['String']['input']
}>

export type GetTrackByIdQuery = {
	__typename?: 'Query'
	GetTrackById: {
		__typename?: 'Track'
		name: string
		author: string
		duration: string
		cover: string
		audio: string
	}
}

export type GetTracksByNameQueryVariables = Exact<{
	name: Scalars['String']['input']
}>

export type GetTracksByNameQuery = {
	__typename?: 'Query'
	GetTracksByName: Array<{
		__typename?: 'Track'
		id: string
		name: string
		author: string
		duration: string
		cover: string
		audio: string
	}>
}

export type UpdateTrackMutationVariables = Exact<{
	data: UpdateTrackInput
}>

export type UpdateTrackMutation = {
	__typename?: 'Mutation'
	UpdateTrack: {
		__typename?: 'Track'
		name: string
		duration: string
		cover: string
		audio: string
		isHaveAgeLimit: boolean
	}
}

export type GetProfileQueryVariables = Exact<{ [key: string]: never }>

export type GetProfileQuery = {
	__typename?: 'Query'
	GetProfile: {
		__typename?: 'User'
		name: string
		email: string
		avatar: string
		isHaveAgeLimit: boolean
		role: string
		typeofAuth: string
	}
}

export type UpdateProfileMutationVariables = Exact<{
	data: UpdateUserInput
}>

export type UpdateProfileMutation = {
	__typename?: 'Mutation'
	UpdateProfile: { __typename?: 'User'; name: string }
}

export type GetNewTokensMutationVariables = Exact<{ [key: string]: never }>

export type GetNewTokensMutation = {
	__typename?: 'Mutation'
	GetNewTokens: { __typename?: 'AuthReturn'; accessToken: string }
}

export type LoginMutationVariables = Exact<{
	data: LoginUserInput
}>

export type LoginMutation = {
	__typename?: 'Mutation'
	Login: {
		__typename?: 'AuthReturn'
		name: string
		email: string
		avatar: string
		isHaveAgeLimit: boolean
		role: string
		typeofAuth: string
		accessToken: string
	}
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; Logout: boolean }

export type RegisterMutationVariables = Exact<{
	data: CreateUserInput
}>

export type RegisterMutation = {
	__typename?: 'Mutation'
	Register: {
		__typename?: 'AuthReturn'
		name: string
		email: string
		avatar: string
	}
}

export const CreateGenreDocument = gql`
	mutation CreateGenre($data: CreateGenreInput!) {
		CreateGenre(data: $data) {
			id
			title
			slug
			description
		}
	}
`
export type CreateGenreMutationFn = Apollo.MutationFunction<
	CreateGenreMutation,
	CreateGenreMutationVariables
>

/**
 * __useCreateGenreMutation__
 *
 * To run a mutation, you first call `useCreateGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGenreMutation, { data, loading, error }] = useCreateGenreMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateGenreMutation(
	baseOptions?: Apollo.MutationHookOptions<
		CreateGenreMutation,
		CreateGenreMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<CreateGenreMutation, CreateGenreMutationVariables>(
		CreateGenreDocument,
		options
	)
}
export type CreateGenreMutationHookResult = ReturnType<
	typeof useCreateGenreMutation
>
export type CreateGenreMutationResult =
	Apollo.MutationResult<CreateGenreMutation>
export type CreateGenreMutationOptions = Apollo.BaseMutationOptions<
	CreateGenreMutation,
	CreateGenreMutationVariables
>
export const DeleteGenreDocument = gql`
	mutation DeleteGenre($id: String!) {
		DeleteGenre(id: $id) {
			isDeleted
		}
	}
`
export type DeleteGenreMutationFn = Apollo.MutationFunction<
	DeleteGenreMutation,
	DeleteGenreMutationVariables
>

/**
 * __useDeleteGenreMutation__
 *
 * To run a mutation, you first call `useDeleteGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGenreMutation, { data, loading, error }] = useDeleteGenreMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGenreMutation(
	baseOptions?: Apollo.MutationHookOptions<
		DeleteGenreMutation,
		DeleteGenreMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<DeleteGenreMutation, DeleteGenreMutationVariables>(
		DeleteGenreDocument,
		options
	)
}
export type DeleteGenreMutationHookResult = ReturnType<
	typeof useDeleteGenreMutation
>
export type DeleteGenreMutationResult =
	Apollo.MutationResult<DeleteGenreMutation>
export type DeleteGenreMutationOptions = Apollo.BaseMutationOptions<
	DeleteGenreMutation,
	DeleteGenreMutationVariables
>
export const GetAllGenresDocument = gql`
	query GetAllGenres {
		GetAllGenres {
			id
			title
			slug
			description
		}
	}
`

/**
 * __useGetAllGenresQuery__
 *
 * To run a query within a React component, call `useGetAllGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGenresQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetAllGenresQuery,
		GetAllGenresQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetAllGenresQuery, GetAllGenresQueryVariables>(
		GetAllGenresDocument,
		options
	)
}
export function useGetAllGenresLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetAllGenresQuery,
		GetAllGenresQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetAllGenresQuery, GetAllGenresQueryVariables>(
		GetAllGenresDocument,
		options
	)
}
export function useGetAllGenresSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		GetAllGenresQuery,
		GetAllGenresQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<GetAllGenresQuery, GetAllGenresQueryVariables>(
		GetAllGenresDocument,
		options
	)
}
export type GetAllGenresQueryHookResult = ReturnType<
	typeof useGetAllGenresQuery
>
export type GetAllGenresLazyQueryHookResult = ReturnType<
	typeof useGetAllGenresLazyQuery
>
export type GetAllGenresSuspenseQueryHookResult = ReturnType<
	typeof useGetAllGenresSuspenseQuery
>
export type GetAllGenresQueryResult = Apollo.QueryResult<
	GetAllGenresQuery,
	GetAllGenresQueryVariables
>
export const GetGenreByIdDocument = gql`
	query GetGenreById($id: String!) {
		GetGenreById(id: $id) {
			id
			title
			slug
			description
		}
	}
`

/**
 * __useGetGenreByIdQuery__
 *
 * To run a query within a React component, call `useGetGenreByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGenreByIdQuery(
	baseOptions: Apollo.QueryHookOptions<
		GetGenreByIdQuery,
		GetGenreByIdQueryVariables
	> &
		(
			| { variables: GetGenreByIdQueryVariables; skip?: boolean }
			| { skip: boolean }
		)
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetGenreByIdQuery, GetGenreByIdQueryVariables>(
		GetGenreByIdDocument,
		options
	)
}
export function useGetGenreByIdLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetGenreByIdQuery,
		GetGenreByIdQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetGenreByIdQuery, GetGenreByIdQueryVariables>(
		GetGenreByIdDocument,
		options
	)
}
export function useGetGenreByIdSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		GetGenreByIdQuery,
		GetGenreByIdQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<GetGenreByIdQuery, GetGenreByIdQueryVariables>(
		GetGenreByIdDocument,
		options
	)
}
export type GetGenreByIdQueryHookResult = ReturnType<
	typeof useGetGenreByIdQuery
>
export type GetGenreByIdLazyQueryHookResult = ReturnType<
	typeof useGetGenreByIdLazyQuery
>
export type GetGenreByIdSuspenseQueryHookResult = ReturnType<
	typeof useGetGenreByIdSuspenseQuery
>
export type GetGenreByIdQueryResult = Apollo.QueryResult<
	GetGenreByIdQuery,
	GetGenreByIdQueryVariables
>
export const GetGenresBySlugDocument = gql`
	query GetGenresBySlug($slug: String!) {
		GetGenresBySlug(slug: $slug) {
			id
			title
			slug
			description
		}
	}
`

/**
 * __useGetGenresBySlugQuery__
 *
 * To run a query within a React component, call `useGetGenresBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetGenresBySlugQuery(
	baseOptions: Apollo.QueryHookOptions<
		GetGenresBySlugQuery,
		GetGenresBySlugQueryVariables
	> &
		(
			| { variables: GetGenresBySlugQueryVariables; skip?: boolean }
			| { skip: boolean }
		)
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetGenresBySlugQuery, GetGenresBySlugQueryVariables>(
		GetGenresBySlugDocument,
		options
	)
}
export function useGetGenresBySlugLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetGenresBySlugQuery,
		GetGenresBySlugQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		GetGenresBySlugQuery,
		GetGenresBySlugQueryVariables
	>(GetGenresBySlugDocument, options)
}
export function useGetGenresBySlugSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		GetGenresBySlugQuery,
		GetGenresBySlugQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		GetGenresBySlugQuery,
		GetGenresBySlugQueryVariables
	>(GetGenresBySlugDocument, options)
}
export type GetGenresBySlugQueryHookResult = ReturnType<
	typeof useGetGenresBySlugQuery
>
export type GetGenresBySlugLazyQueryHookResult = ReturnType<
	typeof useGetGenresBySlugLazyQuery
>
export type GetGenresBySlugSuspenseQueryHookResult = ReturnType<
	typeof useGetGenresBySlugSuspenseQuery
>
export type GetGenresBySlugQueryResult = Apollo.QueryResult<
	GetGenresBySlugQuery,
	GetGenresBySlugQueryVariables
>
export const UpdateGenreDocument = gql`
	mutation UpdateGenre($data: UpdateGenreInput!) {
		UpdateGenre(data: $data) {
			id
			title
			slug
			description
		}
	}
`
export type UpdateGenreMutationFn = Apollo.MutationFunction<
	UpdateGenreMutation,
	UpdateGenreMutationVariables
>

/**
 * __useUpdateGenreMutation__
 *
 * To run a mutation, you first call `useUpdateGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGenreMutation, { data, loading, error }] = useUpdateGenreMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateGenreMutation(
	baseOptions?: Apollo.MutationHookOptions<
		UpdateGenreMutation,
		UpdateGenreMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<UpdateGenreMutation, UpdateGenreMutationVariables>(
		UpdateGenreDocument,
		options
	)
}
export type UpdateGenreMutationHookResult = ReturnType<
	typeof useUpdateGenreMutation
>
export type UpdateGenreMutationResult =
	Apollo.MutationResult<UpdateGenreMutation>
export type UpdateGenreMutationOptions = Apollo.BaseMutationOptions<
	UpdateGenreMutation,
	UpdateGenreMutationVariables
>
export const CreateTrackDocument = gql`
	mutation CreateTrack($data: CreateTrackInput!) {
		CreateTrack(data: $data) {
			name
			duration
			cover
			audio
			isHaveAgeLimit
		}
	}
`
export type CreateTrackMutationFn = Apollo.MutationFunction<
	CreateTrackMutation,
	CreateTrackMutationVariables
>

/**
 * __useCreateTrackMutation__
 *
 * To run a mutation, you first call `useCreateTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTrackMutation, { data, loading, error }] = useCreateTrackMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTrackMutation(
	baseOptions?: Apollo.MutationHookOptions<
		CreateTrackMutation,
		CreateTrackMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<CreateTrackMutation, CreateTrackMutationVariables>(
		CreateTrackDocument,
		options
	)
}
export type CreateTrackMutationHookResult = ReturnType<
	typeof useCreateTrackMutation
>
export type CreateTrackMutationResult =
	Apollo.MutationResult<CreateTrackMutation>
export type CreateTrackMutationOptions = Apollo.BaseMutationOptions<
	CreateTrackMutation,
	CreateTrackMutationVariables
>
export const DeleteTrackDocument = gql`
	mutation DeleteTrack($id: String!) {
		DeleteTrack(id: $id) {
			isDeleted
		}
	}
`
export type DeleteTrackMutationFn = Apollo.MutationFunction<
	DeleteTrackMutation,
	DeleteTrackMutationVariables
>

/**
 * __useDeleteTrackMutation__
 *
 * To run a mutation, you first call `useDeleteTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTrackMutation, { data, loading, error }] = useDeleteTrackMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTrackMutation(
	baseOptions?: Apollo.MutationHookOptions<
		DeleteTrackMutation,
		DeleteTrackMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<DeleteTrackMutation, DeleteTrackMutationVariables>(
		DeleteTrackDocument,
		options
	)
}
export type DeleteTrackMutationHookResult = ReturnType<
	typeof useDeleteTrackMutation
>
export type DeleteTrackMutationResult =
	Apollo.MutationResult<DeleteTrackMutation>
export type DeleteTrackMutationOptions = Apollo.BaseMutationOptions<
	DeleteTrackMutation,
	DeleteTrackMutationVariables
>
export const GetTrackByIdDocument = gql`
	query GetTrackById($id: String!) {
		GetTrackById(id: $id) {
			name
			author
			duration
			cover
			audio
		}
	}
`

/**
 * __useGetTrackByIdQuery__
 *
 * To run a query within a React component, call `useGetTrackByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTrackByIdQuery(
	baseOptions: Apollo.QueryHookOptions<
		GetTrackByIdQuery,
		GetTrackByIdQueryVariables
	> &
		(
			| { variables: GetTrackByIdQueryVariables; skip?: boolean }
			| { skip: boolean }
		)
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetTrackByIdQuery, GetTrackByIdQueryVariables>(
		GetTrackByIdDocument,
		options
	)
}
export function useGetTrackByIdLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetTrackByIdQuery,
		GetTrackByIdQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetTrackByIdQuery, GetTrackByIdQueryVariables>(
		GetTrackByIdDocument,
		options
	)
}
export function useGetTrackByIdSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		GetTrackByIdQuery,
		GetTrackByIdQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<GetTrackByIdQuery, GetTrackByIdQueryVariables>(
		GetTrackByIdDocument,
		options
	)
}
export type GetTrackByIdQueryHookResult = ReturnType<
	typeof useGetTrackByIdQuery
>
export type GetTrackByIdLazyQueryHookResult = ReturnType<
	typeof useGetTrackByIdLazyQuery
>
export type GetTrackByIdSuspenseQueryHookResult = ReturnType<
	typeof useGetTrackByIdSuspenseQuery
>
export type GetTrackByIdQueryResult = Apollo.QueryResult<
	GetTrackByIdQuery,
	GetTrackByIdQueryVariables
>
export const GetTracksByNameDocument = gql`
	query GetTracksByName($name: String!) {
		GetTracksByName(name: $name) {
			id
			name
			author
			duration
			cover
			audio
		}
	}
`

/**
 * __useGetTracksByNameQuery__
 *
 * To run a query within a React component, call `useGetTracksByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTracksByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTracksByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetTracksByNameQuery(
	baseOptions: Apollo.QueryHookOptions<
		GetTracksByNameQuery,
		GetTracksByNameQueryVariables
	> &
		(
			| { variables: GetTracksByNameQueryVariables; skip?: boolean }
			| { skip: boolean }
		)
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetTracksByNameQuery, GetTracksByNameQueryVariables>(
		GetTracksByNameDocument,
		options
	)
}
export function useGetTracksByNameLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetTracksByNameQuery,
		GetTracksByNameQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		GetTracksByNameQuery,
		GetTracksByNameQueryVariables
	>(GetTracksByNameDocument, options)
}
export function useGetTracksByNameSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		GetTracksByNameQuery,
		GetTracksByNameQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		GetTracksByNameQuery,
		GetTracksByNameQueryVariables
	>(GetTracksByNameDocument, options)
}
export type GetTracksByNameQueryHookResult = ReturnType<
	typeof useGetTracksByNameQuery
>
export type GetTracksByNameLazyQueryHookResult = ReturnType<
	typeof useGetTracksByNameLazyQuery
>
export type GetTracksByNameSuspenseQueryHookResult = ReturnType<
	typeof useGetTracksByNameSuspenseQuery
>
export type GetTracksByNameQueryResult = Apollo.QueryResult<
	GetTracksByNameQuery,
	GetTracksByNameQueryVariables
>
export const UpdateTrackDocument = gql`
	mutation UpdateTrack($data: UpdateTrackInput!) {
		UpdateTrack(data: $data) {
			name
			duration
			cover
			audio
			isHaveAgeLimit
		}
	}
`
export type UpdateTrackMutationFn = Apollo.MutationFunction<
	UpdateTrackMutation,
	UpdateTrackMutationVariables
>

/**
 * __useUpdateTrackMutation__
 *
 * To run a mutation, you first call `useUpdateTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrackMutation, { data, loading, error }] = useUpdateTrackMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTrackMutation(
	baseOptions?: Apollo.MutationHookOptions<
		UpdateTrackMutation,
		UpdateTrackMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<UpdateTrackMutation, UpdateTrackMutationVariables>(
		UpdateTrackDocument,
		options
	)
}
export type UpdateTrackMutationHookResult = ReturnType<
	typeof useUpdateTrackMutation
>
export type UpdateTrackMutationResult =
	Apollo.MutationResult<UpdateTrackMutation>
export type UpdateTrackMutationOptions = Apollo.BaseMutationOptions<
	UpdateTrackMutation,
	UpdateTrackMutationVariables
>
export const GetProfileDocument = gql`
	query GetProfile {
		GetProfile {
			profile {
				name
				email
				avatar
				isHaveAgeLimit
				role
				typeofAuth
			}
		}
	}
`

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetProfileQuery,
		GetProfileQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(
		GetProfileDocument,
		options
	)
}
export function useGetProfileLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetProfileQuery,
		GetProfileQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(
		GetProfileDocument,
		options
	)
}
export function useGetProfileSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		GetProfileQuery,
		GetProfileQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(
		GetProfileDocument,
		options
	)
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>
export type GetProfileLazyQueryHookResult = ReturnType<
	typeof useGetProfileLazyQuery
>
export type GetProfileSuspenseQueryHookResult = ReturnType<
	typeof useGetProfileSuspenseQuery
>
export type GetProfileQueryResult = Apollo.QueryResult<
	GetProfileQuery,
	GetProfileQueryVariables
>
export const UpdateProfileDocument = gql`
	mutation UpdateProfile($data: UpdateUserInput!) {
		UpdateProfile(data: $data) {
			name
		}
	}
`
export type UpdateProfileMutationFn = Apollo.MutationFunction<
	UpdateProfileMutation,
	UpdateProfileMutationVariables
>

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProfileMutation(
	baseOptions?: Apollo.MutationHookOptions<
		UpdateProfileMutation,
		UpdateProfileMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		UpdateProfileMutation,
		UpdateProfileMutationVariables
	>(UpdateProfileDocument, options)
}
export type UpdateProfileMutationHookResult = ReturnType<
	typeof useUpdateProfileMutation
>
export type UpdateProfileMutationResult =
	Apollo.MutationResult<UpdateProfileMutation>
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<
	UpdateProfileMutation,
	UpdateProfileMutationVariables
>
export const GetNewTokensDocument = gql`
	mutation GetNewTokens {
		GetNewTokens {
			accessToken
		}
	}
`
export type GetNewTokensMutationFn = Apollo.MutationFunction<
	GetNewTokensMutation,
	GetNewTokensMutationVariables
>

/**
 * __useGetNewTokensMutation__
 *
 * To run a mutation, you first call `useGetNewTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetNewTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getNewTokensMutation, { data, loading, error }] = useGetNewTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetNewTokensMutation(
	baseOptions?: Apollo.MutationHookOptions<
		GetNewTokensMutation,
		GetNewTokensMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		GetNewTokensMutation,
		GetNewTokensMutationVariables
	>(GetNewTokensDocument, options)
}
export type GetNewTokensMutationHookResult = ReturnType<
	typeof useGetNewTokensMutation
>
export type GetNewTokensMutationResult =
	Apollo.MutationResult<GetNewTokensMutation>
export type GetNewTokensMutationOptions = Apollo.BaseMutationOptions<
	GetNewTokensMutation,
	GetNewTokensMutationVariables
>
export const LoginDocument = gql`
	mutation Login($data: LoginUserInput!) {
		Login(data: $data) {
			user {
				name
				email
				avatar
				isHaveAgeLimit
				role
				typeofAuth
			}
			accessToken
		}
	}
`
export type LoginMutationFn = Apollo.MutationFunction<
	LoginMutation,
	LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(
	baseOptions?: Apollo.MutationHookOptions<
		LoginMutation,
		LoginMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
		LoginDocument,
		options
	)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
	LoginMutation,
	LoginMutationVariables
>
export const LogoutDocument = gql`
	mutation Logout {
		Logout
	}
`
export type LogoutMutationFn = Apollo.MutationFunction<
	LogoutMutation,
	LogoutMutationVariables
>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
	baseOptions?: Apollo.MutationHookOptions<
		LogoutMutation,
		LogoutMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
		LogoutDocument,
		options
	)
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
	LogoutMutation,
	LogoutMutationVariables
>
export const RegisterDocument = gql`
	mutation Register($data: CreateUserInput!) {
		Register(data: $data) {
			user {
				name
				email
				avatar
			}
		}
	}
`
export type RegisterMutationFn = Apollo.MutationFunction<
	RegisterMutation,
	RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(
	baseOptions?: Apollo.MutationHookOptions<
		RegisterMutation,
		RegisterMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
		RegisterDocument,
		options
	)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
	RegisterMutation,
	RegisterMutationVariables
>
