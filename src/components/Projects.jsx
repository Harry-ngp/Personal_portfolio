import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import SectionWrapper from './SectionWrapper';
import ImageSlot from './ImageSlot';

// ============================================================
// 🖼️ IMAGE SLOTS: Replace null values with your project images
//    Example: import project1Img from '../assets/project1.jpg';
// ============================================================

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with React and Node.js. Features real-time data, authentication, and a beautiful dashboard.',
    image: null, // Replace with your image import
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Mobile-first e-commerce platform with seamless checkout flow, product filtering, and inventory management.',
    image: null,
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    category: 'frontend',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'REST API service with comprehensive documentation, rate limiting, caching, and automated testing.',
    image: null,
    tags: ['Express', 'PostgreSQL', 'Docker'],
    category: 'backend',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Interactive data visualization dashboard with charts, filters, and real-time updates from multiple sources.',
    image: null,
    tags: ['React', 'D3.js', 'WebSocket'],
    category: 'frontend',
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'Social media platform with post feeds, user profiles, messaging, and notification systems.',
    image: null,
    tags: ['React', 'Firebase', 'Redux'],
    category: 'fullstack',
    github: '#',
    live: '#',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'AI-powered content management system with auto-categorization, SEO optimization, and analytics.',
    image: null,
    tags: ['Python', 'FastAPI', 'OpenAI'],
    category: 'backend',
    github: '#',
    live: '#',
  },
];

const categories = ['all', 'frontend', 'backend', 'fullstack'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent works. Each project is a unique piece of development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                  : 'bg-dark-600 text-slate-400 hover:text-white hover:bg-dark-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card-hover overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageSlot
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <a
                      href={project.github}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <SiGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Folder size={18} className="text-primary-light" />
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary-light border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
