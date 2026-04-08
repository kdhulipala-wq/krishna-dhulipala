import { useState, useRef, useEffect } from 'react';
import { asset } from '../utils/assets';

const PASSWORD_HASH = 'e1e3c587b04f3f2d7c6fdb3ad761e537d8785766bc2699f11ae2c33f9dfe8ecd';

async function sha256(text: string): Promise<string> {
  const encoded = new TextEncoder().encode(text);
  const buffer = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

interface PasswordGateProps {
  onAuthenticated: () => void;
}

export default function PasswordGate({ onAuthenticated }: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const hash = await sha256(value);
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem('authenticated', '1');
      onAuthenticated();
    } else {
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${asset('images/background.JPG')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <img
          src={asset('images/deer.png')}
          alt="Krishna Dhulipala"
          className="h-56 sm:h-72 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        />

        <form
          onSubmit={handleSubmit}
          className={`relative bg-black/15 backdrop-blur-sm border rounded-lg px-6 py-4 min-w-[320px] transition-colors duration-200 ${
            shake
              ? 'animate-shake border-red-500/60 shadow-[0_0_20px_rgba(255,0,0,0.15)]'
              : 'border-[#FF8C00]/40 shadow-[0_0_20px_rgba(255,140,0,0.1)]'
          }`}
        >
          <div className={`flex items-center font-mono text-lg transition-colors duration-200 ${shake ? 'text-red-400' : 'text-[#FF8C00]'}`}>
            <span className="select-none mr-1">&gt;</span>
            <div className="relative flex-1">
              <span className="tracking-wider">{'*'.repeat(value.length)}</span>
              <span className={`inline-block w-[2px] h-[1.2em] align-middle ml-[1px] animate-blink transition-colors duration-200 ${shake ? 'bg-red-400' : 'bg-[#FF8C00]'}`} />
              <input
                ref={inputRef}
                type="password"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="absolute inset-0 w-full opacity-0 cursor-default"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
