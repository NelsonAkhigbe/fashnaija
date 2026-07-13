import React from 'react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white/50 py-24 px-6 md:px-12 font-sans text-xs tracking-wider">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
        
        <div className="col-span-1 md:col-span-5 pr-10">
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-8 tracking-[0.15em] uppercase">FEMI'S HOUSE</h3>
          <p className="max-w-md leading-relaxed font-light text-white/60 text-sm">
            Defining the modern silhouette through uncompromising heritage craftsmanship and forward-thinking design. A quiet rebellion in tailoring.
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-2 md:col-start-7">
          <h4 className="text-white uppercase tracking-[0.2em] mb-8 font-medium">Maison</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors block">Heritage</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Atelier</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Boutiques</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Careers</a></li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-white uppercase tracking-[0.2em] mb-8 font-medium">Services</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors block">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Bespoke Appointments</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Care Guide</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h4 className="text-white uppercase tracking-[0.2em] mb-8 font-medium">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors block">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Cookie Policy</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 uppercase tracking-[0.1em]">
        <p>&copy; {new Date().getFullYear()} FEMI'S HOUSE. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          <a href="#" className="hover:text-white transition-colors">Journal</a>
        </div>
      </div>
    </footer>
  );
}
