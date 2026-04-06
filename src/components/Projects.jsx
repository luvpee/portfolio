import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: '[Project Name]',
    description: 'A brief description of the project. Explain what it does, the problem it solves, and the impact it has.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    live: 'https://example.com',
    github: 'https://github.com',
    featured: true,
  },
  {
    title: '[Project Name]',
    description: 'Another amazing project showcasing your skills. Built with modern technologies and best practices.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
  {
    title: '[Project Name]',
    description: 'An innovative solution that demonstrates your technical prowess and creative thinking.',
    tech: ['Vue.js', 'Firebase', 'GSAP', 'Stripe'],
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
  {
    title: '[Project Name]',
    description: 'A full-stack application with real-time features and a seamless user experience.',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
    live: 'https://example.com',
    github: 'https://github.com',
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300"
  >
    {project.featured && (
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-500 text-xs font-semibold">
        Featured
      </div>
    )}

    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-all">
      {project.title}
    </h3>

    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((t) => (
        <span key={t} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
          {t}
        </span>
      ))}
    </div>

    <div className="flex gap-4">
      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">
        <ExternalLink className="w-4 h-4" />
        Live Demo
      </a>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">
        <GithubIcon />
        Code
      </a>
    </div>
  </motion.div>
);

const FeaturedProject = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative grid md:grid-cols-2 gap-8 p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-500"
  >
    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
      <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
        <span className="text-6xl">🚀</span>
      </div>
    </div>

    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-500 text-sm font-semibold">
          Featured Project
        </span>
      </div>

      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-all">
        {project.title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
          View Live
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-300 dark:hover:bg-white/10 transition-all">
          <GithubIcon />
          Source
        </a>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 font-semibold text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="mb-16">
          <FeaturedProject project={projects[0]} index={0} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-300 dark:hover:bg-white/10 transition-all">
            View All Projects on GitHub
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
