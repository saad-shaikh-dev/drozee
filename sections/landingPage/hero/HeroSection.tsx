import Link from 'next/link';
import Image from 'next/image';

import DashboardImg from 'public/dashboard_demo.png';

const HeroSection = () => {
	return (
		<section className='w-full'>
			<div className='pl-20 flex justify-between items-center'>
				<div className='w-3/6 flex flex-col justify-center items-start gap-10'>
					<h1 className='max-w-[590px] text-5xl font-serif leading-snug'>
						Amp up learning potential via
						<span className='text-secondary'> synergizing credentials</span>
					</h1>
					<h4 className='max-w-[560px] text-base'>
						Now manage, Compare & showcase your whole learning journey at one
						place. Save time & money.
					</h4>
					<div className='w-full mt-10'>
						<form className='w-full flex justify-start items-center'>
							<input
								className='w-3/6 py-3 px-6 text-base rounded-l-md bg-primary-light focus:outline-none'
								type='email'
								placeholder='Add your email in waitlist'
							/>
							<button
								type='submit'
								aria-label='Join beta accses'
								className='py-4 px-6 rounded-r-md text-white bg-primary hover:cursor-pointer'
							>
								<svg
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
							</button>
						</form>
						<p className='mt-4 text-xs'>
							Don’t worry, we won’t charge our alpha users. Free forever{' '}
							<Link href='/alpha-access' passHref>
								<a
									className='text-secondary'
									title='Join alpha Program'
									aria-label='Join alpha Program'
								>
									join now.
								</a>
							</Link>
						</p>
					</div>
				</div>
				<div className='w-3/6 min-h-[calc(100vh-5vh)] bg-primary rounded-tl-[100px] rounded-br-[100px] flex justify-center items-center'>
					<div className='w-full relative right-[10%]'>
						<Image src={DashboardImg} alt='Dashboard' className='scale-110' />
						<div className='absolute bottom-2 right-0 w-[180px] h-[160px] px-4 text-white bg-primary rounded-lg border-2 border-primary-light flex flex-col justify-center items-center gap-4'>
							<p className='text-base font-serif'>
								Learn Master classes for New Hights of Career
							</p>
							<button className='py-2 px-6 text-white bg-support-1 rounded-md text-xs'>
								More
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
