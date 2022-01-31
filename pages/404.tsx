import Link from 'next/link';

import Logo from 'assets/logo/big_primary_dashed_logo.svg';
import Page404SVG from 'assets/sections/page404/page_404.svg';

const Page404 = () => {
	return (
		<section className='w-full min-h-screen relative flex justify-center items-center'>
			<div className='absolute top-8 left-[10%] flex justify-center items-center gap-4'>
				<Logo />
				<p className='text-2xl font-medium text-primary'>Drozee</p>
			</div>

			<div className='flex justify-between items-center gap-12'>
				<div className='flex-1'>
					<h2 className='text-5xl font-semibold text-primary'>Oops!</h2>
					<h2 className='text-5xl font-semibold text-primary uppercase'>
						Page Not Found
					</h2>
					<p className='mb-10 text-xl text-primary'>
						it looks like you’re lost...
					</p>
					<Link href='/' passHref>
						<a
							title='Go back home'
							aria-label='Go back home'
							className='py-4 px-6 text-white bg-primary text-lg rounded'
						>
							Go back home
						</a>
					</Link>
				</div>

				<div className='hidden xl:block flex-1'>
					<Page404SVG />
				</div>
			</div>
		</section>
	);
};

export default Page404;
