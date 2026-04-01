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
        <h1 className="text-2xl font-bold text-[#2c3423]">Op-Ed not found</h1>
        <Link to="/op-eds" className="mt-4 inline-block text-[#2c3423] hover:text-[#2c3423] underline">
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
        className="inline-flex items-center gap-1 text-sm text-[#2c3423] hover:text-[#2c3423] transition-colors"
      >
        &larr; Back to Op-Eds
      </Link>

      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2c3423] leading-tight">
          {opEd.title}
        </h1>
        <time className="mt-2 block text-sm text-[#2c3423]">
          {formatDate(opEd.createdAt)}
        </time>
      </header>

      <div className="text-[#2c3423] leading-relaxed space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
