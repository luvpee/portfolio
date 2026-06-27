import { motion } from 'framer-motion';
import { Code2, Users, Lightbulb, Award, Cpu, Layers, Rocket, GraduationCap, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Projects Built', value: '3+', accent: 'from-indigo-500 to-blue-600' },
  { icon: Users, label: 'Team Leadership', value: '1', accent: 'from-fuchsia-500 to-pink-600' },
  { icon: Lightbulb, label: 'DSA Problems', value: '800+', accent: 'from-amber-400 to-orange-500' },
  { icon: Award, label: 'Contest Wins', value: '3rd Place', accent: 'from-emerald-400 to-teal-600' },
];

const highlights = [
  { icon: GraduationCap, label: 'B.Tech CS @ NIT Jalandhar' },
  { icon: MapPin, label: 'Based in Sangrur, India' },
  { icon: Sparkles, label: 'AI · Full-Stack · Systems' },
];

// Replaces the old "Systems Thinking / Product Builder / Continuous Learner" cards.
const pillars = [
  {
    icon: Cpu,
    title: 'Systems & Low-Level',
    description:
      'Comfortable deep in distributed systems, OS internals, and C/C++ backends — I care about what happens under the abstraction.',
    bullets: ['C / C++ systems', 'Concurrency & OS', 'Architecture decisions'],
    accent: 'from-cyan-400 to-indigo-600',
    glow: 'from-cyan-500/30 to-indigo-500/0',
  },
  {
    icon: Layers,
    title: 'Full-Stack Product',
    description:
      'Ship end-to-end: React frontends, Node/Express services, Postgres & Mongo stores, deployed on Vercel/Render — clean UI, clean APIs.',
    bullets: ['React · Node · REST', 'MongoDB · PostgreSQL', 'Auth · Realtime · APIs'],
    accent: 'from-fuchsia-400 to-purple-600',
    glow: 'from-fuchsia-500/30 to-purple-500/0',
  },
  {
    icon: Rocket,
    title: 'AI in Production',
    description:
      'Building LLM-powered apps with LangGraph, LangChain, RAG, and vector search — moving from notebook demos to real users.',
    bullets: ['LangGraph · LangChain', 'RAG · Vector DBs', 'Prompt engineering'],
    accent: 'from-emerald-400 to-teal-600',
    glow: 'from-emerald-500/30 to-teal-500/0',
  },
  {
    icon: Award,
    title: 'Competitive & Community',
    description:
      'Active on LeetCode/Codeforces, led initiatives at GDSC NIT Jalandhar, and constantly pushing the bar on craft and impact.',
    bullets: ['800+ DSA problems', 'GDSC leadership', '3rd place contests'],
    accent: 'from-amber-400 to-rose-500',
    glow: 'from-amber-500/30 to-rose-500/0',
  },
];

const nowItems = [
  { label: 'Studying', value: 'Distributed systems & DB internals' },
  { label: 'Building', value: 'AI agents with LangGraph + RAG' },
  { label: 'Exploring', value: 'Vector search & prompt reliability' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#0b0f14] overflow-hidden">
      {/* Decorative background glows (same language as Skills) */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-[0.2em]">
            <span className="h-px w-8 bg-indigo-500/60" />
            About Me
            <span className="h-px w-8 bg-indigo-500/60" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mt-3">
            The Developer{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Behind the Code
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            CS undergrad at NIT Jalandhar — I build things that sit at the intersection of
            scalable systems, full-stack web, and applied AI.
          </p>
        </motion.div>

        {/* Top: identity card + bio + stats */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Identity / portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative h-full p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm overflow-hidden">
              {/* accent strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500" />
              {/* decorative glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />

              <div className="relative flex flex-col items-center text-center">
                {/* Stylized monogram avatar */}
                <motion.div
                  whileHover={{ scale: 1.04, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="relative w-40 h-40 rounded-3xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500 p-[2px] shadow-2xl shadow-indigo-500/30"
                >
                  <div className="w-full h-full rounded-3xl bg-[#0b0f14] flex items-center justify-center">
                    <span className="text-5xl font-bold bg-gradient-to-br from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent tracking-tight">
                      LP
                    </span>
                  </div>
                  {/* Status dot */}
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-[#0b0f14]" />
                  </span>
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-slate-100">Lovepreet Singh Kaler</h3>
                <p className="text-sm text-slate-400 mt-1">Full-Stack & AI Engineer</p>

                {/* Highlight chips */}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {highlights.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/70 border border-slate-800 text-xs text-slate-300"
                    >
                      <Icon className="w-3.5 h-3.5 text-indigo-400" />
                      {label}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group relative mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/70 border border-slate-800 text-sm font-medium text-slate-200 overflow-hidden transition-colors duration-300 hover:border-indigo-500/50"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/15 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </span>
                  <span className="relative">Open to interesting work</span>
                  <ArrowUpRight className="relative w-3.5 h-3.5 text-indigo-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-[-8deg]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              <p className="text-slate-200 text-lg leading-relaxed">
                I’m a Computer Science student at{' '}
                <span className="text-indigo-300 font-medium">NIT Jalandhar</span> with a strong
                focus on systems, full-stack development, and AI-powered applications.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                My work combines scalable architecture, low-level systems thinking, and modern
                web development. I’ve led software initiatives at GDSC, built distributed
                systems in C, and shipped end-to-end products using React, Node.js, Python,
                and AI tools like LangGraph and LangChain.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                I care about building things that are{' '}
                <span className="text-slate-200">performant</span>,{' '}
                <span className="text-slate-200">reliable</span>, and{' '}
                <span className="text-slate-200">actually useful</span> to the people using them.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="group relative p-4 rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-colors duration-300 hover:border-slate-700"
                >
                  {/* top accent on hover */}
                  <div className={`absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${stat.accent} transition-all duration-500 ease-out`} />
                  <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${stat.accent} text-white shadow-md ring-1 ring-white/10 mb-2`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="text-xl font-bold text-slate-100">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pillars (replaces old 3-tab quality cards) */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-6"
          >
            <div>
              <span className="text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em]">What I bring</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mt-1">How I work</h3>
            </div>
            <span className="hidden sm:block text-xs text-slate-500">Hover any card</span>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-slate-700"
                >
                  {/* hover halo */}
                  <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${pillar.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />
                  {/* accent bar */}
                  <div className={`absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${pillar.accent} transition-all duration-700 ease-out`} />

                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.accent} text-white shadow-lg shadow-black/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:rotate-[6deg] group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="mt-4 text-lg font-semibold text-slate-100 tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {pillar.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.accent}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* "What I'm doing now" strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Currently
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm">
            {nowItems.map((item, i) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-slate-500 uppercase text-[11px] tracking-wider font-semibold">
                  {item.label}
                </span>
                <span className="text-slate-200">{item.value}</span>
                {i < nowItems.length - 1 && (
                  <span className="hidden sm:inline-block h-4 w-px bg-slate-700 ml-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}