import { render } from '@testing-library/react';
import {
  AnchorTagTarget,
  INavbar,
} from '@zlab/shared-models';

import Navbar from './navbar';

const dummyItems: INavbar[] = [
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

describe('Navbar', () => {
  it('image should render properly', () => {
    const { getByTestId } = render(<Navbar navbarItems={[]} />);
    expect('src' in getByTestId('logo-image').attributes).toBeTruthy();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Navbar navbarItems={dummyItems} />);
    expect(baseElement).toBeTruthy();
  });

  it('should not crash if we provide a zero length data', () => {
    const { baseElement } = render(<Navbar navbarItems={[]} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the exact numbers that we provide', () => {
    const expectedLength = dummyItems.length;
    const { getAllByRole } = render(<Navbar navbarItems={dummyItems} />);

    expect(getAllByRole('listitem').length).toEqual(expectedLength);
  });

  it('items should have the same href as provided', () => {
    const { getAllByRole } = render(<Navbar navbarItems={dummyItems} />);

    const listItems = getAllByRole('link');

    expect(
      listItems.every(
        (item, index) => item.getAttribute('href') === dummyItems[index].href
      )
    ).toBeTruthy();
  });

  it('items should have the same target as provided', () => {
    const { getAllByRole } = render(<Navbar navbarItems={dummyItems} />);

    const listItems = getAllByRole('link');

    expect(
      listItems.every(
        (item, index) =>
          item.getAttribute('target') === dummyItems[index].target
      )
    ).toBeTruthy();
  });
});
