import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

// Inline brand SVGs — lucide-react v1.7.0 does not export Github/Linkedin/Instagram,
// so we keep the original icons here (they were already in the file before).
const GithubIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" ry="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'lovepreetkaler1660@gmail.com', href: 'mailto:lovepreetkaler1660@gmail.com' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/luvpee', href: 'https://github.com/luvpee' },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/lovepreet-singh-kaler', href: 'https://www.linkedin.com/in/lovepreet-singh-kaler/' },
  { icon: MapPin, label: 'Location', value: 'Sangrur, India', href: null },
];

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/luvpee', hover: 'hover:text-indigo-300 hover:border-indigo-500/40 hover:bg-indigo-500/10' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lovepreet-singh-kaler/', hover: 'hover:text-sky-300 hover:border-sky-500/40 hover:bg-sky-500/10' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/lovepreetsinghk19', hover: 'hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const { name, email, subject, message } = formState;

    try {
      const response = await fetch('https://formsubmit.co/ajax/lovepreetkaler1660@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject: subject || 'Portfolio Contact Form',
          message,
          _captcha: 'false',
          _template: 'table',
          _subject: `Portfolio contact from ${name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError('Your message could not be sent right now. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
      window.setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0b0f14]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-[0.2em]">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </span>
            Available for new projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mt-3">
            Got an idea?{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            I reply within 24 hours. No agencies, no middlemen — just a direct line to me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/70 hover:bg-slate-700 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-slate-100 font-medium hover:text-indigo-500 transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-slate-100 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, hover }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.94 }}
                    className={`group w-12 h-12 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 flex items-center justify-center transition-all duration-300 ${hover}`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Name</label>
                  <input type="text" name="name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email</label>
                  <input type="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Subject</label>
                <input type="text" name="subject" value={formState.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea name="message" value={formState.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all resize-none" placeholder="Tell me about your project..." />
              </div>
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all disabled:opacity-50">
                {isSubmitting ? (
                  <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                ) : isSubmitted ? (
                  <><CheckCircle className="w-5 h-5" />Message Sent!</>
                ) : (
                  <><Send className="w-5 h-5" />Send Message</>
                )}
              </motion.button>
              {submitError ? <p className="text-sm text-red-400">{submitError}</p> : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
