import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const timelineData = [
  { year: "2025", title: "Started Full Stack Development", side: "left" },
  { year: "2025", title: "Built Village Resolve", side: "right" },
  { year: "2026", title: "Started LocalBite AI", side: "left" },
  { year: "2026", title: "Focused on DSA and Competitive Programming", side: "right" },
];

export default function Timeline() {
  return (
    <SectionWrapper id="timeline">
      <div className="max-w-5xl mx-auto px-6 relative z-10 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-dark-700 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 pt-10">
            {timelineData.map((item, i) => {
              const isLeft = item.side === 'left';
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} pl-16 md:pl-0`}
                >
                  {/* Glowing Node */}
                  <div className="absolute left-[13px] md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-dark-900 border-2 border-white shadow-[0_0_15px_rgba(236,72,153,1)] md:-translate-x-1/2 z-10 mt-1.5 md:mt-0" />

                  {/* Card Content */}
                  <div className={`glass-card p-6 md:w-5/12 relative group hover:border-primary/50 transition-colors ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <span className="text-xl md:text-2xl font-black text-primary-light mb-2 block">{item.year}</span>
                    <h3 className="text-lg md:text-xl font-bold text-white relative z-10">{item.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
