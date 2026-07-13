import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
       <div className="font-serif tracking-[0.2em] text-xl md:text-2xl uppercase">Crafted Elegance</div>
       <nav className="hidden md:flex gap-10 font-sans text-xs tracking-[0.2em] uppercase">
         <a href="#" className="hover:opacity-70 transition-opacity">Collection</a>
         <a href="#" className="hover:opacity-70 transition-opacity">Atelier</a>
         <a href="#" className="hover:opacity-70 transition-opacity">Boutique</a>
       </nav>
       <div className="md:hidden flex flex-col gap-[5px] cursor-pointer hover:opacity-70 transition-opacity">
         <div className="w-6 h-[1px] bg-white"></div>
         <div className="w-6 h-[1px] bg-white"></div>
       </div>
    </header>
  );
}
