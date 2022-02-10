import Image from 'next/image';

import LoveEachOtherImg from 'public/career_love_each_other.png';
import SolveProblemImg from 'public/career_solve_problem.png';
import CareerLearnAndGrowImg from 'public/career_learn_and_grow.png';

const DetailsSection = () => {
	return (
		<section className='section'>
			<div>
			<h2 className='max-w-xl mx-auto text-center text-6xl font-bold text-primary'>
				Our values
			</h2>
			<p className='max-w-2xl mx-auto mt-4 text-lg text-center'>
					"Our values are the underpinning for all that we do at Drozee — we believe that a great product is going to solve people's problem."
				</p>
			</div>
			<div className='mt-20 flex flex-col flex-vertical'>
				<div className='flex-horizontal'>
					<div className='max-w-lg flex flex-col gap-5'>
						<h3 className='text-6xl font-serif leading-tight text-secondary'>
							Love
							<br /> each other
						</h3>
						<p className='text-lg text-primary'>
							We find people who add to our culture, not just fit in. We look
							beyond alma maters and the in-crowd for people with diverse
							backgrounds, unique experiences and new perspectives that will
							move us forward.
						</p>
					</div>
					<div className='min-w-[450px] min-h-[362px] relative'>
						<div className='w-full h-full rounded-tl-3xl rounded-bl-3xl overflow-hidden'>
							<Image
								src={LoveEachOtherImg}
								width={450}
								height={362}
								alt='Love each other'
								className='w-full h-full object-cover'
							/>
						</div>
						<svg
							className='absolute -bottom-[20%] -left-[20%] -z-[1]'
							width='217'
							height='180'
							viewBox='0 0 217 180'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M215.192 21.2535L121.669 177.846L1.93562 2.00005L215.192 21.2535Z'
								stroke='#5645BA'
								strokeWidth='3.06'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
				<div className='flex-horizontal-reverse'>
					<div className='max-w-lg flex flex-col gap-5'>
						<h3 className='text-6xl font-serif leading-tight text-secondary'>
							Solve
							<br /> problems
						</h3>
						<p className='text-lg text-primary'>
							Our goal at Drozee is to help people who have potential to work
							but no one gave them the opportunity.
						</p>
					</div>
					<div className='min-w-[450px] min-h-[362px] relative'>
						<div className='w-full h-full rounded-tr-3xl rounded-br-3xl overflow-hidden'>
							<Image
								src={SolveProblemImg}
								width={450}
								height={362}
								alt='Solve Problems'
								className='w-full h-full object-cover'
							/>
						</div>
						<svg
							className='absolute -bottom-[15%] -right-[15%] -z-[1]'
							width='199'
							height='199'
							viewBox='0 0 199 199'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.875 99.9096C1.875 46.0457 45.5381 2.37842 99.402 2.37842C153.266 2.37842 196.929 46.0457 196.929 99.9096C196.929 153.773 153.266 197.42 99.402 197.42C45.5381 197.42 1.875 153.773 1.875 99.9096Z'
								stroke='#5645BA'
								strokeWidth='3.06'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
				<div className='flex-horizontal'>
					<div className='max-w-lg flex flex-col gap-5'>
						<h3 className='text-6xl font-serif leading-tight text-secondary'>
							Learn
							<br /> and grow
						</h3>
						<p className='text-lg text-primary'>
							We help each other on learning process so that we are growing
							together as team and as individuals.
						</p>
					</div>
					<div className='min-w-[450px] min-h-[362px] relative'>
						<div className='w-full h-full rounded-tl-3xl rounded-bl-3xl overflow-hidden'>
							<Image
								src={CareerLearnAndGrowImg}
								width={450}
								height={362}
								alt='Learn and grow'
								className='w-full h-full object-cover'
							/>
						</div>
						<svg
							className='absolute -bottom-[15%] -left-[15%] -z-[1]'
							width='247'
							height='247'
							viewBox='0 0 247 247'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='-0.709827'
								y='70.5595'
								width='190.868'
								height='190.868'
								rx='9.47'
								transform='rotate(-21.9733 -0.709827 70.5595)'
								stroke='#5645BA'
								strokeWidth='3.06'
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailsSection;
