import { Link } from 'react-router-dom';
import { asset } from '../utils/assets';

const sections = [
  {
    to: '/stories',
    title: 'Stories',
    description: 'Friends and places and things oh my!',
  },
  {
    to: '/op-eds',
    title: 'Op-Eds',
    description: 'Geopolitics and general venting',
  },
  {
    to: '/reviews',
    title: 'Reviews',
    description: 'Stuff I liked or did not like',
  },
  {
    to: '/gallery',
    title: 'Photo Gallery',
    description: 'My favorite flicks',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2 py-4">
        <img
          src={asset('images/deer.png')}
          alt="Krishna's logo"
          className="mx-auto h-56 sm:h-72 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
        />
        <p className="text-lg text-[#e8e0d4]/70 max-w-xl mx-auto leading-relaxed">
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sections.map(({ to, title, description }) => (
          <Link
            key={to}
            to={to}
            className="group relative block rounded-xl border border-black/20 hover:border-black/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative p-6">
              <h2 className="text-xl font-semibold text-[#e8e0d4] group-hover:text-white transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                {title}
              </h2>
              <p className="mt-2 text-sm text-[#e8e0d4]/80 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
