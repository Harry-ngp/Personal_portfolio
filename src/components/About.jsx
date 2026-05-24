import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, Briefcase, Code2, Coffee } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import ImageSlot from './ImageSlot';

// ============================================================
// 🖼️ IMAGE SLOT: Replace null with your about photo import
//    Example: import aboutImg from '../assets/about.jpg';
// ============================================================
const aboutImage = null;

const stats = [
  { icon: Code2, value: 50, suffix: '+', label: 'Projects' },
  { icon: Briefcase, value: 3, suffix: '+', label: 'Years Exp.' },
  { icon: Award, value: 10, suffix: '+', label: 'Certifications' },
  { icon: Coffee, value: 1000, suffix: '+', label: 'Cups of Coffee' },
];

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative gradient-border rounded-2xl">
                <ImageSlot
                  src={aboutImage}
                  alt="About Photo"
                  className="w-72 h-80 md:w-96 md:h-[28rem]"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 flex items-center gap-2"
              >
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="text-xs text-slate-400">Experience</p>
                  <p className="text-sm font-bold text-white">3+ Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 font-[family-name:var(--font-display)]">
              A passionate developer crafting digital experiences
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I&apos;m a creative developer with a passion for building beautiful, functional
              web applications. With experience in modern frameworks and design tools,
              I bring ideas to life through clean code and intuitive design.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or designing user interfaces
              that push the boundaries of what&apos;s possible on the web.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary-light mx-auto mb-2" />
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
