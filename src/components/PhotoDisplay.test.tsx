import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import PhotoDisplay from './PhotoDisplay';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PhotoDisplay', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render "No photos to display" when query is empty', () => {
    render(<PhotoDisplay query="" />);
    expect(screen.getByText(/no photos to display/i)).toBeInTheDocument();
  });

  it('should fetch and display photos when query is provided', async () => {
    const photos = [
      { id: '1', title: 'Test Photo', server: '1234', secret: 'abcd', farm: 1 },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: { photos: { photo: photos } } });

    render(<PhotoDisplay query="test" />);
    
    await waitFor(() => {
      expect(screen.getByAltText('Test Photo')).toBeInTheDocument();
    });
  });

  it('should clear photos when query is cleared', async () => {
    const photos = [
      { id: '1', title: 'Test Photo', server: '1234', secret: 'abcd', farm: 1 },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: { photos: { photo: photos } } });

    const { rerender } = render(<PhotoDisplay query="test" />);
    await waitFor(() => {
      expect(screen.getByAltText('Test Photo')).toBeInTheDocument();
    });

    // Clear the query
    rerender(<PhotoDisplay query="" />);
    expect(screen.queryByAltText('Test Photo')).not.toBeInTheDocument();
    expect(screen.getByText(/no photos to display/i)).toBeInTheDocument();
  });
});
