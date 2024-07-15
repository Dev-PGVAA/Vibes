'use client'

import cn from 'clsx'
import { type Dispatch, type SetStateAction, useEffect } from 'react'
import styles from './modal.module.scss'
import { GenreModal } from './modals/genre/GenreModal'

type TModal = 'create-genre' | 'edit-genre'
interface IModal {
	type: TModal
	isOpenModal: boolean
	setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

export function Modal({ type, isOpenModal, setIsOpenModal }: IModal) {
	useEffect(() => {
		document.addEventListener('keydown', (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpenModal(false)
		})

		return () => {
			document.removeEventListener('keydown', (e: KeyboardEvent) => {
				if (e.key === 'Escape') setIsOpenModal(false)
			})
		}
	}, [])

	return (
		<div className={cn(styles.modal, !isOpenModal && styles.modalClose)}>
			{(type === 'create-genre' || 'edit-genre') && (
				<GenreModal type={type} setIsOpenModal={setIsOpenModal} />
			)}
		</div>
	)
}
