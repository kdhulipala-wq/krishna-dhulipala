import { useState } from 'react';
import { Link } from 'react-router-dom';
import { opEds } from '../data/opEds';
import { sortByMode } from '../utils/sort';
import type { SortMode } from '../utils/sort';
import SortToggle from '../components/SortToggle';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function OpEdsPage() {
  const [sortMode, setSortMode] = useState<SortMode>('title');
  const sortedOpEds = sortByMode(opEds, sortMode);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-[#e8e0d4]">Op-Eds</h1>
        <SortToggle sortMode={sortMode} onChange={setSortMode} />
      </div>

      <div className="space-y-4">
        {sortedOpEds.map((opEd) => (
          <Link
            key={opEd.id}
            to={`/op-eds/${opEd.slug}`}
            className="group block p-5 rounded-xl border border-black/20 bg-black/40 hover:border-black/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all"
          >
            <h2 className="text-xl font-semibold text-[#e8e0d4] group-hover:text-white transition-colors">
              {opEd.title}
            </h2>
            <time className="mt-1 block text-sm text-[#e8e0d4]/70">
              {formatDate(opEd.createdAt)}
            </time>
            {opEd.summary && (
              <p className="mt-2 text-sm text-[#e8e0d4]/70 leading-relaxed">
                {opEd.summary}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
