'use client'

import { AnimatePresence } from 'framer-motion'
import { type ChangeEvent, useEffect, useState } from 'react'
import { IoReload } from 'react-icons/io5'
import { MdSearch } from 'react-icons/md'

import { Title } from '@/components/heading/Title/Title'
import { Modal } from '@/components/modal-window/Modal'

import SkeletonLoader from '@/ui/loaders/SkeletonLoader'

import { GenresItem } from './GenresItem'
import styles from './genres.module.scss'
import { useGenres } from './hooks/useGenres'

export type TGenreModal = 'create-genre' | 'edit-genre'

// TODO: доделать edit modal, delete, refresh data after changes
export function Genres() {
	const { data, isLoading, refetch } = useGenres()

	const [filter, setFilter] = useState('')
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [typeModal, setTypeModal] = useState<TGenreModal>('create-genre')
	const [defaultData, setDefaultData] = useState(data)

	useEffect(() => {
		setDefaultData(data)
	}, [data])

	const openCreateModal = () => {
		setTypeModal('create-genre')
		setIsOpenModal(true)
	}

	return (
		<div className={styles.page}>
			<Title title='Genres' />
			<div className={styles.header}>
				<div className={styles.search}>
					<MdSearch size={24} />
					<input
						type='text'
						placeholder='Search'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setTimeout(() => setFilter(e.target.value), 500)
						}
					/>
				</div>
				<div className={styles.right}>
					<button
						className={styles.reload}
						disabled={isLoading}
						onClick={() => refetch()}
					>
						<IoReload
							size={24}
							strokeWidth={5}
						/>
					</button>
					<button
						className={styles.create}
						onClick={() => openCreateModal()}
						disabled={isLoading}
					>
						Create new
					</button>
				</div>
			</div>
			<div className={styles.table}>
				<header>
					<p>Name</p>
					<p>Slug</p>
					<p>Description</p>
					<p>Actions</p>
				</header>
				<main>
					{isLoading ? (
						<SkeletonLoader
							className={styles.loader}
							repeat={5}
						/>
					) : (
						<AnimatePresence>
							{defaultData
								?.filter(
									item =>
										item.title.toLowerCase().includes(filter.toLowerCase()) ||
										item.description
											.toLowerCase()
											.includes(filter.toLowerCase())
								)
								.map((item, _) => (
									<GenresItem
										item={item}
										index={_}
										setTypeModal={setTypeModal}
										setIsOpenModal={setIsOpenModal}
										setDefaultData={setDefaultData}
										key={item.id}
									/>
								))}
						</AnimatePresence>
					)}
				</main>
			</div>
			<Modal
				type={typeModal}
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				setDefaultData={setDefaultData}
			/>
		</div>
	)
}
