import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden bg-foreground text-background py-28 px-6 md:px-12">
        <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="max-w-5xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">Contact</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl uppercase tracking-tight">Get in Touch</h1>
          <p className="mt-8 max-w-3xl text-base md:text-lg text-white/70 leading-relaxed">
            Connect with the atelier team for bespoke orders, appointments, and editorial inquiries. We create tailored experiences rooted in craftsmanship.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="font-serif text-2xl mb-4">Studio</h2>
              <p className="text-white/70">Lagos Atelier<br />21 Elegance Street<br />Victoria Island</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="font-serif text-2xl mb-4">Contact</h2>
              <p className="text-white/70">hello@agbadaelegance.com<br />+234 800 123 4567</p>
            </div>
          </div>
          <Link href="/" className="inline-flex mt-12 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-white/20">
            Back to collection
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
