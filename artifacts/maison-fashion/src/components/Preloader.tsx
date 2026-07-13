import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // remove static fallback immediately
  useEffect(() => {
    const staticNode = document.getElementById('static-preloader');
    if (staticNode && staticNode.parentNode) staticNode.parentNode.removeChild(staticNode);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let progress = 0;

    const counter = root.querySelector('.preloader-counter') as HTMLElement | null;
    const bar = root.querySelector('.preloader-bar') as HTMLElement | null;
    const logo = root.querySelector('.preloader-logo') as HTMLElement | null;

    const tick = () => {
      progress += Math.floor(Math.random() * 10) + 5;
      if (progress > 100) progress = 100;
      if (counter) counter.textContent = String(progress) + '%';
      if (bar) gsap.to(bar, { width: progress + '%', duration: 0.2, ease: 'power1.out' });

      if (progress >= 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        startReveal();
      }
    };

    intervalRef.current = window.setInterval(tick, 150);

    const onLoad = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      progress = 100;
      if (counter) counter.textContent = '100%';
      if (bar) gsap.to(bar, { width: '100%', duration: 0.3, ease: 'power2.out' });
      startReveal();
    };

    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });

    function startReveal() {
      if (tlRef.current) return;
      const tl = gsap.timeline({ onComplete: () => setTimeout(() => onFinish(), 120) });
      // reveal: animate logo then fade out preloader to avoid layout shifts
      tl.to(logo, { opacity: 1, y: -20, duration: 0.9, ease: 'expo.out' })
        .to(root, { opacity: 0, duration: 0.8, pointerEvents: 'none', ease: 'power2.inOut', delay: 0.2 });
      tlRef.current = tl;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener('load', onLoad as EventListener);
      if (tlRef.current) tlRef.current.kill();
    };
  }, [onFinish]);

  return (
    <div ref={rootRef} className="preloader" aria-hidden>
      <div className="preloader-logo-wrapper">
        <div className="preloader-logo">FEMI'S HOUSE</div>
      </div>
      <div className="preloader-progress">
        <div className="preloader-bar" style={{ width: '0%' }} />
      </div>
      <div className="preloader-counter">00%</div>
    </div>
  );
}
