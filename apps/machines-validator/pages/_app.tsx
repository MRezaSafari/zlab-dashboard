import '../styles/global.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { Navbar } from '@zlab/common-layout';
import {
  AnchorTagTarget,
  INavbar,
} from '@zlab/shared-models';

interface PageProps extends AppProps {
  navbarItems: INavbar[];
}

function CustomApp({ Component, pageProps, navbarItems }: PageProps) {
  return (
    <>
       <Head>
        <title>zLab Dashboard</title>
      </Head>
        <main className="app">
          <Navbar navbarItems={navbarItems} />
          <Component {...pageProps} />
        </main>
    </>
  );
}


CustomApp.getInitialProps = () => {

  //Todo: Fetch data from server
  const navbarItems: INavbar[] = [
    {
      id: 1,
      title: 'Home',
      href: '/',
      target: AnchorTagTarget.SELF,
    },
    {
      id: 2,
      title: 'Work Approach',
      href: '/work-approach',
      target: AnchorTagTarget.SELF,
    },
    {
      id: 3,
      title: 'Jobs',
      href: '/jobs',
      target: AnchorTagTarget.SELF,
    },
    {
      id: 4,
      title: 'About us',
      href: '/about-us',
      target: AnchorTagTarget.SELF,
    },
    {
      id: 5,
      title: 'Contact us',
      href: '/contact-us',
      target: AnchorTagTarget.SELF,
    },
  ];

  return {
    navbarItems,
  };
};

export default CustomApp;
