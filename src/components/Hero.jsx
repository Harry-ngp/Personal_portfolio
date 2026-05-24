import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Link } from 'react-scroll';
import ParticlesBackground from './ParticlesBackground';
import ImageSlot from './ImageSlot';
import { FaLinkedin } from "react-icons/fa";
import profileImg from '../assets/profile.jpg';
// ============================================================
// 🖼️ IMAGE SLOT: Replace null with your profile photo import
//    Example: import profileImg from '../assets/profile.jpg';
// ============================================================
const profileImage = profileImg;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900 z-[1]" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-primary-light text-sm md:text-base font-medium tracking-widest uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6">
            Hi, I&apos;m{' '}
            <span className="gradient-text">
              Harikesh
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-slate-400 mb-8 h-8">
            <TypeAnimation
              sequence={[
                'CSE Student @ NIT Surat',
                2000,
                'Class of 2028',
                2000,
                'Python & Web Developer',
                2000,
                'Interactive 3D Experiences',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            I am a computer science engineering student specializing in Python, networking algorithms, and interactive web experiences. From simulating environments to writing clean logic, I love turning complex problems into functional code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={600}
              className="glow-btn text-base cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={600}
              className="px-8 py-3 rounded-full font-semibold text-white border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all cursor-pointer"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: SiGithub, href: '#', label: 'GitHub' },
              { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-700/50 text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Profile Image Slot */}
        {/* Right: Profile Image Slot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 scale-110" />

            {/* Image Container */}
            <div className="relative gradient-border rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <img
                src={profileImage}
                alt="Harikesh"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link to="about" smooth={true} offset={-80} duration={600} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary-light transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            <ArrowDown size={18} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}