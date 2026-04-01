import { useEffect, useCallback } from 'react';
import type { Photo } from '../data/photos';
import { asset } from '../utils/assets';

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
}

export default function Lightbox({ photo, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.imageAlt}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl"
          aria-label="Close lightbox"
        >
          &times;
        </button>
        <img
          src={asset(photo.imageUrl)}
          alt={photo.imageAlt}
          className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <p className="mt-4 text-white/90 text-center text-sm italic max-w-xl">
          {photo.caption}
        </p>
      </div>
    </div>
  );
}
