import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { stories } from '../data/stories';
import type { InlineImage } from '../data/stories';
import { asset } from '../utils/assets';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function StoryLightbox({ img, onClose }: { img: InlineImage; onClose: () => void }) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lightbox-open');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.classList.remove('lightbox-open');
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        <img
          src={asset(img.imageUrl)}
          alt={img.imageAlt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
        />
        {img.caption && (
          <p
            onClick={(e) => e.stopPropagation()}
            className="mt-4 text-white/90 text-center text-sm italic max-w-xl whitespace-pre-line"
          >
            {img.caption}
          </p>
        )}
      </div>
    </div>
  );
}

function FloatedImage({ img, side, onClick }: { img: InlineImage; side: 'left' | 'right'; onClick: () => void }) {
  const floatClass = side === 'left'
    ? 'sm:float-left sm:mr-6'
    : 'sm:float-right sm:ml-6';

  return (
    <div className={`mb-4 sm:mb-2 sm:w-2/5 ${floatClass} cursor-pointer`} onClick={onClick}>
      <img
        src={asset(img.imageUrl)}
        alt={img.imageAlt}
        className="w-full rounded-lg block"
      />
      {img.caption && (
        <p className="bg-black/50 rounded-b-lg px-3 py-2 text-xs italic text-[#e8e0d4] -mt-1">
          {img.caption}
        </p>
      )}
    </div>
  );
}

export default function StoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find((s) => s.slug === slug);
  const [lightboxImg, setLightboxImg] = useState<InlineImage | null>(null);

  if (!story) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-[#e8e0d4]">Story not found</h1>
        <Link to="/stories" className="mt-4 inline-block text-[#FF8C00] hover:text-[#FF8C00] underline">
          Back to Stories
        </Link>
      </div>
    );
  }

  const inlineImages = story.inlineImages || [];
  const segments = story.content.split(/\[img:(\d+)\]/);

  const coverAsInline: InlineImage = {
    imageUrl: story.imageUrl,
    imageAlt: story.imageAlt,
  };

  return (
    <article className="space-y-6">
      <Link
        to="/stories"
        className="inline-flex items-center gap-1 text-sm text-[#FF8C00] hover:text-[#FFA333] hover:scale-105 transition-all origin-left"
      >
        &larr; Back to Stories
      </Link>

      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#e8e0d4] leading-tight">
          {story.title}
        </h1>
        <time className="mt-2 block text-sm text-[#e8e0d4]/70">
          {formatDate(story.createdAt)}
        </time>
      </header>

      <div>
        <img
          src={asset(story.imageUrl)}
          alt={story.imageAlt}
          className="w-full rounded-lg"
        />
      </div>

      {story.epigraph && (
        <blockquote className="text-center italic text-[#e8e0d4]/80 whitespace-pre-line border-l-0 py-4 px-6 max-w-lg mx-auto leading-relaxed">
          {story.epigraph}
        </blockquote>
      )}

      <div className="text-[#e8e0d4] leading-relaxed">

        {segments.map((segment, i) => {
          if (i % 2 === 1) {
            const imgIndex = parseInt(segment, 10);
            const img = inlineImages[imgIndex];
            if (!img) return null;
            const side = img.float || (imgIndex % 2 === 0 ? 'left' : 'right');
            return (
              <span key={`img-${i}`}>
                <div className="clear-both" />
                <FloatedImage img={img} side={side} onClick={() => setLightboxImg(img)} />
              </span>
            );
          }

          const paragraphs = segment.split('\n\n').filter((p) => p.trim());
          return paragraphs.map((p, j) => (
            <p key={`${i}-${j}`} className="mb-4">{p}</p>
          ));
        })}

        <div className="clear-both" />
      </div>

      {lightboxImg && (
        <StoryLightbox img={lightboxImg} onClose={() => setLightboxImg(null)} />
      )}
    </article>
  );
}
