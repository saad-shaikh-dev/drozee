import Head from 'next/head';

import Navbar from 'sections/navbar/Navbar';
import Footer from 'sections/footer/Footer';

import HeroSection from 'sections/careerPage/hero/HeroSection';
import DetailsSection from 'sections/careerPage/details/DetailsSection';
import JobOpeningSection from 'sections/careerPage/jobOpening/JobOpeningSection';

const Index = () => {
	return (
		<>
			<Head>
				<title>Career at Drozee</title>
			</Head>
			<Navbar />
			<main>
				<HeroSection />
				<DetailsSection />
				<JobOpeningSection />
			</main>
			<Footer />
		</>
	);
};

export default Index;
