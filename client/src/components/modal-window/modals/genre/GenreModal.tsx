import { useMutation } from '@apollo/client'
import { type Dispatch, type SetStateAction, useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Textarea } from '@/components/ui/text-area/textarea'

import { Button } from '@/ui/buttons/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/ui/card/card'
import { Input } from '@/ui/input/input'
import { Label } from '@/ui/label/label'

import styles from './genre.module.scss'
import {
	CreateGenreDocument,
	UpdateGenreDocument
} from '@/__generated__/output'
import type {
	ICreateEditGenre,
	IGenre,
	IGenreResponse
} from '@/services/genre/genre.interface'
import { getAccessToken } from '@/services/user/auth/auth.helper'

export function GenreModal({
	type,
	setIsOpenModal,
	setDefaultData
}: {
	type: 'create-genre' | 'edit-genre'
	setIsOpenModal: Dispatch<SetStateAction<boolean>>
	setDefaultData: Dispatch<SetStateAction<IGenre[] | undefined>> | undefined
}) {
	const { register, handleSubmit, reset } = useForm<ICreateEditGenre>()
	const [error, setError] = useState('')

	const [mutate, { data, loading: isPending }] = useMutation<IGenreResponse>(
		type === 'create-genre' ? CreateGenreDocument : UpdateGenreDocument,
		{
			context: {
				headers: {
					authorization: `Bearer ${getAccessToken()}`
				}
			},
			onCompleted() {
				toast.success('Successfully create genre!')
				if (type === 'create-genre' && setDefaultData)
					setDefaultData(prev => [...prev!, data!.CreateGenre])
				setIsOpenModal(false)
				reset()
			},
			onError(error: Error) {
				setError(error.message)
			}
		}
	)

	const onSubmit: SubmitHandler<ICreateEditGenre> = data => {
		const mutationOptions = {
			variables: { data }
		}
		mutate(mutationOptions)
	}

	const closeModal = () => {
		reset()
		setError('')
		setIsOpenModal(false)
	}

	return (
		<Card className={styles.card}>
			<CardHeader>
				<CardTitle>
					{type === 'create-genre' ? 'Create' : 'Edit'} genre
				</CardTitle>
				<CardDescription>
					{type === 'create-genre' ? 'Create new' : 'Edit'} genre in one-click.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.fieldsBox}>
						<div className={styles.field}>
							<Label htmlFor='name'>Name</Label>
							<Input
								id='name'
								placeholder='Enter the name of genre'
								{...register('title', {
									required: 'Title is required!'
								})}
							/>
						</div>
						<div className={styles.field}>
							<Label htmlFor='framework'>Description</Label>
							<Textarea
								id='framework'
								placeholder='Write some info about this genre'
								{...register('description', {
									required: 'Description is required!'
								})}
							/>
						</div>
					</div>
					<p className={styles.error}>{error}</p>
					<div className={styles.buttonsBox}>
						<Button
							variant='outline'
							onClick={() => closeModal()}
						>
							Cancel
						</Button>
						<Button
							type='submit'
							disabled={isPending}
						>
							{type === 'create-genre' ? 'Create' : 'Edit'}
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}
