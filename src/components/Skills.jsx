import { motion } from 'framer-motion';

// Brand color palette for each technology icon
const iconColors = {
  'C++': 'from-blue-500 to-blue-700',
  Python: 'from-yellow-400 to-blue-500',
  JavaScript: 'from-yellow-300 to-yellow-500',
  SQL: 'from-orange-400 to-red-500',
  C: 'from-slate-400 to-slate-600',
  Bash: 'from-green-400 to-emerald-600',
  'React.js': 'from-cyan-400 to-blue-500',
  'Node.js': 'from-green-500 to-green-700',
  'Express.js': 'from-slate-400 to-slate-600',
  'Socket.IO': 'from-slate-500 to-slate-700',
  'REST APIs': 'from-teal-400 to-cyan-500',
  JWT: 'from-pink-400 to-rose-600',
  Streamlit: 'from-red-400 to-pink-500',
  MongoDB: 'from-green-500 to-emerald-700',
  PostgreSQL: 'from-blue-400 to-indigo-600',
  MySQL: 'from-orange-400 to-sky-500',
  Firebase: 'from-amber-400 to-orange-600',
  Supabase: 'from-emerald-400 to-green-600',
  'MongoDB Atlas': 'from-green-500 to-teal-600',
  Render: 'from-slate-300 to-slate-500',
  Vercel: 'from-slate-100 to-slate-400',
  LangGraph: 'from-purple-400 to-pink-600',
  LangChain: 'from-emerald-400 to-teal-600',
  'LLM APIs': 'from-violet-400 to-purple-600',
  ChromaDB: 'from-orange-400 to-rose-500',
  'Vector Embeddings': 'from-fuchsia-400 to-purple-600',
  RAG: 'from-indigo-400 to-blue-600',
  'Prompt Engineering': 'from-sky-400 to-indigo-500',
  'Data Structures & Algorithms': 'from-red-400 to-orange-500',
  OOP: 'from-blue-400 to-cyan-500',
  'Operating Systems': 'from-slate-400 to-zinc-600',
  DBMS: 'from-cyan-400 to-blue-600',
  'Computer Networks': 'from-teal-400 to-emerald-500',
  'System Design': 'from-indigo-400 to-purple-600',
  Git: 'from-orange-500 to-red-600',
  GitHub: 'from-slate-200 to-slate-500',
  Linux: 'from-yellow-400 to-orange-500',
  Figma: 'from-pink-400 to-purple-500',
  Postman: 'from-orange-400 to-red-500',
};

