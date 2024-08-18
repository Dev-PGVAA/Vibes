'use client'

import Image from 'next/image'

import SkeletonLoader from '@/components/ui/loaders/SkeletonLoader'

import { useGetCountriesRating } from '../../hooks/users/useGetCountriesRating'

export function Countries() {
	const { data, isLoading } = useGetCountriesRating()

	return (
		<div className='w-[92%] bg-player rounded-xl px-7 py-3'>
			{isLoading ? (
				<SkeletonLoader
					repeat={6}
					className='h-12 rounded-lg mb-2'
				/>
			) : (
				<>
					{data?.map((item, _) => (
						<div className='grid grid-cols-[20px_auto_auto] gap-5 items-center h-12 mb-2'>
							<span className='opacity-60 select-none'>{_ + 1}</span>
							<div className='flex items-center gap-4 truncate'>
								<Image
									src={item.icon}
									height={35}
									width={35}
									alt='i'
									className='rounded-full'
								/>
								<p className='text-xl selection:text-black truncate'>
									{item.country}
								</p>
							</div>
							<span className='text-xl opacity-60 ml-auto select-none'>
								{item.count}
							</span>
						</div>
					))}
				</>
			)}
		</div>
	)
}
