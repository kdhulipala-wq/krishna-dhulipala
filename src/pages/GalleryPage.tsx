import { useState } from 'react';
import { photos } from '../data/photos';
import { asset } from '../utils/assets';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#e8e0d4]">Photo Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
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

      {selectedPhoto && selectedIndex !== null && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedIndex(null)}
          onPrev={selectedIndex > 0 ? () => setSelectedIndex(selectedIndex - 1) : undefined}
          onNext={selectedIndex < photos.length - 1 ? () => setSelectedIndex(selectedIndex + 1) : undefined}
        />
      )}
    </div>
  );
}
