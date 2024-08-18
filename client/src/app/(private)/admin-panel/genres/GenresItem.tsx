import { useMutation } from '@apollo/client'
import { m } from 'framer-motion'
import type { Dispatch, SetStateAction } from 'react'
import { MdEdit, MdOutlineClose } from 'react-icons/md'

import type { TGenreModal } from './Genres'
import styles from './genres.module.scss'
import { DeleteGenreDocument } from '@/__generated__/output'
import type { IGenre } from '@/services/genre/genre.interface'
import { getAccessToken } from '@/services/user/auth/auth.helper'

type TGenreEditDefaultValue = {
	id: string
	title: string
	description: string
}

interface IGenresItem {
	item: IGenre
	index: number
	setTypeModal: Dispatch<SetStateAction<TGenreModal>>
	setIsOpenModal: Dispatch<SetStateAction<boolean>>
	setDefaultData: Dispatch<SetStateAction<IGenre[] | undefined>>
}
export function GenresItem({
	item,
	index,
	setTypeModal,
	setIsOpenModal,
	setDefaultData
}: IGenresItem) {
	const openEditModal = () => {
		setTypeModal('edit-genre')
		setTimeout(() => setIsOpenModal(true), 555)
	}

	const [mutate, { loading: isPending }] = useMutation(DeleteGenreDocument, {
		variables: { id: item.id },
		context: {
			headers: {
				authorization: `Bearer ${getAccessToken()}`
			}
		}
	})

	const deleteGenre = () => {
		mutate()
		setDefaultData(prev => prev?.filter(genre => genre.id !== item.id))
	}

	return (
		<m.div
			className={styles.row}
			animate={{ x: 0 }}
			exit={{ x: '120%' }}
			initial={{ x: '-80%' }}
			transition={{ ease: 'anticipate', delay: index * 0.025 }}
		>
			<p>{item.title}</p>
			<p>{item.slug}</p>
			<p>{item.description}</p>
			<p className={styles.actions}>
				<button onClick={() => openEditModal()}>
					<MdEdit />
				</button>
				<button
					disabled={isPending}
					onClick={() => deleteGenre()}
				>
					<MdOutlineClose />
				</button>
			</p>
		</m.div>
	)
}
