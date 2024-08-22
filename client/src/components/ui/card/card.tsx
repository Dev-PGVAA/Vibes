import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './card.module.scss'

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(styles.card, className)}
			{...props}
		/>
	)
)
Card.displayName = 'Card'

const CardHeader = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(styles.cardHeader, className)}
		{...props}
	/>
))
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(styles.cardTitle, className)}
		{...props}
	/>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn(styles.cardDescription, className)}
		{...props}
	/>
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(styles.cardContent, className)}
		{...props}
	/>
))
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(styles.cardFooter, className)}
		{...props}
	/>
))
CardFooter.displayName = 'CardFooter'

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
