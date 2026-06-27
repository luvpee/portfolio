import { motion } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Coding', href: '#coding' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0e1014]/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)] border-b border-white/[0.06]'
            : 'bg-[#0e1014]/40 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="group flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#181b21] border border-white/[0.08] text-[#f59e0b]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
                  <path d="M4 7l8-4 8 4-8 4-8-4z" />
                  <path d="M4 12l8 4 8-4M4 17l8 4 8-4" />
                </svg>
              </span>
              <span className="text-sm font-semibold tracking-[0.25em] text-[#e8eaed] uppercase">
                Lovepreet
              </span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[#a8adb6] hover:text-[#e8eaed] transition-colors duration-200 text-sm font-medium group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#f59e0b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Lovepreet-Singh-Kaler-Resume.pdf"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/[0.08] bg-[#181b21]/70 text-[#e8eaed] text-sm font-semibold hover:border-[#f59e0b]/40 hover:bg-[#1e2229] transition-all duration-300"
              >
                <FileDown className="w-3.5 h-3.5 text-[#f59e0b]" />
                Résumé
              </a>
            </div>

            <button
              className="md:hidden p-2 text-[#e8eaed]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden fixed top-[72px] left-0 right-0 bg-[#0e1014]/95 backdrop-blur-xl z-40 overflow-hidden border-b border-white/[0.06]"
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#a8adb6] hover:text-[#e8eaed] transition-colors text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Lovepreet-Singh-Kaler-Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/[0.08] bg-[#181b21] text-[#e8eaed] font-semibold"
          >
            <FileDown className="w-4 h-4 text-[#f59e0b]" />
            Download Résumé
          </a>
        </div>
      </motion.div>
    </>
  );
}