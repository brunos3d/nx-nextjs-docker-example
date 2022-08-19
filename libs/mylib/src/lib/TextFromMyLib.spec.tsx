import { render } from '@testing-library/react';

import TextFromMyLib from './TextFromMyLib';

describe('TextFromMyLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextFromMyLib />);
    expect(baseElement).toBeTruthy();
  });
});
