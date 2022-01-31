import { useState, useRef } from 'react';
import axios from 'utils/axiosInstance';

const NewsletterSection = () => {
	const [isSubscribed, setIsSubscribed] = useState(false);
	const emailRef = useRef<HTMLInputElement>(null);

	const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (emailRef && emailRef.current) {
			await axios({
				method: 'POST',
				url: 'api/newsletter',
				headers: {
					'content-type': 'application/json'
				},
				data: {
					email: emailRef.current.value
				}
			})
				.then((res) => {
					if (res.status === 200) {
						setIsSubscribed(true);
						setInterval(() => {
							setIsSubscribed(false);
						}, 2000);
					}
				})
				.catch((err) => {
					console.log(err);
				});
			// Reset Form
			emailRef.current.value = '';
		}
	};

	return (
		<section className='overflow-hidden relative pt-36 pb-52 px-8'>
			<h2 className='text-center text-3xl font-bold font-serif'>
				Subscribe to your newsletter & get latest updates!
			</h2>
			<form
				className='mt-14 relative z-[1] flex justify-center items-center'
				onSubmit={(event) => onSubmitHandler(event)}
			>
				<input
					type='email'
					required
					ref={emailRef}
					placeholder='Enter your email'
					className='w-72 py-4 px-6 rounded-l-md bg-primary-light focus:outline-none'
				/>
				<button
					type='submit'
					aria-label='Subscribe'
					className={`text-white ${
						isSubscribed ? 'bg-support-1' : 'bg-primary'
					}  py-4 px-6 rounded-r-md hover:cursor-pointer`}
				>
					{isSubscribed ? 'Subscribed' : 'Subscribe'}
				</button>
			</form>
			<svg
				className='absolute bottom-0 left-0 right-0'
				width='1437'
				height='255'
				viewBox='0 0 1437 255'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_611_637)'>
					<path
						d='M-21 160.769C74.8629 133.991 296.462 109.446 415.955 225.481C565.321 370.524 822.023 270.511 926.477 185.315C1041.52 91.4862 1187.31 -26.6721 1437 51.4282'
						stroke='#292953'
						strokeWidth='3'
					/>
					<path
						d='M-39.2148 79.1313C7.572 145.845 194.281 329.617 488.432 222.09C681.696 151.441 874.517 163.451 1001.88 202.44C1129.24 241.428 1447.73 242.12 1483.45 84.553'
						stroke='#5645BA'
						strokeWidth='3'
					/>
				</g>
				<defs>
					<clipPath id='clip0_611_637'>
						<rect width='1437' height='255' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</section>
	);
};

export default NewsletterSection;
