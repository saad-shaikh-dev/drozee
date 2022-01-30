import { useRouter } from 'next/router';
import CareerHeroSVG from 'assets/sections/careerHero/career_hero.svg';

const HeroSection = () => {
	const router = useRouter();
	return (
		<section className='w-full'>
			<div className='pl-20 flex justify-between items-center'>
				<div className='w-3/6 flex flex-col justify-center items-start gap-10'>
					<h1 className='max-w-[590px] text-6xl font-serif leading-snug text-primary'>
						Careers at Drozee
					</h1>
					<h4 className='max-w-[560px] text-lg'>
						Our goal is to change the way of learning by offering free
						nanodegrees recognized by the industry!
					</h4>
					<div className='w-full mt-10'>
						<button
							className='py-4 px-6 bg-secondary text-white text-base font-medium rounded-lg tracking-wide'
							onClick={() => {
								router.push('/career/#job_openings');
							}}
						>
							See open positions
						</button>
					</div>
				</div>
				<div className='w-3/6 min-h-[calc(100vh-5vh)] bg-primary rounded-tl-[100px] rounded-br-[100px] flex justify-center items-center'>
					<CareerHeroSVG />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
