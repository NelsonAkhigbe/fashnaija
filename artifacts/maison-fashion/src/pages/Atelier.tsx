import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ASSETS } from '@/lib/data';

export default function Atelier() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <section className="relative overflow-hidden h-[60vh] md:h-[70vh]">
        <img src={ASSETS.heroVideo} alt="Atelier hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">Atelier</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl uppercase tracking-tight text-white">The Atelier</h1>
          <p className="mt-8 max-w-3xl text-base md:text-lg text-white/70 leading-relaxed">
            Our atelier brings together master tailors, hand-weavers, and artisans to create modern ceremony wear rooted in tradition. Every stitch is shaped by a vision of sculptural presence and tactile refinement.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-white/20 text-white">
              Back to collection
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="container mx-auto grid gap-12 lg:grid-cols-3">
          {[
            { title: 'Hands On', body: 'Custom fittings and material selection are guided by a curated, human-first process designed to deliver timeless wardrobe essentials.' },
            { title: 'Tailored Detail', body: 'Precision stitching, layered textures, and structural volume are combined with subtle embroidery to elevate every form.' },
            { title: 'Quiet Luxury', body: 'Our pieces are built for lasting impact—minimal branding, bold craftsmanship, and dresses that move with calm authority.' },
          ].map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-border p-8 shadow-[0_30px_90px_rgba(15,15,15,0.08)]">
              <h2 className="font-serif text-3xl mb-4">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-foreground text-background">
        <div className="container mx-auto grid gap-10 lg:grid-cols-3">
          {['Bespoke Appointments', 'Private Showings', 'Heritage Tailoring'].map((label) => (
            <div key={label} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">{label}</p>
              <p className="mt-6 leading-relaxed text-white/70">
                A refined atelier service built for personalized luxury and a quiet, curated experience.
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
