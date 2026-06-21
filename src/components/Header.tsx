import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Briefcase, Home, User, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profil');

  const navItems = [
    { name: 'Home', id: 'profil' },
    { name: 'Profile', id: 'tentang-saya' },
    { name: 'Portofolio', id: 'pengalaman' },
    { name: 'Kontak', id: 'kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Proximity-based active section tracking
      const scrollPosition = window.scrollY + 160; // offsets footer or top bar
      const sections = navItems.map((item) => document.getElementById(item.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const getIconForId = (id: string) => {
    switch (id) {
      case 'profil':
        return Home;
      case 'tentang-saya':
        return User;
      case 'pengalaman':
        return Briefcase;
      case 'kontak':
        return Mail;
      default:
        return Home;
    }
  };

  return (
    <>
      <header
        id="main-app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-900/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <button
              onClick={() => scrollToSection('profil')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <Briefcase className="w-5 h-5 font-bold" />
              </div>
              <div>
                <span className="block font-bold text-lg text-white tracking-tight leading-none">
                  Hadi Suwarno
                </span>
                <span className="block text-[11px] font-mono text-cyan-400 mt-0.5 font-medium">
                  Engineering & Data Professional
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/50 p-1 rounded-xl border border-slate-800/80">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-250 cursor-pointer rounded-lg ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-slate-800/90 rounded-lg -z-10 border border-slate-700/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Utility Buttons: Theme toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-full text-slate-400 hover:bg-slate-900 transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-400" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Bottom Floating Nav Dock */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm">
        <div className="bg-slate-950/90 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-2 shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex justify-between items-center relative">
          {navItems.map((item) => {
            const Icon = getIconForId(item.id);
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex-1 flex flex-col items-center justify-center gap-1 py-1.5 relative rounded-xl transition-all duration-300 cursor-pointer"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeBottomNav"
                    className="absolute inset-0 bg-cyan-500/10 rounded-xl border border-cyan-500/20 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <Icon
                  className={`w-4.5 h-4.5 transition-transform duration-300 ${
                    isActive ? 'text-cyan-400 scale-110 drop-shadow-[0_0_6px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-white'
                  }`}
                />
                <span
                  className={`text-[9px] font-mono font-bold tracking-wider uppercase leading-none mt-1 transition-colors ${
                    isActive ? 'text-cyan-400 font-extrabold' : 'text-slate-500'
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
