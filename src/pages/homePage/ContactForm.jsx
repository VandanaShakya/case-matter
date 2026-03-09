import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  // Animation variants for consistent staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative bg-zinc-950 py-24 px-6 md:px-20 overflow-hidden font-sans">
      {/* Background Aesthetic Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E2B13C]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* LEFT SIDE: Contact Information */}
        <div className="space-y-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-[#E2B13C] uppercase tracking-[0.3em] text-sm font-bold">Get In Touch</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
              Request a free <br /> consultation
            </h1>
            <p className="text-zinc-400 text-lg max-w-md">
              Our experts are ready to provide the precision and results your legal matters require.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email & Phone */}
            <div className="space-y-6">
              <div>
                <p className="text-[#E2B13C] font-semibold text-xs uppercase tracking-widest mb-2">Email Us</p>
                <a href="mailto:casematters.info@gmail.com" className="text-white text-lg hover:text-[#E2B13C] transition-colors">
                  casematters.info@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[#E2B13C] font-semibold text-xs uppercase tracking-widest mb-2">Call Us</p>
                <a href="tel:+919810238083" className="text-white text-lg hover:text-[#E2B13C] transition-colors">
                  +91 9810238083
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="space-y-2">
              <p className="text-[#E2B13C] font-semibold text-xs uppercase tracking-widest mb-4">Office Hours</p>
              <div className="text-zinc-300 space-y-1">
                <p className="font-medium text-white">Mon — Sat</p>
                <p className="text-sm opacity-80">10am - 8pm</p>
                <p className="font-medium text-white pt-2">Sunday</p>
                <p className="text-sm opacity-80">10am - 5pm</p>
              </div>
            </div>
          </motion.div>

          {/* Address Block */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-[#E2B13C] font-semibold text-xs uppercase tracking-widest mb-2">Visit Our Office</p>
            <p className="text-white text-lg leading-relaxed">
              DLF Almeda, Sector 73, SPR Road, <br /> Gurgaon – 122101
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <motion.div 
          variants={itemVariants}
          className="relative p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/50 border border-white/10 backdrop-blur-2xl shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E2B13C] focus:ring-1 focus:ring-[#E2B13C] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E2B13C] focus:ring-1 focus:ring-[#E2B13C] transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Email Address</label>
              <input type="email" placeholder="example@email.com" className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E2B13C] focus:ring-1 focus:ring-[#E2B13C] transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Subject of Matter</label>
              <select className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E2B13C] transition-all appearance-none">
                <option>Arbitration</option>
                <option>Construction Disputes</option>
                <option>Contract Advisory</option>
                <option>Other Legal Matters</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase ml-1">How can we help?</label>
              <textarea rows="4" placeholder="Briefly describe your situation..." className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E2B13C] focus:ring-1 focus:ring-[#E2B13C] transition-all resize-none"></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#E2B13C", color: "#000" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-xl bg-white/10 border border-white/10 text-white font-bold text-lg transition-all shadow-xl"
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;