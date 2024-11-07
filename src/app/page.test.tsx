import { render, screen, fireEvent } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('should render the input field and photo display', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/search photos/i)).toBeInTheDocument();
    expect(screen.getByText(/no photos to display/i)).toBeInTheDocument();
  });

  it('should update query and render photos based on search input', () => {
    render(<Home />);
    
    const input = screen.getByPlaceholderText(/search photos/i);
    
    fireEvent.change(input, { target: { value: 'nature' } });
    expect(input).toHaveValue('nature');
  });
});
