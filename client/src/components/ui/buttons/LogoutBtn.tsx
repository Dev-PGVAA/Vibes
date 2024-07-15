'use client'

import { PUBLIC_PAGES } from '@/config/page-url.config'
import authService from '@/services/user/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { LuLogOut } from 'react-icons/lu'

export function LogoutBtn({ className }: { className: string }) {
	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			push(PUBLIC_PAGES.AUTH)
		},
	})

	return (
		<button className={className} onClick={() => mutate()}>
			<LuLogOut size={24} />
		</button>
	)
}
