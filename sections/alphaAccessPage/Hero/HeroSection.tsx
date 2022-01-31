import { useState, useRef } from 'react';

const HeroSection = () => {
	const [isSubmited, setIsSubmited] = useState(false);

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const institutionRef = useRef<HTMLInputElement>(null);

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (
			nameRef &&
			nameRef.current &&
			emailRef &&
			emailRef.current &&
			institutionRef &&
			institutionRef.current
		) {
			console.log(
				nameRef.current.value,
				emailRef.current.value,
				institutionRef.current.value
			);
			setIsSubmited(true);
			setInterval(() => {
				setIsSubmited(false);
			}, 2000);
			// Reset Form
			nameRef.current.value = '';
			emailRef.current.value = '';
			institutionRef.current.value = '';
		}
	};

	return (
		<section className='w-full min-h-screen'>
			<div className='pl-20 flex justify-between items-center'>
				<div className='w-3/6 flex flex-col justify-center items-start gap-10'>
					<h1 className='max-w-[590px] text-5xl font-serif leading-snug text-black'>
						Apply for Early Access
					</h1>
					<div className='max-w-[590px] flex flex-wrap justify-start items-center gap-4'>
						<span className='py-1 px-3 bg-primary-light text-secondary text-base font-medium rounded tracking-wide'>
							Founding User Badge
						</span>
						<span className='py-1 px-3 bg-primary-light text-secondary text-base font-medium rounded tracking-wide'>
							Exclusive perks
						</span>
						<span className='py-1 px-3 bg-primary-light text-secondary text-base font-medium rounded tracking-wide'>
							Premium Access
						</span>
						<span className='py-1 px-3 bg-primary-light text-secondary text-base font-medium rounded tracking-wide'>
							More Surprises for Alpha Users
						</span>
					</div>
				</div>
				<div className='w-3/6 min-h-[calc(100vh-5vh)] bg-primary rounded-tl-[100px] rounded-br-[100px] flex justify-start items-center'>
					<form className='px-14' onSubmit={(event) => onSubmitHandler(event)}>
						<div className='py-10 px-14 bg-white rounded-xl flex flex-col gap-4 shadow-2xl shadow-[rgba(0,0,0,0.25)]'>
							<h2 className='mb-4 text-2xl font-normal font-serif text-center'>
								Please fill this form
							</h2>
							<div className='w-full flex flex-col justify-start items-start gap-4'>
								<label className='w-full'>
									<p className='text-base font-normal text-black mb-2'>Name</p>
									<input
										type='text'
										required
										ref={nameRef}
										placeholder='Enter your name'
										className='w-full py-2 px-3 bg-primary-light text-secondary rounded-md focus:outline-secondary'
									/>
								</label>
								<label className='w-full'>
									<p className='text-base font-normal text-black mb-2'>Email</p>
									<input
										type='email'
										required
										ref={emailRef}
										placeholder='Enter your email'
										className='w-full py-2 px-3 bg-primary-light text-secondary rounded-md focus:outline-secondary'
									/>
								</label>
								<label className='w-full'>
									<p className='text-base font-normal text-black mb-2'>
										Institution/University
									</p>
									<input
										type='text'
										ref={institutionRef}
										required
										placeholder='Enter your institution/university'
										className='w-full py-2 px-3 bg-primary-light text-secondary rounded-md focus:outline-secondary'
									/>
								</label>
							</div>
							<p className='text-xs font-light'>
								by clicking “submit” I agree for{' '}
								<span className='text-secondary'>privacy policy</span>
							</p>
							<button
								type='submit'
								className='py-2 px-8 w-max mx-auto text-base font-medium bg-support-1 rounded-3xl text-black'
								aria-label='Submit'
							>
								{isSubmited ? 'Submited' : 'Submit'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
