import axios from 'axios';
import { fetchPhotos } from './fetchPhotos';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('fetchPhotos', () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_FLICKR_API_KEY = 'mock-api-key';
    });
  it('should fetch photos successfully with a valid query', async () => {
    const mockResponse = {
      data: {
        photos: {
          photo: [
            { id: '1', title: 'Photo 1', farm: 1, server: '1234', secret: 'abcd' },
            { id: '2', title: 'Photo 2', farm: 2, server: '5678', secret: 'efgh' },
          ],
        },
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchPhotos('nature');
    expect(result).toEqual(mockResponse.data.photos.photo);
  });

  it('should return an empty array if query is empty', async () => {
    const result = await fetchPhotos('');
    expect(result).toEqual([]);
  });

  it('should handle API errors gracefully', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchPhotos('nature')).rejects.toThrow('Network Error');
  });
  it('should throw an error if API key is missing', async () => {
    delete process.env.NEXT_PUBLIC_FLICKR_API_KEY; 
    await expect(fetchPhotos('nature')).rejects.toThrow('API key is missing');
  });
});
