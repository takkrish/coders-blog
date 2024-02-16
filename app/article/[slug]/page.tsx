import { getArticle } from '@/actions';
import ArticleCard from '@/components/ArticleCard';
import BackButton from '@/components/BackButton';
import { ArticlesResponse } from '@/types';
import { AxiosResponse } from 'axios';
import React from 'react';

type Props = {
	params: { slug: String };
	searchParams: {};
};

const Slug = async ({ params: { slug } }: Props) => {
	const resArticles: AxiosResponse<ArticlesResponse> = await getArticle(slug);
	const articles = resArticles.data.data;
	return (
		<main className='w-full py-8'>
			<div className='container mx-auto flex flex-col gap-y-8'>
				<BackButton />
				{articles.map((item, idx) => (
					// <div key={idx} className='flex flex-col gap-y-8'>
					// 	<h1 className='font-bold text-xl'>
					// 		{item.attributes.title}
					// 	</h1>
					// 	<p>{item.attributes.description}</p>
					// </div>
					<ArticleCard key={idx} article={item} />
				))}
			</div>
		</main>
	);
};

export default Slug;
