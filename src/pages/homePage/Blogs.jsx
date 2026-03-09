import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import employementImage from '../../assets/homeAssets/employement.jpg'

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    category: "Legal Insights",
    title: "Navigating Commercial Arbitration in 2024",
    excerpt: "Understanding the shift towards institutional arbitration in global markets.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Startup Law",
    title: "Top 5 Compliance Mistakes Founders Make",
    excerpt: "Common pitfalls in early-stage legal structuring and how to avoid them.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Employment",
    title: "New Labor Regulations: What Employers Need to Know",
    excerpt: "A deep dive into recent statutory changes affecting the modern workforce.",
    image: employementImage,
  },
  {
    id: 4,
    category: "Contract Law",
    title: "The Art of Risk Mitigation in Contracts",
    excerpt: "How precise drafting can save businesses from future litigation.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
  },
];

const Blogs = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation: Rolling from left one by one
      gsap.fromTo(
        cardRefs.current,
        { 
          x: -500,        // Start far left
          rotation: -120, // Slightly more rotation for a better "roll" effect
          opacity: 0,
          scale: 0.8      // Added a slight scale for depth
        },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,   // This creates the "one by one" effect
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", 
            end: "bottom 20%",
            // toggleActions logic: onEnter, onLeave, onEnterBack, onLeaveBack
            // "play reverse play reverse" makes it undo when scrolling up
            toggleActions: "play reverse play reverse", 
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="blogs" ref={sectionRef} className="w-full py-24 bg-zinc-950 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
            Latest <span className="text-[#E2B13C]">Legal Insights</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl text-lg font-light">
            Stay updated with our latest thoughts on arbitration, compliance, and corporate law.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-[#E2B13C]/40 transition-all duration-500 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#E2B13C] text-zinc-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-white text-xl font-bold leading-tight group-hover:text-[#E2B13C] transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                {/* <button className="flex items-center gap-2 text-[#E2B13C] font-semibold text-sm pt-4 border-t border-white/5 w-full hover:gap-3 transition-all">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;