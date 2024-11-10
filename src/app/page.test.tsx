import { renderWithQueryClient } from '../test-utils';
import { fireEvent, screen } from '@testing-library/react';
import Home from './page';

describe('Home Component', () => {
  it('should render the input field and photo display', () => {
    renderWithQueryClient(<Home />);

    expect(screen.getByPlaceholderText('Search for photos')).toBeInTheDocument();

  });
  it('should update input value', () => {
    renderWithQueryClient(<Home />);
    const input = screen.getByPlaceholderText(/search for photos/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'nature' } });
    expect(input).toHaveValue('nature');
  });
});