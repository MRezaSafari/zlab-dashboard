import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { theme } from '@zlab/shared-models';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>zLab Dashboard</title>
      </Head>
      <ThemeProvider theme={theme}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
