'use client';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const CategoriesComponent = ({ categories }: { categories: Category[] }) => {
	const pathname = usePathname();
	// const searchparams = useSearchParams();
	// const params = new URLSearchParams(searchparams);
	// params.set('category', 'nodejs');
	// params.set('level', 'nodejs');
	// params.set('date', 'nodejs');
	// console.log(params.toString());

	const activeClass = 'border-zinc-800';

	return (
		<div className='w-full mt-8 font-medium text-sm'>
			<div className='container mx-auto flex gap-x-8 border-b border-b-zinc-100'>
				<Link
					href={'#'}
					className={`pb-2 border-b-4 rounded-sm ${
						pathname === '/'
							? activeClass
							: 'text-zinc-400 border-white'
					}`}>
					Recents
				</Link>
				{categories.map(({ attributes: { slug, title } }, idx) => {
					return (
						<Link
							key={idx}
							href={`/category/${slug}`}
							className='pb-4 rounded-sm text-zinc-400 border-b border-white'>
							{title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default CategoriesComponent;
