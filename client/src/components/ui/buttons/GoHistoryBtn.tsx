import { usePathname } from 'next/navigation'
import { MdChevronLeft } from 'react-icons/md'

export function GoHistoryBtn({ action }: { action: 'back' | 'forward' }) {
	const pathname = usePathname()

	const goHistory = () => {
		if (action === 'back')
			document.referrer.replace(
				process.env.NEXT_PUBLIC_CLIENT_URL || 'https://localhost:3000',
				''
			) !== pathname && history.back()
		else history.forward()
	}

	return (
		<button
			onClick={() => goHistory()}
			className='p-[10px] rounded-full hover:bg-white-33 duration-200 bg-white-20'
		>
			<MdChevronLeft
				size={20}
				//@ts-ignore
				className={action === 'forward' && 'rotate-180'}
			/>
		</button>
	)
}
