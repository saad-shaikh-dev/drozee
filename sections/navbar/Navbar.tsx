import { useState } from 'react';

import Link from 'next/link';
import MonitorLogo from 'assets/logo/big_primary_dashed_logo.svg';
import PrimaryLogo from 'assets/logo/small_primary_dashed_logo.svg';
import WhiteLogo from 'assets/logo/small_white_dashed_logo.svg';

const Navbar = () => {
	const [menu, showMenu] = useState(false);
	// Hamberger menu click handler
	// Change css classes
	const onMobileMenuClick = () => {
		const prevMenuState = menu;
		showMenu(!prevMenuState);
	};

	return (
		<nav className='w-full absolute top-2 left-0 right-0 min-h-[8vh]'>
			<div className='py-6 px-20 flex justify-between items-center'>
				<div className='w-max'>
					<Link href='/' passHref>
						<a
							title='Home'
							aria-label='Home'
							className='flex justify-center items-center gap-3'
						>
							<MonitorLogo aria-label='Logo' />
							<p className='text-xl font-medium text-primary'>Drozee</p>
						</a>
					</Link>
				</div>
				<ul className='flex justify-center items-center gap-12'>
					<li>
						<Link href='/' passHref>
							<a
								title='Products'
								aria-label='Products'
								className='flex justify-center items-center gap-2 text-white'
							>
								<p>Products</p>
								<svg
									width='9'
									height='5'
									viewBox='0 0 9 5'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1 1L4.5 4L8 1'
										stroke='white'
										strokeWidth='1.5'
										strokeLinecap='round'
									/>
								</svg>
							</a>
						</Link>
					</li>
					<li>
						<Link href='/' passHref>
							<a className='text-white'>Know us</a>
						</Link>
					</li>
					<li>
						<Link href='/' passHref>
							<a className='text-white'>Partners</a>
						</Link>
					</li>
					<li>
						<Link href='/' passHref>
							<a className='bg-primary-light text-primary py-3 px-7 rounded-3xl font-semibold text-base'>
								Alpha Access
							</a>
						</Link>
					</li>
				</ul>
			</div>
			{/* <div>
				<div>
					<Link href='/' passHref>
						{menu ? <WhiteLogo /> : <PrimaryLogo />}
					</Link>
				</div>
				<ul>
					<li>
						<Link href='/' passHref>
							Products
						</Link>
					</li>
					<li>
						<Link href='/' passHref>
							Features
						</Link>
					</li>
					<li>
						<Link href='/' passHref>
							Alpha Access
						</Link>
					</li>
				</ul>
				<button onClick={onMobileMenuClick}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div> */}
		</nav>
	);
};

export default Navbar;
