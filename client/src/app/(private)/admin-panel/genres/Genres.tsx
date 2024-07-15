'use client'

import { Title } from '@/components/heading/Title/Title'
import { Modal } from '@/components/modal-window/Modal'
import SkeletonLoader from '@/ui/loaders/SkeletonLoader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type ChangeEvent, useLayoutEffect, useState } from 'react'
import { IoReload } from 'react-icons/io5'
import { MdSearch } from 'react-icons/md'
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
	const [defaultValue, setDefaultValue] = useState({
		id: '',
		title: '',
		description: '',
	})

	const openCreateModal = () => {
		setTypeModal('create-genre')
		setIsOpenModal(true)
	}

	gsap.registerPlugin(ScrollTrigger)
	useLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#title',
				start: 'top top',
				end: '+=150',
				scrub: true,
			},
		})
		tl.to('#title', {
			position: 'fixed',
			left: 408,
			top: 20,
			duration: 1,
			ease: 'power1.inOut',
		})
	}, [])

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
						<IoReload size={24} strokeWidth={5} />
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
				{isLoading ? (
					<main>
						<SkeletonLoader
							className='w-full rounded-md h-11 mb-3'
							repeat={25}
						/>
					</main>
				) : (
					<main>
						{data?.data
							.filter(
								item =>
									item.title.toLowerCase().includes(filter.toLowerCase()) ||
									item.description.toLowerCase().includes(filter.toLowerCase())
							)
							.map(item => (
								<GenresItem
									item={item}
									setTypeModal={setTypeModal}
									setIsOpenModal={setIsOpenModal}
									key={item.id}
								/>
							))}
					</main>
				)}
			</div>
			<Modal
				type={typeModal}
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
			/>
		</div>
	)
}
