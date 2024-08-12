import Link from 'next/link'

import { LogoutBtn } from '@/components/ui/buttons/LogoutBtn'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip/tooltip'

import type { IHeadingDropdown } from './dropdown.data'

export function DropDownItem({ item }: { item: IHeadingDropdown }) {
	return (
		<TooltipProvider delayDuration={200}>
			<Tooltip>
				<TooltipTrigger>
					{item.name === 'Logout' ? (
						<LogoutBtn className='w-5 h-5' />
					) : (
						<Link href={item.link}>
							<item.icon size={22} />
						</Link>
					)}
				</TooltipTrigger>
				<TooltipContent
					side='left'
					sideOffset={15}
				>
					<p>{item.name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
