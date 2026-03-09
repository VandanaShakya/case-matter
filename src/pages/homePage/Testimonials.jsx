import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: 1,
    name: "Alexander Wright",
    position: "CEO, TechVantage Solutions",
    text: "The expertise in startup law provided by this firm was instrumental during our Series A funding. They don't just provide legal advice; they provide strategic business solutions.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    position: "HR Director, Global Logistics",
    text: "Navigating complex labor disputes seemed daunting until we engaged their services. Their approach to employment compliance is proactive and incredibly thorough.",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Founder, GreenBuild Infra",
    text: "In the construction industry, contracts are everything. Their attention to detail in risk management and arbitration has saved us from numerous legal headaches.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal from the bottom
      gsap.fromTo(
        cardRefs.current,
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-zinc-950 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E2B13C] font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">
            Client Success
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Let’s hear out what our <br />
            <span className="text-[#E2B13C]">Clients say.</span>
          </h2>
          <div className="w-24 h-1 bg-[#E2B13C] mx-auto mt-8 rounded-full opacity-50" />
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between hover:border-[#E2B13C]/30 transition-colors duration-500 group"
            >
              {/* Quotation Mark Decoration */}
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 15.238 16.255 13 19.017 13H21V21H14.017ZM3 21V18C3 15.238 5.238 13 8 13H10V21H3ZM10 13C10 9.13401 6.86599 6 3 6V3C8.52285 3 13 7.47715 13 13V15H10V13ZM21 13C21 9.13401 17.866 6 14 6V3C19.5228 3 24 7.47715 24 13V15H21V13Z" fill="#E2B13C"/>
                </svg>
              </div>

              <div className="space-y-6">
                {/* Five Star Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E2B13C">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-zinc-300 text-lg italic font-light leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <h4 className="text-white font-bold text-lg">{item.name}</h4>
                <p className="text-[#E2B13C] text-sm uppercase tracking-wider font-semibold">
                  {item.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;