'use client'

import { useContext } from 'react'
import {
	TbLayoutSidebarLeftCollapseFilled,
	TbLayoutSidebarRightCollapseFilled
} from 'react-icons/tb'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '../tooltip/tooltip'

import styles from './CollapseSidebar.module.scss'
import { SidebarContext } from '@/app/providers'

export function CollapseSidebar() {
	const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext)

	return (
		<TooltipProvider delayDuration={700}>
			<Tooltip>
				<TooltipTrigger onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
					{isOpenSidebar ? (
						<TbLayoutSidebarLeftCollapseFilled size={25} />
					) : (
						<TbLayoutSidebarRightCollapseFilled size={25} />
					)}
				</TooltipTrigger>
				<TooltipContent
					side={isOpenSidebar ? 'left' : 'right'}
					sideOffset={5}
					className={styles.tooltip}
					arrowClassName={styles.tooltipArrow}
				>
					<p>Collapse sidebar</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
