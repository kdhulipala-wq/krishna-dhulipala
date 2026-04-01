import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stories } from '../data/stories';
import { asset } from '../utils/assets';
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

export default function StoriesPage() {
  const [sortMode, setSortMode] = useState<SortMode>('title');
  const sortedStories = sortByMode(stories, sortMode);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-[#2c3423]">Stories</h1>
        <SortToggle sortMode={sortMode} onChange={setSortMode} />
      </div>

      <div className="space-y-6">
        {sortedStories.map((story) => (
          <Link
            key={story.id}
            to={`/stories/${story.slug}`}
            className="group block rounded-xl border border-forest-200 bg-[#fafbf7] overflow-hidden hover:border-forest-300 hover:shadow-md transition-all"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-48 sm:h-48 h-48 shrink-0 overflow-hidden bg-forest-200">
                <img
                  src={asset(story.imageUrl)}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-[#2c3423] group-hover:text-[#2c3423] transition-colors">
                  {story.title}
                </h2>
                <time className="mt-1 text-sm text-[#2c3423]">
                  {formatDate(story.createdAt)}
                </time>
                <p className="mt-2 text-sm text-[#2c3423] leading-relaxed line-clamp-2">
                  {story.imageCaption}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
