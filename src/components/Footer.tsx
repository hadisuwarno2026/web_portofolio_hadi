import { ArrowUp, Briefcase, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative overflow-hidden">
      {/* Visual ornament */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand logo & caption */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
              <Activity className="w-4.5 h-4.5 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-white tracking-wide font-display">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-[11.5px] text-slate-500 font-mono tracking-wide mt-0.5">
                © {new Date().getFullYear()} HADI SUWARNO. DIGITAL TELEMETRY DASHBOARD V1.0.
              </span>
            </div>
          </div>

          {/* Slogans and Back-to-top */}
          <div className="flex items-center gap-6">
            <span className="hidden lg:block text-xs font-mono font-medium text-slate-500 tracking-wider uppercase">
              // Building Reliable Systems Through Data & Technology
            </span>

            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center justify-center p-2.5 rounded-full bg-slate-900 hover:bg-slate-850 text-cyan-400 border border-slate-800 transition-colors cursor-pointer group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
