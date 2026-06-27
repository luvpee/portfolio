import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileDown, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" ry="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep base + soft top vignette */}
      <div className="absolute inset-0 bg-[#0e1014]" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.05), transparent 60%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] text-[#a8adb6] border border-white/[0.08] text-sm font-medium mb-8 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
          Hello, I'm
        </motion.span>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#e8eaed] mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Lovepreet <span className="text-gradient-accent">Singh Kaler</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-[#a8adb6] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer · AI Engineer
        </motion.h2>

        <motion.p
          className="text-[#a8adb6] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I build scalable systems, full-stack products, and AI applications that actually ship —
          not just demo.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="group relative flex items-center gap-2 px-8 py-4 rounded-xl text-[#0e1014] font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_-6px_rgba(245,158,11,0.5)]"
          >
            <span className="absolute inset-0 bg-[#f59e0b]" />
            <span className="absolute inset-0 bg-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0e1014]" />
            <span className="relative">Start a project</span>
            <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#181b21]/80 border border-white/[0.08] text-[#e8eaed] font-semibold hover:bg-[#1e2229] hover:border-white/[0.16] transition-all duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
          </a>
          <a
            href="/resume.pdf"
            download="Lovepreet-Singh-Kaler-Resume.pdf"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#181b21]/80 border border-white/[0.08] text-[#e8eaed] font-semibold hover:bg-[#1e2229] hover:border-[#f59e0b]/40 transition-all duration-300"
          >
            <FileDown className="w-4 h-4 text-[#f59e0b]" />
            Résumé
            <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#f59e0b] transition-all duration-300" />
          </a>
        </motion.div>

        <motion.div
          className="flex gap-3 justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { href: 'https://github.com/luvpee', label: 'GitHub', icon: GithubIcon },
            { href: 'https://www.linkedin.com/in/lovepreet-singh-kaler/', label: 'LinkedIn', icon: LinkedInIcon },
            { href: 'https://instagram.com/lovepreetsinghk19', label: 'Instagram', icon: InstagramIcon },
            { href: 'mailto:lovepreetkaler1660@gmail.com', label: 'Email', icon: () => <Mail className="w-5 h-5" /> },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="group p-3 rounded-xl bg-[#181b21]/70 border border-white/[0.06] text-[#a8adb6] hover:text-[#e8eaed] hover:border-[#f59e0b]/40 hover:bg-[#1e2229] transition-all duration-300"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-[#a8adb6] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}