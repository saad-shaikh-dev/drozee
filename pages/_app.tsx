import Head from 'next/head';
import type { AppProps } from 'next/app';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='Cache-control' content='public' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
