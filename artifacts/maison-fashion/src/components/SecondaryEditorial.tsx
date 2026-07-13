import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ed2 from '@assets/generated_images/editorial_2.jpg';

export function SecondaryEditorial() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    // Parallax background effect for the editorial detail image
    gsap.fromTo(el.querySelector('.parallax-img'),
      { yPercent: -15, scale: 1.05 },
      {
        yPercent: 15,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    // Title reveal
    gsap.fromTo(el.querySelectorAll('.sec-ed-text'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%'
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="pt-40 pb-20 px-6 md:px-12 bg-background text-foreground overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center mb-24">
        <h2 className="sec-ed-text font-serif text-4xl md:text-6xl mb-8 tracking-wide">The Anatomy of Form</h2>
        <p className="sec-ed-text font-sans text-muted-foreground uppercase tracking-[0.15em] text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
          Behind every commanding silhouette lies an obsession with traditional artistry. 
          The geometry of fine embroidery, the stately drape of hand-loomed textiles, and the quiet resilience of artisanal craftsmanship.
        </p>
      </div>
      
      <div className="w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden relative bg-muted">
        <img 
          src={ed2} 
          alt="Craftsmanship detail" 
          className="parallax-img absolute inset-0 w-full h-[130%] object-cover -top-[15%]" 
        />
      </div>
    </section>
  );
}
