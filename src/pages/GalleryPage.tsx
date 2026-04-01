import { useState } from 'react';
import { photos } from '../data/photos';
import type { Photo } from '../data/photos';
import { asset } from '../utils/assets';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#2c3423]">Photo Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2"
          >
            <img
              src={asset(photo.imageUrl)}
              alt={photo.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}
