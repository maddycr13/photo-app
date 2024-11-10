import { render, screen } from '@testing-library/react';
import RootLayout from './layout';


describe('RootLayout', () => {
  it('should render children content', () => {
    render(
      <RootLayout>
        <div data-testid="child">Test Content</div>
      </RootLayout>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
