import { useParams, Link } from 'react-router-dom';
import { stories } from '../data/stories';
import { asset } from '../utils/assets';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function StoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-[#2c3423]">Story not found</h1>
        <Link to="/stories" className="mt-4 inline-block text-[#2c3423] hover:text-[#2c3423] underline">
          Back to Stories
        </Link>
      </div>
    );
  }

  const paragraphs = story.content.split('\n\n');

  return (
    <article className="space-y-6">
      <Link
        to="/stories"
        className="inline-flex items-center gap-1 text-sm text-[#2c3423] hover:text-[#2c3423] transition-colors"
      >
        &larr; Back to Stories
      </Link>

      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2c3423] leading-tight">
          {story.title}
        </h1>
        <time className="mt-2 block text-sm text-[#2c3423]">
          {formatDate(story.createdAt)}
        </time>
      </header>

      <div className="prose-container">
        <div className="mb-4 sm:mb-0 sm:float-left sm:mr-6 sm:w-2/5">
          <img
            src={asset(story.imageUrl)}
            alt={story.imageAlt}
            className="w-full rounded-lg"
          />
          <p className="mt-2 text-xs italic text-[#2c3423]">
            {story.imageCaption}
          </p>
        </div>

        <div className="text-[#2c3423] leading-relaxed space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="clear-both" />
      </div>
    </article>
  );
}
