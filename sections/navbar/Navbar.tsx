import { useState } from 'react';

import Link from 'components/link/Link';
import MonitorLogo from 'assets/logo/big_primary_dashed_logo.svg';
import PrimaryLogo from 'assets/logo/small_primary_dashed_logo.svg';
import WhiteLogo from 'assets/logo/small_white_dashed_logo.svg';

import styles from './Navbar.module.scss';

const Navbar = () => {
	const [menu, showMenu] = useState(false);
	// Hamberger menu click handler
	// Change css classes
	const onMobileMenuClick = () => {
		const prevMenuState = menu;
		showMenu(!prevMenuState);
	};

	let mobileNavbar = styles.CloseMenuMobileNavbar;
	let mobileNavbarLinkContainer = styles.CloseMenuMobileNavbar_Links_Container;
	let mobileMenuBtn = styles.CloseMenuBtn;

	if (menu) {
		mobileNavbar = [
			styles.CloseMenuMobileNavbar,
			styles.OpenMenuMobileNavbar
		].join(' ');
		mobileNavbarLinkContainer = [
			styles.CloseMenuMobileNavbar_Links_Container,
			styles.OpenMenuMobileNavbar_Links_Container
		].join(' ');
		mobileMenuBtn = [styles.CloseMenuBtn, styles.OpenMenuBtn].join(' ');
	}

	return (
		<nav className={styles.Navbar}>
			<div className={styles.MonitorNavbar}>
				<div className={styles.MonitorLogo_Container}>
					<Link href='/' title='Logo' ariaLabel='Logo'>
						<MonitorLogo />
						<p className={styles.Company_Name}>Drozee</p>
					</Link>
				</div>
				<ul className={styles.MonitorNavbar_Links_Container}>
					<li className={styles.Navbar_Link}>
						<Link href='/' type='light' title='Partners' ariaLabel='Partners'>
							Partners
						</Link>
					</li>
					<li className={styles.Navbar_Link}>
						<Link href='/' type='light' title='Features' ariaLabel='Features'>
							Features
						</Link>
					</li>
					<li className={styles.Navbar_Link}>
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
			<div className={mobileNavbar}>
				<div className={styles.MobileLogo_Container}>
					<Link href='/' title='Logo' ariaLabel='Logo'>
						{menu ? <WhiteLogo /> : <PrimaryLogo />}
					</Link>
				</div>
				<ul className={mobileNavbarLinkContainer}>
					<li className={styles.Navbar_Link}>
						<Link href='/' type='light' title='Partners' ariaLabel='Partners'>
							Partners
						</Link>
					</li>
					<li className={styles.Navbar_Link}>
						<Link href='/' type='light' title='Features' ariaLabel='Features'>
							Features
						</Link>
					</li>
					<li className={styles.Navbar_Link}>
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
				<button className={mobileMenuBtn} onClick={onMobileMenuClick}>
					<span></span>
					<span></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
