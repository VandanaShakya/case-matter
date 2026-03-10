import React, { useEffect, useState } from 'react';
import { Scale, ShieldCheck, Gavel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutFirst from './AboutFirst';
import AboutSecond from './AboutSecond';
import Services from './Services';
import Faq from './Faq';
import LawExpandingLayout from './LawExpandingLayout';
import Blogs from './Blogs';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import bgVideo from '../../assets/homeAssets/law.mp4';


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    {
      id: 1,
      title: "Corporate Litigation",
      desc: "Protecting business interests with aggressive representation and strategic legal counsel.",
      icon: <Scale className="text-amber-500" size={32} />
    },
    {
      id: 2,
      title: "Intellectual Property",
      desc: "Securing your innovations and creative works in a rapidly evolving global marketplace.",
      icon: <ShieldCheck className="text-amber-500" size={32} />
    },
    {
      id: 3,
      title: "Criminal Defense",
      desc: "Providing a robust defense for individuals facing complex federal legal challenges.",
      icon: <Gavel className="text-amber-500" size={32} />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen bg-zinc-950 overflow-hidden">
        {/* --- BACKGROUND VIDEO --- */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          {/* Radial Overlay for Centered Focus */}
          <div className="absolute inset-0 bg-zinc-950/40 bg-[radial-gradient(circle,_transparent_20%,_#09090b_90%)]" />
        </div>

        {/* --- CONTENT LAYER (Centered) --- */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-6 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-4xl flex flex-col items-center text-center space-y-6 md:space-y-8"
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                >
                  {contents[currentIndex].icon}
                </motion.div>
                <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                  Legal Excellence
                </span>
              </div>
              
              <h2 className="w-7xl text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                {contents[currentIndex].title}
              </h2>
              
              <p className="text-zinc-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                {contents[currentIndex].desc}
              </p>
              
              <div className=" flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-4 bg-amber-600 text-white font-bold rounded-sm hover:bg-amber-700 transition-all uppercase text-xs tracking-widest shadow-xl shadow-amber-600/20 active:scale-95">
                  Consultation Now
                </button>
                 {/* <button className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-sm hover:bg-white/10 transition-all uppercase text-xs tracking-widest backdrop-blur-sm">
                  View Services
                </button> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- SCROLL INDICATOR --- */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
        </motion.div>
      </section>
      <AboutSecond />
      {/* Other Sections */}
      <AboutFirst />
      
      <Services />
      <Faq />
      <LawExpandingLayout />
      <Testimonials />
      <Blogs />
      <ContactForm />
    </>
  );
};

export default Home;