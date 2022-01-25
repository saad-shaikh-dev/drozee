import type { NextPage } from 'next';
import Head from 'next/head';

// Layout Components
// import Navbar from 'sections/navbar/Navbar';
import Footer from 'sections/footer/Footer';

// Section Components
// import HeroSection from 'sections/landingPage/hero/HeroSection';
// import DetailsSection from 'sections/landingPage/details/DetailsSection';
import BenefitsSection from 'sections/landingPage/benefits/BenefitsSection';
import NewsletterSection from 'sections/landingPage/newsletter/NewsletterSection';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Drozee</title>
			</Head>
			{/* <Navbar /> */}
			<main>
				{/* <HeroSection /> */}
				{/* <DetailsSection /> */}
				<BenefitsSection />
				<NewsletterSection />
			</main>
			<Footer />
		</>
	);
};

export default Home;
