import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, fireEvent } from '@testing-library/react';
import Home from './page';

const queryClient = new QueryClient();

describe('Home', () => {
  it('should render the input field and photo display', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  });
  // it('should update input value', () => {
  //     const { getByPlaceholderText } = render(<Home />);
  //     const input = getByPlaceholderText(/search photos/i) as HTMLInputElement;
    
  //     fireEvent.change(input, { target: { value: 'nature' } });
  //     expect(input).toHaveValue('nature');
  //   });
});
