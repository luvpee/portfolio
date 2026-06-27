import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    type: 'award',
    label: 'Achievement',
    title: 'CodeStorms 2025 — 3rd Place',
    company: 'Campus-wide competitive programming contest, NIT Jalandhar',
    location: 'NIT Jalandhar',
    period: '2025',
    summary:
      'Top 3 finish out of 100+ participants in a timed algorithmic contest.',
    story:
      'Two hours, six problems, no internet. Placed behind two seniors I had no business keeping up with. The result that mattered most was realising that consistent daily practice compounds — this was paid for by 800+ problems solved before it.',
    highlights: ['Top 3 of 100+', 'Algorithmic pressure test', 'Practice compounds'],
    link: null,
  },
  {
    type: 'work',
    label: 'Leadership',
    title: 'Co-Lead · Software Development & Competitive Programming',
    company: 'Google Developer Student Club (GDSC), NIT Jalandhar',
    location: 'Jalandhar, Punjab',
    period: 'Dec 2024 – Present',
    summary:
      'Leading a technical core team that drives software initiatives and competitive programming culture on campus.',
    story:
      'What started as showing up turned into coordinating workshops, mentoring juniors, and shipping internal tools for the club. The big unlock: learning to translate engineering judgment into guidance for a room of people with very different skill levels.',
    highlights: ['Team leadership', 'Workshop design', 'Mentorship', 'Internal tooling'],
    link: 'https://gdsc.community.dev/nit-jalandhar/',
  },
  {
    type: 'education',
    label: 'Education',
    title: 'B.Tech in Computer Science & Engineering',
    company: 'Dr. B.R. Ambedkar National Institute of Technology (NIT), Jalandhar',
    location: 'Jalandhar, Punjab',
    period: 'Aug 2024 – May 2028',
    summary:
      'Currently in my second year. CGPA 8.09/10, focused on systems, distributed computing, and applied AI.',
    story:
      'NIT was the environment I needed — surrounded by people who treat CS as a craft. Coursework gave me the formal backbone (OS, DBMS, networks, theory); the real learning happens at 2am building something nobody asked for.',
    highlights: ['CGPA 8.09 / 10', 'Core CS fundamentals', 'Systems & software track'],
    link: 'https://www.nitj.ac.in/',
  },
  {
    type: 'award',
    label: 'Milestone',
    title: 'JEE Main 2024 — AIR 14,992',
    company: 'National entrance examination, 1.23M+ candidates',
    location: 'India',
    period: '2024',
    summary:
      '99.07 percentile. Top ~1.2% nationwide — the entry ticket to NIT Jalandhar.',
    story:
      'The first time I had to grind at a scale where the work itself was the point. It taught me how to study under pressure and how to stay honest about what I didn’t know yet.',
    highlights: ['AIR 14,992', '99.07 percentile', 'Top 1.2% nationwide'],
    link: null,
  },
];

const TypeIcon = ({ type }) => {
  if (type === 'work') return <Briefcase className="w-5 h-5" />;
  if (type === 'education') return <GraduationCap className="w-5 h-5" />;
  return <Award className="w-5 h-5" />;
};

const TimelineItem = ({ item, index }) => {
  const isCurrent = item.period.includes('Present');
  const isReverse = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative flex gap-6 ${isReverse ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Icon column */}
      <div className="hidden md:flex flex-col items-center">
        <div
          className={`relative w-12 h-12 rounded-full flex items-center justify-center z-10 ring-4 ring-[#0e1014] text-[#f59e0b] ${
            isCurrent
              ? 'bg-[#1a1208] border border-[#f59e0b]/60'
              : 'bg-[#181b21] border border-white/[0.1]'
          }`}
        >
          <TypeIcon type={item.type} />
          {isCurrent && (
            <span className="absolute -inset-1 rounded-full border border-[#f59e0b]/30 animate-ping" />
          )}
        </div>
      </div>

      {/* Card column */}
      <div className={`flex-1 ${isReverse ? 'md:text-right' : ''}`}>
        <motion.div
          whileHover={{ y: -3 }}
          className={`group relative p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 overflow-hidden ${
            isCurrent
              ? 'bg-[#181b21]/80 border border-[#f59e0b]/25 hover:border-[#f59e0b]/50'
              : 'bg-[#181b21]/80 border border-white/[0.06] hover:border-white/[0.16]'
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent" />

          {/* Mobile icon */}
          <div className="md:hidden mb-4 flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-[#f59e0b] ${
                isCurrent
                  ? 'bg-[#1a1208] border border-[#f59e0b]/60'
                  : 'bg-[#181b21] border border-white/[0.08]'
              }`}
            >
              <TypeIcon type={item.type} />
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] ${
                isCurrent
                  ? 'bg-[#1a1208] border border-[#f59e0b]/40 text-[#f59e0b]'
                  : 'bg-[#0e1014]/80 border border-white/[0.08] text-[#a8adb6]'
              }`}
            >
              {item.label}
              {isCurrent && (
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b] animate-pulse ml-0.5" />
              )}
            </span>
          </div>

          <div className={`hidden md:flex items-center gap-2 mb-3 ${isReverse ? 'md:justify-start' : ''}`}>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] ${
                isCurrent
                  ? 'bg-[#1a1208] border border-[#f59e0b]/40 text-[#f59e0b]'
                  : 'bg-[#0e1014]/80 border border-white/[0.08] text-[#a8adb6]'
              }`}
            >
              {item.label}
              {isCurrent && (
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b] animate-pulse ml-0.5" />
              )}
            </span>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e747e] hover:text-[#f59e0b] transition-colors"
                aria-label={`Open ${item.company}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <h3
            className={`text-xl font-bold text-[#e8eaed] mb-1 group-hover:text-[#f59e0b] transition-colors ${
              isReverse ? 'md:text-left' : ''
            }`}
          >
            {item.title}
          </h3>
          <p className={`text-[#a8adb6] font-medium mb-3 text-sm ${isReverse ? 'md:text-left' : ''}`}>
            {item.company}
          </p>

          <div
            className={`flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#6e747e] mb-4 font-mono ${
              isReverse ? 'md:justify-start' : ''
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#f59e0b]" />
              {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
              {item.location}
            </span>
          </div>

          <p className={`text-[#e8eaed] text-sm leading-relaxed mb-2 ${isReverse ? 'md:text-left' : ''}`}>
            {item.summary}
          </p>
          <p className={`text-[#a8adb6] text-sm leading-relaxed mb-4 ${isReverse ? 'md:text-left' : ''}`}>
            {item.story}
          </p>

          <div className={`flex flex-wrap gap-1.5 ${isReverse ? 'md:justify-start' : ''}`}>
            {item.highlights.map((h) => (
              <span
                key={h}
                className="px-2.5 py-0.5 rounded-full bg-[#0e1014]/80 text-[11px] text-[#a8adb6] border border-white/[0.06] font-mono"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-[#0e1014] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#a8adb6] font-semibold text-sm uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
            The Path So Far
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mt-4 tracking-tight">
            Experience & <span className="text-gradient-accent">Education</span>
          </h2>
          <p className="text-[#a8adb6] mt-4 max-w-2xl mx-auto">
            Leadership, classroom, contest floor. The pieces that shaped how I build today.
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((item, index) => (
            <TimelineItem key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}