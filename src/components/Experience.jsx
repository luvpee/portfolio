import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: '[Job Title]',
    company: '[Company Name]',
    location: '[City, Country]',
    period: '[Start] - [End]',
    description:
      'Describe your role, responsibilities, and key achievements. Focus on impactful contributions and measurable outcomes.',
    highlights: ['Key achievement 1', 'Key achievement 2', 'Key achievement 3'],
  },
  {
    type: 'work',
    title: '[Job Title]',
    company: '[Company Name]',
    location: '[City, Country]',
    period: '[Start] - [End]',
    description:
      'Another great experience that helped you grow as a developer and contributed to your professional journey.',
    highlights: ['Key achievement 1', 'Key achievement 2', 'Key achievement 3'],
  },
  {
    type: 'education',
    title: '[Degree]',
    company: '[University Name]',
    location: '[City, Country]',
    period: '[Start] - [End]',
    description:
      'Your educational background and any relevant coursework, projects, or achievements.',
    highlights: ['Notable coursework', 'Projects', 'Awards'],
  },
  {
    type: 'award',
    title: '[Award/Hackathon Name]',
    company: '[Organization]',
    location: '[City, Country]',
    period: '[Year]',
    description:
      'Recognition for outstanding achievement in coding, design, or innovation.',
    highlights: ['Competition details', 'Project summary', 'Result'],
  },
];

const TimelineItem = ({ item, index }) => {
  const Icon = item.type === 'work' ? Briefcase : item.type === 'education' ? GraduationCap : Award;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Connector Line */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center z-10">
          <Icon className="w-6 h-6 text-white" />
        </div>
        {index !== experiences.length - 1 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500 absolute top-12 left-1/2 -translate-x-1/2" />
        )}
      </div>

      {/* Content Card */}
      <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-500 text-xs font-semibold uppercase">
              {item.type}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
          <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">{item.company}</p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {item.location}
            </span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>

          <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'md:justify-start' : ''}`}>
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
              >
                {highlight}
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
    <section id="experience" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            Experience & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            A timeline of my professional growth, education, and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {experiences.map((item, index) => (
            <TimelineItem key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
