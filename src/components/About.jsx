import { motion } from 'framer-motion';
import { Code2, Users, Lightbulb, Award, Cpu, Layers, Rocket, GraduationCap, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import heroPhoto from '../assets/pfp.jpeg';

const stats = [
  { icon: Code2, label: 'Projects Built', value: '3+' },
  { icon: Users, label: 'Team Leadership', value: '1' },
  { icon: Lightbulb, label: 'DSA Problems', value: '800+' },
  { icon: Award, label: 'Contest Wins', value: '3rd Place' },
];

const highlights = [
  { icon: GraduationCap, label: 'B.Tech CS @ NIT Jalandhar' },
  { icon: MapPin, label: 'Based in Sangrur, India' },
  { icon: Sparkles, label: 'AI · Full-Stack · Systems' },
];

const pillars = [
  {
    icon: Cpu,
    title: 'Systems & Low-Level',
    description: 'Comfortable deep in distributed systems, OS internals, and C/C++ backends — I care about what happens under the abstraction.',
    bullets: ['C / C++ systems', 'Concurrency & OS', 'Architecture decisions'],
  },
  {
    icon: Layers,
    title: 'Full-Stack Product',
    description: 'Ship end-to-end: React frontends, Node/Express services, Postgres & Mongo stores, deployed on Vercel/Render — clean UI, clean APIs.',
    bullets: ['React · Node · REST', 'MongoDB · PostgreSQL', 'Auth · Realtime · APIs'],
  },
  {
    icon: Rocket,
    title: 'AI in Production',
    description: 'Building LLM-powered apps with LangGraph, LangChain, RAG, and vector search — moving from notebook demos to real users.',
    bullets: ['LangGraph · LangChain', 'RAG · Vector DBs', 'Prompt engineering'],
  },
  {
    icon: Award,
    title: 'Competitive & Community',
    description: 'Active on LeetCode/Codeforces, led initiatives at GDSC NIT Jalandhar, and constantly pushing the bar on craft and impact.',
    bullets: ['800+ DSA problems', 'GDSC leadership', '3rd place contests'],
  },
];

const nowItems = [
  { label: 'Studying', value: 'Distributed systems & DB internals' },
  { label: 'Building', value: 'AI agents with LangGraph + RAG' },
  { label: 'Exploring', value: 'Vector search & prompt reliability' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#0e1014] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-[#a8adb6] font-semibold text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
            About Me
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mt-4 tracking-tight">
            The Developer{' '}
            <span className="text-gradient-accent">Behind the Code</span>
          </h2>
          <p className="text-[#a8adb6] mt-4 max-w-2xl mx-auto">
            CS undergrad at NIT Jalandhar — I build things that sit at the intersection of
            scalable systems, full-stack web, and applied AI.
          </p>
        </motion.div>

        {/* Top: identity card + bio + stats */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Identity card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative h-full p-8 rounded-3xl bg-[#181b21]/80 border border-white/[0.06] backdrop-blur-sm overflow-hidden hover:border-white/[0.12] transition-colors duration-500">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent" />

              <div className="relative flex flex-col items-center text-center">
                {/* Photo */}
                <motion.div
                  whileHover={{ scale: 1.04, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="relative w-40 h-40 rounded-3xl bg-[#1e2229] border border-white/[0.08] overflow-hidden"
                >
                  <img
                    src={heroPhoto}
                    alt="Lovepreet Singh Kaler"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Subtle amber tint + vignette to keep it on-theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014]/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-[#e8eaed]">Lovepreet Singh Kaler</h3>
                <p className="text-sm text-[#a8adb6] mt-1 font-medium">Full-Stack & AI Engineer</p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {highlights.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0e1014]/80 border border-white/[0.06] text-xs text-[#a8adb6]"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#f59e0b]" />
                      {label}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  <a
                    href="https://cal.com/lovepreet-kaler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1208] border border-[#f59e0b]/40 text-sm font-semibold text-[#e8eaed] overflow-hidden transition-colors duration-300 hover:border-[#f59e0b]/70 hover:bg-[#221608]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 via-[#f59e0b]/15 to-[#f59e0b]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f59e0b]">
                      <span className="absolute inset-0 rounded-full bg-[#f59e0b] animate-ping opacity-75" />
                    </span>
                    <span className="relative">Book a call on Cal</span>
                    <ArrowUpRight className="relative w-3.5 h-3.5 text-[#f59e0b] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-[-12deg]" />
                  </a>
                </div>
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
            <div className="p-6 md:p-8 rounded-3xl bg-[#181b21]/80 border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-500">
              <p className="text-[#e8eaed] text-lg leading-relaxed">
                I'm a Computer Science student at{' '}
                <span className="text-[#f59e0b] font-semibold">NIT Jalandhar</span> with a strong
                focus on systems, full-stack development, and AI-powered applications.
              </p>
              <p className="text-[#a8adb6] leading-relaxed mt-4">
                My work combines scalable architecture, low-level systems thinking, and modern
                web development. I've led software initiatives at GDSC, built distributed
                systems in C, and shipped end-to-end products using React, Node.js, Python,
                and AI tools like LangGraph and LangChain.
              </p>
              <p className="text-[#a8adb6] leading-relaxed mt-4">
                I care about building things that are{' '}
                <span className="text-[#e8eaed] font-medium">performant</span>,{' '}
                <span className="text-[#e8eaed] font-medium">reliable</span>, and{' '}
                <span className="text-[#e8eaed] font-medium">actually useful</span> to the people using them.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="group relative p-4 rounded-2xl bg-[#181b21]/80 border border-white/[0.06] overflow-hidden transition-colors duration-300 hover:border-white/[0.14]"
                >
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-[#f59e0b] transition-all duration-500 ease-out" />
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0e1014] border border-white/[0.08] text-[#f59e0b] mb-2 transition-colors group-hover:border-[#f59e0b]/40">
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="text-xl font-bold text-[#e8eaed]">{stat.value}</div>
                  <div className="text-xs text-[#a8adb6] mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-6"
          >
            <div>
              <span className="text-[#a8adb6] font-semibold text-xs uppercase tracking-[0.3em]">
                What I bring
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#e8eaed] mt-1 tracking-tight">
                How I <span className="text-gradient-accent">work</span>
              </h3>
            </div>
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
                  className="group relative p-6 rounded-2xl bg-[#181b21]/80 border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-white/[0.14]"
                >
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-[#f59e0b] transition-all duration-700 ease-out" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0e1014] border border-white/[0.08] text-[#f59e0b] transition-all duration-300 group-hover:border-[#f59e0b]/40 group-hover:rotate-[6deg]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="mt-4 text-lg font-semibold text-[#e8eaed] tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#a8adb6] mt-2 leading-relaxed">
                      {pillar.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {pillar.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-xs text-[#a8adb6]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]/70" />
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

        {/* Currently strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-5 md:p-6 rounded-2xl bg-[#181b21]/80 border border-white/[0.06] backdrop-blur-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
            <span className="text-sm font-bold text-[#e8eaed] uppercase tracking-[0.2em]">
              Currently
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm">
            {nowItems.map((item, i) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-[#a8adb6] uppercase text-[11px] tracking-[0.2em] font-bold">
                  {item.label}
                </span>
                <span className="text-[#e8eaed]">{item.value}</span>
                {i < nowItems.length - 1 && (
                  <span className="hidden sm:inline-block h-4 w-px bg-white/10 ml-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}