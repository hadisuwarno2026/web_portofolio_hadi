import { useState, useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Competencies from './components/Competencies';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme_preference');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme_preference', darkMode ? 'dark' : 'light');
    
    // For this epic portfolio, we enforce dark dark-blue slate base styles in both modes,
    // which looks absolutely top-tier and aligns perfectly with the visual representation of Hadi Suwarno.
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('dark'); // Force dark tech blueprint experience for maximum aesthetic appeal
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased transition-colors duration-300">
      
      {/* Dynamic Header (Navbar, mobile navigation, theme toggling) */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Single Page Content - Structured according to image numbers 1 to 7 */}
      <main className="relative">
        
        {/* Section 1 (Image 1): Profil Utama / Hero Intro Section (Home) */}
        <Hero />

        {/* Section 1.5: Profil Lengkap / Tentang Saya */}
        <About />

        {/* Section 2 (Image 2): Kompetensi Utama / Core Competencies */}
        <Competencies />

        {/* Section 3 (Image 3): Pengalaman Kerja / Experience */}
        <Experience />

        {/* Section 4 (Image 4): Portofolio Proyek */}
        <Projects />

        {/* Section 5 (Image 5): Sertifikasi / Certifications */}
        <Certifications />

        {/* Section 6 (Image 6): Pendidikan / Education */}
        <Education />

        {/* Section 7 (Image 7): Form Kontak & Media Sosial */}
        <Contact />

      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
