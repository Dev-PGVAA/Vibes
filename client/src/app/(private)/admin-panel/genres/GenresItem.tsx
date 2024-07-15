import type { IGenre } from '@/services/genre/genre.inreface'
import genreService from '@/services/genre/genre.service'
import { useMutation } from '@tanstack/react-query'
import type { Dispatch, SetStateAction } from 'react'
import { MdEdit, MdOutlineClose } from 'react-icons/md'
import { toast } from 'sonner'
import type { TGenreModal } from './Genres'
import styles from './genres.module.scss'

type TGenreEditDefaultValue = {
	id: string
	title: string
	description: string
}

interface IGenresItem {
	item: IGenre
	setTypeModal: Dispatch<SetStateAction<TGenreModal>>
	setIsOpenModal: Dispatch<SetStateAction<boolean>>
}
export function GenresItem({
	item,
	setTypeModal,
	setIsOpenModal,
}: IGenresItem) {
	const openEditModal = () => {
		setTypeModal('edit-genre')
		setTimeout(() => setIsOpenModal(true), 555)
	}

	const { mutate, isPending } = useMutation({
		mutationKey: ['create-genre'],
		mutationFn: () => genreService.deleteGenre(item.id),
		onSuccess() {
			toast.success('Successfully delete genre!')
		},
	})

	const deleteGenre = () => {
		mutate()
	}

	return (
		<>
			<div className={styles.row}>
				<p>{item.title}</p>
				<p>{item.slug}</p>
				<p>{item.description}</p>
				<p className={styles.actions}>
					<button onClick={() => openEditModal()}>
						<MdEdit />
					</button>
					<button disabled={isPending} onClick={() => deleteGenre()}>
						<MdOutlineClose />
					</button>
				</p>
			</div>
		</>
	)
}
