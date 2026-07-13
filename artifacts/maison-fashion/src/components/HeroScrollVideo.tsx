import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isTouch) {
      // Just autoplay on mobile, no scrub
      video.play().catch(() => {});
      return;
    }

    let trigger: ScrollTrigger | null = null;
    let textTl: gsap.core.Timeline | null = null;
    let rafId: number | null = null;

    // Target scrub time, updated instantly by ScrollTrigger; the video's
    // currentTime is nudged toward it every animation frame instead of being
    // seeked directly on every scroll tick. This is what removes the
    // "crash and crack" stutter: a single hard seek per scroll event is
    // expensive and visibly jumps, while a per-frame lerp toward the target
    // reads as continuous motion even while seeks resolve asynchronously.
    let targetTime = 0;
    let displayedTime = 0;
    let seeking = false;

    const tick = () => {
      // Smoothly close the gap between where the video currently is and
      // where scroll wants it to be. 0.18 keeps it responsive but removes
      // the jitter of matching scroll 1:1.
      displayedTime += (targetTime - displayedTime) * 0.18;

      if (!seeking && Math.abs(video.currentTime - displayedTime) > 0.01) {
        video.currentTime = displayedTime;
      }

      rafId = requestAnimationFrame(tick);
    };

    const onSeeking = () => {
      seeking = true;
    };
    const onSeeked = () => {
      seeking = false;
    };

    const setupTimeline = () => {
      if (trigger) return;

      const duration = video.duration || 10;
      displayedTime = 0;
      targetTime = 0;

      // Chromium (and the headless renderer) won't paint any pixels for a
      // <video> until it has actually decoded a frame -- just loading
      // metadata leaves it blank/black. Force a decode of the first frame
      // immediately so the hero isn't blank before the user scrolls.
      video.currentTime = 0.001;

      video.addEventListener('seeking', onSeeking);
      video.addEventListener('seeked', onSeeked);
      rafId = requestAnimationFrame(tick);

      trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          // Clamp slightly before the very end to avoid a black flash/loop artifact.
          targetTime = Math.min(Math.max(self.progress, 0), 1) * (duration - 0.05);
        },
      });

      // Text fades are driven by the same scroll range but don't touch the
      // video element, so a normal GSAP scrub timeline is fine here.
      textTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      textTl
        .fromTo(text1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: duration * 0.05, ease: 'power2.out' }, duration * 0.05)
        .to(text1Ref.current, { opacity: 0, y: -30, duration: duration * 0.05, ease: 'power2.in' }, duration * 0.25)
        .fromTo(text2Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: duration * 0.05, ease: 'power2.out' }, duration * 0.40)
        .to(text2Ref.current, { opacity: 0, y: -30, duration: duration * 0.05, ease: 'power2.in' }, duration * 0.60)
        .fromTo(text3Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: duration * 0.05, ease: 'power2.out' }, duration * 0.75)
        .to(text3Ref.current, { opacity: 0, y: -30, duration: duration * 0.05, ease: 'power2.in' }, duration * 0.95);
    };

    if (video.readyState >= 1) {
      setupTimeline();
    } else {
      const onLoaded = () => setupTimeline();
      video.addEventListener('loadedmetadata', onLoaded);
      return () => {
        video.removeEventListener('loadedmetadata', onLoaded);
        video.removeEventListener('seeking', onSeeking);
        video.removeEventListener('seeked', onSeeked);
        if (rafId !== null) cancelAnimationFrame(rafId);
        if (trigger) trigger.kill();
        if (textTl) textTl.kill();
      };
    }

    return () => {
      video.removeEventListener('seeking', onSeeking);
      video.removeEventListener('seeked', onSeeked);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (trigger) trigger.kill();
      if (textTl) textTl.kill();
    };
  }, [isTouch]);

  return (
    <section 
      ref={containerRef} 
      className={`relative w-full ${isTouch ? 'h-[100dvh]' : 'h-[400vh] bg-black'}`}
    >
      <div className={`w-full h-[100dvh] overflow-hidden bg-black ${isTouch ? 'relative' : 'sticky top-0'}`}>
        <video 
          ref={videoRef}
          src="hero-scrub.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          muted
          playsInline
          loop={isTouch}
          preload="auto"
        />
        
        {/* Scrub Overlay Texts */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
          <h2 ref={text1Ref} className="absolute opacity-0 text-white text-5xl md:text-7xl lg:text-8xl font-serif tracking-widest text-center uppercase drop-shadow-xl">
            The New Standard
          </h2>
          <h2 ref={text2Ref} className="absolute opacity-0 text-white text-5xl md:text-7xl lg:text-8xl font-serif tracking-widest text-center uppercase drop-shadow-xl">
            Uncompromising Craft
          </h2>
          <h2 ref={text3Ref} className="absolute opacity-0 text-white text-5xl md:text-7xl lg:text-8xl font-serif tracking-widest text-center uppercase drop-shadow-xl">
            A Legacy In Motion
          </h2>
        </div>
        
        {/* Mobile Static Fallback */}
        {isTouch && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 bg-black/30">
            <h2 className="text-white text-4xl md:text-5xl font-serif tracking-widest text-center uppercase animate-in fade-in duration-1000 slide-in-from-bottom-8">
              Crafted Elegance
            </h2>
          </div>
        )}

        {/* Scroll Hint */}
        {!isTouch && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 text-white text-[10px] tracking-[0.3em] font-sans">
            <span className="mb-4">SCROLL TO EXPLORE</span>
            <div className="w-[1px] h-12 bg-white/50 animate-pulse"></div>
          </div>
        )}
      </div>
    </section>
  );
}
