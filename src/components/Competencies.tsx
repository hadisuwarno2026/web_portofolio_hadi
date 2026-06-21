import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';

const CARD_DATA_OVERRIDE = {
  comp_01: {
    number: "01",
    title: "Manajemen Proyek & Administrasi Operasional",
    theme: "blue",
    left: [
      "Project Support",
      "Project Administration",
      "Administrative Support",
      "Project Coordination",
      "Project Lifecycle",
      "Project Documentation",
      "Document Control"
    ],
    right: [
      "Office Administration",
      "Data Entry",
      "Filing & Documentation",
      "Stakeholder Coordination",
      "Operational Support",
      "Reporting & Documentation"
    ]
  },
  comp_02: {
    number: "02",
    title: "Pengelolaan Data & Analisis Bisnis",
    theme: "teal",
    left: [
      "Data Processing",
      "Data Analysis",
      "Data Validation",
      "Data Verification",
      "Data Integrity",
      "Data Reporting",
      "Dashboard Reporting"
    ],
    right: [
      "KPI Monitoring",
      "Performance Reporting",
      "Data Presentation",
      "Data Visualization",
      "Asset Management",
      "Database Management"
    ]
  },
  comp_03: {
    number: "03",
    title: "Pengembangan Sistem Digital & IoT",
    theme: "blue",
    items: [
      "IoT Development (ESP32, NodeMCU)",
      "Web Development (HTML, CSS, JavaScript, Bootstrap)",
      "Digital System Development",
      "System Monitoring",
      "Dashboard Monitoring"
    ]
  },
  comp_04: {
    number: "04",
    title: "Infrastruktur IT & Rekayasa Telekomunikasi",
    theme: "purple",
    items: [
      "Telecommunication Infrastructure",
      "Network & Server Administration",
      "Infrastructure Installation (Power System, CCTV Integration, Smart Door Lock Installation)",
      "Technical Troubleshooting",
      "Hardware & Software PC/Laptop Repair",
      "Operating System Installation"
    ]
  },
  comp_05: {
    number: "05",
    title: "Perangkat Lunak & Tools",
    theme: "blue",
    left: [
      { name: "Microsoft Excel (Advanced)", type: "excel" },
      { name: "Microsoft Word", type: "word" },
      { name: "Microsoft PowerPoint", type: "powerpoint" },
      { name: "Microsoft Outlook", type: "outlook" }
    ],
    right: [
      { name: "Google Spreadsheet", type: "spreadsheet" },
      { name: "Google Apps Script", type: "script" }
    ]
  },
  comp_06: {
    number: "06",
    title: "Kemampuan Interpersonal & Kepemimpinan",
    theme: "teal",
    left: [
      "Leadership",
      "Stakeholder Management",
      "Communication",
      "Coordination"
    ],
    right: [
      "Teamwork",
      "Customer Service Orientation",
      "Continuous Improvement"
    ]
  },
  comp_07: {
    number: "07",
    title: "Metode Berpikir & Manajemen Kerja",
    theme: "blue",
    left: [
      "Problem Solving",
      "Analytical Thinking",
      "Critical Thinking",
      "Decision Making"
    ],
    right: [
      "Planning & Organizing",
      "Time Management",
      "Attention to Detail",
      "Adaptability"
    ]
  }
};

