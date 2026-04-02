import { useState } from 'react';
import { Link } from 'react-router-dom';
import { reviews } from '../data/reviews';
import { asset } from '../utils/assets';
import { sortByMode } from '../utils/sort';
import type { SortMode } from '../utils/sort';
import SortToggle from '../components/SortToggle';

type TypeFilter = 'all' | 'film' | 'book' | 'album' | 'poem';

const typeLabels: Record<TypeFilter, string> = {
  all: 'All',
  film: 'Films',
  book: 'Books',
  album: 'Albums',
  poem: 'Poems',
};

const badgeColors: Record<string, string> = {
  film: 'bg-amber-100 text-amber-800',
  book: 'bg-forest-100 text-forest-700',
  album: 'bg-orange-100 text-orange-800',
  poem: 'bg-violet-100 text-violet-800',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => {
          const fill = Math.min(1, Math.max(0, rating - i));
          return (
            <span key={i} className="relative text-sm">
              <span className="text-forest-200">&#9733;</span>
              {fill > 0 && (
                <span
                  className="absolute inset-0 text-amber-400 overflow-hidden"
                  style={{ width: `${fill * 100}%` }}
                >
                  &#9733;
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="text-sm text-[#e8e0d4]/70 ml-1">{rating}/5</span>
    </div>
  );
}

export default function ReviewsPage() {
  const [sortMode, setSortMode] = useState<SortMode>('title');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');

  const filtered = typeFilter === 'all'
    ? reviews
    : reviews.filter((r) => r.type === typeFilter);
  const sorted = sortByMode(filtered, sortMode);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl font-bold text-[#e8e0d4]">Reviews</h1>
          <SortToggle sortMode={sortMode} onChange={setSortMode} />
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#FF8C00] font-medium">Filter:</span>
          {(Object.entries(typeLabels) as [TypeFilter, string][]).map(
            ([value, label]) => (
              <button
                key={value}
                onClick={() => setTypeFilter(value)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  typeFilter === value
                    ? 'bg-[#FF8C00] text-white'
                    : 'bg-forest-100 text-[#FF8C00] hover:bg-forest-200'
                }`}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>

      <div className="space-y-6">
        {sorted.length === 0 ? (
          <p className="text-[#FF8C00] text-center py-8">No reviews match this filter.</p>
        ) : (
          sorted.map((review) => (
            <Link
              key={review.id}
              to={`/reviews/${review.slug}`}
              className="group block rounded-xl border border-black/20 bg-black/40 overflow-hidden hover:border-black/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 sm:h-48 h-48 shrink-0 overflow-hidden bg-black/20">
                  <img
                    src={asset(review.imageUrl)}
                    alt={review.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl font-semibold text-[#e8e0d4] group-hover:text-white transition-colors">
                      {review.title}
                    </h2>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${badgeColors[review.type]}`}
                    >
                      {review.type}
                    </span>
                  </div>
                  <time className="mt-1 text-sm text-[#e8e0d4]/70">
                    {formatDate(review.createdAt)}
                  </time>
                  {review.rating !== undefined && (
                    <div className="mt-2">
                      <StarRating rating={review.rating} />
                    </div>
                  )}
                  <p className="mt-2 text-sm text-[#e8e0d4]/70 leading-relaxed line-clamp-2">
                    {review.imageCaption}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
