import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Drozee</title>
			</Head>
			<div className={styles.MainContainer}>
				<h1 className={styles.Heading}>Welcome to Drozee</h1>
			</div>
		</>
	);
};

export default Home;
