import { render } from '@testing-library/react';

import CommonLayout from './common-layout';

describe('CommonLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonLayout />);
    expect(baseElement).toBeTruthy();
  });
});
