import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import p1 from '@assets/generated_images/product_1.jpg';
import p2 from '@assets/generated_images/product_2.jpg';
import p3 from '@assets/generated_images/product_3.jpg';

gsap.registerPlugin(ScrollTrigger);

export function LookbookGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      
      // Reveal container
      gsap.fromTo(item, 
        { opacity: 0, y: 60 },
        {
          opacity: 1, 
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      );
      
      // Subtle image scale un-zoom on reveal
      const img = item.querySelector('img');
      if (img) {
        gsap.fromTo(img,
          { scale: 1.15 },
          {
            scale: 1,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      }
    });
  }, []);

  const items = [
    { id: 1, img: p1, title: 'Senator Two-Piece', price: '₦185,000', colSpan: 'col-span-12 md:col-span-7' },
    { id: 2, img: p2, title: 'Aso Oke Fila', price: '₦85,000', colSpan: 'col-span-12 md:col-span-5' },
    { id: 3, img: p3, title: 'Hand-Embroidered Agbada', price: '₦450,000', colSpan: 'col-span-12 md:col-span-8 md:col-start-3' },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto bg-background">
      <div className="mb-24 text-center">
        <h3 className="font-serif text-3xl md:text-5xl mb-6 tracking-wide">Core Collection</h3>
        <p className="font-sans text-muted-foreground uppercase tracking-[0.2em] text-xs">Season 01 &mdash; Essentials</p>
      </div>
      
      <div className="grid grid-cols-12 gap-x-6 gap-y-20 md:gap-x-12">
        {items.map((item, i) => (
          <div 
            key={item.id} 
            ref={el => itemsRef.current[i] = el}
            className={`${item.colSpan} flex flex-col group cursor-pointer`}
          >
            <div className="overflow-hidden bg-muted aspect-[4/5] relative mb-6">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="flex justify-between items-center font-sans">
              <h4 className="text-sm tracking-[0.1em] uppercase text-foreground">{item.title}</h4>
              <span className="text-muted-foreground text-sm tracking-widest">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-32 text-center">
        <a href="#" className="inline-block uppercase font-sans text-xs tracking-[0.2em] border-b border-foreground/30 pb-2 hover:border-foreground transition-colors text-foreground">
          View Complete Lookbook
        </a>
      </div>
    </section>
  );
}
