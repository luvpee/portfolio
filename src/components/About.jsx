import { motion } from 'framer-motion';
import { Code2, Users, Lightbulb, Award } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Projects Delivered', value: '[X]+' },
  { icon: Users, label: 'Happy Clients', value: '[X]+' },
  { icon: Lightbulb, label: 'Years Experience', value: '[X]+' },
  { icon: Award, label: 'Awards Won', value: '[X]+' },
];

const qualities = [
  {
    title: 'Problem Solver',
    description:
      'I break down complex problems into elegant, maintainable solutions. Every challenge is an opportunity to innovate.',
  },
  {
    title: 'Clean Code Advocate',
    description:
      'I believe in writing code that not only works but is also readable, maintainable, and scalable for future teams.',
  },
  {
    title: 'Continuous Learner',
    description:
      'The tech landscape evolves fast. I stay current with emerging technologies and best practices daily.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            The Developer Behind the Code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for detail and a
              love for creating seamless user experiences. With expertise spanning
              both front-end and back-end development, I build applications that are
              not only visually stunning but also robust and scalable.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              My journey in tech has been driven by curiosity and a constant desire
              to learn. From crafting pixel-perfect UIs to architecting efficient
              server solutions, I thrive on turning complex problems into elegant
              code.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"
                >
                  <stat.icon className="w-6 h-6 text-indigo-500 mb-2" />
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Qualities */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {quality.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
