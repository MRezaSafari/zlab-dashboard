import { render } from '@testing-library/react';

import FormField from './form-field';

describe('FormField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormField title="test"><div></div></FormField>);
    expect(baseElement).toBeTruthy();
  });
});
