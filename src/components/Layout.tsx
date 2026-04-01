import { NavLink, Outlet } from 'react-router-dom';
import { asset } from '../utils/assets';

const navItems = [
  { to: '/stories', label: 'Stories' },
  { to: '/op-eds', label: 'Op-Eds' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/gallery', label: 'Photo Gallery' },
];

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col text-[#2c3423] bg-forest-50">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${asset('images/background.JPG')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <header
        className="border-b border-black/20 sticky top-0 z-40 shadow-md"
        style={{
          backgroundImage: `url(${asset('images/header.JPG')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#e8e0d4] hover:text-white transition-colors shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          >
            Krishna Dhulipala
            <img
              src={asset('images/deer.png')}
              alt=""
              className="h-9 w-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            />
          </NavLink>
          <nav className="flex flex-wrap gap-1 sm:gap-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm font-medium transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] ${
                    isActive
                      ? 'bg-black/30 text-[#e8e0d4]'
                      : 'text-[#e8e0d4]/80 hover:bg-black/20 hover:text-[#e8e0d4]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
