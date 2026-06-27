import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// ASCII art logos — each project gets a distinct visual that hints at the domain
const ProjectLogo = ({ kind }) => {
  if (kind === 'nfs') {
    // Distributed network — nodes + connections
    return (
      <svg viewBox="0 0 200 110" className="w-full h-full">
        <defs>
          <linearGradient id="lineA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <line x1="40" y1="55" x2="100" y2="25" stroke="url(#lineA)" strokeWidth="1" />
        <line x1="40" y1="55" x2="100" y2="85" stroke="url(#lineA)" strokeWidth="1" />
        <line x1="100" y1="25" x2="160" y2="55" stroke="url(#lineA)" strokeWidth="1" />
        <line x1="100" y1="85" x2="160" y2="55" stroke="url(#lineA)" strokeWidth="1" />
        <line x1="100" y1="25" x2="100" y2="85" stroke="url(#lineA)" strokeWidth="1" />
        {[ [40,55], [100,25], [100,85], [160,55] ].map(([x,y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="2" fill="#f59e0b" />
          </g>
        ))}
        <text x="100" y="100" textAnchor="middle" fill="#6e747e" fontFamily="monospace" fontSize="8" letterSpacing="2">REPLICATED · SHARDED</text>
      </svg>
    );
  }
  if (kind === 'finance') {
    // AI agent graph — nodes with currency flow
    return (
      <svg viewBox="0 0 200 110" className="w-full h-full">
        <line x1="40" y1="55" x2="100" y2="35" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="100" y1="35" x2="160" y2="55" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="40" y1="55" x2="100" y2="75" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="100" y1="75" x2="160" y2="55" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="100" y1="35" x2="100" y2="75" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" />
        <rect x="30" y="48" width="20" height="14" rx="2" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.2" />
        <circle cx="100" cy="35" r="6" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.5" />
        <circle cx="100" cy="35" r="2" fill="#f59e0b" />
        <circle cx="100" cy="75" r="6" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.5" />
        <circle cx="100" cy="75" r="2" fill="#f59e0b" />
        <rect x="150" y="48" width="20" height="14" rx="2" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.2" />
        <text x="100" y="100" textAnchor="middle" fill="#6e747e" fontFamily="monospace" fontSize="8" letterSpacing="2">LANGGRAPH · RAG</text>
      </svg>
    );
  }
  // club — campus events, people + notifications
  return (
    <svg viewBox="0 0 200 110" className="w-full h-full">
      <circle cx="60" cy="40" r="8" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.2" />
      <circle cx="100" cy="55" r="10" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.5" />
      <circle cx="140" cy="40" r="8" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.2" />
      <circle cx="80" cy="78" r="8" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.2" />
      <circle cx="120" cy="78" r="8" fill="#0e1014" stroke="#f59e0b" strokeWidth="1.2" />
      <line x1="60" y1="40" x2="100" y2="55" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="100" y1="55" x2="140" y2="40" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="100" y1="55" x2="80" y2="78" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="100" y1="55" x2="120" y2="78" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="100" cy="55" r="2" fill="#f59e0b" />
      <text x="100" y="100" textAnchor="middle" fill="#6e747e" fontFamily="monospace" fontSize="8" letterSpacing="2">SOCKET.IO · RBAC</text>
    </svg>
  );
};

const projects = [
  {
    title: 'Distributed Network File System',
    short: 'NFS',
    kind: 'nfs',
    description:
      'A fault-tolerant distributed file system in C with TCP/IP sockets, POSIX threads, a Trie index, LRU cache, replication, and heartbeat-based failure detection.',
    tech: ['C', 'TCP/IP', 'POSIX', 'LRU Cache', 'Linux'],
    github: 'https://github.com/luvpee/Network-File-System',
    live: null,
    featured: true,
    metrics: [
      { label: 'Language', value: 'C' },
      { label: 'Patterns', value: 'Replication' },
      { label: 'Index', value: 'Trie + LRU' },
    ],
  },
  {
    title: 'ArthMitra',
    short: 'AM',
    kind: 'finance',
    description:
      'An AI-powered personal finance assistant with LangGraph-based multi-agent workflows, RAG over transaction history, and automated bank statement ETL.',
    tech: ['Python', 'LangGraph', 'LangChain', 'Supabase', 'ChromaDB', 'Streamlit'],
    github: 'https://github.com/luvpee/arthmitra',
    live: null,
    featured: false,
    metrics: [
      { label: 'AI', value: 'Multi-agent' },
      { label: 'Memory', value: 'RAG + Vector' },
      { label: 'ETL', value: 'Statements' },
    ],
  },
  {
    title: 'Campora',
    short: 'CM',
    kind: 'club',
    description:
      'A MERN platform for university clubs and events with real-time Socket.IO notifications, RBAC, and deployment on Render + MongoDB Atlas.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
    github: 'https://github.com/luvpee/Campora',
    live: null,
    featured: false,
    metrics: [
      { label: 'Stack', value: 'MERN' },
      { label: 'Realtime', value: 'Socket.IO' },
      { label: 'Auth', value: 'RBAC' },
    ],
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    whileHover={{ y: -4 }}
    className={`group relative flex h-full flex-col rounded-2xl border backdrop-blur-sm transition-all duration-500 overflow-hidden ${
      project.featured
        ? 'bg-[#181b21]/80 border-[#f59e0b]/30 hover:border-[#f59e0b]/60'
        : 'bg-[#181b21]/80 border-white/[0.06] hover:border-white/[0.16]'
    }`}
  >
    {/* Top accent line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

    {project.featured && (
      <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0e1014] border border-[#f59e0b]/30 text-[#f59e0b] text-[10px] font-bold uppercase tracking-[0.15em]">
        <span className="inline-block h-1 w-1 rounded-full bg-[#f59e0b]" />
        Featured
      </div>
    )}

    {/* Visual */}
    <div className="relative aspect-[16/9] bg-[#0e1014] border-b border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 p-5">
        <ProjectLogo kind={project.kind} />
      </div>
      {/* Index in corner */}
      <div className="absolute top-3 left-3 text-[10px] font-mono text-[#6e747e] tracking-widest">
        {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-semibold text-[#e8eaed] tracking-tight group-hover:text-[#f59e0b] transition-colors">
          {project.title}
        </h3>
      </div>
      <p className="text-[#a8adb6] text-sm leading-relaxed mb-5">{project.description}</p>

      {/* Metric grid */}
      <div className="grid grid-cols-3 gap-1.5 mb-5 p-3 rounded-xl bg-[#0e1014]/60 border border-white/[0.04]">
        {project.metrics.map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#6e747e]">{m.label}</div>
            <div className="text-xs font-semibold text-[#e8eaed] mt-0.5 truncate">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-full bg-[#0e1014]/80 text-[10px] text-[#a8adb6] border border-white/[0.06] font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer links */}
      <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#0e1014]/80 border border-white/[0.06] hover:border-[#f59e0b]/40 hover:bg-[#1e2229] text-[#e8eaed] text-xs font-semibold transition-all duration-300"
        >
          <GithubIcon />
          Source
          <ArrowUpRight className="w-3 h-3 opacity-0 -ml-1 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
        </a>
        <button
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0e1014]/80 border border-white/[0.06] hover:border-[#f59e0b]/40 hover:bg-[#1e2229] text-[#a8adb6] hover:text-[#f59e0b] transition-all duration-300"
          aria-label="Star project"
        >
          <Star className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </motion.article>
);

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-[#0e1014] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[#a8adb6] font-semibold text-sm uppercase tracking-[0.3em]">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mt-4 tracking-tight">
              Featured <span className="text-gradient-accent">Projects</span>
            </h2>
            <p className="text-[#a8adb6] mt-4 max-w-2xl">
              A curated set of projects spanning systems, AI, and full-stack — each one taught me something I couldn't have learned from tutorials.
            </p>
          </div>
          <a
            href="https://github.com/luvpee"
            target="_blank"
            rel="noopener noreferrer"
            className="group self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#181b21]/80 border border-white/[0.08] text-[#e8eaed] text-sm font-semibold hover:border-[#f59e0b]/40 hover:bg-[#1e2229] transition-all duration-300"
          >
            All on GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-[-12deg]" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}