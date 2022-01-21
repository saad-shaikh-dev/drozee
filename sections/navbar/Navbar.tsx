import { useState } from 'react';

import Link from 'components/link/Link';
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
		<nav>
			<div>
				<div>
					<Link href='/' title='Logo' ariaLabel='Logo'>
						<MonitorLogo />
						<p>Drozee</p>
					</Link>
				</div>
				<ul>
					<li>
						<Link href='/' type='light' title='Partners' ariaLabel='Partners'>
							<span>
								<p>Partners</p>
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
							</span>
						</Link>
					</li>
					<li>
						<Link href='/' type='light' title='Features' ariaLabel='Features'>
							Features
						</Link>
					</li>
					<li>
						<Link
							href='/'
							type='action-light'
							title='Beta Access'
							ariaLabel='Beta Access'
						>
							Alpha Access
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<div>
					<Link href='/' title='Logo' ariaLabel='Logo'>
						{menu ? <WhiteLogo /> : <PrimaryLogo />}
					</Link>
				</div>
				<ul>
					<li>
						<Link href='/' type='light' title='Partners' ariaLabel='Partners'>
							Partners
						</Link>
					</li>
					<li>
						<Link href='/' type='light' title='Features' ariaLabel='Features'>
							Features
						</Link>
					</li>
					<li>
						<Link
							href='/'
							type='action-light'
							title='Beta Access'
							ariaLabel='Beta Access'
						>
							Alpha Access
						</Link>
					</li>
				</ul>
				<button onClick={onMobileMenuClick}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
