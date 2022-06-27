import { render } from '@testing-library/react';

import Checkbox from './checkbox';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkbox id='1' onChange={(v) => {console.log(v)}} title="checkbox" />);
    expect(baseElement).toBeTruthy();
  });
});
