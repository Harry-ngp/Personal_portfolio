import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Target } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import ImageSlot from './ImageSlot';

const aboutImage = null;

const highlights = [
  { 
    icon: GraduationCap, 
    title: 'Education', 
    desc: 'B.Tech in Computer Science and Engineering at SVNIT Surat. Building a strong theoretical and practical foundation.' 
  },
  { 
    icon: BookOpen, 
    title: 'Roadmap', 
    desc: 'Deep diving into advanced Data Structures, System Design, and exploring AI/ML integration in scalable architectures.' 
  },
  { 
    icon: Target, 
    title: 'Goals', 
    desc: 'Aiming to secure a top-tier software engineering internship where I can contribute to high-impact products and learn from industry leaders.' 
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative gradient-border rounded-2xl">
                <ImageSlot
                  src={aboutImage}
                  alt="About Photo"
                  className="w-72 h-80 md:w-96 md:h-[28rem]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 font-[family-name:var(--font-display)]">
              Bridging theory and impactful execution
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I am a driven software engineering student who thrives at the intersection of complex algorithms and beautiful user interfaces. My academic journey at SVNIT Surat has honed my analytical skills, while my side projects have taught me how to deliver real-world value.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether optimizing a backend service, writing competitive programming solutions, or crafting accessible frontend architectures, I approach every challenge with curiosity and a dedication to writing clean, maintainable code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-5 group hover:border-primary/40 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary-light mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
