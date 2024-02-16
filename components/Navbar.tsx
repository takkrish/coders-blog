import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/icons/Logo.svg';

const Navbar = () => {
	return (
		<nav className='w-full py-4 border-b shadow-sm border-zinc-100 sticky top-0 bg-white z-50'>
			<div className='container mx-auto flex items-center justify-between'>
				<Link href={'/'} className='flex gap-x-8 items-center'>
					<div className='w-10 h-10 relative'>
						<Image src={Logo} alt='Logo' fill />
					</div>
					<p className='font-semibold'>Coder&apos;s Blog</p>
				</Link>
				<ul className='flex gap-x-8 font-medium'>
					<li>
						<Link href={'/'}>Products</Link>
					</li>
					<li>
						<Link href={'/'}>Pricing</Link>
					</li>
					<li>
						<Link href={'/'}>Docs</Link>
					</li>
					<li>
						<Link href={'/'}>Company</Link>
					</li>
				</ul>
				<div className='flex gap-x-8 items-center font-medium'>
					<Link href={'/'}>Log in</Link>
					<button className='bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md text-white'>
						Sign in
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
