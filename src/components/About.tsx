import { motion } from 'motion/react';
import { Target, Award, Users, Database, Cpu, Wrench, Shield, CheckCircle2, FileText } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'PENGALAMAN KERJA', value: '15+', suffix: ' Tahun', desc: 'Di telekomunikasi & engineering' },
    { label: 'FOKUS BIDANG', value: '7', suffix: ' Core', desc: 'Aspek teknis & manajemen' },
    { label: 'SISTEM DIGITAL', value: 'Dual', suffix: ' Capability', desc: 'IoT & Web Development' },
  ];

  const highlights = [
    {
      icon: Cpu,
      title: 'Telekomunikasi & Isu IoT',
      desc: 'Implementasi preventive & corrective maintenance serta solusi IoT cerdas.',
    },
    {
      icon: Database,
      title: 'Data & Asset Management',
      desc: 'Pengelolaan data aset secara detail, akurat, dan berorientasi efisiensi operasional.',
    },
    {
      icon: Users,
      title: 'Koordinasi Proyek',
      desc: 'Administrasi, koordinasi tim lintas fungsi, dan komunikasi yang kuat antar stakeholder.',
    },
  ];

  return (
    <section
      id="tentang-saya"
      className="py-14 bg-slate-950 text-slate-100 border-t border-slate-950 relative overflow-hidden"
    >
      {/* Background elegant grid pattern and overlay glow, matching site grid styles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e902_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e902_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header exactly matching other sections' unified typography styling */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 font-display uppercase">
            PROFIL PROFESIONAL
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center gap-6"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-full lg:aspect-square max-w-[340px] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_10px_35px_rgba(6,182,212,0.15)] group bg-slate-900/40">
              {/* Subtle backlighting glow behind portrait for seamless background integration */}
              <div className="absolute inset-4 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 rounded-full filter blur-[40px] opacity-60 pointer-events-none" />
              
              {/* Overlay shading that physically blends the image into the background slate color */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 via-transparent to-slate-950/10 pointer-events-none z-10" />

              <img
                src="https://lh3.googleusercontent.com/d/1-x6xssOQf2SMqgPL7Ib0zjqZlKthzKNu"
                alt="Hadi Suwarno Portrait"
                className="w-full h-full object-cover object-top select-none hover:scale-[1.03] transition-transform duration-500 ease-out relative z-0"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* View CV Button */}
            <a
              href="https://drive.google.com/file/d/1eeAwyZk3vg00UTLWz0vFj3x-gipUi8b0/view"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[340px] flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 bg-slate-900/40 hover:bg-slate-900 border border-cyan-400/30 hover:border-cyan-400 cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
            >
              <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>LIHAT / DOWNLOAD CV</span>
            </a>

            {/* Stats Row */}
            <div className="w-full max-w-[340px] grid grid-cols-3 gap-2">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center relative overflow-hidden"
                >
                  <span className="block text-[8px] font-mono font-bold tracking-wider text-slate-500 uppercase leading-none mb-1">
                    {stat.label.split(' ')[0]}
                  </span>
                  <div className="text-sm sm:text-base font-black text-white leading-none font-display">
                    {stat.value}
                  </div>
                  <span className="block text-[8px] text-slate-400 mt-0.5 leading-snug">
                    {stat.desc.split(' ')[0]} {stat.desc.split(' ')[1] || ''}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Professional Summary and Pillars highlights */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Professional Summary glassmorphism card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-cyan-500/30 transition-all duration-300 relative group"
            >
              {/* Top right decorative industrial stamp */}
              <div className="absolute top-6 right-6 font-mono text-[9px] text-slate-600 uppercase tracking-widest pointer-events-none group-hover:text-cyan-500/60 transition-colors">
                // BIODATA.TXT
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                    Ringkasan Eksekutif
                  </span>
                </div>

                {/* The exact Indonesian text requested by user */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify font-sans">
                  Sarjana Teknik Informatika dengan pengalaman lebih dari 15 tahun di bidang telekomunikasi,{' '}
                  <span className="text-white font-semibold">engineering</span>,{' '}
                  <span className="text-cyan-300 font-semibold">asset management</span>, project support, maintenance,{' '}
                  <span className="text-white font-semibold">data management</span>, dan pengembangan sistem digital. Berpengalaman
                  dalam pengelolaan data aset, administrasi dan koordinasi proyek, pelaporan operasional, monitoring KPI, analisis data,{' '}
                  <span className="text-cyan-300 font-semibold">preventive & corrective maintenance</span>, serta implementasi
                  solusi berbasis Internet of Things (IoT) dan aplikasi web.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify font-sans">
                  Memiliki kemampuan yang kuat dalam <span className="text-white font-semibold">project coordination</span>,
                  reporting, komunikasi pemangku kepentingan, troubleshooting,{' '}
                  <span className="text-cyan-300 font-semibold">process improvement</span>, dan pengelolaan dokumentasi. Terbiasa bekerja secara
                  mandiri maupun dalam tim lintas fungsi untuk mendukung kelancaran operasional, menjaga akurasi data, memastikan pencapaian
                  target proyek, serta meningkatkan efektivitas dan efisiensi proses bisnis perusahaan.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-auto font-sans">
                  Dikenal sebagai individu yang analitis, <span className="text-cyan-300">detail-oriented</span>, adaptif, dan mampu
                  membangun kolaborasi yang baik dengan berbagai stakeholder internal maupun eksternal dalam lingkungan kerja yang dinamis dan berorientasi pada hasil.
                </p>
              </div>

              {/* Quick value props pill list */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-2">
                {['Analitis', 'Detail-Oriented', 'Adaptif', 'Kolaboratif', 'Solutif'].map((trait, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-slate-950/80 text-cyan-400 border border-slate-800/80 uppercase"
                  >
                    #{trait}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Highlights Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col gap-3 p-5 rounded-2xl bg-slate-900/20 border border-slate-905 hover:bg-slate-900/40 hover:border-slate-800/60 transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-cyan-400 w-fit h-fit shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
