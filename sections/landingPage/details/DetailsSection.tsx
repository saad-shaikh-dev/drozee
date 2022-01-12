import Emoji from 'components/emoji/Emoji';

import HeadingSVG from 'assets/sections/details/heading_background.svg';
import FirstSVG from 'assets/sections/details/detail_first.svg';
import SecondSVG from 'assets/sections/details/detail_second.svg';
import ThirdSVG from 'assets/sections/details/detail_third.svg';

import styles from './DetailsSection.module.scss';

const DetailsSection = () => {
	return (
		<section className={styles.DetailSection}>
			<h2 className={styles.SectionHeading}>
				Join to become part of fastest growing community
				<div className={styles.SectionHeadingHighlightContainer}>
					<h2 className={styles.SectionHeadingHighlight}>why?</h2>
					{/* <HeadingSVG /> */}
					<svg
						width='114'
						height='82'
						viewBox='0 0 114 82'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							x1='14.4314'
							y1='25.7087'
							x2='77.7087'
							y2='16.5686'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='27'
							strokeLinecap='round'
						/>
						<line
							x1='39.1988'
							y1='47.2043'
							x2='78.0453'
							y2='16.7153'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='27'
							strokeLinecap='round'
						/>
						<line
							x1='39.4694'
							y1='47.4093'
							x2='97.4141'
							y2='31.5444'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='27'
							strokeLinecap='round'
						/>
					</svg>
				</div>
			</h2>
			<div className={styles.DetailsContainer}>
				<div className={styles.DetailsWrapper}>
					<div className={[styles.SVGContainer, styles.SVGLeft].join(' ')}>
						<FirstSVG />
					</div>
					<div className={styles.ContentContainer}>
						<h3 className={styles.Heading}>
							Become a better version of you,
							<span className={styles.HighlightGreen}> Everyday!</span>
						</h3>
						<p className={styles.Para}>
							Follow AI Guided learning Recommendation, compare 1000s of
							courses. Learn only those skills that are required! Follow tips &
							sugesions to stand ahead of rat race.
						</p>
						<p className={styles.FunPartPara}>
							<span className={styles.FunPartParaHighlight}>Fun Part: </span>We
							don’t own a single paid course. Ours will be free. God promise.{' '}
							<Emoji symbol='&#128526;' label='smiling face with sunglasses' />
						</p>
					</div>
				</div>
				<div className={styles.DetailsWrapper}>
					<div className={styles.ContentContainer}>
						<h3 className={styles.Heading}>
							Let us sort everything for you,
							<span className={styles.HighlightYellow}> Important One!</span>
						</h3>
						<p className={styles.Para}>
							CV, Portfolio, Academics documents & your skill certificates.
							Everything will be at one place, Seriously that paper file system
							is outdated and corporate trust us.
						</p>
						<p className={styles.FunPartPara}>
							<span className={styles.FunPartParaHighlight}>Bonus: </span>
							We’ll reward you for your activities with points or vouchers.
							<Emoji symbol='&#127881;' label='celebration, party hat' />
						</p>
					</div>
					<div className={[styles.SVGContainer, styles.SVGRight].join(' ')}>
						<SecondSVG />
					</div>
				</div>
				<div className={styles.DetailsWrapper}>
					<div className={[styles.SVGContainer, styles.SVGLeft].join(' ')}>
						<ThirdSVG />
					</div>
					<div className={styles.ContentContainer}>
						<h3 className={styles.Heading}>
							Something should be surprise,
							<span className={styles.HighlightMagenta}> Signup Now!</span>
						</h3>
						<p className={styles.Para}>
							Our team of good product designers & developers are working day &
							night to introduce new features. Jobs, Interships & many more
							coming soon.
						</p>
						<p className={styles.FunPartPara}>
							<span className={styles.FunPartParaHighlight}>Secret: </span>
							We’re too excited so typed random features and now we have to work
							on random features.
							<Emoji
								symbol='&#128517;'
								label='smiling face with open mouth and cold sweat emoji'
							/>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailsSection;
