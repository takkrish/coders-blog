import { Article } from '@/types';
import React from 'react';
import ArticleCard from './ArticleCard';

type Props = {
	articles: Article[];
};

const Articles = ({ articles }: Props) => {
	return (
		<div className='w-full mt-16 grid grid-cols-2 gap-16'>
			{articles.map((item, idx) => {
				return <ArticleCard key={idx} article={item} />;
			})}
		</div>
	);
};

export default Articles;
