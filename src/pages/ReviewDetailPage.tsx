import { useParams, Link } from 'react-router-dom';
import { reviews } from '../data/reviews';
import { asset } from '../utils/assets';

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
            <span key={i} className="relative text-lg">
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

export default function ReviewDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const review = reviews.find((r) => r.slug === slug);

  if (!review) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-[#e8e0d4]">Review not found</h1>
        <Link to="/reviews" className="mt-4 inline-block text-forest-500 hover:text-[#FF8C00] underline">
          Back to Reviews
        </Link>
      </div>
    );
  }

  const paragraphs = review.content.split('\n\n');

  return (
    <article className="space-y-6">
      <Link
        to="/reviews"
        className="inline-flex items-center gap-1 text-sm text-[#FF8C00] hover:text-[#FFA333] hover:scale-105 transition-all origin-left"
      >
        &larr; Back to Reviews
      </Link>

      <header className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e8e0d4] leading-tight">
            {review.title}
          </h1>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColors[review.type]}`}
          >
            {review.type}
          </span>
        </div>
        <time className="block text-sm text-[#e8e0d4]/70">
          {formatDate(review.createdAt)}
        </time>
        {review.rating !== undefined && <StarRating rating={review.rating} />}
      </header>

      <figure className="space-y-2">
        <img
          src={asset(review.imageUrl)}
          alt={review.imageAlt}
          className="w-full sm:w-2/3 rounded-lg"
        />
        <figcaption className="text-xs italic text-[#e8e0d4]/70">
          {review.imageCaption}
        </figcaption>
      </figure>

      <div className="text-[#e8e0d4] leading-relaxed space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
