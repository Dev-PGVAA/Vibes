import cn from 'clsx'
import type { Dispatch, SetStateAction } from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'

export function LikeBtn({
	isLike,
	setIsLike
}: {
	isLike: boolean
	setIsLike?: Dispatch<SetStateAction<boolean | undefined>>
}) {
	return (
		<button>
			<TiHeartFullOutline
				size={32}
				className={cn('p-[5px] m-1 rounded-full  duration-150')}
				fill='transparent'
				stroke='#ffffff33'
				strokeWidth={2}
			/>
		</button>
	)
}