// SVG icons (stroke-based, color follows currentColor so we can tint them)
const Icon = ({ name }) => {
  const stroke = 'currentColor';
  const wrap = (children) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      {children}
    </svg>
  );

  switch (name) {
    case 'C++':
    case 'C':
      return wrap(
        <>
          <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          <path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8" />
          <path d="M9 9l-2 6M7 12h4M15 9v6M13 12h4" />
        </>
      );
    case 'Python':
      return wrap(
        <>
          <path d="M12 3c-3 0-5 1-5 4v3h6v1H6c-2 0-3 2-3 4s1 4 3 4h2v-3c0-2 2-3 4-3h4c2 0 4-1 4-4V7c0-2-2-4-5-4h-3z" />
          <circle cx="9.5" cy="6" r="0.6" fill={stroke} />
          <path d="M12 21c3 0 5-1 5-4v-3h-6v-1h7c2 0 3-2 3-4s-1-4-3-4h-2v3c0 2-2 3-4 3H8c-2 0-4 1-4 4v2c0 2 2 4 5 4h3z" />
          <circle cx="14.5" cy="18" r="0.6" fill={stroke} />
        </>
      );
    case 'JavaScript':
      return wrap(
        <>
          <path d="M4 5h16v14H4z" />
          <path d="M10 16c0 1-.7 1.5-1.5 1.5S7 17 7 16" />
          <path d="M14 11v4.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V11" />
        </>
      );
    case 'SQL':
      return wrap(
        <>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
          <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </>
      );
    case 'Bash':
      return wrap(
        <>
          <path d="M4 18l5-6-5-6" />
          <path d="M12 18h8" />
        </>
      );
    case 'React.js':
      return wrap(
        <>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="9" ry="3.2" />
          <ellipse cx="12" cy="12" rx="9" ry="3.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.2" transform="rotate(120 12 12)" />
        </>
      );
    case 'Node.js':
      return wrap(
        <>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
          <path d="M9 13c0 1.7 1.3 3 3 3s3-1.3 3-3V9h-2v4c0 .6-.4 1-1 1s-1-.4-1-1" />
        </>
      );
    case 'Express.js':
      return wrap(
        <>
          <path d="M3 8h18" />
          <path d="M3 16h18" />
          <path d="M9 5l-3 7 3 7" />
          <path d="M15 5l3 7-3 7" />
        </>
      );
    case 'Socket.IO':
      return wrap(
        <>
          <path d="M5 12a7 7 0 0 1 14 0" />
          <path d="M8 12a4 4 0 0 1 8 0" />
          <circle cx="11" cy="12" r="0.8" fill={stroke} />
          <circle cx="13" cy="12" r="0.8" fill={stroke} />
          <circle cx="12" cy="15" r="0.6" fill={stroke} />
        </>
      );
    case 'REST APIs':
      return wrap(
        <>
          <path d="M4 7h16" />
          <path d="M4 12h10" />
          <path d="M4 17h16" />
          <path d="M17 10l3 2-3 2" />
        </>
      );
    case 'JWT':
      return wrap(
        <>
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <circle cx="12" cy="15" r="1.2" fill={stroke} />
        </>
      );
    case 'Streamlit':
      return wrap(
        <>
          <path d="M5 4c5 4 9 4 14 0" />
          <path d="M5 12c5 4 9 4 14 0" />
          <path d="M5 20c5-4 9-4 14 0" />
        </>
      );
    case 'MongoDB':
      return wrap(
        <>
          <path d="M12 3c2 4 4 6 4 10a4 4 0 1 1-8 0c0-4 2-6 4-10z" />
          <path d="M12 3v14" />
        </>
      );
    case 'PostgreSQL':
      return wrap(
        <>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v5c0 1.7 3 3 7 3s7-1.3 7-3V6" />
          <path d="M5 11v5c0 1.7 3 3 7 3s7-1.3 7-3v-5" />
        </>
      );
    case 'MySQL':
      return wrap(
        <>
          <ellipse cx="12" cy="7" rx="8" ry="3" />
          <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
          <path d="M8 22l-1-4M16 22l1-4" />
        </>
      );
    case 'Firebase':
      return wrap(
        <>
          <path d="M7 20l3-12 2 5 5-7-1 14z" />
          <path d="M7 20h10" />
        </>
      );
    case 'Supabase':
      return wrap(
        <>
          <path d="M5 18l6-12h4l-6 12z" />
          <path d="M11 18l4-8h4l-4 8z" />
        </>
      );
    case 'MongoDB Atlas':
      return wrap(
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </>
      );
    case 'Render':
      return wrap(
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
          <circle cx="7" cy="7" r="1.5" fill={stroke} />
          <circle cx="17" cy="17" r="1.5" fill={stroke} />
        </>
      );
    case 'Vercel':
      return wrap(
        <>
          <path d="M12 4l8 14H4z" />
        </>
      );
    case 'LangGraph':
    case 'LangChain':
      return wrap(
        <>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 6h8M8 18h8M6 8v8M18 8v8" />
        </>
      );
    case 'LLM APIs':
      return wrap(
        <>
          <path d="M12 3a3 3 0 0 0-3 3v1H7v4h2v6a3 3 0 0 0 6 0v-6h2V7h-2V6a3 3 0 0 0-3-3z" />
          <path d="M9 21h6" />
        </>
      );
    case 'ChromaDB':
      return wrap(
        <>
          <path d="M12 3l8 4v10l-8 4-8-4V7z" />
          <path d="M12 7l4 2v6l-4 2-4-2V9z" />
        </>
      );
    case 'Vector Embeddings':
      return wrap(
        <>
          <circle cx="6" cy="6" r="1.5" fill={stroke} />
          <circle cx="18" cy="6" r="1.5" fill={stroke} />
          <circle cx="6" cy="18" r="1.5" fill={stroke} />
          <circle cx="18" cy="18" r="1.5" fill={stroke} />
          <circle cx="12" cy="12" r="1.5" fill={stroke} />
          <path d="M7 7l10 10M17 7L7 17" />
        </>
      );
    case 'RAG':
      return wrap(
        <>
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16l4 4" />
          <path d="M9 11h4M11 9v4" />
        </>
      );
    case 'Prompt Engineering':
      return wrap(
        <>
          <path d="M4 5h16v10H4z" />
          <path d="M2 19h20" />
          <path d="M8 9h2M12 9h4M8 12h6" />
        </>
      );
    case 'Data Structures & Algorithms':
      return wrap(
        <>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M6 8v4h12V8M12 12v4" />
        </>
      );
    case 'OOP':
      return wrap(
        <>
          <rect x="3" y="6" width="7" height="5" rx="1" />
          <rect x="14" y="6" width="7" height="5" rx="1" />
          <rect x="8" y="14" width="8" height="5" rx="1" />
          <path d="M10 11v3M14 11v3" />
        </>
      );
    case 'Operating Systems':
      return wrap(
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 9l2 2 3-3" />
        </>
      );
    case 'DBMS':
      return wrap(
        <>
          <ellipse cx="12" cy="5" rx="8" ry="2.5" />
          <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
          <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
        </>
      );
    case 'Computer Networks':
      return wrap(
        <>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="M12 7v4M12 11l-7 8M12 11l7 8" />
        </>
      );
    case 'System Design':
      return wrap(
        <>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M10 7h4M7 10v4M17 10v4M10 17h4" />
        </>
      );
    case 'Git':
      return wrap(
        <>
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M6 8v8" />
          <path d="M16 12L7.5 6.5" />
        </>
      );
    case 'GitHub':
      return wrap(
        <>
          <path d="M9 19c-4 1.5-4-2-6-2M15 21v-3.5a3 3 0 0 0-.9-2.5c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.3-3.4 4.6 4.6 0 0 0-.1-3.4s-1-.3-3.5 1.3a12 12 0 0 0-6 0C7 1.3 6 1.6 6 1.6a4.6 4.6 0 0 0-.1 3.4A5 5 0 0 0 4.6 8.5c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V21" />
        </>
      );
    case 'Linux':
      return wrap(
        <>
          <path d="M12 3c-3 4-3 7-3 10 0 2-2 3-2 6h10c0-3-2-4-2-6 0-3 0-6-3-10z" />
          <circle cx="10" cy="9" r="0.6" fill={stroke} />
          <circle cx="14" cy="9" r="0.6" fill={stroke} />
          <path d="M10 13h4" />
        </>
      );
    case 'Figma':
      return wrap(
        <>
          <path d="M9 3h3v6H9a3 3 0 0 1 0-6z" />
          <path d="M12 3h3a3 3 0 0 1 0 6h-3z" />
          <path d="M12 9h3a3 3 0 0 1 0 6h-3z" />
          <path d="M9 9h3v6H9a3 3 0 0 1 0-6z" />
          <path d="M9 15h3v3a3 3 0 1 1-3-3z" />
        </>
      );
    case 'Postman':
      return wrap(
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8l-2-4M12 8l2-4" />
        </>
      );
    default:
      return wrap(<circle cx="12" cy="12" r="8" />);
  }
};

