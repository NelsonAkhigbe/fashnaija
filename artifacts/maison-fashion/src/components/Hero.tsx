import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ASSETS } from '@/lib/data';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 35,
    mass: 0.8,
    restDelta: 0.001,
  });

  const textY = useTransform(smoothProgress, [0, 1], ['0%', '140%']);
  const textOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.55, 1], [0.2, 0.45, 0.78]);

  useEffect(() => {
    const image = videoRef.current;
    if (!image) return;
    image.onload = () => {};
  }, []);

  return (
    <section ref={containerRef} className="relative h-[130vh] bg-black overflow-hidden">
      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{ scale: imageScale }}
      >
        <img
          ref={videoRef}
          src={ASSETS.heroVideo}
          alt="Hero"
          className="h-full w-full object-cover object-center"
        />
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-white"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-4xl text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/70 mb-4">The Collection</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-[0.08em] leading-tight">
            Agbada Elegance Showcase
          </h1>
          <p className="mt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-3xl mx-auto">
            A refined capsule of traditional freedom and sculpted modern tailoring. Explore tailored silhouettes, heritage texture, and contemporary ceremonial confidence.
          </p>
        </div>
      </motion.div>

      <div className="absolute left-6 top-6 rounded-full border border-white/15 p-4 text-[10px] uppercase tracking-[0.4em] text-white/70">
        Lagos Atelier
      </div>
    </section>
  );
}
