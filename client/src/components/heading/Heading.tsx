'use client'

import cn from 'clsx'
import { AnimatePresence, m } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { BsBellFill } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'

import { PUBLIC_PAGES } from '@/config/page-url.config'

import { useProfile } from '@/hooks/useProfile'

import { GoHistoryBtn } from '../ui/buttons/GoHistoryBtn'
import SkeletonLoader from '../ui/loaders/SkeletonLoader'

import { DropDownItem } from './drop-down/DropDownItem'
import { HEADING_DROPDOWN } from './drop-down/dropdown.data'
import styles from './profile.module.scss'

function Heading() {
	const [isOpenSearch, setIsOpenSearch] = useState(false)
	const { user, isLoading } = useProfile()
	const pathname = usePathname()
	const searchRef = useRef<HTMLInputElement>(null)
	const [isOpenDropDown, setIsOpenDropDown] = useState(false)

	const toggleSearch = () => {
		if (!isOpenSearch) {
			searchRef.current?.focus()
			setIsOpenSearch(true)
		} else {
			searchRef.current!.value = ''
			searchRef.current?.blur()
			setIsOpenSearch(false)
		}
	}

	return (
		<>
			{pathname !== PUBLIC_PAGES.SETTINGS.HOME && (
				<div className={styles.profile}>
					<div className={styles.historyButtons}>
						<i>
							<GoHistoryBtn action='back' />
							<GoHistoryBtn action='forward' />
						</i>
					</div>
					<div className={styles.searchAndProfile}>
						<input
							type='text'
							className={cn(styles.search, !isOpenSearch ? 'w-0' : 'w-52')}
							ref={searchRef}
							placeholder='Search'
						/>
						<button onClick={() => toggleSearch()}>
							<RiSearchLine
								size={18}
								className={cn(styles.searchIcon, isOpenSearch && 'fill-accent')}
							/>
						</button>

						{!isLoading ? (
							<>
								{user.profile && (
									<>
										<button>
											<BsBellFill
												fill='#fff'
												size={18}
												className={styles.bellIcon}
											/>
										</button>
										<AnimatePresence>
											<m.div
												whileHover={{
													height: 180,
													transform: 'translateY(70px)',
													border: '2px solid #999'
												}}
												onHoverStart={() => setIsOpenDropDown(true)}
												onHoverEnd={() => setIsOpenDropDown(false)}
												className={styles.dropdown}
											>
												<Image
													src={user.profile.avatar}
													alt='Ava'
													height={40}
													width={40}
													draggable={false}
													className={styles.photo}
												/>
												{isOpenDropDown && (
													<>
														{HEADING_DROPDOWN.map(item => (
															<DropDownItem
																key={item.name}
																item={item}
															/>
														))}
													</>
												)}
											</m.div>
										</AnimatePresence>
									</>
								)}
							</>
						) : (
							<div className='h-10 w-10 -translate-y-1'>
								<SkeletonLoader className='h-10 w-10 rounded-full' />
							</div>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default React.memo(Heading)
