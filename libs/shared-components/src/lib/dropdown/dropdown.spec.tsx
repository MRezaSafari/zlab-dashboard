import {
  fireEvent,
  render,
} from '@testing-library/react';

import Dropdown from './dropdown';

const dummyData = [
  { id: 1, label: 'Kassulke & Sohn', value: 'Kassulke & Sohn' },
  { id: 2, label: 'Bayer-Bergnaum', value: 'Bayer-Bergnaum' },
  { id: 3, label: 'Schinner Group', value: 'Schinner Group' },
];

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Dropdown
        onChange={(v) => {
          console.log(v);
        }}
        options={dummyData}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const { baseElement } = render(
      <Dropdown
        onChange={(v) => {
          console.log(v);
        }}
        options={dummyData}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Inner container should not have children at start', () => {
    const { getByTestId } = render(
      <Dropdown
        onChange={(v) => {
          console.log(v);
        }}
        options={dummyData}
      />
    );

    expect(getByTestId('dropdown-inner-container').hasChildNodes()).toBeFalsy();
  });

  it("Start Selected Option text should be equal to 'Select option'", () => {
    const { getByText } = render(
      <Dropdown
        onChange={(v) => {
          console.log(v);
        }}
        options={dummyData}
      />
    );
    const expectingText = 'Select option';
    expect(getByText(expectingText)).toBeTruthy();
  });

  it('Clicking on dropdown should expose its values', async () => {
    const { findByTestId, getByTestId } = render(
      <Dropdown
        onChange={(v) => {
          console.log(v);
        }}
        options={dummyData}
      />
    );

    fireEvent(
      getByTestId('parent-container'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    const innerContainer = await findByTestId('dropdown-inner-container');
    expect(
      innerContainer.querySelector('ul')?.childElementCount
    ).toBeGreaterThan(0);
  });

  it('Selected item should change after clicking on an item', async () => {
    const { findByTestId, getByTestId, getByText } = render(
      <Dropdown
        onChange={(v) => {
          console.log(v);
        }}
        options={dummyData}
      />
    );

    fireEvent(
      getByTestId('parent-container'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    const firstItemValue = dummyData[0].label;

    const innerContainer = await findByTestId('dropdown-inner-container');

    fireEvent(
      innerContainer.querySelectorAll('ul li')[0],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(getByText(firstItemValue)).toBeTruthy();
  });

  it('should match the snapshot when its open', () => {
    const { baseElement, getByTestId } = render(
      <Dropdown
        onChange={(v) => {
          console.log(v);
        }}
        options={dummyData}
      />
    );

    fireEvent(
      getByTestId('parent-container'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(baseElement).toMatchSnapshot();
  });
});
