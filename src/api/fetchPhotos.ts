import axios from 'axios';

export interface Photo {
  id: string;
  title: string;
  server: string;
  secret: string;
  farm: number;
}

export const fetchPhotos = async (query: string): Promise<Photo[]> => {
  const API_KEY = process.env.NEXT_PUBLIC_FLICKR_API_KEY;
  if (!API_KEY) {
    throw new Error('API key is missing');
  }

  if (!query) return []; // Return empty array if query is empty

  const response = await axios.get(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}&format=json&nojsoncallback=1`
  );
  return response.data.photos.photo;
};