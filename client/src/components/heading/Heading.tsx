'use client'

import { useProfile } from '@/hooks/useProfile'
import styles from './profile.module.scss'

import { PUBLIC_PAGES } from '@/config/page-url.config'
import cn from 'clsx'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { BsBellFill } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import { GoHistoryBtn } from '../ui/buttons/GoHistoryBtn'
import { LogoutBtn } from '../ui/buttons/LogoutBtn'
import SkeletonLoader from '../ui/loaders/SkeletonLoader'

function Heading() {
	const [isOpenSearch, setIsOpenSearch] = useState(false)
	const { user, isLoading } = useProfile()
	const pathname = usePathname()
	const searchRef = useRef<HTMLInputElement>(null)
	const [isShowBtnLogout, setIsShowBtnLogout] = useState(false)

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
										<LogoutBtn className={styles.logout} />
										<Image
											src={user.profile.avatar}
											alt='Ava'
											className={styles.photo}
											height={40}
											width={40}
											draggable={false}
										/>
									</>
								)}
							</>
						) : (
							<p className='h-10 w-10 -translate-y-1'>
								<SkeletonLoader className='h-10 w-10' borderRadius={9999} />
							</p>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default React.memo(Heading)
