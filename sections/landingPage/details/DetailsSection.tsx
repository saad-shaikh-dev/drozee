import Emoji from 'components/emoji/Emoji';

import FirstSVG from 'assets/sections/details/detail_first.svg';
import SecondSVG from 'assets/sections/details/detail_second.svg';
import ThirdSVG from 'assets/sections/details/detail_third.svg';

const DetailsSection = () => {
	return (
		<section className='py-20 px-16'>
			<h2 className='max-w-xl mx-auto text-center text-3xl font-extrabold'>
				Join to become part of fastest growing community
				<div className='inline-block w-max relative ml-4'>
					<h2 className='text-white relative z-[1]'>why?</h2>
					<svg
						className='absolute -top-2 -left-4'
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
			<div className='mt-40 flex flex-col gap-40'>
				<div className='flex justify-between items-start'>
					<div className='min-w-[450px] flex justify-center items-center bg-primary rounded-tr-3xl rounded-br-3xl'>
						<FirstSVG />
					</div>
					<div className='max-w-2xl flex flex-col gap-5'>
						<h3 className='text-5xl font-extrabold leading-tight'>
							Become a better version of you,
							<span className='text-support-1'> Everyday!</span>
						</h3>
						<p className='text-xl'>
							Follow AI Guided learning Recommendation, compare 1000s of
							courses. Learn only those skills that are required! Follow tips &
							sugesions to stand ahead of rat race.
						</p>
						<p className='text-xl'>
							<span className='text-secondary font-medium'>Fun Part: </span>We
							don’t own a single paid course. Ours will be free. God promise.{' '}
							<Emoji symbol='&#128526;' label='smiling face with sunglasses' />
						</p>
					</div>
				</div>
				<div className='flex justify-between items-start'>
					<div className='order-2 min-w-[450px] flex justify-center items-center bg-primary rounded-tl-3xl rounded-bl-3xl'>
						<SecondSVG />
					</div>
					<div className='order-1 max-w-2xl flex flex-col gap-5'>
						<h3 className='text-5xl font-extrabold leading-tight'>
							Let us sort everything for you,
							<span className='text-support-2'> Important One!</span>
						</h3>
						<p className='text-xl'>
							CV, Portfolio, Academics documents & your skill certificates.
							Everything will be at one place, Seriously that paper file system
							is outdated and corporate trust us.
						</p>
						<p className='text-xl'>
							<span className='text-secondary font-medium'>Bonus: </span>
							We’ll reward you for your activities with points or vouchers.{' '}
							<Emoji symbol='&#127881;' label='celebration, party hat' />
						</p>
					</div>
				</div>
				<div className='flex justify-between items-start'>
					<div className='min-w-[450px] flex justify-center items-center bg-primary rounded-tr-3xl rounded-br-3xl'>
						<ThirdSVG />
					</div>
					<div className='max-w-2xl flex flex-col gap-5'>
						<h3 className='text-5xl font-extrabold leading-tight'>
							Something should be surprise,
							<span className='text-support-3'> Signup Now!</span>
						</h3>
						<p className='text-xl'>
							Our team of good product designers & developers are working day &
							night to introduce new features. Jobs, Interships & many more
							coming soon.
						</p>
						<p className='text-xl'>
							<span className='text-secondary font-medium'>Secret: </span>
							We’re too excited so typed random features and now we have to work
							on random features.{' '}
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
