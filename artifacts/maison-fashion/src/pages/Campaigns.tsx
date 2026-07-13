import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Campaigns() {
  return (
    <main className="bg-foreground text-background min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden py-28 px-6 md:px-12">
        <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="container mx-auto max-w-5xl">
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">Campaigns</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl uppercase tracking-tight">Campaign Stories</h1>
          <p className="mt-8 max-w-3xl text-base md:text-lg text-white/70 leading-relaxed">
            A cinematic study of modern native silhouettes in motion, captured across editorial landscapes and dramatic interiors.
          </p>
          <Link href="/" className="mt-12 inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-white/20">
            Back to collection
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 bg-foreground">
        <div className="container mx-auto grid gap-10 lg:grid-cols-3">
          {['Editorial', 'Motion', 'Studio'].map((label) => (
            <div key={label} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="font-serif text-3xl mb-4">{label}</h2>
              <p className="text-white/70 leading-relaxed">
                Rich photography and layered motion design speak to the spirit of the collection, delivering a premium editorial experience.
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
