import React from 'react';

type Props = {
	params: { slug: String };
	searchParams: {};
};

const Slug = ({ params: { slug } }: Props) => {
	return <div>{slug}</div>;
};

export default Slug;
