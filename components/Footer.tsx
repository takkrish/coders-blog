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
		<footer className='w-full bg-white z-50 py-4 border-b border-zinc-100 text-xs font-medium mt-16 border-t border-t-zinc-100'>
			<div className='container mx-auto flex flex-col md:flex-row gap-2 items-center justify-between'>
				<div className='flex sm:flex-row flex-col gap-2 sm:gap-4 items-center'>
					<div className='flex gap-x-2 items-center'>
						<div className='w-6 h-6 relative'>
							<Image src={Logo} alt='Logo' fill />
						</div>
						<p className='font-semibold'>Coder&apos;s Blog</p>
					</div>
					<span className='h-6 w-0 border-x border-zinc-100 hidden sm:block'></span>
					<p className='text-zinc-400 text-center'>
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
		</footer>
	);
};

export default Footer;