// Category accent palette (gradient + glow)
const categoryAccents = {
  Languages: { ring: 'from-amber-500/40 to-rose-500/0', icon: 'from-amber-400 to-rose-500' },
  'Web & Frameworks': { ring: 'from-cyan-500/40 to-blue-500/0', icon: 'from-cyan-400 to-blue-600' },
  'Databases & Cloud': { ring: 'from-emerald-500/40 to-teal-500/0', icon: 'from-emerald-400 to-teal-600' },
  'AI / ML Tools': { ring: 'from-fuchsia-500/40 to-purple-500/0', icon: 'from-fuchsia-400 to-purple-600' },
  'Computer Science': { ring: 'from-indigo-500/40 to-violet-500/0', icon: 'from-indigo-400 to-violet-600' },
  Tools: { ring: 'from-orange-500/40 to-amber-500/0', icon: 'from-orange-400 to-amber-500' },
};

const skillCategories = [
  { title: 'Languages', skills: ['C++', 'Python', 'JavaScript', 'SQL', 'C', 'Bash'] },
  { title: 'Web & Frameworks', skills: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'REST APIs', 'JWT', 'Streamlit'] },
  { title: 'Databases & Cloud', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'MongoDB Atlas', 'Render', 'Vercel'] },
  { title: 'AI / ML Tools', skills: ['LangGraph', 'LangChain', 'LLM APIs', 'ChromaDB', 'Vector Embeddings', 'RAG', 'Prompt Engineering'] },
  { title: 'Computer Science', skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks', 'System Design'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Linux', 'Figma', 'Postman'] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#0b0f14] overflow-hidden">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-[0.2em]">
            <span className="h-px w-8 bg-indigo-500/60" />
            My Expertise
            <span className="h-px w-8 bg-indigo-500/60" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mt-3">
            Tech <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life — hover any chip to feel it come alive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {skillCategories.map((category, catIndex) => {
            const accent = categoryAccents[category.title] || categoryAccents.Tools;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-slate-700"
              >
                {/* Gradient sweep on hover */}
                <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${accent.ring} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${accent.icon} transition-all duration-700 ease-out`} />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${accent.icon} text-white shadow-lg shadow-black/30 ring-1 ring-white/10`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-semibold text-slate-100 tracking-tight">{category.title}</h3>
                    <span className="ml-auto text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                      {category.skills.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => {
                      const grad = iconColors[skill] || 'from-slate-400 to-slate-600';
                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIndex * 0.08 + i * 0.04, duration: 0.35 }}
                          whileHover={{ y: -3, scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="group/chip relative"
                        >
                          <div className={`absolute -inset-0.5 rounded-full bg-gradient-to-r ${grad} opacity-0 group-hover/chip:opacity-100 blur-sm transition-opacity duration-300`} />
                          <div className="relative flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 group-hover/chip:border-transparent transition-all duration-300">
                            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${grad} text-white shadow-sm ring-1 ring-white/10 transition-transform duration-300 group-hover/chip:rotate-[8deg] group-hover/chip:scale-110`}>
                              <Icon name={skill} />
                            </span>
                            <span className="text-sm font-medium text-slate-300 group-hover/chip:text-white transition-colors duration-300">
                              {skill}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}