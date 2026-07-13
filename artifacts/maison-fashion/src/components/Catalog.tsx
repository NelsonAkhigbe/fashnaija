import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, CATEGORIES, Category, Product } from '@/lib/data';
import { ProductModal } from './ProductModal';

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <section id="catalog" className="relative py-16 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Collection</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4">The Collection</h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Discover our latest line of heritage-inspired native wear, curated with bold form, rich textiles, and modern tailoring logic.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.35em] transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-white/10 text-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <CatalogItem
                key={product.id}
                product={product}
                index={index}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

function CatalogItem({ product, index, onClick }: { product: Product; index: number; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-muted shadow-[0_30px_100px_rgba(15,15,15,0.08)]">
        <motion.img
          src={product.image}
          alt={product.name}
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full aspect-[4/5] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute left-6 bottom-6 right-6 text-white">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/70">{product.category}</p>
          <h3 className="mt-4 font-serif text-3xl tracking-tight">{product.name}</h3>
          <p className="mt-3 text-sm text-white/75 max-w-xs">{product.fabric}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
        <span>{product.price.toLocaleString('en-NG')} ₦</span>
        <span>View</span>
      </div>
    </motion.div>
  );
}
