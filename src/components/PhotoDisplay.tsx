import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { fetchPhotos } from '../api/fetchPhotos';

interface PhotoDisplayProps {
  query: string;
}

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({ query }) => {
  const { data: photos = [], isLoading, error } = useQuery({
    queryKey: ['photos', query],
    queryFn: () => fetchPhotos(query),
    enabled: !!query, // Only fetch when query is not empty
  });

  if (isLoading) return <p className="text-center text-gray-500">Loading photos...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load photos.</p>;

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
        <p className="text-center text-gray-500">No photos to display</p>
      )}
    </div>
  );
};

export default PhotoDisplay;
