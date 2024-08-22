'use client'

import cn from 'clsx'
import { AnimatePresence, m } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { memo, useContext, useRef, useState } from 'react'
import { BsBellFill } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'

import { PUBLIC_PAGES } from '@/config/page-url.config'

import { useProfile } from '@/hooks/useProfile'

import { CollapseSidebar } from '../ui/buttons/CollapseSidebar'
import { GoHistoryBtn } from '../ui/buttons/GoHistoryBtn'
import SkeletonLoader from '../ui/loaders/SkeletonLoader'

import { DropDownItem } from './drop-down/DropDownItem'
import { HEADING_DROPDOWN } from './drop-down/dropdown.data'
import styles from './profile.module.scss'
import { SidebarContext } from '@/app/providers'

function Heading() {
	const [isOpenSearch, setIsOpenSearch] = useState(false)
	const [isOpenDropDown, setIsOpenDropDown] = useState(false)
	const { user, isLoading } = useProfile()
	const { isOpenSidebar } = useContext(SidebarContext)

	const pathname = usePathname()
	const searchRef = useRef<HTMLInputElement>(null)

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
						<AnimatePresence>
							{!isOpenSidebar && (
								<m.div
									className={cn(styles.collapse)}
									exit={{ opacity: 0, x: -25 }}
									initial={{ opacity: 0, x: -25 }}
									animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
									transition={{ type: 'just', stiffness: 200 }}
								>
									<CollapseSidebar />
								</m.div>
							)}
						</AnimatePresence>
						<i>
							<GoHistoryBtn action='back' />
							<GoHistoryBtn action='forward' />
						</i>
					</div>
					<div className={styles.searchAndProfile}>
						<input
							type='text'
							className={cn(
								styles.search,
								!isOpenSearch ? styles.closed : styles.open
							)}
							ref={searchRef}
							placeholder='Search'
						/>
						<button onClick={() => toggleSearch()}>
							<RiSearchLine
								size={18}
								className={cn(styles.searchIcon, isOpenSearch && styles.active)}
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
													unoptimized
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
							<SkeletonLoader className={styles.loader} />
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default memo(Heading)
