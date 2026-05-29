import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import SectionWrapper from './SectionWrapper';
import ImageSlot from './ImageSlot';

const projects = [
  {
    id: 1,
    title: "LocalBite AI",
    description: "AI-powered hyperlocal logistics platform for Tier-2 and Tier-3 cities featuring route optimization, delivery tracking, enterprise dashboards, and WebSocket-based live communication (Currently Ongoing).",
    image: null,
    tags: ["React", "Node.js", "Socket.IO", "Python", "OSRM", "MongoDB"],
    category: 'fullstack',
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Village Resolve",
    description: "Village-level issue reporting and resolution platform with tracking, community participation, and administrative management.",
    image: null,
    tags: ["MERN Stack", "Tailwind CSS", "REST API"],
    category: 'fullstack',
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Interactive futuristic portfolio showcasing projects, skills, and achievements, built with Framer Motion, customized glassmorphism, and neon aesthetics.",
    image: null,
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    category: 'frontend',
    github: "#",
    live: "#"
  }
];

const categories = ['all', 'frontend', 'backend', 'fullstack'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-6 relative z-10 pb-40">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-[family-name:var(--font-display)] tracking-tight mb-4 drop-shadow-lg">
            Featured <span className="gradient-text drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">Works</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Scroll down to explore my projects stack. Each one is a unique architectural solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-20 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]'
                  : 'bg-dark-700/50 text-slate-400 hover:text-white hover:bg-dark-600 border border-slate-700/50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sticky Deck Stack */}
        <div className="relative w-full flex flex-col gap-8 md:gap-[5vh]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              // Calculate dynamic top offset so cards stack neatly
              const topOffset = 100 + (i * 30);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="sticky w-full glass-card border-slate-700 overflow-hidden shadow-2xl"
                  style={{ top: `${topOffset}px` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900 -z-10" />

                  <div className="flex flex-col md:flex-row h-auto md:h-[450px]">
                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Folder size={24} className="text-primary" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                      </div>

                      <p className="text-slate-400 md:text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary-light border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-auto">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-dark-600 hover:bg-primary/20 hover:text-primary-light border border-slate-700 hover:border-primary/50 transition-all duration-300"
                        >
                          <SiGithub size={18} /> Code
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-full group overflow-hidden">
                      <ImageSlot
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Neon overlay */}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
