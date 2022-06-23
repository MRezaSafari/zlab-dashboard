import Image from 'next/image';
import Link from 'next/link';

import { INavbar } from '@zlab/shared-models';

import {
  Container,
  NavigationContainer,
} from './navbar.styles';

export interface NavbarProps {
  navbarItems: INavbar[];
}

export function Navbar(props: NavbarProps) {
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
    <Container>
      <div className="container">
        <Image src="/logo.png" data-testid="logo-image" width={100} height={44} priority />

        <NavigationContainer>{renderNavbarItems()}</NavigationContainer>
      </div>
    </Container>
  );
}

export default Navbar;
