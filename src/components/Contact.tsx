import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
  MessageSquare,
  Sparkles,
  Server
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ status: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    // Basic Validation Check
    if (!formData.name || !formData.email || !formData.message) {
      setLoading(false);
      setFeedback({
        status: 'error',
        message: 'Mohon isi semua bidang formulir yang wajib menandai bintang (*)'
      });
      return;
    }

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setFeedback({
        status: 'success',
        message: 'Terima kasih! Pesan Anda telah terkirim secara virtual dan disimpan di log lokal.'
      });

      // Save to localStorage as a message log
      const currentLogs = JSON.parse(localStorage.getItem('messages_log') || '[]');
      const newLog = { ...formData, timestamp: new Date().toISOString() };
      localStorage.setItem('messages_log', JSON.stringify([...currentLogs, newLog]));

      // Clear Form state
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section
      id="kontak"
      className="py-14 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background blueprint aesthetics */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-950/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Title exactly matching header standard */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 font-display">
            GET IN TOUCH
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Mari hubungkan keahlian saya dengan tantangan proyek besar Anda berikutnya. Silakan sampaikan pesan kerja sama maupun penawaran kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Methods Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl h-full flex flex-col justify-between relative"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-display">
                  Informasi Saluran Kerja
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
                  Tersedia untuk peluang kerja penuh waktu, konsultasi pengembangan sistem digital/IoT, penasihat pendukung admin proyek regional, dan manajemen logistik data aset berharga tinggi.
                </p>

                {/* Contact items lists */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-950 border border-slate-805 text-cyan-400 rounded-xl">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                        E-MAIL RESMI
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-950 border border-slate-805 text-cyan-400 rounded-xl">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                        SALURAN WA / TELEPON
                      </span>
                      <a
                        href="https://wa.me/6285248878884"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-950 border border-slate-805 text-cyan-400 rounded-xl">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                        DOMISILI UTAMA
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white leading-normal">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Integration */}
              <div className="mt-12 pt-6 border-t border-slate-800">
                <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">
                  IKUTI MEDIA SOSIAL PORTFOLIO
                </span>
                
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://linkedin.com/in/hadi-suwarno-2026best"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:border-cyan-500/35 transition-all cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    LINKEDIN PROFILE
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:border-cyan-500/35 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-white" />
                    GITHUB PORTFOLIO
                  </a>
                  <a
                    href="https://wa.me/6285248878884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider bg-slate-950 hover:bg-emerald-950/25 text-emerald-400 border border-slate-800 hover:border-emerald-500/35 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    WHATSAPP DIRECT CHAT
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Interactive Message Submission Form */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl h-full flex flex-col justify-between"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 font-display">
                Kirim Formulir Kontak
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 text-left">
                    <label className="block text-xs font-bold text-slate-400 font-mono">
                      NAMA LENGKAP <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      className="block w-full border border-slate-800 rounded-xl bg-slate-950 text-white px-4 py-3 text-xs sm:text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="block text-xs font-bold text-slate-400 font-mono">
                      EMAIL KOMUNIKASI <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="block w-full border border-slate-800 rounded-xl bg-slate-950 text-white px-4 py-3 text-xs sm:text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-400 font-mono">
                    SUBJEK PEMBAHASAN
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Kerja Sama Proyek, Konsultasi Sistem, dll..."
                    className="block w-full border border-slate-800 rounded-xl bg-slate-950 text-white px-4 py-3 text-xs sm:text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-400 font-mono">
                    ISI PESAN / DETAIL TUGAS <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan spesifikasi detail pesan atau konsultasi Anda..."
                    className="block w-full border border-slate-800 rounded-xl bg-slate-950 text-white px-4 py-3 text-xs sm:text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-mono resize-none"
                  />
                </div>

                {/* Submitting Status Alerts */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`flex items-start gap-2.5 p-4 rounded-xl text-xs border ${
                        feedback.status === 'success'
                          ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-400'
                          : 'bg-rose-950/20 border-rose-900/50 text-rose-450'
                      }`}
                    >
                      {feedback.status === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-450 mt-0.5" />
                      )}
                      <span className="leading-normal font-semibold font-mono text-left">{feedback.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-widest font-mono uppercase shadow-md hover:shadow-cyan-500/20 disabled:opacity-75 transition-all cursor-pointer border border-blue-400/30"
                >
                  {loading ? (
                    'SEDANG MENGIRIM KELUARAN...'
                  ) : (
                    <>
                      KIRIM FORMULIR KONTAK
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
