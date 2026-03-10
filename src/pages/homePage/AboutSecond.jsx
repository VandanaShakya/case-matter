import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutSecond = () => {
  const container = useRef();
  const carpetRef = useRef();
  const subheadingRef = useRef();
  const gridRef = useRef();
  const cardRefs = useRef([]);

  const stats = [
    "200+ legal matters handled, managed and advised by our legal experts.",
    "Over 70 years of combined legal and advisory experience.",
    "Matters involving high-value claim amounts exceeding ₹350 crores.",
    "High-value projects reaching up to ₹2,000 crores."
  ];

  useGSAP(() => {
    const lines = subheadingRef.current.querySelectorAll('.line');
    
    // --- TEXT REVEAL ANIMATION ---
    const tl = gsap.timeline();
    tl.fromTo(carpetRef.current,
      { clipPath: "inset(0 100% 0 0)", x: -40, skewX: 10 },
      { clipPath: "inset(0 0% 0 0)", x: 0, skewX: 0, duration: 2, ease: "expo.out" }
    );

    tl.fromTo(lines,
      { rotationY: 180, opacity: 0, scale: 0.8 },
      { rotationY: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", stagger: 0.15 },
      "-=1"
    );

    // --- GRID CARDS: EXPANDED TO COMBINED ANIMATION ---
    // We define different starting directions for each of the 4 cards
    const directions = [
      { x: -150, y: -100, rotate: -15 }, // Top-Left starts further top-left
      { x: 150, y: -100, rotate: 15 },  // Top-Right starts further top-right
      { x: -150, y: 100, rotate: -10 },  // Bottom-Left starts further bottom-left
      { x: 150, y: 100, rotate: 10 }    // Bottom-Right starts further bottom-right
    ];

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          x: directions[index].x,
          y: directions[index].y,
          rotate: directions[index].rotate,
          scale: 1.2,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",  // Animation starts when top of grid hits 90% of viewport
            end: "top 40%",    // Animation finishes when top of grid hits 40%
            scrub: 1.5,        // Smoothly ties animation to scroll speed
          }
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="relative min-h-screen w-full overflow-hidden bg-zinc-950 font-sans pt-20">
      
      {/* Background Image */}
      {/* <img
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
        alt="Legal Office Architecture"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      /> */}

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />

      {/* Main Content Grid */}
      <div className="relative z-10 flex h-full min-h-screen flex-col lg:flex-row items-center px-6 md:px-20 gap-16 py-20">
        
        {/* Left Side: Content */}
        <div className="flex-1 space-y-8">
          <div ref={carpetRef}>
            <h1 className="text-4xl font-extrabold tracking-tighter text-white md:text-6xl lg:text-7xl leading-tight">
              Trusted Legal Solutions, <br />
              <span className="bg-gradient-to-r from-[#E2B13C] to-amber-200 bg-clip-text text-transparent">
                Built on Experience
              </span>
            </h1>
          </div>

          <div ref={subheadingRef} className="perspective-1000 space-y-2">
            <p className="line text-[#E2B13C] font-semibold text-xl md:text-2xl">
              Loyalty and results are paramount.
            </p>
            <div className="line text-zinc-300 text-lg md:text-xl leading-relaxed max-w-xl">
              At Case Matters, transparency and consistency are at the core of everything
              we do — backed by results that truly make a difference.
            </div>
          </div>

          <div className="pt-4">
            <button className="group relative rounded-full border border-[#E2B13C]/30 bg-[#E2B13C]/10 px-10 py-4 text-white backdrop-blur-md transition-all hover:bg-[#E2B13C] hover:text-black font-bold">
              Discover Our Practice
            </button>
          </div>
        </div>

        {/* Right Side: 2x2 Grid Blocks */}
        <div ref={gridRef} className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full relative">
          {stats.map((text, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-[#E2B13C]/50 hover:bg-white/10"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#E2B13C] transition-all duration-500 group-hover:w-full" />
              
              <p className="text-zinc-200 font-medium leading-relaxed text-sm md:text-base">
                {text}
              </p>
              
              {/* Corner Icon Effect */}
              <div className="absolute -bottom-2 -right-2 text-white/5 group-hover:text-[#E2B13C]/10 transition-colors">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default AboutSecond;