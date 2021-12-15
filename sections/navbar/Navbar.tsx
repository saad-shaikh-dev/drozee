import Link from 'components/link/Link';
import Logo from 'assets/logo/dashed_logo.svg';

import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<div className={styles.Logo_Container}>
				<Logo />
				<p className={styles.Company_Name}>Drozee</p>
			</div>
			<ul className={styles.Navbar_Links_Container}>
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
						Beta Access
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
