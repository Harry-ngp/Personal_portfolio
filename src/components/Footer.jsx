import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { Link } from 'react-scroll';
import { FaLinkedin } from "react-icons/fa"; // <--- Fixed the import here!

const footerLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const socials = [
  { icon: SiGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' }, // <--- Fixed the icon here!
  { icon: SiX, href: '#', label: 'X (Twitter)' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-500/50 bg-dark-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-[family-name:var(--font-display)]">
              <span className="gradient-text">&lt;</span>
              <span className="text-white">Portfolio</span>
              <span className="gradient-text"> /&gt;</span>
            </span>
            <p className="text-slate-500 text-sm mt-2">
              Building digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={600}
                className="text-sm text-slate-500 hover:text-primary-light transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-dark-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 flex items-center gap-1">
            © {new Date().getFullYear()} Made with{' '}
            <Heart size={14} className="text-red-500 inline" fill="currentColor" />{' '}
            by <span className="text-slate-400">Harikesh</span>
          </p>

          {/* Back to top */}
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary-light transition-colors group"
            >
              Back to Top
              <span className="w-8 h-8 rounded-lg border border-slate-700/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <ArrowUp size={14} />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  );
}