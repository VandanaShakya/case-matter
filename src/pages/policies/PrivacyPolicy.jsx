import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Data Collection",
      content: "We collect information that you provide directly to us, such as when you request a legal consultation, subscribe to our newsletter, or submit a contact form. This may include your name, email address, and phone number."
    },
    {
      title: "2. Use of Information",
      content: "The information we collect is used to provide, maintain, and improve our legal services, to communicate with you regarding your case, and to ensure compliance with legal obligations."
    },
    {
      title: "3. Legal Privilege & Confidentiality",
      content: "As a law firm, we prioritize the confidentiality of our clients. Any information shared within an attorney-client relationship is protected under the strictest standards of legal privilege."
    },
    {
      title: "4. Cookies and Tracking",
      content: "We use cookies to analyze website traffic and optimize your experience. You can choose to disable cookies through your browser settings, though some features of the site may lose functionality."
    },
    {
      title: "5. Third-Party Disclosure",
      content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide the services you have requested or as required by law."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-4xl mx-auto text-center mb-20 z-10"
      >
        <motion.span 
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.5em", opacity: 1 }}
          className="text-amber-500 font-bold uppercase text-xs mb-4 block"
        >
          Security & Trust
        </motion.span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mt-2">
          Privacy <span className="text-amber-600">Policy</span>
        </h1>
        <div className="w-20 h-[2px] bg-zinc-800 mx-auto mt-8 flex justify-center">
            <div className="w-1/2 h-full bg-amber-600"></div>
        </div>
        <p className="text-zinc-500 mt-8 text-sm uppercase tracking-widest font-medium">
          Effective Date: March 2026
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto z-10"
      >
        <div className="grid gap-12">
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-amber-600/30 transition-colors duration-500"
            >
              <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight flex items-center">
                <span className="text-amber-600 mr-4 font-mono text-sm opacity-50">0{index + 1}</span>
                {section.title.split('. ')[1]}
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg font-light pl-9 border-l border-zinc-800 group-hover:border-amber-600/50 transition-colors duration-500">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Footer Card */}
        
      </motion.div>

      {/* Simple Footer */}
     
    </div>
  );
};

export default PrivacyPolicy;