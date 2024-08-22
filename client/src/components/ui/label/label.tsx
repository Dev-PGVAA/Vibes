'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './label.module.scss'

const Label = forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(styles.label, className)}
		{...props}
	/>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
