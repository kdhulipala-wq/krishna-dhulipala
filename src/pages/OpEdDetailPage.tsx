import { useParams, Link } from 'react-router-dom';
import { opEds } from '../data/opEds';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function OpEdDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const opEd = opEds.find((o) => o.slug === slug);

  if (!opEd) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-[#e8e0d4]">Op-Ed not found</h1>
        <Link to="/op-eds" className="mt-4 inline-block text-[#FF8C00] hover:text-[#FF8C00] underline">
          Back to Op-Eds
        </Link>
      </div>
    );
  }

  const paragraphs = opEd.content.split('\n\n');

  return (
    <article className="space-y-6">
      <Link
        to="/op-eds"
        className="inline-flex items-center gap-1 text-sm text-[#FF8C00] hover:text-[#FFA333] hover:scale-105 transition-all origin-left"
      >
        &larr; Back to Op-Eds
      </Link>

      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#e8e0d4] leading-tight">
          {opEd.title}
        </h1>
        <time className="mt-2 block text-sm text-[#e8e0d4]/70">
          {formatDate(opEd.createdAt)}
        </time>
      </header>

      {opEd.epigraph && (
        <blockquote className="text-center italic text-[#e8e0d4]/80 whitespace-pre-line border-l-0 py-4 px-6 max-w-lg mx-auto leading-relaxed">
          {opEd.epigraph}
        </blockquote>
      )}

      <div className="text-[#e8e0d4] leading-relaxed space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
