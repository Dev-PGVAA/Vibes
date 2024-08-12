'use client'

import { useMutation } from '@apollo/client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { LuLogOut } from 'react-icons/lu'

import { PUBLIC_PAGES } from '@/config/page-url.config'

import { LogoutDocument } from '@/__generated__/output'
import { EnumTokens } from '@/services/user/auth/auth.service'

export function LogoutBtn({ className }: { className: string }) {
	const { push } = useRouter()

	const [mutate, { data, error }] = useMutation(LogoutDocument, {
		onCompleted: () => {
			if (!error) {
				Cookies.remove(EnumTokens.ACCESS_TOKEN)

				localStorage.clear()
				sessionStorage.clear()

				push(PUBLIC_PAGES.AUTH)
			}
		}
	})

	return (
		<button
			className={className}
			onClick={() => mutate()}
		>
			<LuLogOut size={22} />
		</button>
	)
}
