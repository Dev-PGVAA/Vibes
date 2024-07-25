import {
	CreateGenreDocument,
	UpdateGenreDocument,
} from '@/__generated__/output'
import { Textarea } from '@/components/ui/text-area/textarea'
import type { ICreateEditGenre } from '@/services/genre/genre.interface'
import { getAccessToken } from '@/services/user/auth/auth.helper'
import { Button } from '@/ui/buttons/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/ui/card/card'
import { Input } from '@/ui/input/input'
import { Label } from '@/ui/label/label'
import { useMutation } from '@apollo/client'
import { type Dispatch, type SetStateAction, useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function GenreModal({
	type,
	setIsOpenModal,
}: {
	type: 'create-genre' | 'edit-genre'
	setIsOpenModal: Dispatch<SetStateAction<boolean>>
}) {
	const { register, handleSubmit, reset } = useForm<ICreateEditGenre>()
	const [error, setError] = useState('')

	const [mutate, { loading: isPending }] = useMutation(
		type === 'create-genre' ? CreateGenreDocument : UpdateGenreDocument,
		{
			context: {
				headers: {
					authorization: `Bearer ${getAccessToken()}`,
				},
			},
			onCompleted() {
				toast.success('Successfully create genre!')
				setIsOpenModal(false)
				reset()
			},
			onError(error: Error) {
				setError(error.message)
			},
		}
	)

	const onSubmit: SubmitHandler<ICreateEditGenre> = data => {
		const mutationOptions = {
			variables: { data },
		}
		mutate(mutationOptions)
	}

	const closeModal = () => {
		reset()
		setError('')
		setIsOpenModal(false)
	}

	return (
		<Card className='w-[350px]'>
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
					<div className='grid w-full items-center gap-4'>
						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='name'>Name</Label>
							<Input
								id='name'
								placeholder='Enter the name of genre'
								{...register('title', {
									required: 'Title is required!',
								})}
							/>
						</div>
						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='framework'>Description</Label>
							<Textarea
								id='framework'
								placeholder='Write some info about this genre'
								{...register('description', {
									required: 'Description is required!',
								})}
							/>
						</div>
					</div>
					<p className='text-sm text-red-600'>{error}</p>
					<div className='flex justify-between mt-5'>
						<Button variant='outline' onClick={() => closeModal()}>
							Cancel
						</Button>
						<Button type='submit' disabled={isPending}>
							{type === 'create-genre' ? 'Create' : 'Edit'}
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}
