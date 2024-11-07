import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';


interface Photo {
  id: string;
  title: string;
  server: string;
  secret: string;
  farm: number;
}

interface PhotoDisplayProps {
  query: string;
}

const API_KEY = process.env.NEXT_PUBLIC_FLICKR_API_KEY

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({ query }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
    if (query === '') {
        setPhotos([]); // Clear photos when query is empty
        return;
        }
      try {
        const response = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}&format=json&nojsoncallback=1`
        );
        setPhotos(response.data.photos.photo);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

      fetchPhotos();
  }, [query]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
     {photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo.id} className="border rounded-lg overflow-hidden shadow-md">
            <Image
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
              alt={photo.title}
              width={240}
              height={240}
              className="object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{photo.title}</h2>
            </div>
          </div>
        ))
      ) : (
        <p className="justify-items-center text-center text-gray-500">No photos to display</p>
      )}
    </div>
  );
};

export default PhotoDisplay;
