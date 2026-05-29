import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from "react-icons/fa";
import SectionWrapper from './SectionWrapper';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'Hello@Harikesh.com', href: '#' },
];

const socials = [
  { icon: SiGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Gather form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/harikeshpasi161@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        alert('Thank you! Message sent. (If this is your first test, check harikeshpasi161@gmail.com to activate FormSubmit)');
        e.target.reset();
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to the server. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-6 mb-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left: Giant Typography (Sticky) */}
          <div className="lg:sticky lg:top-32 space-y-8 pr-0 lg:pr-12 pointer-events-none">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black font-[family-name:var(--font-display)] leading-[1.1] uppercase tracking-tighter"
            >
              Let's build<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-[gradient-shift_3s_linear_infinite] opacity-90 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                Something Extraordinary.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg md:text-2xl font-light"
            >
              Have a visionary idea? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </motion.p>
            
            <div className="pt-8 pointer-events-auto">
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center bg-dark-700/50 border border-slate-700/50 text-slate-300 hover:text-primary hover:border-primary/50 shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Terminal-Style Minimal Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent blur-3xl rounded-3xl -z-10" />

            <div className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 shadow-[0_0_40px_rgba(10,10,20,0.5)]">
              {/* Terminal header dots */}
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <span className="absolute left-0 top-3 text-primary font-mono select-none">~</span>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full pl-6 pr-4 py-3 bg-transparent border-b border-dark-400 text-white placeholder-slate-600 focus:border-primary focus:outline-none transition-colors font-mono tracking-tight peer"
                  />
                  <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary peer-focus:w-full transition-all duration-300" />
                </div>

                <div className="relative group">
                  <span className="absolute left-0 top-3 text-primary font-mono select-none">@</span>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full pl-6 pr-4 py-3 bg-transparent border-b border-dark-400 text-white placeholder-slate-600 focus:border-primary focus:outline-none transition-colors font-mono tracking-tight peer"
                  />
                  <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary peer-focus:w-full transition-all duration-300" />
                </div>

                <div className="relative group pt-4">
                  <span className="absolute left-0 top-7 text-primary font-mono select-none">&gt;</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Type your message..."
                    className="w-full pl-6 pr-4 py-3 bg-transparent border-b border-dark-400 text-white placeholder-slate-600 focus:border-primary focus:outline-none transition-colors font-mono tracking-tight resize-none peer"
                  />
                  <div className="absolute left-0 bottom-1 w-0 h-0.5 bg-accent peer-focus:w-full transition-all duration-500" />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative mt-4 overflow-hidden rounded-xl bg-dark-700 border border-primary/30 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative px-8 py-5 flex items-center justify-between text-white font-bold tracking-widest uppercase">
                    <span>{isSubmitting ? 'Sending...' : 'Initialize Sequence'}</span>
                    <ChevronRight className="transform group-hover:translate-x-2 outline-none transition-transform duration-300" />
                  </div>
                </motion.button>
              </form>
            </div>
            
            {/* Contact Details Tags */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              {contactInfo.map((info) => (
                <a 
                  key={info.label} 
                  href={info.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-dark-400 bg-dark-800 text-slate-400 hover:text-white hover:border-primary hover:bg-dark-700 transition-all font-mono text-sm"
                >
                  <info.icon size={14} className="text-primary-light" />
                  {info.value}
                </a>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}