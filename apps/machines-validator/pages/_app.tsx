import '../styles/global.scss';

import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import {
  AnchorTagTarget,
  INavbar,
  INavbarProps,
} from '@zlab/shared-models';

const Navbar = dynamic<INavbarProps>(() =>
  import('@zlab/common-layout').then((layout) => layout.Navbar)
);

interface PageProps extends AppProps {
  navbarItems: INavbar[];
}

function CustomApp({ Component, pageProps, navbarItems }: PageProps) {
  return (
    <>
      <Head>
        <title>zLab Internal Utilities</title>
      </Head>
      <main className="app">
        <Navbar navbarItems={navbarItems} />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

CustomApp.getInitialProps = () => {
  //Todo: Fetch data from server
  const navbarItems: INavbar[] = [
    {
      id: 1,
      title: 'Machines Validator',
      href: '/',
      target: AnchorTagTarget.SELF,
    },
    {
      id: 2,
      title: 'Service Center',
      href: '/service-center',
      target: AnchorTagTarget.SELF,
    },
    {
      id: 3,
      title: 'Customers',
      href: '/customers',
      target: AnchorTagTarget.SELF,
    },
    {
      id: 4,
      title: 'Profile',
      href: '/profile',
      target: AnchorTagTarget.SELF,
    },
    {
      id: 5,
      title: 'Sign out',
      href: '/sign-out',
      target: AnchorTagTarget.SELF,
    },
  ];

  return {
    navbarItems,
  };
};

export default CustomApp;
