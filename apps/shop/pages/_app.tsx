import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to shop!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
