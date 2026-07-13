import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Journal() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <section className="py-28 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Journal</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl uppercase tracking-tight">Stories From the Atelier</h1>
          <p className="mt-8 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A quiet collection of rituals, materials, and the design philosophy behind each silhouette.
          </p>
          <Link href="/" className="mt-12 inline-flex rounded-full border border-foreground/10 bg-foreground/5 px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-foreground/10">
            Back to collection
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-28">
        <div className="container mx-auto grid gap-8 lg:grid-cols-3">
          {[
            { title: 'Texture', body: 'Hand-loomed fabrics and fine finishes designed to feel as refined as they look.' },
            { title: 'Silhouettes', body: 'Architectural forms with soft edges, built for presence and grace.' },
            { title: 'Craft', body: 'A deeper look at the artisans and techniques that define our collection.' },
          ].map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-border p-8 shadow-[0_30px_90px_rgba(15,15,15,0.06)]">
              <h2 className="font-serif text-3xl mb-4">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
