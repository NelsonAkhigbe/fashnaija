import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PRODUCTS, ASSETS } from '@/lib/data';

export default function Boutique() {
  return (
    <main className="bg-foreground text-background min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden h-[70vh] md:h-[80vh]">
        <img src={ASSETS.boutiqueHero} alt="Boutique hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto max-w-5xl px-6 md:px-12 h-full flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">Boutique</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl uppercase tracking-tight text-white">Boutique Edit</h1>
          <p className="mt-8 max-w-3xl text-base md:text-lg text-white/70 leading-relaxed">
            Discover a curated edit of exclusive wardrobe expressions, crafted for private order and signature dressing.
          </p>
          <div className="mt-12">
            <Link href="/" className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-white/20 text-white">
              Back to collection
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 bg-background">
        <div className="container mx-auto grid gap-10 lg:grid-cols-3">
          {PRODUCTS.filter((product) => product.category === 'Luxury Pieces').map((product) => (
            <article key={product.id} className="rounded-[2rem] border border-border bg-background overflow-hidden">
              <img src={product.image} alt={product.name} className="h-96 w-full object-cover" />
              <div className="p-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Luxury Pieces</p>
                <h2 className="font-serif text-3xl mt-4 mb-3 text-foreground">{product.name}</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">{product.description}</p>
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-foreground">
                  <span className="font-medium">{product.price.toLocaleString('en-NG')} ₦</span>
                  <span className="opacity-80">Private order</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