export default function Competencies() {
  const [searchQuery, setSearchQuery] = useState('');

  const getCardStyles = (theme: string) => {
    switch (theme) {
      case 'teal':
        return {
          borderColor: 'border-teal-500/10 hover:border-teal-400/40',
          glowColor: 'hover:shadow-[0_0_22px_rgba(20,184,166,0.06)]',
          circleBg: 'bg-teal-950/20 border-teal-500/30',
          accentText: 'text-teal-400',
          badgeText: 'text-teal-400',
          checkCircle: 'bg-teal-500/10 border-teal-500/60 text-teal-400',
        };
      case 'purple':
        return {
          borderColor: 'border-indigo-500/10 hover:border-indigo-400/40',
          glowColor: 'hover:shadow-[0_0_22px_rgba(99,102,241,0.06)]',
          circleBg: 'bg-indigo-950/20 border-indigo-500/30',
          accentText: 'text-indigo-400',
          badgeText: 'text-indigo-400',
          checkCircle: 'bg-indigo-500/10 border-indigo-500/60 text-indigo-400',
        };
      case 'blue':
      default:
        return {
          borderColor: 'border-blue-500/10 hover:border-blue-400/40',
          glowColor: 'hover:shadow-[0_0_22px_rgba(59,130,246,0.06)]',
          circleBg: 'bg-blue-950/20 border-blue-500/30',
          accentText: 'text-blue-400',
          badgeText: 'text-blue-400',
          checkCircle: 'bg-blue-500/10 border-blue-500/60 text-blue-400',
        };
    }
  };

  const getCustomIcon = (id: string) => {
    switch (id) {
      case 'comp_01':
        return (
          <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
      case 'comp_02':
        return (
          <svg className="w-8 h-8 text-teal-450" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2M2 22h20" />
          </svg>
        );
      case 'comp_03':
        return (
          <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m21-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
            <text x="12" y="14" fill="currentColor" fontSize="6.5" fontWeight="black" textAnchor="middle" dy=".3">IoT</text>
          </svg>
        );
      case 'comp_04':
        return (
          <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20a8 8 0 110-16 8 8 0 010 16zM12 12V4M12 12l4 4M12 12l-4 4" />
          </svg>
        );
      case 'comp_05':
        return (
          <svg className="w-8 h-8 text-blue-450" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'comp_06':
        return (
          <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'comp_07':
        return (
          <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 .364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  const getBackgroundSvg = (id: string) => {
    return null;
  };

  const getToolBrandIcon = (type: string) => {
    switch (type) {
      case 'excel':
        return (
          <div className="w-7 h-7 rounded-lg bg-[#107c41] flex items-center justify-center font-black text-white text-[11px] font-sans shadow-md shrink-0 border border-emerald-600/30">
            X
          </div>
        );
      case 'word':
        return (
          <div className="w-7 h-7 rounded-lg bg-[#185abd] flex items-center justify-center font-black text-white text-[11px] font-sans shadow-md shrink-0 border border-blue-600/30">
            W
          </div>
        );
      case 'powerpoint':
        return (
          <div className="w-7 h-7 rounded-lg bg-[#c13b1b] flex items-center justify-center font-black text-white text-[11px] font-sans shadow-md shrink-0 border border-red-650/30">
            P
          </div>
        );
      case 'outlook':
        return (
          <div className="w-7 h-7 rounded-lg bg-[#0078d4] flex items-center justify-center font-black text-white text-[11px] font-sans shadow-md shrink-0 border border-indigo-600/30">
            O
          </div>
        );
      case 'spreadsheet':
        return (
          <div className="w-7 h-7 rounded-lg bg-[#0f9d58] flex items-center justify-center text-white p-1.5 shadow-md shrink-0 border border-emerald-500/20">
            <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 16H5v-4h7v4zm0-6H5V9h7v4zm7 6h-5v-4h5v4zm0-6h-5V9h5v4z" />
            </svg>
          </div>
        );
      case 'script':
        return (
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#34a853] to-[#4285f4] flex items-center justify-center text-white text-[8.5px] font-black tracking-tighter shadow-md shrink-0 border border-cyan-500/20">
            {"</>"}
          </div>
        );
      default:
        return null;
    }
  };

  const hasSearchMatch = (id: string) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const cat = CARD_DATA_OVERRIDE[id as keyof typeof CARD_DATA_OVERRIDE];
    if (!cat) return false;
    
    if (cat.title.toLowerCase().includes(q)) return true;

    if ('items' in cat && cat.items) {
      if (cat.items.some(item => item.toLowerCase().includes(q))) return true;
    }
    if ('left' in cat && cat.left) {
      const match = cat.left.some((item: any) => {
        if (typeof item === 'string') return item.toLowerCase().includes(q);
        return item.name.toLowerCase().includes(q);
      });
      if (match) return true;
    }
    if ('right' in cat && cat.right) {
      const match = cat.right.some((item: any) => {
        if (typeof item === 'string') return item.toLowerCase().includes(q);
        return item.name.toLowerCase().includes(q);
      });
      if (match) return true;
    }
    return false;
  };

  return (
    <section
      id="kompetensi"
      className="py-14 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background glowing blueprint structures */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-950/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e903_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e903_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Competencies Header Block exactly matching user image headings design */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-widest font-display uppercase leading-none">
            CORE COMPETENCIES
          </h2>
          <div className="w-20 h-1 bg-cyan-500/80 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto tracking-wide font-sans select-none">
            Matriks Keahlian Fungsional dan Kemandirian Kerja Operasional Berpengalaman untuk Mengawal Performa Sistem Data Terintegrasi.
          </p>
        </div>

        {/* Live Search Engine Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-cyan-400">
            <Search className="w-4.5 h-4.5" />
          </div>
          <input
            id="competency-search"
            type="text"
            placeholder="Cari keahlian (contoh: Excel, IoT, PLC, Jaringan, dll)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-11 pr-16 py-3 border border-cyan-500/10 rounded-2xl bg-slate-900/40 text-white placeholder-slate-500 text-xs font-mono font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400/55 transition-all shadow-[0_0_15px_rgba(0,0,0,0.35)]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-[10px] font-mono font-black text-cyan-400 hover:text-white cursor-pointer"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Dynamic Multi-Row Interactive Matrix Grids */}
        <div className="space-y-6">
          {/* ROW 1: 4 columns for comp_01-comp_04 */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {(['comp_01', 'comp_02', 'comp_03', 'comp_04'] as const).map((id) => {
                if (!hasSearchMatch(id)) return null;
                const cat = CARD_DATA_OVERRIDE[id];
                const styles = getCardStyles(cat.theme);

                return (
                  <motion.div
                    key={id}
                    layout="position"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`flex flex-col justify-between rounded-3xl bg-slate-900/45 md:bg-slate-950/75 backdrop-blur-md border ${styles.borderColor} ${styles.glowColor} transition-all duration-500 overflow-hidden relative group min-h-[290px] xl:min-h-[310px] p-4.5 sm:p-5`}
                  >
                    {/* Background line-artwork */}
                    {getBackgroundSvg(id)}

                    {/* Numeric corner highlight badge */}
                    <div className="absolute top-0 left-0 bg-slate-900/80 text-cyan-400/90 border-r border-b border-cyan-500/15 font-mono font-black text-[11px] px-3 py-1 rounded-br-2xl select-none z-20">
                      {cat.number}
                    </div>

                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Glowing Orb concentric header */}
                        <div className="flex items-center gap-3.5 mb-4 border-b border-slate-900/40 pb-3 relative z-10 pl-1 mt-1">
                          <div className={`relative shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-slate-950 border-2 ${styles.circleBg} shadow-[0_0_15px_rgba(6,182,212,0.12)] transition-transform duration-300 group-hover:scale-105`}>
                            <div className="absolute inset-1 rounded-full border border-dashed border-cyan-500/10 animate-spin" style={{ animationDuration: '40s' }} />
                            {getCustomIcon(id)}
                          </div>
                          
                          <div className="flex-1 min-w-0 pt-1">
                            <h3 className="text-[12px] sm:text-[12.5px] font-extrabold text-white leading-snug group-hover:text-cyan-300 transition-colors duration-300 tracking-tight block">
                              {cat.title}
                            </h3>
                            <div className="w-10 h-0.5 bg-cyan-400/80 mt-1 rounded-full" />
                          </div>
                        </div>

                        {/* Contents Checklist */}
                        <div className="relative z-10 flex gap-3.5">
                          {/* Left Column or unified items list */}
                          {'items' in cat ? (
                            <ul className="space-y-1.5 w-full">
                              {cat.items.map((item, i) => {
                                const highlight = searchQuery && item.toLowerCase().includes(searchQuery.toLowerCase());
                                return (
                                  <li key={i} className={`flex items-start gap-1.5 text-[11px] leading-tight transition-all duration-200 ${highlight ? 'text-cyan-400 font-bold scale-[1.01]' : 'text-slate-350 hover:text-slate-100'}`}>
                                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 font-bold text-[8px] mt-0.5 ${styles.checkCircle}`}>
                                      ✓
                                    </div>
                                    <span className="line-clamp-3">{item}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <>
                              <ul className="space-y-1.5 w-1/2">
                                {cat.left?.map((item, i) => {
                                  const highlight = searchQuery && item.toLowerCase().includes(searchQuery.toLowerCase());
                                  return (
                                    <li key={i} className={`flex items-start gap-1.5 text-[11px] leading-tight transition-all duration-200 ${highlight ? 'text-cyan-400 font-bold scale-[1.01]' : 'text-slate-350 hover:text-slate-100'}`}>
                                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 font-bold text-[8px] mt-0.5 ${styles.checkCircle}`}>
                                        ✓
                                      </div>
                                      <span className="line-clamp-3">{item}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                              <ul className="space-y-1.5 w-1/2">
                                {cat.right?.map((item, i) => {
                                  const highlight = searchQuery && item.toLowerCase().includes(searchQuery.toLowerCase());
                                  return (
                                    <li key={i} className={`flex items-start gap-1.5 text-[11px] leading-tight transition-all duration-200 ${highlight ? 'text-cyan-400 font-bold scale-[1.01]' : 'text-slate-350 hover:text-slate-100'}`}>
                                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 font-bold text-[8px] mt-0.5 ${styles.checkCircle}`}>
                                        ✓
                                      </div>
                                      <span className="line-clamp-3">{item}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ROW 2: 3 columns for comp_05-comp_07 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <AnimatePresence mode="popLayout">
              {(['comp_05', 'comp_06', 'comp_07'] as const).map((id) => {
                if (!hasSearchMatch(id)) return null;
                const cat = CARD_DATA_OVERRIDE[id];
                const styles = getCardStyles(cat.theme);

                return (
                  <motion.div
                    key={id}
                    layout="position"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`flex flex-col justify-between rounded-3xl bg-slate-900/45 md:bg-slate-950/75 backdrop-blur-md border ${styles.borderColor} ${styles.glowColor} transition-all duration-500 overflow-hidden relative group min-h-[290px] xl:min-h-[310px] p-4.5 sm:p-5`}
                  >
                    {/* Background line-artwork */}
                    {getBackgroundSvg(id)}

                    {/* Numeric corner highlight badge */}
                    <div className="absolute top-0 left-0 bg-slate-900/80 text-cyan-400/90 border-r border-b border-cyan-500/15 font-mono font-black text-[11px] px-3 py-1 rounded-br-2xl select-none z-20">
                      {cat.number}
                    </div>

                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Glowing Orb concentric header */}
                        <div className="flex items-center gap-3.5 mb-4 border-b border-slate-900/40 pb-3 relative z-10 pl-1 mt-1">
                          <div className={`relative shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-slate-950 border-2 ${styles.circleBg} shadow-[0_0_15px_rgba(6,182,212,0.12)] transition-transform duration-300 group-hover:scale-105`}>
                            <div className="absolute inset-1 rounded-full border border-dashed border-cyan-500/10 animate-spin" style={{ animationDuration: '40s' }} />
                            {getCustomIcon(id)}
                          </div>
                          
                          <div className="flex-1 min-w-0 pt-1">
                            <h3 className="text-[12px] sm:text-[12.5px] font-extrabold text-white leading-snug group-hover:text-cyan-300 transition-colors duration-300 tracking-tight block">
                              {cat.title}
                            </h3>
                            <div className="w-10 h-0.5 bg-cyan-400/80 mt-1 rounded-full" />
                          </div>
                        </div>

                        {/* Contents Section - Card 05 has distinct tool style with color brands */}
                        <div className="relative z-10">
                          {id === 'comp_05' ? (
                            <div className="flex gap-4">
                              <div className="space-y-2.5 w-1/2">
                                {cat.left?.map((tool: any, i: number) => {
                                  const highlight = searchQuery && tool.name.toLowerCase().includes(searchQuery.toLowerCase());
                                  return (
                                    <div key={i} className={`flex items-center gap-2 transition-all duration-200 ${highlight ? 'bg-cyan-950/20 p-1 border border-cyan-500/20 rounded-xl' : ''}`}>
                                      {getToolBrandIcon(tool.type)}
                                      <span className={`text-[11px] font-sans tracking-wide leading-tight ${highlight ? 'text-cyan-400 font-bold' : 'text-slate-350 group-hover:text-slate-200'}`}>
                                        {tool.name}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                              <div className="space-y-2.5 w-1/2">
                                {cat.right?.map((tool: any, i: number) => {
                                  const highlight = searchQuery && tool.name.toLowerCase().includes(searchQuery.toLowerCase());
                                  return (
                                    <div key={i} className={`flex items-center gap-2 transition-all duration-200 ${highlight ? 'bg-cyan-950/20 p-1 border border-cyan-500/20 rounded-xl' : ''}`}>
                                      {getToolBrandIcon(tool.type)}
                                      <span className={`text-[11px] font-sans tracking-wide leading-tight ${highlight ? 'text-cyan-400 font-bold' : 'text-slate-350 group-hover:text-slate-200'}`}>
                                        {tool.name}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            <div className="flex gap-4">
                              <ul className="space-y-1.5 w-1/2">
                                {cat.left?.map((item: any, i: number) => {
                                  const highlight = searchQuery && item.toLowerCase().includes(searchQuery.toLowerCase());
                                  return (
                                    <li key={i} className={`flex items-start gap-1.5 text-[11px] leading-tight transition-all duration-200 ${highlight ? 'text-cyan-400 font-bold scale-[1.01]' : 'text-slate-350 hover:text-slate-100'}`}>
                                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 font-bold text-[8px] mt-0.5 ${styles.checkCircle}`}>
                                        ✓
                                      </div>
                                      <span className="line-clamp-3">{item}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                              <ul className="space-y-1.5 w-1/2">
                                {cat.right?.map((item: any, i: number) => {
                                  const highlight = searchQuery && item.toLowerCase().includes(searchQuery.toLowerCase());
                                  return (
                                    <li key={i} className={`flex items-start gap-1.5 text-[11px] leading-tight transition-all duration-200 ${highlight ? 'text-cyan-400 font-bold scale-[1.01]' : 'text-slate-350 hover:text-slate-100'}`}>
                                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 font-bold text-[8px] mt-0.5 ${styles.checkCircle}`}>
                                        ✓
                                      </div>
                                      <span className="line-clamp-3">{item}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Competencies summary footer bar exactly matching design of Image 5 */}
        <div className="mt-20 bg-gradient-to-br from-slate-900/80 via-slate-950/95 to-slate-900/85 rounded-3xl p-8 sm:p-10 text-white text-left relative overflow-hidden shadow-2xl border border-cyan-500/20">
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-12">
            <div className="space-y-4 max-w-xl text-left flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-bold">
                  OVERVIEW SUMMARY
                </span>
                <div className="w-8 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                Integrity, Accurate & Trustworthy
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Berorientasi pada kualitas akurasi tertinggi, memiliki rekam jejak kerja kolaboratif dan adaptif dalam mengawal operasional infrastruktur transisi teknologi digital.
              </p>
            </div>
            
            <div className="text-xs font-mono bg-slate-950/90 border border-slate-800/80 p-6 rounded-2xl flex flex-col gap-3.5 min-w-[245px] text-left shrink-0 justify-center">
              <span className="flex items-center gap-3 text-slate-200">
                <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" /> 
                Berpengalaman 15+ TAHUN
              </span>
              <span className="flex items-center gap-3 text-slate-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" /> 
                Rekam Jejak K3 yang Unggul
              </span>
              <span className="flex items-center gap-3 text-slate-200">
                <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" /> 
                Kepemimpinan Sektor Utama
              </span>
              <span className="flex items-center gap-3 text-slate-200">
                <span className="w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_8px_rgba(244,114,182,0.8)]" /> 
                Portofolio IoT & Telemetry
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
