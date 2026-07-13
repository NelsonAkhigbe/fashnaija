import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroScrollVideo } from '@/components/HeroScrollVideo';
import { Catalog } from '@/components/Catalog';
import { Lookbook } from '@/components/Lookbook';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.clip-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <HeroScrollVideo />

      <section className="py-32 md:py-48 px-6 bg-background relative z-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-serif text-2xl md:text-5xl leading-tight md:leading-snug font-light">
            "Native wear is not merely clothing. It is an architecture of presence. We strip away the noise to reveal the pure lines of heritage."
          </p>
          <span className="block mt-12 text-sm tracking-[0.3em] uppercase text-muted-foreground">
            The Philosophy
          </span>
        </div>
      </section>

      <Catalog />
      <Lookbook />
      <Footer />
    </main>
  );
}
