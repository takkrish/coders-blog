'use client';
import { Category } from '@/types';

type PropType = {
	categories: Category[];
	categoryTitle: string;
	setCategoryTitle: Function;
};

const CategoriesComponent = ({
	categories,
	categoryTitle,
	setCategoryTitle,
}: PropType) => {
	const activeClass = 'border-zinc-800';

	return (
		<div className='w-full mt-8 font-medium text-sm'>
			<div className='container mx-auto flex gap-x-8 border-b border-b-zinc-100'>
				<button
					type='button'
					onClick={() => setCategoryTitle('Recents')}
					className={`pb-2 border-b-4 rounded-sm transition-all ${
						categoryTitle === 'Recents'
							? activeClass
							: 'text-zinc-400 border-white hover:text-zinc-500'
					}`}>
					Recents
				</button>
				{categories.map(({ attributes: { slug, title } }, idx) => {
					return (
						<button
							type='button'
							onClick={() => setCategoryTitle(title)}
							key={idx}
							className={`pb-2 border-b-4 rounded-sm transition-all ${
								categoryTitle === title
									? activeClass
									: 'text-zinc-400 border-white hover:text-zinc-500'
							}`}>
							{title}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default CategoriesComponent;
