import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

// lucide-react v1.7.0 does not export Github/Linkedin/Instagram, so we use inline SVGs.
const GithubIcon = ({ className = 'w-[18px] h-[18px]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className = 'w-[18px] h-[18px]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-[18px] h-[18px]' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" ry="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/luvpee', hover: 'hover:text-indigo-300 hover:border-indigo-500/40 hover:bg-indigo-500/10' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lovepreet-singh-kaler/', hover: 'hover:text-sky-300 hover:border-sky-500/40 hover:bg-sky-500/10' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/lovepreetsinghk19', hover: 'hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-slate-800/80 overflow-hidden">
      {/* Subtle gradient accents that match the rest of the site */}
      <div className="pointer-events-none absolute -top-24 left-1/3 h-48 w-48 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 right-1/4 h-48 w-48 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="inline-flex items-center gap-2 text-slate-100 font-semibold text-lg">
              <span className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-indigo-500/20">
                LP
              </span>
              Lovepreet
            </a>
            <p className="text-slate-500 text-sm mt-2">Building thoughtful web experiences.</p>
          </div>

          {/* Follow me */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Follow me</p>
            <div className="flex justify-center gap-2.5">
              {socials.map(({ icon: Icon, label, href, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  className={`group relative w-10 h-10 rounded-xl border border-slate-800 bg-slate-900/70 text-slate-400 flex items-center justify-center transition-all duration-300 ${hover}`}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <div className="flex justify-center md:justify-end">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/70 text-slate-200 text-sm font-medium overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <ArrowUp className="relative w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="relative">Back to top</span>
            </motion.button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Lovepreet Singh Kaler. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}