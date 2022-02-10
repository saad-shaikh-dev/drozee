const JobOpeningSection = () => {
	return (
		<section
			className='section jobs-section'
			id='job_openings'
		>
			<h2 className='max-w-xl mx-auto text-center text-6xl font-bold text-primary'>
				Job Openings
			</h2>
			<p className='max-w-2xl mx-auto mt-4 text-lg text-center'>
				Explore our open roles for working totally remote.
			</p>
				{/* Product Related Jobs */}
				<div>
					<h3 className='text-2xl text-secondary font-bold'>Product</h3>
					<div className='w-full'>
						{/* Single Job Format */}
						<div className='flex justify-between items-center'>
							<h4 className='text-lg font-medium text-primary'>
								Chief Learning Officer
							</h4>
							<p className='text-lg text-primary'>Remote</p>
							<button className='py-2 px-6 rounded bg-primary text-white font-semibold cursor-pointer'>
								View More
							</button>
						</div>
					</div>
				</div>

			<svg className="jobs-svg" width="1437" height="255" viewBox="0 0 1437 255" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M-21 160.769c95.863-26.778 317.462-51.323 436.955 64.712 149.366 145.043 406.068 45.03 510.522-40.166C1041.52 91.486 1187.31-26.672 1437 51.428" stroke="#292953"/>
  <path d="M-39.215 79.131C7.572 145.845 194.281 329.617 488.432 222.09c193.264-70.649 386.085-58.639 513.448-19.65 127.36 38.988 445.85 39.68 481.57-117.887" stroke="#5645BA"/>
</svg>
		</section>
	);
};

export default JobOpeningSection;
