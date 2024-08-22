'use client'

import { ApolloProvider } from '@apollo/client/react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { type FC, type PropsWithChildren, createContext, useState } from 'react'

import { apolloClient } from '@/api/apollo-client'

export const SidebarContext = createContext<{
	isOpenSidebar: boolean
	setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}>({
	isOpenSidebar: false,
	setIsOpenSidebar: () => {}
})

const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false)

	return (
		<SidebarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}

export function Providers({ children }: PropsWithChildren) {
	return (
		<ApolloProvider client={apolloClient}>
			<LazyMotion features={domAnimation}>
				<SidebarProvider>{children}</SidebarProvider>
			</LazyMotion>
		</ApolloProvider>
	)
}
