import { useParams, Link } from 'react-router-dom';
import { reviews } from '../data/reviews';
import { asset } from '../utils/assets';

const badgeColors: Record<string, string> = {
  film: 'bg-amber-100 text-amber-800',
  book: 'bg-forest-100 text-[#2c3423]',
  album: 'bg-orange-100 text-orange-800',
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
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 10`}>
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? 'text-amber-400' : 'text-forest-200'}`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function ReviewDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const review = reviews.find((r) => r.slug === slug);

  if (!review) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-[#2c3423]">Review not found</h1>
        <Link to="/reviews" className="mt-4 inline-block text-forest-500 hover:text-[#2c3423] underline">
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
        className="inline-flex items-center gap-1 text-sm text-[#2c3423] hover:text-[#2c3423] transition-colors"
      >
        &larr; Back to Reviews
      </Link>

      <header className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2c3423] leading-tight">
            {review.title}
          </h1>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColors[review.type]}`}
          >
            {review.type}
          </span>
        </div>
        <time className="block text-sm text-[#2c3423]">
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
        <figcaption className="text-xs italic text-[#2c3423]">
          {review.imageCaption}
        </figcaption>
      </figure>

      <div className="text-[#2c3423] leading-relaxed space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
