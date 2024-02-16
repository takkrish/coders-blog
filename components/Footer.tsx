import Image from 'next/image';
import Logo from '@/public/icons/Logo.svg';
import {
	GlobeAltIcon,
	GlobeAmericasIcon,
	GlobeAsiaAustraliaIcon,
	GlobeEuropeAfricaIcon,
} from '@heroicons/react/24/solid';

const Footer = () => {
	return (
		<nav className='w-full  bg-white z-50 py-4 border-b shadow-sm border-zinc-100 text-xs font-medium mt-16 border-t border-t-zinc-100'>
			<div className='container mx-auto flex items-center justify-between'>
				<div className='flex gap-x-4 items-center'>
					<div className='w-6 h-6 relative'>
						<Image src={Logo} alt='Logo' fill />
					</div>
					<p className='font-semibold'>Coder&apos;s Blog</p>
					<span className='h-6 w-0 border-x border-zinc-100'></span>
					<p className='text-zinc-400'>
						@2024 Coders&apos; blog - @takrishtak2002@gmail.com
					</p>
				</div>
				<div className='flex gap-x-4 items-center'>
					<GlobeAltIcon className='w-6 h-6' />
					<GlobeAmericasIcon className='w-6 h-6' />
					<GlobeAsiaAustraliaIcon className='w-6 h-6' />
					<GlobeEuropeAfricaIcon className='w-6 h-6' />
				</div>
			</div>
		</nav>
	);
};

export default Footer;
