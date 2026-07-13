import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LOOKBOOK_IMAGES } from '@/lib/data';

export function Lookbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-foreground text-background overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-widest uppercase text-muted-foreground block mb-4"
        >
          Campaign 2026
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-8xl"
        >
          The Lookbook
        </motion.h2>
      </div>

      <div className="flex gap-8 px-6 md:px-12 overflow-x-hidden">
        {LOOKBOOK_IMAGES.map((img, i) => {
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [i % 2 === 0 ? 100 : 0, i % 2 === 0 ? -100 : -200],
          );

          return (
            <motion.div
              key={i}
              style={{ y }}
              className={`relative shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] ${i % 2 !== 0 ? 'mt-32 md:mt-48' : ''}`}
            >
              <img
                src={img}
                alt="Lookbook"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-32 text-center">
        <a
          href="/campaigns"
          className="inline-flex rounded-full border border-white/20 bg-white/10 px-12 py-5 tracking-widest uppercase text-sm font-medium text-white transition hover:bg-white/20"
        >
          View Full Campaign
        </a>
      </div>
    </section>
  );
}
