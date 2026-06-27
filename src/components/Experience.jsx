import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Software Development & Competitive Programming Core Team Co-Lead',
    company: 'Google Developer Student Club (GDSC), NIT Jalandhar',
    location: 'Jalandhar, Punjab',
    period: 'Dec 2024 - Present',
    description: 'Led technical initiatives, mentored peers, and coordinated competitive programming and software development efforts.',
    highlights: ['Community leadership', 'Software development', 'Competitive programming'],
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    company: 'Dr. B.R. Ambedkar National Institute of Technology (NIT), Jalandhar',
    location: 'Jalandhar, Punjab',
    period: 'Aug 2024 - May 2028',
    description: 'Graduated with a CGPA of 8.09/10 while building a strong foundation in core CS concepts and system design.',
    highlights: ['CGPA: 8.09/10', 'Core CS fundamentals', 'Systems and software development'],
  },
  {
    type: 'award',
    title: 'CodeStorms 2025',
    company: 'Campus-wide Coding Contest',
    location: 'NIT Jalandhar',
    period: '2025',
    description: 'Secured 3rd place among 100+ participants in a competitive programming challenge.',
    highlights: ['Top 3 finish', 'Algorithmic problem solving', 'Contest performance'],
  },
  {
    type: 'award',
    title: 'JEE Main 2024',
    company: 'National Entrance Examination',
    location: 'India',
    period: '2024',
    description: 'Ranked AIR 14,992 with a 99.07 percentile among 1.23 million+ candidates.',
    highlights: ['AIR 14,992', '99.07 percentile', 'Top 1% nationwide'],
  },
];

const TimelineItem = ({ item, index }) => {
  const Icon = item.type === 'work' ? Briefcase : item.type === 'education' ? GraduationCap : Award;
  return (
    <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`relative flex gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center z-10"><Icon className="w-6 h-6 text-white" /></div>
      </div>
      <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
        <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <div className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"><Icon className="w-5 h-5 text-white" /></div>
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-500 text-xs font-semibold uppercase">{item.type}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-1">{item.title}</h3>
          <p className="text-slate-300 font-medium mb-2">{item.company}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{item.period}</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{item.location}</span>
          </div>
          <p className="text-slate-400 mb-4">{item.description}</p>
          <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'md:justify-start' : ''}`}>
            {item.highlights.map((h) => (<span key={h} className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">{h}</span>))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0b0f14]">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-indigo-500 font-semibold text-sm uppercase tracking-wider">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mt-2">Experience & Education</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">A timeline of my professional growth</p>
        </motion.div>
        <div className="relative space-y-8">
          {experiences.map((item, index) => (<TimelineItem key={`${item.title}-${index}`} item={item} index={index} />))}
        </div>
      </div>
    </section>
  );
}
