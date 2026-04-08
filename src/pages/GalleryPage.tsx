import { useState } from 'react';
import { photos } from '../data/photos';
import { asset } from '../utils/assets';
import Lightbox from '../components/Lightbox';

const PER_PAGE = 60;

function thumbUrl(imageUrl: string): string {
  return imageUrl.replace('images/', 'images/thumbs/');
}

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(photos.length / PER_PAGE);
  const pagePhotos = photos.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#e8e0d4]">Photo Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {pagePhotos.map((photo, i) => {
          const globalIndex = page * PER_PAGE + i;
          return (
            <button
              key={globalIndex}
              onClick={() => setSelectedIndex(globalIndex)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2"
            >
              <img
                src={asset(thumbUrl(photo.imageUrl))}
                alt={photo.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-black/40 text-[#e8e0d4] hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            &larr; Prev
          </button>
          <span className="text-sm text-[#e8e0d4]/70">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-black/40 text-[#e8e0d4] hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next &rarr;
          </button>
        </div>
      )}

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
