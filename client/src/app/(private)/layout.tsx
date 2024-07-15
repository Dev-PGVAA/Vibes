import type { PropsWithChildren } from 'react'

import PrivateDashboardLayout from '@/components/dashboard-layout/PrivateDashboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <PrivateDashboardLayout>{children}</PrivateDashboardLayout>
}
