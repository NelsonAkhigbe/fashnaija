import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ed1 from '@assets/generated_images/editorial_1.jpg';

export function EditorialFeature() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Text stagger reveal
    gsap.fromTo(gsap.utils.toArray('.ed-text', el),
      { opacity: 0, y: 40 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        }
      }
    );

    // Image reveal
    gsap.fromTo(el.querySelector('.ed-img'),
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-foreground text-background">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 md:order-1 flex flex-col justify-center max-w-xl">
          <h2 className="ed-text font-serif text-4xl md:text-6xl mb-10 leading-tight">Mastery in Every Thread</h2>
          <p className="ed-text font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed font-light">
            True luxury is grounded in heritage. It is found in the weight of hand-woven aso oke, the precision of intricate threadwork, and the majestic sweep of a tailored agbada. We partner with master artisans to create garments that outlive fleeting trends, forging pieces intended to be worn, lived in, and passed down.
          </p>
          <div className="ed-text mt-4">
            <a href="#" className="inline-block font-sans uppercase tracking-[0.2em] text-xs border-b border-white/30 pb-2 hover:border-white transition-colors">
              Discover the Atelier
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-auto md:h-[800px] overflow-hidden bg-black">
           <img src={ed1} alt="Editorial shot of model walking" className="ed-img w-full h-full object-cover absolute inset-0 origin-center" />
        </div>
      </div>
    </section>
  );
}
