// RootLayout.test.tsx
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('should render children content', () => {
    render(
      <div className="test-root">
        <RootLayout>
          <div data-testid="child">Test Content</div>
        </RootLayout>
      </div>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
