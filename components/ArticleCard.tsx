import { Article } from '@/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/utils';

type Props = {
	article: Article;
};

const ArticleCard = ({ article }: Props) => {
	const {
		title,
		slug,
		publishedAt,
		description,
		author: {
			data: {
				attributes: {
					email,
					username,
					profileImg: {
						data: {
							attributes: { url },
						},
					},
				},
			},
		},
	} = article.attributes;
	return (
		<Link href={`/article/${slug}`}>
			<article className='relative col-span-1 group'>
				<span className='absolute bg-zinc-100 ring-1 ring-zinc-200 rounded-xl z-0 -inset-6 scale-95 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100'></span>
				<div className='flex flex-col gap-4 z-10 relative'>
					<h3 className='font-bold text-lg'>{title}</h3>
					<div className='flex gap-2 items-center text-sm font-medium'>
						<div className='relative w-8 h-8 ring-zinc-100'>
							<Image
								src={url}
								alt='profile img'
								fill
								sizes='32px'
								className='ring-2 ring-zinc-100 rounded-md object-cover'
							/>
						</div>
						<span>{username}</span>
						<span className='text-zinc-400'>
							{formatDate(publishedAt)}
						</span>
					</div>
					<p className='text-sm'>{description}</p>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maiores minima culpa dolore cumque, accusamus numquam
						qui ipsum ad nam quod nobis blanditiis, dolorem,
						similique eligendi modi ipsa itaque saepe earum! Commodi
						id odio similique aut dolorum quas aspernatur temporibus
						voluptatum rerum, deserunt dolor labore cum voluptate
						delectus molestias repudiandae doloribus minus
						voluptatem recusandae accusamus. Doloremque natus vel
						laudantium porro. Voluptate repudiandae quas iste
						quisquam dicta rem facilis minus, dolor rerum voluptas
						qui! Quam accusamus et commodi labore illum vel ducimus,
						consequuntur consectetur! Sit odit incidunt ad eaque
						amet hic earum dolorum, voluptates dicta ullam adipisci
						fuga deserunt perferendis. Quo, aliquam?
					</p>
				</div>
			</article>
		</Link>
	);
};

export default ArticleCard;
