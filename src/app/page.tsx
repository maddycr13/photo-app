"use client";

import React, { useState } from 'react';
import PhotoDisplay from '../components/PhotoDisplay';
import { useDebounce } from '@/hooks/useDebounce';


export default function Home() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500); // Adjust delay as needed (500ms here)


  return (
    <div className='justify-items-center'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{color:'black'}}
        placeholder="Search for photos"
        className="mb-4 p-2 border rounded"
      />
      <PhotoDisplay query={debouncedQuery} />
    </div>
  );
}
