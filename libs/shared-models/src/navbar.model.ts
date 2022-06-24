enum AnchorTagTarget {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top',
}

interface INavbarProps {
  navbarItems: INavbar[];
}

interface INavbar {
  id: number;
  title: string;
  href: string;
  target: AnchorTagTarget;
}

export { AnchorTagTarget };

export type { INavbar, INavbarProps };
