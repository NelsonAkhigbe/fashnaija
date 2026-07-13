import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/lib/data';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!product) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-5xl rounded-[2rem] bg-background shadow-[0_60px_140px_rgba(15,15,15,0.25)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr]">
              <div className="relative overflow-hidden bg-black">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-3 text-sm uppercase tracking-[0.35em] text-white transition hover:bg-black/60"
                >
                  Close
                </button>
              </div>
              <div className="p-10 md:p-16">
                <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">{product.category}</span>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">{product.name}</h2>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xl">{product.description}</p>
                <div className="mt-10 grid gap-6 text-sm text-foreground">
                  <div className="flex justify-between border-t border-border pt-6">
                    <span className="uppercase tracking-[0.35em] text-muted-foreground">Fabric</span>
                    <span>{product.fabric}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-6">
                    <span className="uppercase tracking-[0.35em] text-muted-foreground">Price</span>
                    <span className="font-semibold">₦{product.price.toLocaleString('en-NG')}</span>
                  </div>
                </div>
                <button className="mt-12 inline-flex items-center justify-center rounded-full bg-foreground px-10 py-4 text-sm uppercase tracking-[0.35em] text-background transition hover:bg-foreground/90">
                  Reserve now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
