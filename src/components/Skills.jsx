import { motion } from 'framer-motion';
import {
  Code2, Database, Globe, Layout, Server,
  Terminal, GitBranch, Wrench, Cpu
} from 'lucide-react';
import { SiCplusplus, SiPython, SiReact, SiJavascript, SiHtml5, SiCss, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiGit, SiGithub, SiSupabase, SiC } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import SectionWrapper from './SectionWrapper';

const bentoItems = [
  {
    title: "Frontend",
    description: "Building scalable, interactive user interfaces with modern frameworks.",
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-primary/20 via-transparent to-transparent",
    icons: [
      { icon: SiReact, label: "React", color: "#61DAFB" },
      { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
      { icon: SiHtml5, label: "HTML", color: "#E34F26" },
      { icon: SiCss, label: "CSS", color: "#1572B6" }
    ],
    delay: 0.1
  },
  {
    title: "Backend",
    description: "Robust APIs and server logic connecting everything.",
    span: "md:col-span-1 md:row-span-1",
    gradient: "from-accent/20 via-transparent to-transparent",
    icons: [
      { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
      { icon: SiExpress, label: "Express.js", color: "#ffffff" }
    ],
    delay: 0.2
  },
  {
    title: "Database",
    description: "Secure and scalable data storage solutions.",
    span: "md:col-span-1 md:row-span-1",
    gradient: "from-pink-500/20 via-transparent to-transparent",
    icons: [
      { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
      { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
      { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" }
    ],
    delay: 0.3
  },
  {
    title: "Programming",
    description: "Core algorithms and competitive programming.",
    span: "md:col-span-1 md:row-span-1",
    gradient: "from-purple-500/20 via-transparent to-transparent",
    icons: [
      { icon: SiC, label: "C", color: "#A8B9CC" },
      { icon: SiCplusplus, label: "C++", color: "#00599C" },
      { icon: SiPython, label: "Python", color: "#3776AB" },
      { icon: Cpu, label: "Assembly", color: "#6B7280" }
    ],
    delay: 0.4
  },
  {
    title: "Tools",
    description: "Version control and development environments.",
    span: "md:col-span-2 md:row-span-1",
    gradient: "from-primary/10 via-transparent to-accent/10",
    icons: [
      { icon: SiGit, label: "Git", color: "#F05032" },
      { icon: SiGithub, label: "GitHub", color: "#181717" },
      { icon: VscVscode, label: "VS Code", color: "#007ACC" }
    ],
    delay: 0.5
  }
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-[family-name:var(--font-display)] tracking-tight mb-4 drop-shadow-lg">
            Technology <span className="gradient-text drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">Stack</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            A dynamic view of the tools, frameworks, and languages I leverage to build extraordinary experiences and solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: item.delay, duration: 0.7, type: "spring", bounce: 0.3 }}
              className={`glass-card relative overflow-hidden group p-8 flex flex-col justify-between ${item.span}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-4 mt-6">
                {item.icons.map((tech) => (
                  <motion.div
                    key={tech.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center bg-dark-700 border border-slate-700/50 shadow-lg group-hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300"
                    >
                      <tech.icon size={26} style={{ color: tech.color }} />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 track-wide">
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
