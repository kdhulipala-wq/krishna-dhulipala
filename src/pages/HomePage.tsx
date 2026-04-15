import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { photos } from '../data/photos';
import { asset } from '../utils/assets';
import Lightbox from '../components/Lightbox';

const PER_PAGE = 60;

function thumbUrl(imageUrl: string): string {
  return imageUrl.replace('images/', 'images/thumbs/');
}

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(0, parseInt(searchParams.get('page') || '1', 10) - 1);

  function setPage(updater: (prev: number) => number) {
    const next = updater(page);
    setSearchParams({ page: String(next + 1) }, { replace: true });
  }

  const totalPages = Math.ceil(photos.length / PER_PAGE);
  const pagePhotos = photos.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;


  const pagination = totalPages > 1 ? (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => { setPage((p) => Math.max(0, p - 1)); window.scrollTo(0, 0); }}
        disabled={page === 0}
        className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-black/40 text-[#e8e0d4] hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        &larr; Prev
      </button>
      <span className="text-sm text-[#e8e0d4]/70">
        {page + 1} / {totalPages}
      </span>
      <button
        onClick={() => { setPage((p) => Math.min(totalPages - 1, p + 1)); window.scrollTo(0, 0); }}
        disabled={page === totalPages - 1}
        className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-black/40 text-[#e8e0d4] hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Next &rarr;
      </button>
    </div>
  ) : null;

  return (
    <div className="space-y-8">
      {page === 0 && (
        <>
          <div className="text-center py-20">
            <img
              src={asset('images/deer.png')}
              alt="Krishna's logo"
              className="mx-auto h-72 sm:h-96 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            />
          </div>
        </>
      )}

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

      {pagination}

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
