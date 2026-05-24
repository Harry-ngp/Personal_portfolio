import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from "react-icons/fa";
import SectionWrapper from './SectionWrapper';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
  { icon: MapPin, label: 'Location', value: 'Your City, Country', href: '#' },
];

const socials = [
  { icon: SiGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, Formspree)
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-hover p-5 flex items-center gap-4 block"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary-light" size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-slate-500 mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-700/50 text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8"
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-slate-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-400 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-slate-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-400 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="contact-subject" className="block text-sm text-slate-400 mb-2">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                required
                placeholder="Project Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-400 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="contact-message" className="block text-sm text-slate-400 mb-2">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-400 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glow-btn w-full flex items-center justify-center gap-2 text-base !py-3.5"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}