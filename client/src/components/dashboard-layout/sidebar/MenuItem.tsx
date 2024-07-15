import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ADMIN_PAGES, SINGER_PAGES } from '@/config/page-url.config'
import cn from 'clsx'
import styles from '../dashboard-layout.module.scss'
import type { IMenuItem } from './menu.interface'

export function MenuItem({
	item,
	role,
}: {
	item: IMenuItem
	role: string | undefined
}) {
	const pathname = usePathname()

	return (
		<>
			<div>
				<Link
					href={item.link}
					className={cn(
						'flex items-center py-2 pr-layout pl-2 transition-colors cursor-pointer gap-5 mt-2',
						pathname !== item.link && styles.inactive
					)}
				>
					<item.icon size={22} />
					<span className='font-light -translate-x-1 text-sm'>{item.name}</span>
				</Link>
			</div>
			{role === 'ADMIN' && item.link === ADMIN_PAGES.HOME && (
				<div className='h-[1px] my-5 w-[calc(100%-0.75rem)] bg-[#ffffff20]' />
			)}
			{role === 'SINGER' && item.link === SINGER_PAGES.HOME && (
				<div className='h-[1px] my-5 w-[calc(100%-0.75rem)] bg-[#ffffff20]' />
			)}
		</>
	)
}
