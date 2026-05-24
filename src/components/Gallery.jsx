import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import ImageSlot from './ImageSlot';

// ============================================================
// 🖼️ IMAGE SLOTS: Replace null values with your gallery images
//    Example: import gallery1 from '../assets/gallery1.jpg';
// ============================================================

const galleryItems = [
  { id: 1, image: null, title: 'Gallery Photo 1', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, image: null, title: 'Gallery Photo 2', span: '' },
  { id: 3, image: null, title: 'Gallery Photo 3', span: '' },
  { id: 4, image: null, title: 'Gallery Photo 4', span: '' },
  { id: 5, image: null, title: 'Gallery Photo 5', span: 'md:col-span-2' },
  { id: 6, image: null, title: 'Gallery Photo 6', span: '' },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <SectionWrapper id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            Photo <span className="gradient-text">Gallery</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A collection of moments and memories — add your own photos here
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(item)}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden ${item.span}`}
            >
              <ImageSlot
                src={item.image}
                alt={item.title}
                className="w-full h-full"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between p-4">
                <span className="text-white text-sm font-medium">{item.title}</span>
                <ZoomIn className="text-white/80" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-900/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
              <ImageSlot
                src={selected.image}
                alt={selected.title}
                className="w-full h-[70vh] rounded-2xl"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">{selected.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
