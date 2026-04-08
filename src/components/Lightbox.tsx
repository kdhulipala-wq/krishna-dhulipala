import { useEffect, useCallback, useRef } from 'react';
import type { Photo } from '../data/photos';
import { asset } from '../utils/assets';

const SWIPE_THRESHOLD = 50;

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Lightbox({ photo, onClose, onPrev, onNext }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only count horizontal swipes (ignore vertical scrolling gestures)
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0 && onNext) onNext();
      if (dx > 0 && onPrev) onPrev();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={photo.imageAlt}
    >
      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-2xl"
          aria-label="Previous photo"
        >
          &#8249;
        </button>
      )}

      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        <img
          src={asset(photo.imageUrl)}
          alt={photo.imageAlt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        <p
          onClick={(e) => e.stopPropagation()}
          className="mt-4 text-white/90 text-center text-sm italic max-w-xl whitespace-pre-line"
        >
          {photo.caption}
        </p>
      </div>

      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-2xl"
          aria-label="Next photo"
        >
          &#8250;
        </button>
      )}
    </div>
  );
}
