import { motion } from 'motion/react';
import {
  Award,
  ShieldAlert,
  Network,
  Terminal,
  Activity,
  HeartHandshake,
  Clock,
  Wrench,
  CheckCheck,
  Sparkles,
  Target,
  Send,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { CERTIFICATIONS } from '../data';

export default function Certifications() {
  const getCertIcon = (id: string) => {
    switch (id) {
      case 'cert_01':
        return <ShieldAlert className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />;
      case 'cert_02':
        return <Network className="w-5 h-5 text-blue-400 group-hover:animate-pulse" />;
      case 'cert_03':
        return <Terminal className="w-5 h-5 text-indigo-400 group-hover:animate-pulse" />;
      case 'cert_04':
        return <Terminal className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />;
      case 'cert_05':
        return <Activity className="w-5 h-5 text-orange-400 group-hover:animate-pulse" />;
      case 'cert_06':
        return <HeartHandshake className="w-5 h-5 text-rose-400 group-hover:animate-pulse" />;
      case 'cert_07':
        return <Clock className="w-5 h-5 text-amber-400 group-hover:animate-spin" />;
      case 'cert_08':
        return <Wrench className="w-5 h-5 text-emerald-400 group-hover:animate-bounce" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getTagStyle = (status: string) => {
    if (status.includes('Resmi') || status.includes('Safety')) {
      return 'bg-emerald-950/40 text-emerald-400 border-emerald-900/50';
    }
    if (status.includes('International')) {
      return 'bg-blue-950/40 text-blue-400 border-blue-900/50';
    }
    if (status.includes('Verified')) {
      return 'bg-indigo-950/40 text-indigo-400 border-indigo-900/50';
    }
    return 'bg-slate-900/60 text-slate-300 border-slate-800';
  };

  const technicalCerts = CERTIFICATIONS.filter((c) => c.type === 'technical');
  const softCerts = CERTIFICATIONS.filter((c) => c.type === 'soft');

  const bottomHighlights = [
    { title: 'Kompetensi Teruji', desc: 'Sertifikasi nasional & internasional', icon: <CheckCheck className="w-5 h-5 text-cyan-450" /> },
    { title: 'Pengembangan Berkelanjutan', desc: 'Konsisten belajar teknologi terbaru', icon: <Sparkles className="w-5 h-5 text-blue-400" /> },
    { title: 'Safety-First Mindset', desc: 'Pemahaman regulasi K3 yang prima', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
    { title: 'Value Add Driven', desc: 'Siap dedikasi penuh di tim Anda', icon: <Target className="w-5 h-5 text-indigo-400" /> }
  ];

  return (
    <section
      id="sertifikasi"
      className="py-14 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Blueprint elements and shadows */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-950/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header exactly matching image */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 font-display">
            CERTIFICATIONS & ADVANCED SKILLS
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Sertifikasi keahlian terverifikasi di bidang keselamatan kerja (HSE), teknologi informasi jaringan, pengembangan perangkat digital (DevOps/IoT), serta kompetensi intrapersonal.
          </p>
        </div>

        {/* 2-Column main Grouping representation as requested to look exactly like the design images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20">
          
          {/* Column A: Technical & Professional Qualification */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3.5 border-b border-slate-800">
              <span className="p-1 px-2.5 text-[9px] bg-cyan-500/10 text-cyan-400 rounded font-bold uppercase font-mono border border-cyan-500/25 shadow-sm">GROUP A</span>
              <h3 className="text-lg font-bold text-white tracking-tight font-display">
                Sertifikasi Teknis & Kualifikasi Profesional
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalCerts.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xs border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 relative group"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/15 group-hover:border-cyan-500/25 rounded-tr-2xl pointer-events-none" />
                  <div>
                    <div className="flex items-start justify-between gap-2.5 mb-4">
                      <div className="p-2.5 bg-slate-950 border border-slate-8 w-fit rounded-xl">
                        {getCertIcon(cert.id)}
                      </div>
                      <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded border ${getTagStyle(cert.statusLabel)}`}>
                        {cert.statusLabel}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <span className="block text-[10px] font-mono text-cyan-400/80 mt-1 uppercase tracking-tight">
                      {cert.org}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-4 leading-relaxed border-t border-slate-850 pt-3">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column B: HSE & Self Development Credentials */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3.5 border-b border-slate-800">
              <span className="p-1 px-2.5 text-[9px] bg-indigo-500/10 text-indigo-400 rounded font-bold uppercase font-mono border border-indigo-500/25 shadow-sm">GROUP B</span>
              <h3 className="text-lg font-bold text-white tracking-tight font-display">
                Keselamatan Kerja & Pengembangan Diri
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softCerts.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xs border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 relative group"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/15 group-hover:border-cyan-500/25 rounded-tr-2xl pointer-events-none" />
                  <div>
                    <div className="flex items-start justify-between gap-2.5 mb-4">
                      <div className="p-2.5 bg-slate-950 border border-slate-8 w-fit rounded-xl">
                        {getCertIcon(cert.id)}
                      </div>
                      <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded border ${getTagStyle(cert.statusLabel)}`}>
                        {cert.statusLabel}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <span className="block text-[10px] font-mono text-cyan-400/80 mt-1 uppercase tracking-tight">
                      {cert.org}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-4 leading-relaxed border-t border-slate-850 pt-3">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM CERTIFICATIONS HIGHLIGHTS ROW EXACTLY MATCHING DESIGN CONCEPT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-800/65">
          {bottomHighlights.map((hl, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/25 transition-all"
            >
              <div className="p-2.5 bg-slate-950 border border-slate-800/80 text-cyan-400 rounded-lg flex-shrink-0">
                {hl.icon}
              </div>
              <div className="text-left font-sans">
                <h5 className="text-xs font-bold text-white tracking-wide">{hl.title}</h5>
                <p className="text-[10px] text-slate-450 mt-0.5">{hl.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
