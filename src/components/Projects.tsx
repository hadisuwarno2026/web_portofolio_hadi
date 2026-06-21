import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Cpu,
  Monitor,
  ShieldCheck,
  Sliders,
  CheckCircle,
  Thermometer,
  Droplets,
  Activity,
  Briefcase,
  ExternalLink,
  Lock,
  Compass,
  FileCheck,
  Radio,
  Database,
  Globe,
  LineChart,
  Video,
  Key,
  Server,
  Flame,
  Search,
  Smartphone,
  CheckSquare,
  Network,
  Laptop,
  Map,
  Code
} from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'iot' | 'web' | 'security'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'iot') {
      return ['proj_02', 'proj_03', 'proj_04', 'proj_05'].includes(proj.id);
    }
    if (filter === 'web') {
      return ['proj_06', 'proj_07', 'proj_08'].includes(proj.id);
    }
    if (filter === 'security') {
      return ['proj_01', 'proj_03'].includes(proj.id);
    }
    return true;
  });

  const getFilterIcon = (type: string) => {
    switch (type) {
      case 'all':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'iot':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'web':
        return <Monitor className="w-4 h-4 text-blue-400" />;
      case 'security':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sliders className="w-4 h-4" />;
    }
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'proj_01':
        return <Monitor className="w-5 h-5 text-cyan-400" />;
      case 'proj_02':
        return <Radio className="w-5 h-5 text-cyan-400" />;
      case 'proj_03':
        return <Lock className="w-5 h-5 text-cyan-400" />;
      case 'proj_04':
        return <Thermometer className="w-5 h-5 text-cyan-400" />;
      case 'proj_05':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'proj_06':
        return <FileCheck className="w-5 h-5 text-cyan-400" />;
      case 'proj_07':
        return <LineChart className="w-5 h-5 text-cyan-400" />;
      case 'proj_08':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('lan')) return <Network className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    if (t.includes('cctv')) return <Video className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    if (t.includes('access') || t.includes('lock')) return <Key className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    if (t.includes('os') || t.includes('windows') || t.includes('linux')) return <Laptop className="w-3.5 h-3.5 text-cyan-400 shrink-0 text-cyan-300" />;
    
    if (t.includes('nodemcu') || t.includes('esp32') || t.includes('arduino') || t.includes('sensor')) {
      if (t.includes('arus') || t.includes('tegangan')) return <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      if (t.includes('door') || t.includes('magnetic')) return <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      if (t.includes('cable') || t.includes('continuity')) return <Server className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
      return <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    }
    
    if (t.includes('mqtt') || t.includes('http') || t.includes('proto')) return <Radio className="w-3.5 h-3.5 text-violet-400 shrink-0" />;
    if (t.includes('dashboard') || t.includes('real-time') || t.includes('realtime') || t.includes('viz') || t.includes('chart')) return <LineChart className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    if (t.includes('bell') || t.includes('buzzer') || t.includes('alarm') || t.includes('warning')) return <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0" />;
    if (t.includes('temp') || t.includes('dht')) return <Thermometer className="w-3.5 h-3.5 text-rose-400 shrink-0" />;
    if (t.includes('humid') || t.includes('droplet') || t.includes('sht')) return <Droplets className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
    if (t.includes('grafana') || t.includes('blynk')) return <Layers className="w-3.5 h-3.5 text-orange-400 shrink-0" />;
    
    if (t.includes('map') || t.includes('evacuation') || t.includes('route')) return <Map className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
    if (t.includes('simulati') || t.includes('emergency')) return <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse shrink-0" />;
    if (t.includes('script') || t.includes('code')) return <Code className="w-3.5 h-3.5 text-yellow-400 shrink-0" />;
    if (t.includes('spread') || t.includes('sheet') || t.includes('excel')) return <Database className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
    if (t.includes('cloud') || t.includes('drive') || t.includes('storage')) return <Server className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
    if (t.includes('web') || t.includes('dev') || t.includes('development') || t.includes('js') || t.includes('html') || t.includes('css')) return <Code className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    if (t.includes('blogger')) return <Globe className="w-3.5 h-3.5 text-orange-500 shrink-0" />;
    if (t.includes('seo')) return <Search className="w-3.5 h-3.5 text-teal-400 shrink-0" />;
    if (t.includes('responsive') || t.includes('mobile') || t.includes('app') || t.includes('design')) return <Smartphone className="w-3.5 h-3.5 text-purple-400 shrink-0" />;
    
    return <Layers className="w-3.5 h-3.5 text-slate-500 shrink-0" />;
  };

  const renderProjectVisual = (id: string, imageUrl?: string) => {
    switch (id) {
      case 'proj_01':
        return (
          <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-3 overflow-hidden font-mono text-[9px] w-full h-full select-none">
            {imageUrl && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="grid grid-cols-2 gap-1.5 h-full relative z-10">
              <div className="relative border border-slate-800/80 rounded bg-slate-900/70 p-1.5 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-slate-500 text-[7px]">
                  <span>CAM_01/MAIN</span>
                  <span className="flex items-center gap-0.5 text-rose-500 font-bold">
                    <span className="w-1 h-1 rounded-full bg-rose-500 animate-ping shrink-0" />
                    REC
                  </span>
                </div>
                <div className="h-7 flex items-center justify-center opacity-45">
                  <Video className="w-4 h-4 text-cyan-500 animate-pulse" />
                </div>
                <div className="text-[7px] text-slate-600">SENS: MOTION ACT</div>
              </div>
              
              <div className="relative border border-slate-800/80 rounded bg-slate-900/70 p-1.5 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-slate-500 text-[7px]">
                  <span>CAM_02/GATE</span>
                  <span className="text-emerald-400 font-bold">LIVE</span>
                </div>
                <div className="h-7 flex items-center justify-center opacity-45">
                  <Video className="w-4 h-4 text-cyan-500" />
                </div>
                <div className="text-[7px] text-slate-600">FPS: 30.00 // CHNL</div>
              </div>
              
              <div className="relative border border-slate-800/80 rounded bg-slate-900/70 p-1.5 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-slate-500 text-[7px]">
                  <span>ACCESS</span>
                  <span className="text-cyan-400 font-bold">SECURE</span>
                </div>
                <div className="h-7 flex items-center justify-center">
                  <Lock className="w-3.5 h-3.5 text-cyan-400/80 animate-pulse" />
                </div>
                <div className="text-[7px] text-cyan-500/70 text-center font-bold">DOOR LOCKED</div>
              </div>
              
              <div className="relative border border-slate-800/80 rounded bg-slate-950 p-1.5 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-slate-500 text-[7px]">
                  <span>NVR_MON</span>
                  <span className="text-cyan-400 font-bold">98%</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-slate-900 rounded overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded" style={{ width: '92%' }} />
                  </div>
                  <div className="h-1 bg-slate-900 rounded overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded" style={{ width: '84%' }} />
                  </div>
                </div>
                <div className="text-[7px] text-slate-500">54.1 FPS AVG</div>
              </div>
            </div>
          </div>
        );
        
      case 'proj_02':
        return (
          <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden font-mono text-[9px] text-slate-300 w-full h-full select-none">
            {imageUrl && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-1 text-slate-500 text-[8px] relative z-10">
              <span>TELEMETRY POWER MODULE</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                CONNECTED
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-1.5 py-1.5 relative z-10">
              <div className="bg-slate-900/90 border border-slate-800 rounded p-1 text-center">
                <span className="text-[7px] text-slate-500 block uppercase font-bold text-center">Voltage</span>
                <span className="text-cyan-400 font-black text-[11px] block mt-0.5">228.4</span>
                <span className="text-[6.5px] text-slate-600 block text-center">VOLTS AC</span>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 rounded p-1 text-center">
                <span className="text-[7px] text-slate-500 block uppercase font-bold text-center">Current</span>
                <span className="text-emerald-400 font-black text-[11px] block mt-0.5">12.45</span>
                <span className="text-[6.5px] text-slate-600 block text-center">AMP AC</span>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 rounded p-1 text-center">
                <span className="text-[7px] text-slate-500 block uppercase font-bold text-center">Power</span>
                <span className="text-indigo-400 font-black text-[11px] block mt-0.5">2840</span>
                <span className="text-[6.5px] text-slate-600 block text-center">WATTS</span>
              </div>
            </div>
            
            <div className="h-7.5 relative bg-slate-900/60 rounded border border-slate-800/50 overflow-hidden flex items-center relative z-10">
              <svg className="w-full h-full stroke-cyan-500/80 stroke-1 fill-none" viewBox="0 0 100 20">
                <path d="M0 10 Q 15 0, 30 10 T 60 10 T 90 10 T 100 10" className="animate-pulse" />
              </svg>
            </div>
            <div className="flex justify-between items-center text-[7px] text-slate-500 mt-1 relative z-10">
              <span>SITE: TOWER_A12</span>
              <span className="text-cyan-400">BATTERY: 100% OK</span>
            </div>
          </div>
        );
        
      case 'proj_03':
        return (
          <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden font-mono text-[9px] text-slate-300 w-full h-full select-none">
            {imageUrl && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-1 text-slate-500 text-[8px] relative z-10">
              <span>ANTITHEFT SITE SEC</span>
              <span className="text-cyan-400 font-semibold animate-pulse">SENSORS ON</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-1.5 my-1.5 relative z-10">
              <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800/80 px-2 py-1 rounded">
                <span className="text-slate-400 text-[8px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_#10b981]" />
                  MAGNETIC DOOR
                </span>
                <span className="text-emerald-400 font-bold text-[8px]">RESOLVED</span>
              </div>
              
              <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800/80 px-2 py-1 rounded">
                <span className="text-slate-400 text-[8px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_#10b981]" />
                  CABLE DETECTOR
                </span>
                <span className="text-emerald-400 font-bold text-[8px]">ACTIVE (100%)</span>
              </div>
  
              <div className="flex items-center justify-between bg-rose-950/45 border border-rose-900/40 px-2 py-1 rounded">
                <span className="text-rose-400 text-[8px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                  SIREN & TELEGRAM
                </span>
                <span className="text-rose-400 font-bold text-[8px]">ARMED</span>
              </div>
            </div>
            
            <div className="h-2 bg-slate-900 rounded-full overflow-hidden relative border border-slate-800 relative z-10">
              <div className="absolute top-0 bottom-0 left-0 bg-cyan-400/30 w-8 animate-pulse" />
            </div>
            
            <div className="flex justify-between items-center text-[7px] text-slate-500 mt-1 relative z-10">
              <span>SHELTER STATE: SECURE</span>
              <span className="text-emerald-400">TELEGRAM CHNL OK</span>
            </div>
          </div>
        );
        
      case 'proj_04':
        return (
          <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden font-mono text-[9px] text-slate-300 w-full h-full select-none">
            {imageUrl && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-1 text-slate-500 text-[8px] relative z-10">
              <span>SERVER ROOM / ISO 27001</span>
              <span className="bg-emerald-950/40 border border-emerald-900/50 px-1.5 py-0.5 rounded text-emerald-400 text-[7px] font-bold">
                SYS NORMAL
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 my-2 relative z-10">
              <div className="bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-800 rounded-lg p-2 text-center relative overflow-hidden">
                <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[7px] text-slate-500 block uppercase font-bold text-center">Temperature</span>
                <span className="text-rose-450 font-black text-[12px] block mt-1 tracking-tight">24.6 °C</span>
                <span className="text-[6.5px] text-slate-600 block text-center mt-0.5">LIMIT: 26.0°C</span>
              </div>
              
              <div className="bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-800 rounded-lg p-2 text-center relative overflow-hidden">
                <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[7px] text-slate-500 block uppercase font-bold text-center">Humidity</span>
                <span className="text-blue-400 font-black text-[12px] block mt-1 tracking-tight">48.7 %</span>
                <span className="text-[6.5px] text-slate-600 block text-center mt-0.5">LIMIT: 40-60%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-[7px] text-slate-500 mt-1 relative z-10">
              <span>DHT22/SHT31 SENS</span>
              <span className="text-emerald-400 font-bold">ALERT: NO ALERT</span>
            </div>
          </div>
        );
        
      case 'proj_05':
        return (
          <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-3 overflow-hidden font-mono text-[9px] text-slate-300 w-full h-full select-none">
            {imageUrl && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-0.5 text-slate-500 text-[8px] relative z-10">
              <span>LIVE EVACUATION SCHEMATIC</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                SIM_ACTIVE
              </span>
            </div>
            
            <div className="flex-1 relative my-1.5 bg-slate-950 border border-slate-900 rounded p-1 overflow-hidden flex items-center justify-center relative z-10">
              <svg className="w-full h-full stroke-emerald-500/50 stroke-1 fill-none" viewBox="0 0 120 60">
                <rect x="5" y="5" width="110" height="50" rx="3" className="stroke-slate-800/80" />
                <line x1="40" y1="5" x2="40" y2="40" className="stroke-slate-800" />
                <line x1="80" y1="20" x2="80" y2="55" className="stroke-slate-800" />
                <path d="M 15 25 L 60 25 L 60 55" className="stroke-emerald-400 stroke-1.5" />
                <path d="M 105 25 L 60 25" className="stroke-emerald-400 stroke-1.5" />
                <circle cx="60" cy="55" r="2.5" className="fill-emerald-500 animate-ping" />
                <text x="50" y="52" fill="#10b981" fontSize="5.5" fontWeight="bold">EXIT</text>
                <text x="10" y="14" fill="#4b5563" fontSize="5">SHELTER A</text>
                <text x="85" y="14" fill="#4b5563" fontSize="5">SHELTER B</text>
              </svg>
            </div>
            
            <div className="flex justify-between items-center text-[7px] text-slate-500 relative z-10">
              <span>ESP32 AUTO ROUTER</span>
              <span className="text-emerald-400 font-bold">READY</span>
            </div>
          </div>
        );
        
      case 'proj_06':
        return (
          <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden font-mono text-[9px] text-slate-300 w-full h-full select-none">
            {imageUrl && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-1 text-slate-500 text-[8px] relative z-10">
              <span>QHSE CHECKLIST ENGINE</span>
              <span className="text-cyan-400 font-bold">AUTO SYNC</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-1.5 my-1.5 relative z-10">
              <div className="bg-slate-900/95 border border-slate-800 rounded p-2 flex flex-col gap-1">
                <div className="flex justify-between text-[7px] text-slate-400 font-bold">
                  <span>INSPECTIONS COMPLETED:</span>
                  <span className="text-emerald-400">100% OK</span>
                </div>
                <div className="space-y-1 mt-1">
                  <div className="flex items-center gap-1.5 text-slate-300 text-[7.5px]">
                    <CheckSquare className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>Digital Inspection Form</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 text-[7.5px]">
                    <CheckSquare className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>Spreadsheet Sync Logs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-[7px] text-slate-500 relative z-10">
              <span>GOOGLE SCRIPT API</span>
              <span className="text-cyan-400">SHEETS RECORDED</span>
            </div>
          </div>
        );
        
      case 'proj_07':
        return (
          <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-3.5 overflow-hidden font-mono text-[9px] text-slate-300 w-full h-full select-none">
            {imageUrl && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-1 text-slate-500 text-[8px] relative z-10">
              <span>KPI EXECUTIVE TELEMETRY</span>
              <span className="text-indigo-400 font-bold">DATA INSIGHT</span>
            </div>
            
            <div className="space-y-2 py-1.5 flex-1 flex flex-col justify-center relative z-10">
              <div>
                <div className="flex justify-between text-[7px] text-slate-400 font-semibold">
                  <span>PRODUCTIVITY RATE</span>
                  <span className="text-cyan-400 font-bold">92.6%</span>
                </div>
                <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden border border-slate-800/40 mt-0.5">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full" style={{ width: '92.6%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-[7px] text-slate-400 font-semibold">
                  <span>ATTENDANCE RECORDED</span>
                  <span className="text-emerald-400 font-bold">98.1%</span>
                </div>
                <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden border border-slate-800/40 mt-0.5">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style={{ width: '98.1%' }} />
                </div>
              </div>
  
              <div>
                <div className="flex justify-between text-[7px] text-slate-400 font-semibold">
                  <span>TARGET ATTAINED</span>
                  <span className="text-pink-400 font-bold">104.3%</span>
                </div>
                <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden border border-slate-800/40 mt-0.5">
                  <div className="bg-gradient-to-r from-pink-500 to-indigo-400 h-full rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-[7px] text-slate-500 mt-1 relative z-10">
              <span>CHART.JS COMPLIANCE</span>
              <span className="text-indigo-400 font-bold">28 PROJS OK</span>
            </div>
          </div>
        );
        
      case 'proj_08':
        return (
          <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-3 overflow-hidden font-mono text-[9px] text-slate-300 w-full h-full select-none">
            {imageUrl && (
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-0.5 text-slate-500 text-[8px] relative z-10">
              <span>UMKM E-CATALOG PORTAL</span>
              <span className="text-amber-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            
            <div className="flex-1 my-1.5 border border-slate-800/60 rounded bg-slate-900/60 p-1 flex flex-col justify-between overflow-hidden relative z-10">
              <div className="flex items-center gap-1 border-b border-slate-800/40 pb-0.5 text-[6px] text-slate-500">
                <div className="w-1 h-1 rounded-full bg-red-500" />
                <div className="w-1 h-1 rounded-full bg-yellow-500" />
                <div className="w-1 h-1 rounded-full bg-green-500" />
                <span className="ml-1 opacity-70">natural-product.blogspot.com</span>
              </div>
              
              <div className="flex-1 flex gap-1 p-0.5 mt-1">
                <div className="w-1/2 border border-slate-800/80 rounded bg-slate-950/80 p-1 flex flex-col justify-between">
                  <div className="h-5 bg-gradient-to-tr from-amber-900/20 to-emerald-900/20 rounded" />
                  <span className="text-[5.5px] text-slate-300 font-bold block mt-1 uppercase text-center">ORGANIC SOAP</span>
                </div>
                
                <div className="w-1/2 border border-slate-800/80 rounded bg-slate-950/80 p-1 flex flex-col justify-between">
                  <div className="h-5 bg-gradient-to-tr from-cyan-900/20 to-blue-900/20 rounded" />
                  <span className="text-[5.5px] text-slate-300 font-bold block mt-1 uppercase text-center">HERBAL TEA</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-[7px] text-slate-500 relative z-10">
              <span>BLOGGER TEMPLATING</span>
              <span className="text-teal-400">100% RESPONSIVE</span>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  const getProjectBadge = (id: string) => {
    switch (id) {
      case 'proj_01':
        return 'ASSET / OFFICE SECURITY';
      case 'proj_02':
        return 'REALTIME POWER MONITORING';
      case 'proj_03':
        return 'ANTI-THEFT INFRASTRUCTURE';
      case 'proj_04':
        return 'ENVIRONMENT SYSTEM';
      case 'proj_05':
        return 'QHSE / EMERGENCY SYSTEM';
      case 'proj_06':
        return 'QHSE CHECKLIST MONITOR';
      case 'proj_07':
        return 'KPI DATA DASHBOARD';
      case 'proj_08':
        return 'WEB ONLINE E-CATALOG';
      default:
        return 'DIGITAL SOLUTIONS';
    }
  };

  return (
    <section
      id="proyek"
      className="py-14 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background glowing line patterns and grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e903_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e903_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching other sections' style exactly */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 font-display uppercase">
            DIGITAL PROJECTS & SYSTEMS
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Solusi Digital, IoT, dan Sistem Informasi untuk Mendukung Operasional yang Efektif & Efisien.
          </p>
        </div>

        {/* Filter Tab bar buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-8">
          {(['all', 'iot', 'web', 'security'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold font-mono tracking-widest transition-all duration-300 cursor-pointer border ${
                filter === type
                  ? 'bg-cyan-500 border-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {getFilterIcon(type)}
              <span className="uppercase">
                {type === 'all'
                  ? 'SEMUA PROYEK'
                  : type === 'iot'
                  ? 'IOT SYSTEMS'
                  : type === 'web'
                  ? 'WEB & DATA'
                  : 'MANAGE & SECURITY'}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic 4 Column Grid of custom dashboard-mockup cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col justify-between rounded-3xl bg-slate-900/45 md:bg-slate-950/75 backdrop-blur-md border border-cyan-500/10 hover:border-cyan-400/45 hover:shadow-[0_0_22px_rgba(6,182,212,0.06)] transition-all duration-500 overflow-hidden group min-h-[445px]"
              >
                {/* Upper card part: Grid contents */}
                <div className="p-5.5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Header: Project Badge and Title */}
                    <div className="flex items-start gap-3 border-b border-slate-800/60 pb-3">
                      <div className="flex shrink-0 items-center justify-center font-mono font-black text-[13px] text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 w-8.5 h-8.5 rounded-xl">
                        {proj.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[8px] font-mono font-bold text-cyan-400/80 uppercase tracking-widest">
                          {getProjectBadge(proj.id)}
                        </span>
                        <h3 className="text-[13px] sm:text-[14px] font-extrabold text-white leading-snug group-hover:text-cyan-300 transition-colors duration-300 tracking-tight block mt-0.5 min-h-[38px] line-clamp-2">
                          {proj.title}
                        </h3>
                      </div>
                    </div>

                    {/* Highly polished dynamic Visual screen panel / mockup */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl bg-slate-950 border border-slate-800/85 overflow-hidden flex items-center justify-center shadow-lg group-hover:border-cyan-500/20 transition-all duration-500">
                      {renderProjectVisual(proj.id, proj.imageUrl)}
                    </div>

                    {/* Project descriptive text */}
                    <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans line-clamp-2 select-none">
                      {proj.description}
                    </p>

                    {/* Bullet list of features inside card */}
                    <ul className="space-y-1.5 border-t border-slate-900/55 pt-3.5">
                      {proj.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-slate-300 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] shrink-0 mt-1.5" />
                          <span className="line-clamp-2">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom card part: Tech stack tagging full-screen row */}
                <div className="bg-slate-950/90 border-t border-slate-900/80 px-5.5 py-4 flex flex-col gap-2">
                  <span className="text-[9px] font-mono font-black text-slate-500 uppercase tracking-widest block">
                    TEKNOLOGI:
                  </span>
                  
                  {/* Technology array lists dynamically paired with images */}
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.items.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-tight font-black px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800/85 text-slate-300 hover:text-white hover:border-cyan-400/30 transition-colors"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom regional milestone metrics footer */}
        <div className="mt-20 border border-cyan-500/10 bg-slate-900/40 rounded-3xl p-6 md:p-8 relative overflow-hidden backdrop-blur-md">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e902_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e902_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-400 to-indigo-500" />
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 relative z-10 px-2 lg:px-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <Briefcase className="w-7 h-7" />
              </div>
              <div className="text-left font-sans">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>REGIONAL MILESTONE</span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-white tracking-wide mt-1">
                  Integritas Sistem & Akurasi Data Berkelanjutan
                </h4>
              </div>
            </div>

            {/* Horizontal metrics list matching user design style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-left font-mono border-t lg:border-t-0 border-slate-800/60 pt-5 lg:pt-0">
              <div className="space-y-1">
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider font-bold">EXPERIENCE</span>
                <span className="block text-cyan-400 font-black text-sm tracking-tight">15+ YEARS</span>
              </div>
              <div className="space-y-1">
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider font-bold">PROJECT VOLUME</span>
                <span className="block text-white font-black text-sm tracking-tight">8 ACTIVE SYSS</span>
              </div>
              <div className="space-y-1">
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider font-bold">TELECOM SITES</span>
                <span className="block text-indigo-400 font-black text-sm tracking-tight">TBG ASSETS</span>
              </div>
              <div className="space-y-1">
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider font-bold">K3 REGULATION</span>
                <span className="block text-emerald-400 font-black text-sm tracking-tight">AK3U CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
