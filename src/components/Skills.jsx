import { motion } from 'framer-motion';
import {
  Code2, Database, Globe, Layout, Server, Smartphone,
  Palette, GitBranch, Terminal, PenTool, Cpu, Cloud
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const skills = [
  { name: 'React / Next.js', icon: Code2, level: 90, color: '#61DAFB' },
  { name: 'JavaScript / TS', icon: Terminal, level: 85, color: '#F7DF1E' },
  { name: 'Node.js', icon: Server, level: 80, color: '#339933' },
  { name: 'HTML / CSS', icon: Globe, level: 95, color: '#E34F26' },
  { name: 'Tailwind CSS', icon: Palette, level: 90, color: '#06B6D4' },
  { name: 'Databases', icon: Database, level: 75, color: '#336791' },
  { name: 'Git / GitHub', icon: GitBranch, level: 85, color: '#F05032' },
  { name: 'UI/UX Design', icon: PenTool, level: 80, color: '#FF7262' },
  { name: 'Mobile Dev', icon: Smartphone, level: 70, color: '#3DDC84' },
  { name: 'Cloud / DevOps', icon: Cloud, level: 65, color: '#FF9900' },
  { name: 'System Design', icon: Cpu, level: 70, color: '#7C3AED' },
  { name: 'Responsive Design', icon: Layout, level: 90, color: '#22D3EE' },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card-hover p-6 group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}15` }}
              >
                <skill.icon
                  size={24}
                  style={{ color: skill.color }}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </div>

              <h3 className="text-sm md:text-base font-semibold text-white mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-dark-500 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                  }}
                />
              </div>
              <span className="text-xs text-slate-500 mt-2 block">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
