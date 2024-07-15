import { PrivateNavigation } from '@/ui/private-navigation/PrivateNavigation'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<PrivateNavigation />
			{children}
		</>
	)
}
