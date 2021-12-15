import Link from 'components/link/Link';
import Button from 'components/button/Button';

import HeroSectionSVG from 'assets/sections/hero/hero_section.svg';
import HeroSectionBackgroundSVG from 'assets/sections/hero/hero_background.svg';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
	return (
		<section className={styles.HeroSectionPage}>
			<div className={styles.HeroSection}>
				<div className={styles.ContentContainer}>
					<h1 className={styles.Heading}>
						Become Distinguished, Different & <span>Skilled</span>
					</h1>
					<h4 className={styles.SubHeading}>
						Now manage, Compare & showcase your whole learning journey at one
						place. Save time & money.
					</h4>
					<form className={styles.HeroForm}>
						<input
							type='email'
							placeholder='Enter your email'
							className={styles.EmailInput}
						/>
						<Button type='submit' aria-label='Join beta accses'>
							<svg
								className={styles.BtnSVG}
								width='32'
								height='16'
								viewBox='0 0 32 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM31.7071 8.7071C32.0976 8.31658 32.0976 7.68341 31.7071 7.29289L25.3431 0.92893C24.9526 0.538406 24.3195 0.538406 23.9289 0.92893C23.5384 1.31945 23.5384 1.95262 23.9289 2.34314L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.7071ZM1 9L31 9L31 7L1 7L1 9Z'
									fill='white'
								/>
							</svg>
						</Button>
					</form>
					<p className={styles.Para}>
						Don’t worry, we won’t charge our beta users. Free forever{' '}
						<Link
							href='/'
							title='Join Beta Program'
							ariaLabel='Join Beta Program'
						>
							join now.
						</Link>
					</p>
					<div className={styles.NewsBanner}></div>
				</div>
				<div className={styles.HeroSVGContainer}>
					<span className={styles.HeroPeopleSVGContainer}>
						<HeroSectionSVG />
					</span>
					<span className={styles.HeroBackgroundSVGContainer}>
						<HeroSectionBackgroundSVG />
					</span>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
