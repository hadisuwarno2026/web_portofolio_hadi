import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Cpu,
  Brain,
  Lightbulb,
  Sparkles,
  Zap,
  Globe,
  Radio,
  Play
} from 'lucide-react';
import { EDUCATION_INFO } from '../data';

export default function Education() {
  const [loadLevel, setLoadLevel] = useState<'low' | 'med' | 'high'>('med');
  
  // Voltages, current calculations according to selected load level
  const getMetrics = () => {
    switch (loadLevel) {
      case 'low':
        return { voltage: 220.1, current: 0.15, power: 33.0, status: 'STANDBY BEBAN RINGAN' };
      case 'high':
        return { voltage: 216.8, current: 8.42, power: 1825.4, status: 'BEBAN PUNCAK (OVERLOAD WARNING)' };
      case 'med':
      default:
        return { voltage: 218.4, current: 1.25, power: 273.0, status: 'OPERASIONAL SUHU NORMAL' };
    }
  };

  const { voltage, current, power, status } = getMetrics();

  return (
    <section
      id="pendidikan"
      className="py-14 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background blueprint details */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title exactly matching Image 2 style */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 font-display">
            ACADEMIC PROFILE
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Kualifikasi akademik formal S1 Teknik Informatika dengan fokus riset mandiri sistem monitoring kelistrikan telekomunikasi berbasis mikrokontroler.
          </p>
        </div>

        {/* 2-Column Binary Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Academic Credentials info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex-1 flex flex-col justify-between relative"
            >
              <div>
                {/* School title with header icon */}
                <div className="flex items-center gap-4.5 border-b border-slate-800 pb-6 mb-6">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight font-display">
                      {EDUCATION_INFO.university}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 mt-1 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                      S1 TEKNIK INFORMATIKA (AKREDITASI B)
                    </span>
                  </div>
                </div>

                {/* Educational parameters display */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        PROGRAM STUDI
                      </span>
                      <span className="block text-sm font-bold text-white mt-1">
                        {EDUCATION_INFO.major}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        JENJANG STUDI
                      </span>
                      <span className="block text-sm font-bold text-white mt-1">
                        S1 (STRATA MANDIRI)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-950 to-indigo-950/20 border border-cyan-500/25">
                      <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                        INDEKS PRESTASI // IPK
                      </span>
                      <span className="block text-2xl font-black text-cyan-400 mt-1 tracking-tight">
                        {EDUCATION_INFO.gpa}
                      </span>
                      <span className="block text-[9px] text-slate-500 mt-0.5">PREDIKAT: SANGAT MEMUASKAN</span>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        TAHUN KELULUSAN
                      </span>
                      <span className="block text-2xl font-extrabold text-white mt-1 tracking-tight">
                        {EDUCATION_INFO.gradYear}
                      </span>
                      <span className="block text-[9px] text-slate-500 mt-0.5">YUDISIUM TERPENUHI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographical stamp */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-cyan-400" /> KELULUSAN: SEPTEMBER 2022
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-cyan-400" /> BALIKPAPAN, KALTIM
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive S1 Thesis Simulation Panel */}
          <div className="lg:col-span-6 flex">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl text-white flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                      KARYA ILMIAH // JUDUL SKRIPSI
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-[9px] font-mono border border-slate-800 text-slate-400">
                    S1 THESIS SIMULATOR
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base font-bold tracking-tight text-white leading-relaxed italic border-l-4 border-cyan-400 pl-4 py-1.5 bg-slate-950/40 rounded-r opacity-95">
                  "{EDUCATION_INFO.thesisTitle}"
                </blockquote>

                {/* S1 Thesis Simulation Sandbox representing hardware design */}
                <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-850 shadow-inner relative">
                  
                  {/* Glowing header */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-3 border-b border-slate-900/55 pb-1.5">
                    <span>ESP32 ACPDB SIMULATION PANEL</span>
                    <span className="text-cyan-400 font-bold">STATUS: RUNNING</span>
                  </div>

                  {/* Simulated Blue Backlight LCD Monitor Screen */}
                  <div className="bg-cyan-950/20 border border-cyan-500/30 p-3.5 rounded-lg my-3 font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.05)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-cyan-900/5 pointer-events-none" />
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span>⚡ ACPDB MONITORING SYSTEM</span>
                      <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center py-2.5 bg-slate-950/80 rounded-md border border-cyan-500/10 my-1">
                      <div>
                        <span className="text-[8px] text-slate-500 block">VOLT (V)</span>
                        <span className="text-xs font-extrabold text-cyan-400">{voltage} V</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-slate-500 block">AMP (A)</span>
                        <span className="text-xs font-extrabold text-emerald-400">{current} A</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-slate-500 block">WATT (W)</span>
                        <span className="text-xs font-extrabold text-amber-400">{power} W</span>
                      </div>
                    </div>
                    <div className="text-[9px] text-slate-400 flex items-center justify-between mt-1">
                      <span>LOAD LEVEL: <span className="text-white font-bold uppercase">{loadLevel}</span></span>
                      <span className="text-[8px] text-cyan-400 tracking-tighter shrink-0">{status}</span>
                    </div>
                  </div>

                  {/* Clicking buttons to change loads */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 mb-2">
                    <span>// INTERACTIVE SPEED LOAD CONTROLLER:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setLoadLevel('low')}
                      className={`py-1.5 rounded text-[10px] font-mono tracking-widest font-bold cursor-pointer transition-all border ${
                        loadLevel === 'low'
                          ? 'bg-blue-600/35 border-blue-500 text-white shadow-md'
                          : 'bg-slate-900 hover:bg-slate-850/80 text-slate-400 border-slate-800'
                      }`}
                    >
                      LOW LOAD
                    </button>
                    <button
                      onClick={() => setLoadLevel('med')}
                      className={`py-1.5 rounded text-[10px] font-mono tracking-widest font-bold cursor-pointer transition-all border ${
                        loadLevel === 'med'
                          ? 'bg-cyan-600/35 border-cyan-500 text-cyan-300 shadow-md'
                          : 'bg-slate-900 hover:bg-slate-850/80 text-slate-400 border-slate-800'
                      }`}
                    >
                      MEDIUM
                    </button>
                    <button
                      onClick={() => setLoadLevel('high')}
                      className={`py-1.5 rounded text-[10px] font-mono tracking-widest font-bold cursor-pointer transition-all border ${
                        loadLevel === 'high'
                          ? 'bg-rose-950/40 border-rose-650 text-rose-300 shadow-md animate-pulse'
                          : 'bg-slate-900 hover:bg-slate-850/80 text-slate-400 border-slate-800'
                      }`}
                    >
                      HIGH LOAD
                    </button>
                  </div>
                </div>
              </div>

              {/* Architecture text labels */}
              <div className="mt-6 text-xs text-slate-400 font-mono flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  MICROCONTROLLER: ESP32 NodeMCU
                </span>
                <span className="text-slate-500">IEEE REFERENCE #1428</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Dynamic highlights below */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATION_INFO.features.map((feature, idx) => {
            const icons = [
              <Sparkles className="w-5 h-5 text-cyan-400" />,
              <Cpu className="w-5 h-5 text-emerald-400" />,
              <Brain className="w-5 h-5 text-indigo-400" />,
              <Lightbulb className="w-5 h-5 text-amber-400" />,
            ];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-900/40 backdrop-blur-xs p-5 rounded-xl border border-slate-800/80 shadow-xs hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="p-2 bg-slate-950 border border-slate-800 rounded-lg w-fit mb-3">
                  {icons[idx] || <Award className="w-5 h-5 text-cyan-400" />}
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-200 leading-snug">
                  {feature}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
