import type { SortMode } from '../utils/sort';

interface SortToggleProps {
  sortMode: SortMode;
  onChange: (mode: SortMode) => void;
}

export default function SortToggle({ sortMode, onChange }: SortToggleProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-[#2c3423] font-medium">Sort by:</span>
      <button
        onClick={() => onChange('title')}
        className={`px-3 py-1 rounded-md transition-colors ${
          sortMode === 'title'
            ? 'bg-[#2c3423] text-[#2c3423]'
            : 'bg-forest-100 text-[#2c3423] hover:bg-forest-200'
        }`}
      >
        Title
      </button>
      <button
        onClick={() => onChange('date')}
        className={`px-3 py-1 rounded-md transition-colors ${
          sortMode === 'date'
            ? 'bg-[#2c3423] text-[#2c3423]'
            : 'bg-forest-100 text-[#2c3423] hover:bg-forest-200'
        }`}
      >
        Date
      </button>
    </div>
  );
}
