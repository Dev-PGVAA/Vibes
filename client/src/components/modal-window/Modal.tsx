'use client'

import { AnimatePresence, m } from 'framer-motion'
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
		<AnimatePresence>
			{isOpenModal && (
				<m.div
					className={styles.modal}
					exit={{ opacity: 0, height: 0, backgroundColor: '#00000000' }}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0, backgroundColor: '#000000bc' }}
				>
					{(type === 'create-genre' || 'edit-genre') && (
						<GenreModal
							type={type}
							setIsOpenModal={setIsOpenModal}
						/>
					)}
				</m.div>
			)}
		</AnimatePresence>
	)
}
