import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  ChevronRight,
  Sparkles,
  Database
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<string>(WORK_EXPERIENCE[0].id);

  const getCompanyShortName = (name: string) => {
    if (name.includes('PT TOWER BERSAMA')) return 'Tower Bersama Group';
    if (name.includes('MNC SKY')) return 'MNC Sky Vision';
    return 'PT Hariff Daya Tunggal';
  };

  // Generate interactive metrics customized for each career role to represent extreme technical expertise
  const getRoleTelemetry = (id: string) => {
    switch (id) {
      case 'exp_01':
        return {
          metric1Name: 'AKURASI DATA ASET', metric1Val: '100.0%',
          metric2Name: 'REDUKSI PROSES ADMIN', metric2Val: '-99.1%',
          chartTitle: 'INTEGRITAS DATA & ASSET ENTRIES SITES (REALTIME)',
          statusText: 'PERFORMA TIM TERBAIK 2018 (EXCELLENT)'
        };
      case 'exp_02':
        return {
          metric1Name: 'SITE DOWNTIME', metric1Val: '-87.4%',
          metric2Name: 'SITE PERFORMANCE RATIO', metric2Val: '99.81%',
          chartTitle: 'INDEKS MONITORING PREVENTIF KELISTRIKAN',
          statusText: 'SLA OPERASIONAL TERPENUHI (OPTIMAL)'
        };
      case 'exp_03':
        return {
          metric1Name: 'SLA RESOLUSI KELUHAN', metric1Val: '100.0%',
          metric2Name: 'TEKNISI RESOLUTION RATE', metric2Val: '100%',
          chartTitle: 'DISTRIBUSI SIARAN & SATELIT LINK STATUS',
          statusText: 'SINKRONISASI TRANSMISI SATELIT AKTIF'
        };
      case 'exp_04':
        return {
          metric1Name: 'BTS ENGR RESOLUTION', metric1Val: '100%',
          metric2Name: 'ATP DELIVERY ACCURACY', metric2Val: '100%',
          chartTitle: 'TESTING & COMMISSIONING POWER SYSTEM LINK',
          statusText: 'PENGUJIAN INTEGRASI BTS BANDWIDTH SUKSES'
        };
      default:
        return {
          metric1Name: 'PERFORMANCE RATE', metric1Val: '100%',
          metric2Name: 'KPI SUCCESS', metric2Val: '100%',
          chartTitle: 'METRIKS OPERASIONAL SISTEM',
          statusText: 'SISTEM SEHAT'
        };
    }
  };

  const selectedExp = WORK_EXPERIENCE.find((exp) => exp.id === activeTab) || WORK_EXPERIENCE[0];
  const telemetry = getRoleTelemetry(selectedExp.id);

  return (
    <section
      id="pengalaman"
      className="py-14 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background blueprint details */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header exactly matching image */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 font-display">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Rekam jejak karir profesional mandiri selama lebih dari 15 tahun mengawal kestabilan sistem data aset, operasional lapangan, dan inovasi telekomunikasi digital.
          </p>
        </div>

        {/* 2-Column Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive selection tabs representing years (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 text-left justify-start">
            
            <div className="flex flex-col gap-3">
              {WORK_EXPERIENCE.map((exp, idx) => {
                const isActive = activeTab === exp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(exp.id)}
                    className={`text-left px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer border flex items-center justify-between group relative overflow-hidden ${
                      isActive
                        ? 'bg-slate-900 border-cyan-500/50 text-white shadow-xl shadow-cyan-500/[0.03]'
                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                    }`}
                  >
                    {/* Left neon indicator strip */}
                    <div className={`absolute top-0 bottom-0 left-0 w-1 transition-all ${
                      isActive ? 'bg-cyan-400' : 'bg-transparent'
                    }`} />

                    <div className="min-w-0 pr-4">
                      {/* Short name/stamp */}
                      <span className={`block text-[9px] uppercase font-mono tracking-widest font-bold mb-1 ${
                        isActive ? 'text-cyan-400' : 'text-slate-500'
                      }`}>
                        {getCompanyShortName(exp.company)} // 0{idx + 1}
                      </span>
                      {/* Role title */}
                      <span className={`block text-xs sm:text-sm font-bold truncate tracking-tight ${
                        isActive ? 'text-white' : 'text-slate-300'
                      }`}>
                        {exp.role.toUpperCase()}
                      </span>
                      {/* Short date range */}
                      <span className="block text-[10px] font-mono text-slate-500 mt-1">
                        {exp.period.split(' ')[0]} {exp.period.split(' ')[1]} - {exp.period.split(' ').slice(-2).join(' ')}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform ${
                      isActive ? 'translate-x-1 text-cyan-400' : ''
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: High Tech Command Center showing job detail and telemetry values (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-850 shadow-xl relative flex flex-col justify-between h-full"
              >
                {/* Tech Line corners ornament */}
                <div className="absolute top-0 right-0 w-14 h-14 border-t-2 border-r-2 border-cyan-500/15 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-14 h-14 border-b-2 border-l-2 border-cyan-500/15 pointer-events-none" />

                <div>
                  {/* Header metadata: Company name & period */}
                  <div className="border-b border-slate-800/80 pb-5 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-cyan-400 font-mono tracking-widest uppercase bg-cyan-950/45 border border-cyan-500/15 px-2.5 py-1 rounded">
                      <Briefcase className="w-3.5 h-3.5" />
                      {selectedExp.company}
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-3 font-display">
                      {selectedExp.role.toUpperCase()}
                    </h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] font-mono text-slate-450 mt-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-450" />
                        {selectedExp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {selectedExp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet responsibilities with custom check indicators */}
                  <div className="mb-8">
                    <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">
                      // TANGGUNG JAWAB UTAMA (MAIN RESPONSIBILITIES)
                    </span>
                    
                    <ul className="space-y-3">
                      {selectedExp.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3.5 text-xs sm:text-sm leading-normal text-slate-350 text-left"
                        >
                          <span className="text-cyan-400 font-mono mt-0.5 select-none text-xs">●</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights of career achievements */}
                  {selectedExp.achievements && selectedExp.achievements.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 shadow-inner">
                      <div className="flex items-center gap-2 text-cyan-400 mb-3 block text-left">
                        <Award className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase font-mono tracking-widest">
                          PENCAPAIAN UTAMA TERUJI (KEY ACHIEVEMENTS)
                        </span>
                      </div>
                      
                      <ul className="space-y-2 text-left font-sans text-xs">
                        {selectedExp.achievements.map((ach, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-300"
                          >
                            <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Simulated telemetry metrics panel representing actual work KPI values */}
                <div className="mt-8 pt-5 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 mb-3 uppercase tracking-wider">
                    <span>{telemetry.chartTitle}</span>
                    <span className="text-cyan-400 font-bold">{telemetry.statusText}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center text-xs font-mono">
                    <div className="bg-slate-950 border border-slate-850 p-3 rounded-lg shadow-inner">
                      <span className="block text-slate-500 text-[9px] uppercase tracking-wider">{telemetry.metric1Name}</span>
                      <span className="block text-cyan-400 font-extrabold text-base mt-1 tracking-tight">{telemetry.metric1Val}</span>
                    </div>
                    
                    <div className="bg-slate-950 border border-slate-850 p-3 rounded-lg shadow-inner">
                      <span className="block text-slate-500 text-[9px] uppercase tracking-wider">{telemetry.metric2Name}</span>
                      <span className="block text-emerald-400 font-extrabold text-base mt-1 tracking-tight">{telemetry.metric2Val}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Small Horizontal Highlights Strip at Bottom */}
        <div className="mt-16 bg-slate-900/40 backdrop-blur-xs border border-slate-800/80 p-5 rounded-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center font-mono">
            <div className="border-r border-slate-850 last:border-0 py-1">
              <span className="block text-[9px] text-slate-500 uppercase tracking-widest">YEARS EXP</span>
              <span className="block text-lg font-bold text-cyan-450 mt-1">15+</span>
            </div>
            <div className="border-r border-slate-850 last:border-0 py-1 hidden sm:block">
              <span className="block text-[9px] text-slate-500 uppercase tracking-widest">SITE RATIO TIME</span>
              <span className="block text-lg font-bold text-sky-400 mt-1">99.81%</span>
            </div>
            <div className="border-r border-slate-850 last:border-0 py-1">
              <span className="block text-[9px] text-slate-500 uppercase tracking-widest">REAL ACCURACY</span>
              <span className="block text-lg font-bold text-emerald-400 mt-1">100% KPI</span>
            </div>
            <div className="border-r border-slate-850 last:border-0 py-1 hidden lg:block">
              <span className="block text-[9px] text-slate-500 uppercase tracking-widest">BEST YEAR</span>
              <span className="block text-lg font-bold text-amber-400 mt-1">2018</span>
            </div>
            <div className="border-r border-slate-850 last:border-0 py-1 hidden lg:block">
              <span className="block text-[9px] text-slate-500 uppercase tracking-widest">K3 COMPLIANCE</span>
              <span className="block text-lg font-bold text-rose-500 mt-1">AK3U FULL</span>
            </div>
            <div className="py-1">
              <span className="block text-[9px] text-slate-500 uppercase tracking-widest">SYSTEM MODEL</span>
              <span className="block text-lg font-bold text-indigo-400 mt-1">ACTIVE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
