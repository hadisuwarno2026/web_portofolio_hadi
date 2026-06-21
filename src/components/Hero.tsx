import { motion } from 'motion/react';
import {
  Radio,
  Database,
  BarChart3,
  Cpu,
  Code2,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Radio':
        return <Radio className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-350" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-350" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-350" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-350" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform duration-350" />;
      default:
        return <Radio className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-350" />;
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontak');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('proyek');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="profil"
      className="relative min-h-screen pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden bg-slate-950 text-slate-100"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.3) 0%, rgba(2, 6, 23, 0.15) 60%, rgba(2, 6, 23, 0.85) 90%, rgba(2, 6, 23, 1) 100%), linear-gradient(to right, rgba(2, 6, 23, 0.6) 0%, rgba(2, 6, 23, 0.15) 50%, rgba(2, 6, 23, 0.65) 100%), url('https://lh3.googleusercontent.com/d/1WboGD1hFTt5gbSiTXTjmNW8XdkpRrFEQ')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* High tech neon accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Curved neon glow at the bottom matching the banner curves in the style image */}
      <div className="absolute -bottom-40 left-[-10%] w-[120%] h-80 bg-cyan-500/10 rounded-[100%] blur-[80px] pointer-events-none border-t border-cyan-400/20 transform rotate-[-2deg]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-start justify-center text-left max-w-3xl space-y-8">
          
          {/* Left-aligned Text Column */}
          <div className="space-y-6 flex flex-col items-start">
            {/* Glowing Big Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 flex flex-col items-start"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight text-white leading-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-extrabold neon-glow-cyan">
                  {PERSONAL_INFO.name.toUpperCase()}
                </span>
              </h1>
              
              {/* Highlight bar accent */}
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
              
              <p className="text-base sm:text-lg md:text-xl text-slate-100 font-semibold leading-relaxed max-w-3xl pt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                Engineering & Data Management Specialist with a unique blend of qualifications. My expertise includes Asset Management, Information Systems, and Digital Solutions (IoT Support, Data Analytics, Web Systems).
              </p>
            </motion.div>

            {/* Quote Block / Operational philosophy */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-6 py-2.5 bg-slate-900/40 border-l-4 border-cyan-500 rounded-r-lg max-w-2xl backdrop-blur-md"
            >
              <p className="text-xs sm:text-sm font-mono text-cyan-300">
                "{PERSONAL_INFO.quote.toUpperCase()}"
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-start items-center gap-4 w-full"
            >
              {/* HUBUNGI SAYA Button */}
              <button
                onClick={scrollToContact}
                className="group relative inline-flex items-center gap-3 w-48 justify-center py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 bg-slate-950/60 hover:bg-slate-955 hover:text-white border border-cyan-400/30 hover:border-cyan-400 cursor-pointer transition-all duration-300 active:scale-97 select-none overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  HUBUNGI SAYA
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              {/* PORTFOLIO Button */}
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-3 w-48 justify-center py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 bg-slate-950/60 hover:bg-slate-955 hover:text-white border border-cyan-400/30 hover:border-cyan-400 cursor-pointer transition-all duration-300 active:scale-97 select-none"
              >
                <Briefcase className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span>PORTOFOLIO</span>
              </button>
            </motion.div>
          </div>

        </div>

        {/* Core Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 w-full"
        >
          {/* Section banner matching layout design standards */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="block text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
              SOLUSI UTAMA // PILAR KEAHLIAN TEKNOLOGI & DATA
            </span>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
            {PERSONAL_INFO.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-950/95 backdrop-blur-lg border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-cyan-500/5 overflow-hidden"
              >
                {/* Decorative glow background element */}
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-300" />
                
                {/* Micro tech label indicator */}
                <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-600 group-hover:text-cyan-500/60 transition-colors">
                  0{idx + 1}
                </div>

                {/* Icon wrapper inside card */}
                <div className="mb-4 bg-slate-950 p-2.5 rounded-xl w-fit border border-slate-800/80 shadow-md group-hover:border-cyan-500/20 group-hover:bg-slate-900 transition-all duration-300">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                {pillar.subtitle && (
                  <p className="text-[11px] text-slate-400 mt-1 leading-normal group-hover:text-slate-350 transition-colors">
                    {pillar.subtitle}
                  </p>
                )}
                
                {/* Visual indicator bar at the bottom */}
                <div className="mt-4 w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
