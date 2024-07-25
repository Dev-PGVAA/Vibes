'use client'

import { LogoutDocument } from '@/__generated__/output'
import { PUBLIC_PAGES } from '@/config/page-url.config'
import { removeFromStorage } from '@/services/user/auth/auth.helper'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { LuLogOut } from 'react-icons/lu'

export function LogoutBtn({ className }: { className: string }) {
	const { push } = useRouter()

	const [mutate, { data, error }] = useMutation(LogoutDocument, {
		onCompleted: () => {
			if (!error) {
				if (data) removeFromStorage()

				localStorage.clear()
				sessionStorage.clear()

				push(PUBLIC_PAGES.AUTH)
			}
		},
	})

	return (
		<button className={className} onClick={() => mutate()}>
			<LuLogOut size={24} />
		</button>
	)
}
