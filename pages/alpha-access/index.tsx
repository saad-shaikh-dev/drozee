import type { NextPage } from 'next';
import Head from 'next/head';

// Layout Components
import Navbar from 'sections/navbar/Navbar';
import Footer from 'sections/footer/Footer';

import HeroSection from 'sections/alphaAccessPage/Hero/HeroSection';

const AlphaAccess: NextPage = () => {
	return (
		<>
			<Head>
				<title>Alpha Access</title>
			</Head>

			<Navbar />
			<main>
				<HeroSection />
			</main>
			<Footer />
		</>
	);
};

export default AlphaAccess;
