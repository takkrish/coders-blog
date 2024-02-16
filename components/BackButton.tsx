'use client';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className='relative w-fit flex gap-4 items-center cursor-pointer'>
			<ArrowLeftCircleIcon className='w-8 h-8' />
			<p className='font-medium text-sm'>Back</p>
		</div>
	);
};

export default BackButton;
