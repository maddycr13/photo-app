import { renderWithQueryClient } from '../test-utils'; // Utility for QueryClientProvider
import { screen, waitFor } from '@testing-library/react'; // Ensure waitFor is imported
import PhotoDisplay from './PhotoDisplay';
import { fetchPhotos } from '../api/fetchPhotos';

jest.mock('../api/fetchPhotos');

describe('PhotoDisplay', () => {
  it('should show loading state initially', () => {
    (fetchPhotos as jest.Mock).mockReturnValueOnce(new Promise(() => {}));
    renderWithQueryClient(<PhotoDisplay query="nature" />);

    expect(screen.getByText(/Loading photos.../i)).toBeInTheDocument();
  });

  it('should show error message when API fails', async () => {
    (fetchPhotos as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    renderWithQueryClient(<PhotoDisplay query="nature" />);

    // Use waitFor to handle asynchronous updates
    await waitFor(() => {
      expect(screen.getByText(/Failed to load photos/i)).toBeInTheDocument();
    });
  });
  it('should display photos when fetch is successful', async () => {
    (fetchPhotos as jest.Mock).mockResolvedValueOnce([
      {
        id: '1',
        title: 'Test Photo',
        farm: 1,
        server: '1234',
        secret: 'abcd',
      },
    ]);
    renderWithQueryClient(<PhotoDisplay query="nature" />);

    // Wait for the photo to appear in the document
    await waitFor(() => {
      expect(screen.getByAltText('Test Photo')).toBeInTheDocument();
    });
  });
});
