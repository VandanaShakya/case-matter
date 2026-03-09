import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  const terms = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services."
    },
    {
      id: "services",
      title: "2. Legal Services Disclaimer",
      content: "The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Use of this website does not create an attorney-client relationship."
    },
    {
      id: "conduct",
      title: "3. User Conduct",
      content: "Users are prohibited from using the site to transmit any unlawful, harmful, or otherwise objectionable material. You agree not to attempt to crash the server or use automated systems to scrape data from our legal databases."
    },
    {
      id: "intellectual",
      title: "4. Intellectual Property",
      content: "The logos, branding, and legal content published on this site are the exclusive property of our firm. Reproduction without written consent is strictly prohibited and protected under international copyright law."
    },
    {
      id: "liability",
      title: "5. Limitation of Liability",
      content: "Our firm shall not be held liable for any damages that result from the use of, or the inability to use, the materials on this site, even if our authorized representative has been notified of the possibility of such damages."
    }
  ];

  // Framer Motion Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-amber-600 selection:text-white">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center bg-zinc-900 border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Terms of <span className="text-amber-500">Service</span>
          </h1>
          <p className="mt-4 text-zinc-500 tracking-[0.3em] uppercase text-sm font-medium">
            Operating Framework & Legal Boundaries
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Sticky Sidebar Navigation (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">Navigation</h4>
            {terms.map((t) => (
              <a 
                key={t.id} 
                href={`#${t.id}`}
                className="block text-sm hover:text-amber-500 transition-colors duration-200 border-l border-zinc-800 pl-4 py-1"
              >
                {t.title.split('. ')[1]}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <motion.main 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-9 space-y-16"
        >
          {terms.map((term) => (
            <motion.section 
              key={term.id} 
              id={term.id} 
              variants={itemVars}
              className="scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-amber-600 mr-4"></span>
                {term.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">
                {term.content}
              </p>
            </motion.section>
          ))}

          {/* Agreement Notice */}
          <motion.div 
            variants={itemVars}
            className="p-8 rounded-2xl bg-zinc-900 border border-white/10 mt-20"
          >
            <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Acknowledgment</h3>
            <p className="text-sm text-zinc-500">
              By continuing to browse this site, you acknowledge that you have read, understood, and agreed to these terms. If you do not agree, please discontinue use immediately.
            </p>
          </motion.div>
        </motion.main>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default TermsAndConditions;