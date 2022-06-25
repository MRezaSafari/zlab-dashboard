import { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  INavbar,
  INavbarProps,
} from '@zlab/shared-models';

import styles from './navbar.module.scss';

export function Navbar(props: INavbarProps) {
  const { navbarItems } = props;

  const renderItem = (item: INavbar) => (
    <li key={item.id}>
      <Link href={item.href}>
        <a target={item.target}>{item.title}</a>
      </Link>
    </li>
  );

  const renderNavbarItems = () => navbarItems?.map((item) => renderItem(item));

  return (
    <nav className={styles['navbar']}>
      <div className="container">
        <Image
          src="/logo.png"
          data-testid="logo-image"
          width={100}
          height={44}
        />

        <ul className={styles['navigation-container']}>{renderNavbarItems()}</ul>
      </div>
    </nav>
  );
}

function propsAreEqual(prev: INavbarProps, next: INavbarProps) {
  return prev.navbarItems === next.navbarItems;
}

export default memo(Navbar, propsAreEqual);
