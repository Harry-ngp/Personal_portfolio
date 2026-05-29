import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Brain, Terminal, Layers } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
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
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-bold gradient-text drop-shadow-md">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { icon: Code2, title: "LeetCode Solved", value: 100, suffix: "+", desc: "Problems across arrays, graphs, DP, etc." },
  { icon: Brain, title: "Strong DSA Foundation", value: null, text: "Data Structures & Algorithms", desc: "Solid grasp of core algorithms and optimal complexity analysis." },
  { icon: Terminal, title: "STL Proficiency", value: null, text: "C++ STL Mastery", desc: "Extensive use of maps, sets, priority queues, and algorithms." },
  { icon: Layers, title: "Problem Solving", value: null, text: "Analytical Mindset", desc: "Breaking down complex logic into scalable, efficient code." }
];

export default function CompetitiveProgramming() {
  return (
    <SectionWrapper id="cp">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            Competitive <span className="gradient-text">Programming</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              className="glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl"
              style={{ perspective: 1000 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <stat.icon className="w-10 h-10 text-primary-light mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                
                <div className="my-4 h-16 flex items-center">
                  {stat.value !== null ? (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span className="text-xl md:text-2xl font-bold text-primary-light">{stat.text}</span>
                  )}
                </div>
                
                <p className="text-sm text-slate-400">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
