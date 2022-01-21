import Emoji from 'components/emoji/Emoji';

import HeadingSVG from 'assets/sections/details/heading_background.svg';
import FirstSVG from 'assets/sections/details/detail_first.svg';
import SecondSVG from 'assets/sections/details/detail_second.svg';
import ThirdSVG from 'assets/sections/details/detail_third.svg';

const DetailsSection = () => {
	return (
		<section>
			<h2>
				Join to become part of fastest growing community
				<div>
					<h2>why?</h2>
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
			<div>
				<div>
					<div>
						<FirstSVG />
					</div>
					<div>
						<h3>
							Become a better version of you,
							<span> Everyday!</span>
						</h3>
						<p>
							Follow AI Guided learning Recommendation, compare 1000s of
							courses. Learn only those skills that are required! Follow tips &
							sugesions to stand ahead of rat race.
						</p>
						<p>
							<span>Fun Part: </span>We don’t own a single paid course. Ours
							will be free. God promise.{' '}
							<Emoji symbol='&#128526;' label='smiling face with sunglasses' />
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3>
							Let us sort everything for you,
							<span> Important One!</span>
						</h3>
						<p>
							CV, Portfolio, Academics documents & your skill certificates.
							Everything will be at one place, Seriously that paper file system
							is outdated and corporate trust us.
						</p>
						<p>
							<span>Bonus: </span>
							We’ll reward you for your activities with points or vouchers.
							<Emoji symbol='&#127881;' label='celebration, party hat' />
						</p>
					</div>
					<div>
						<SecondSVG />
					</div>
				</div>
				<div>
					<div>
						<ThirdSVG />
					</div>
					<div>
						<h3>
							Something should be surprise,
							<span> Signup Now!</span>
						</h3>
						<p>
							Our team of good product designers & developers are working day &
							night to introduce new features. Jobs, Interships & many more
							coming soon.
						</p>
						<p>
							<span>Secret: </span>
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
