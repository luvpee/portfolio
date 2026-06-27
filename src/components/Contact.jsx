import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, ArrowUpRight, MessageSquare, Users } from 'lucide-react';

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

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'lovepreetkaler1660@gmail.com', href: 'mailto:lovepreetkaler1660@gmail.com' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/luvpee', href: 'https://github.com/luvpee' },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/lovepreet-singh-kaler', href: 'https://www.linkedin.com/in/lovepreet-singh-kaler/' },
  { icon: MapPin, label: 'Location', value: 'Sangrur, India', href: null },
];

export default function Contact() {

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#0e1014] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#a8adb6] font-semibold text-sm uppercase tracking-[0.3em]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            Available for new projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mt-4 tracking-tight">
            Got an idea?{' '}
            <span className="text-gradient-accent">Let's build it.</span>
          </h2>
          <p className="text-[#a8adb6] mt-4 max-w-2xl mx-auto">
            I reply within 24 hours. No agencies, no middlemen — just a direct line to me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: contact info only */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="relative p-8 rounded-3xl bg-[#181b21]/80 border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.14] transition-colors duration-500">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />
              <h3 className="text-xl font-bold text-[#e8eaed] mb-5 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#0e1014] border border-white/[0.08] text-[#f59e0b] text-sm font-bold">
                  @
                </span>
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-[#0e1014]/60 border border-white/[0.06] hover:border-white/[0.16] transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#181b21] border border-white/[0.08] text-[#f59e0b] flex items-center justify-center transition-colors group-hover:border-[#f59e0b]/40">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-[#6e747e] uppercase tracking-[0.15em] font-semibold">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#e8eaed] font-medium hover:text-[#f59e0b] transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#e8eaed] font-medium truncate">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 rounded-3xl bg-[#181b21]/80 border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.14] transition-colors duration-500 flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

              <h3 className="text-xl font-bold text-[#e8eaed] mb-1 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#0e1014] border border-white/[0.08] text-[#f59e0b] text-sm font-bold">
                  <Calendar className="w-4 h-4" />
                </span>
                Book a Call
              </h3>
              <p className="text-sm text-[#a8adb6] mb-5 leading-relaxed">
                Pick a slot that works for you. I keep a tight calendar and reply same-day to serious inquiries.
              </p>

              {/* Primary CTA — opens Cal.com */}
              <motion.a
                href="https://cal.com/lovepreet-kaler"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[#0e1014] font-bold overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-[#f59e0b]" />
                <span className="absolute inset-0 bg-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Open Cal.com
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-[-12deg]" />
                </span>
              </motion.a>

              {/* Meeting types */}
              <div className="mt-6 space-y-2">
                {[
                  { icon: MessageSquare, label: '15 min · Intro chat', sub: 'Quick fit-check' },
                  { icon: Users, label: '30 min · Project discussion', sub: 'Scope, timeline, budget' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0e1014]/60 border border-white/[0.04] hover:border-white/[0.12] transition-colors"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#181b21] border border-white/[0.08] text-[#f59e0b] shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-[#e8eaed] font-medium truncate">{label}</p>
                      <p className="text-[11px] text-[#6e747e] font-mono truncate">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fallback — email */}
              <div className="mt-auto pt-5 border-t border-white/[0.06] flex items-center justify-between gap-4 text-xs text-[#6e747e] font-mono">
                <span>prefer email?</span>
                <a
                  href="mailto:lovepreetkaler1660@gmail.com"
                  className="inline-flex items-center gap-1.5 text-[#a8adb6] hover:text-[#f59e0b] transition-colors font-semibold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  lovepreetkaler1660@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright — moved up from the deleted footer */}
        <p className="mt-16 text-center text-xs text-[#6e747e] font-mono">
          © {new Date().getFullYear()} lovepreet.singh.kaler
        </p>
      </div>
    </section>
  );
}