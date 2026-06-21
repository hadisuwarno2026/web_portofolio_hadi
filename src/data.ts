import { Project, Education, Certification, WorkExperience, CompetencyCategory } from './types';

export const PERSONAL_INFO = {
  name: "Hadi Suwarno",
  title: "Asset Data Specialist | Project Support | IoT Developer | Engineering Professional",
  experienceYears: "15+",
  bio: "Berpengalaman lebih dari 15 tahun di bidang telekomunikasi, asset management, project support, engineering, data management, dan pengembangan sistem digital termasuk solusi berbasis IoT dan aplikasi web.",
  quote: "Building Reliable Systems Through Data, Technology & Innovation",
  email: "hadi.suwarno84@gmail.com",
  phone: "0852 4887 8884",
  location: "Balikpapan, Kalimantan Timur, Indonesia",
  pillars: [
    {
      title: "Telecommunications & Infrastructure",
      subtitle: "Infrastruktur & Operasional",
      icon: "Radio"
    },
    {
      title: "Asset Management",
      subtitle: "Data Aset & Analisis",
      icon: "Database"
    },
    {
      title: "Data Analytics",
      subtitle: "KPI Monitoring & Reporting",
      icon: "BarChart3"
    },
    {
      title: "IoT Systems",
      subtitle: "ESP32, NodeMCU",
      icon: "Cpu"
    },
    {
      title: "Web Development",
      subtitle: "HTML, CSS, JS, Bootstrap",
      icon: "Code2"
    }
  ],
  highlights: [
    {
      title: "THE BEST EMPLOYEE 2018",
      desc: "PT Tower Bersama Infrastructure Tbk"
    },
    {
      title: "KPI ACHIEVEMENT 100%",
      desc: "Consistent Performance"
    },
    {
      title: "HIGHLY SKILLED",
      desc: "Project Coordination, Data Management, Process Improvement"
    },
    {
      title: "TEAM COLLABORATION",
      desc: "Strong Communication, Stakeholder Management, Continuous Improvement"
    },
    {
      title: "SAFETY & QUALITY",
      desc: "Berkomitmen pada K3, Kualitas, dan Kepuasan Pelanggan"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "proj_01",
    number: "01",
    title: "Smart Office & Security System Integration",
    description: "Integrasi sistem keamanan internal untuk mendukung pemantauan dan pengelolaan operasional kantor secara tersentralisasi dan aman.",
    bullets: [
      "CCTV Monitoring untuk pengawasan real-time 24/7.",
      "Smart Door Lock untuk pembatasan hak akses ruangan.",
      "Asset Management untuk pelacakan fisik aset kantor secara komprehensif.",
      "LAN Infrastructure sebagai tulang punggung komunikasi data cepat.",
      "Windows/Linux Administration untuk pengelolaan server lokal."
    ],
    technologies: {
      category: "Teknologi",
      items: ["LAN", "CCTV IP/Analog", "Smart Access Control", "Windows/Linux OS"]
    },
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj_02",
    number: "02",
    title: "IoT Tower Power Monitoring System",
    description: "Sistem monitoring konsumsi daya & tegangan listrik site telekomunikasi secara real-time untuk kestabilan suplai daya utama & cadangan (baterai/genset).",
    bullets: [
      "Pemantauan parameter tegangan (Voltage) & arus listrik (Current) secara presisi.",
      "Real-Time Dashboard dengan grafik performa dinamis.",
      "Protokol MQTT & HTTP untuk transmisi data hemat bandwidth.",
      "Backup Power Monitoring untuk mendeteksi kapasitas penyimpanan baterai darurat."
    ],
    technologies: {
      category: "Teknologi",
      items: ["NodeMCU/ESP32", "Sensor Arus/Tegangan (AC/DC)", "MQTT & HTTP Proto", "Real-time Dashboard"]
    },
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj_03",
    number: "03",
    title: "IoT Tower Security & Anti-Theft System",
    description: "Sistem deteksi dini tindak vandalisme maupun pencurian kabel/aset di menara telekomunikasi mandiri dengan notifikasi instan.",
    bullets: [
      "Anti-Theft Detection dengan sensor getar dan sensor gyro terkalibrasi.",
      "Door Sensor untuk memantau status pintu shelter (terbuka/tertutup secara paksa).",
      "Cable Cut Detection terintegrasi untuk mendeteksi putusnya kabel tembaga/feeder.",
      "Notifikasi instan melalui alarm lokal (Buzzer/Sirine) dan SMS/Telegram Gateway."
    ],
    technologies: {
      category: "Teknologi",
      items: ["ESP32/Arduino", "Magnetic Door Sensor", "Cable Continuity Sensor", "Buzzer/Alarm Notification"]
    },
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj_04",
    number: "04",
    title: "IoT Server Room Temp & Humidity Monitoring",
    description: "Monitoring suhu dan kelembaban ruang server secara real-time demi mematuhi ISO 27001 dan menjaga operasional perangkat jaringan.",
    bullets: [
      "Environment Monitoring yang selaras dengan standar operasional ISO 27001.",
      "Sensor suhu & kelembaban presisi tinggi untuk mencegah overheat.",
      "Integrasi visualisasi dashboard interaktif menggunakan Grafana.",
      "Real-Time Alert System untuk pemberitahuan anomali suhu seketika."
    ],
    technologies: {
      category: "Teknologi",
      items: ["ESP32/NodeMCU", "DHT22 / SHT31 Sensors", "Grafana / Blynk Dashboard", "MQTT Protocol"]
    },
    metrics: [
      { label: "Suhu Rata-rata", value: "24.6 °C" },
      { label: "Kelembaban", value: "48.7 %" },
      { label: "Status Alert", value: "Normal / No Alert" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj_05",
    number: "05",
    title: "IoT QHSE Evacuation Map & Simulation System",
    description: "Denah evakuasi digital interaktif dengan kemampuan simulasi kondisi darurat untuk mendukung program keselamatan kerja (HSE) perusahaan.",
    bullets: [
      "Interactive Evacuation Map untuk visualisasi arah penyelamatan diri.",
      "Emergency Simulation untuk simulasi skenario bencana alam/kebakaran.",
      "Dashboard Monitoring terpusat untuk memantau status darurat secara real-time.",
      "Integrasi sensor ESP32 untuk mendeteksi rute aman secara otomatis."
    ],
    technologies: {
      category: "Teknologi",
      items: ["ESP32", "JavaScript (ES6)", "HTML5 & CSS3", "Bootstrap", "Google Spreadsheet"]
    },
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj_06",
    number: "06",
    title: "QHSE Checklist & Documentation System",
    description: "Aplikasi inspeksi dan dokumentasi K3 (QHSE) berbasis web untuk pelaporan lapangan secara paperless dan penyimpanan data yang terintegrasi.",
    bullets: [
      "Digital Inspection Form untuk mempermudah pendaftaran temuan bahaya.",
      "Google Apps Script sebagai logic engine otomatisasi dokumen.",
      "Google Spreadsheet sebagai database penyimpanan data aman.",
      "Cloud Storage terintegrasi untuk menyimpan bukti foto secara rapi."
    ],
    technologies: {
      category: "Teknologi",
      items: ["Web Development", "Google Apps Script", "Google Spreadsheet", "Cloud Storage"]
    },
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj_07",
    number: "07",
    title: "KPI Monitoring Dashboard",
    description: "Dashboard berbasis web untuk memantau produktivitas, pencapaian target, dan kehadiran karyawan secara real-time.",
    bullets: [
      "Employee Performance Dashboard dengan grafik tren bulanan.",
      "Attendance Monitoring otomatis dengan tracking waktu masuk kerja.",
      "Data Visualization interaktif untuk evaluasi kinerja divisi.",
      "Real-Time Analytics untuk mempermudah proses evaluasi management senior."
    ],
    technologies: {
      category: "Teknologi",
      items: ["Web Development", "Data Visualization", "Real-time Database", "Chart.js / ApexCharts"]
    },
    metrics: [
      { label: "Productivity Rate", value: "92.6%" },
      { label: "Attendance Rate", value: "98.1%" },
      { label: "Target Achievement", value: "104.3%" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj_08",
    number: "08",
    title: "Website Development for SMEs (UMKM)",
    description: "Website responsif bagi pelaku usaha kecil menengah (UMKM) untuk menyajikan katalog produk dan form pesanan online.",
    bullets: [
      "Blogger Platform custom domain untuk mengurangi biaya infrastruktur.",
      "Product Catalog interaktif untuk memamerkan spesifikasi produk.",
      "Online Order Form yang terhubung langsung ke WhatsApp penjual.",
      "Optimasi SEO agar website mudah ditemukan di Google."
    ],
    technologies: {
      category: "Teknologi",
      items: ["Blogger Platform", "HTML5 & CSS3", "SEO Optimization", "Responsive Design"]
    },
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

export const EDUCATION_INFO: Education = {
  university: "Universitas Mulia Balikpapan",
  major: "Teknik Informatika (S1)",
  degree: "Strata 1 (S1)",
  gpa: "3.61 / 4.00",
  gradYear: "2022",
  thesisTitle: "Monitoring Tegangan dan Arus Listrik pada ACPDB Menggunakan NodeMCU ESP32 Berbasis Web",
  features: [
    "Pendidikan Berkualitas Berbasis Teknologi & Inovasi",
    "Kompetensi Akademik Fokus pada Pengembangan Sistem & IoT",
    "Berorientasi Solusi Analitis, Kreatif, dan Berpikir Sistematis",
    "Siap Berkontribusi untuk Mendukung Inovasi dan Kemajuan Perusahaan"
  ]
};

export const CERTIFICATIONS: Certification[] = [
  // Technical
  {
    id: "cert_01",
    title: "Ahli Keselamatan dan Kesehatan Kerja Umum (AK3U)",
    org: "KEMNAKER RI",
    description: "Sertifikasi resmi dari Kementerian Ketenagakerjaan Republik Indonesia sebagai bukti kompetensi pengawasan K3 secara menyeluruh.",
    type: "technical",
    statusLabel: "Sertifikasi Resmi"
  },
  {
    id: "cert_02",
    title: "Cisco Certified Network Associate (CCNA)",
    org: "Cisco Networking Academy",
    description: "Sertifikasi internasional untuk membuktikan keahlian dalam instalasi, konfigurasi, operasi, dan troubleshooting jaringan berskala medium.",
    type: "technical",
    statusLabel: "International Certification"
  },
  {
    id: "cert_03",
    title: "Dicoding - Dasar Jaringan Komputer",
    org: "Dicoding Indonesia",
    description: "Sertifikasi kompetensi teori dan praktik dasar jaringan komputer, model referensi TCP/IP, routing, switching, dan transmisi data.",
    type: "technical",
    statusLabel: "Verified Certificate"
  },
  {
    id: "cert_04",
    title: "Dicoding - Belajar Dasar DevOps",
    org: "Dicoding Indonesia",
    description: "Sertifikasi kompetensi mengenai implementasi CI/CD, deployment pipelines, infrastructure as code, containerization, dan automation.",
    type: "technical",
    statusLabel: "Verified Certificate"
  },
  // Workplace Safety & Competencies
  {
    id: "cert_05",
    title: "Working at Height (Keselamatan Kerja di Ketinggian)",
    org: "Asosiasi / Lembaga K3",
    description: "Sertifikasi keselamatan kerja khusus untuk melaksanakan tugas pemeliharaan infrastruktur di ketinggian secara aman.",
    type: "soft",
    statusLabel: "Safety Certification"
  },
  {
    id: "cert_06",
    title: "Service Excellence Capability",
    org: "Internal Certification",
    description: "Kompetensi tinggi dalam menyajikan pelayanan prima kepada klien, vendor, dan tim operasional internal.",
    type: "soft",
    statusLabel: "Professional Certification"
  },
  {
    id: "cert_07",
    title: "Maximizing Personal Productivity",
    org: "Leadership Institute",
    description: "Sertifikasi efisiensi kerja pribadi untuk meningkatkan output, fokus harian, dan manajemen waktu proyek.",
    type: "soft",
    statusLabel: "Personal Development"
  },
  {
    id: "cert_08",
    title: "Creative Problem Solver",
    org: "Professional Development Org",
    description: "Metode pemecahan masalah secara kreatif, berpikir lateral, dan merancang perbaikan sistem terukur.",
    type: "soft",
    statusLabel: "Skill Enhancement"
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "exp_01",
    company: "PT TOWER BERSAMA INFRASTRUCTURE, TBK - TOWER BERSAMA GROUP",
    role: "ASSET DATA",
    period: "Desember 2012 - Juni 2025",
    location: "Balikpapan, Kalimantan Timur",
    bullets: [
      "Mengelola siklus hidup data aset menara telekomunikasi mencakup input data baru, validasi akurasi, verifikasi fisik, pembaruan records, dan pengarsipan digital.",
      "Mengolah, menganalisis, dan memvisualisasikan data spek aset guna mendukung kebutuhan operasional harian serta perumusan strategi divisi.",
      "Menyusun laporan aset berkala, indikator kinerja operasional (KPI), dan presentasi analitik bagi stakeholder internal.",
      "Berkoordinasi secara aktif dengan tim lintas departemen dan vendor luar guna memelihara integritas database dan kepatuhan standar perusahaan.",
      "Menyokong operasional manajemen proyek melalui pendokumentasian yang komprehensif serta penelusuran status pengerjaan proyek di regional."
    ],
    achievements: [
      "Menjaga tingkat akurasi dan keutuhan data aset bernilai tinggi secara konsisten selama lebih dari 12 tahun.",
      "Meraih predikat prestisius 'The Best Employee' pada tahun 2018 sebagai pengakuan atas dedikasi dan akurasi kerja.",
      "Secara konsisten mencapai realisasi KPI 100% dan memangkas waktu pelaporan berkat otomatisasi sistem data spreadsheet."
    ]
  },
  {
    id: "exp_02",
    company: "PT TOWER BERSAMA INFRASTRUCTURE, TBK - TOWER BERSAMA GROUP",
    role: "MAINTENANCE FIELD OFFICER",
    period: "April 2011 - Desember 2012",
    location: "Balikpapan, Kalimantan Timur",
    bullets: [
      "Menyelenggarakan tindakan pemeliharaan preventif (rutin) dan korektif (perbaikan darurat) sistem kelistrikan, struktur menara, penyejuk udara (AC), baterai backup, dan genset darurat.",
      "Mengerjakan inspeksi lapangan, diagnosa kerusakan teknis, dan perbaikan crash site untuk mengamankan keandalan jaringan.",
      "Mendokumentasikan seluruh temuan lapangan serta merancang laporan pemeliharaan teknis pasca-perbaikan.",
      "Bekerjasama erat dengan tim internal, vendor listrik lokal, dan penyedia transmisi dalam mengatasi downtime site darurat.",
      "Mengawal kepatuhan tim di area kerja terhadap standar keselamatan & keselamatan kerja (K3) serta instruksi kerja standar (SOP)."
    ],
    achievements: [
      "Mendongkrak indeks kualitas performa site binaan dari 88.4% menjadi 99.81% dalam tempo kurang dari setahun.",
      "Sukses menekan angka downtime site secara signifikan melalui pemeriksaan preventif terjadwal yang proaktif.",
      "Menghemat biaya pemeliharaan korektif berkat deteksi dini anomali kelistrikan sebelum terjadi kerusakan fatal."
    ]
  },
  {
    id: "exp_03",
    company: "MNC SKY VISION",
    role: "ENGINEERING",
    period: "Agustus 2008 - November 2010",
    location: "Banjarmasin, Kalimantan Selatan",
    bullets: [
      "Mengatur jadwal penugasan regu teknisi lapangan dan memecahkan perihal teknis demi menjaga kelangsungan penyiaran siaran satelit.",
      "Menggelar perakitan fisik, perakitan kabel feed, konfigurasi modem, tracking satelit, dan commissioning perangkat distribusi siaran.",
      "Memantau performa harian perangkat receiver serta melaksanakan pengawasan lapangan selama perbaikan infrastruktur berlangsung.",
      "Menghasilkan dokumentasi teknis, laporan kemajuan proyek, dan lembar serah terima pekerjaan secara berkala."
    ],
    achievements: [
      "Meringankan kendala distribusi siaran satelit dengan pencapaian KPI penyelesaian keluhan 100%.",
      "Mengoptimasikan proses instalasi sehingga pengerjaan rampung tepat jadwal dengan kepuasan pelanggan maksimum.",
      "Menjamin stabilitas penerimaan sinyal parabola di berbagai titik strategis instansi."
    ]
  },
  {
    id: "exp_04",
    company: "PT HARIFF DAYA TUNGGAL ENGINEERING",
    role: "PROJECT ENGINEERING",
    period: "Januari 2007 - Juni 2008",
    location: "Banjarmasin, Kalimantan Selatan",
    bullets: [
      "Mengerjakan instalasi peralatan telekomunikasi broadband nirkabel dan pengujian integrasi sistem catu daya (Power System).",
      "Mendampingi vendor dan tim sub-kontraktor untuk memastikan standar kelayakan unit sesuai parameter prinsipal.",
      "Menjalankan testing & commissioning perangkat transmisi radio dan monitoring link stability.",
      "Menyusun dokumentasi uji terima proyek (Acceptance Test Procedure) untuk serah terima bisnis yang legal."
    ],
    achievements: [
      "Menyelesaikan rangkaian implementasi proyek BTS broadband nirkabel tepat waktu dan sesuai spesifikasi mutu teknis.",
      "Terbukti andal dalam menyusun laporan teknis yang rapi sehingga mempercepat proses penagihan proyek."
    ]
  }
];

export const COMPETENCIES: CompetencyCategory[] = [
  {
    id: "comp_01",
    title: "Manajemen Proyek & Administrasi Operasional",
    items: [
      "Project Support & Coordination",
      "Project Lifecycle Management",
      "Administrative Support",
      "Project Documentation & Control",
      "Office Administration & Data Entry",
      "Filing & Documentation Systems",
      "Stakeholder Coordination",
      "Operational Reporting",
      "Standard Operating Procedure (SOP)"
    ]
  },
  {
    id: "comp_02",
    title: "Pengelolaan Data & Analisis Bisnis",
    items: [
      "Data Processing & Integrity",
      "Data Analysis & Presentation",
      "Data Verification & Quality Review",
      "KPI & Performance Reporting",
      "Interactive Dashboard Reporting",
      "Data Visualization",
      "Asset Lifetime Management",
      "Database Administration"
    ]
  },
  {
    id: "comp_03",
    title: "Pengembangan Sistem Digital & IoT",
    items: [
      "IoT Development (ESP32, NodeMCU)",
      "Sensor Integration (Voltage/Current, SHT/DHT, Gyro)",
      "Web Development (HTML, CSS, JS, Bootstrap)",
      "Google Apps Script Automation",
      "Google Spreadsheet Database Configuration",
      "Interactive Dashboard Monitoring",
      "Blogger Custom CMS Integrations"
    ]
  },
  {
    id: "comp_04",
    title: "Infrastruktur IT & Rekayasa Telekomunikasi",
    items: [
      "Telecommunication Site Engineering",
      "Broadband Radio & Microwave Systems",
      "Network & Server Administration",
      "CCTV Integrity & Smart Door Access Lock",
      "Sistem Catu Daya & AC Backups",
      "Technical Troubleshooting & Diagnostics",
      "PC Hardware & Software Repair",
      "Windows & Linux OS Configuration"
    ]
  },
  {
    id: "comp_05",
    title: "Perangkat Lunak & Tools Produktivitas",
    items: [
      "Microsoft Excel (Advanced: Formula, Pivot, VLOOKUP)",
      "Microsoft Word & PowerPoint Design",
      "Microsoft Outlook & Collaborative Mailing",
      "Google Spreadsheet & GSuite Ecosystem",
      "Google Apps Script Editor",
      "Grafana & Blynk Dashboards"
    ]
  },
  {
    id: "comp_06",
    title: "Kemampuan Interpersonal & Kepemimpinan",
    items: [
      "Teamwork & Multi-Functional Collaboration",
      "Leadership in Field Operations",
      "Stakeholder & Client Management",
      "Active Listening & Precise Communication",
      "Customer Service Orientation",
      "Continuous Improvement Driven"
    ]
  },
  {
    id: "comp_07",
    title: "Metode Berpikir & Manajemen Kerja",
    items: [
      "Logical & Analytical Problem Solving",
      "Critical Thinking & Deep Analysis",
      "Strategic Planning & Execution",
      "Time Management under Tight Deadlines",
      "Decision Making in Complex Situations",
      "Adaptability to Fast-paced Environments",
      "Attention to Detail & Safety-First (K3)"
    ]
  }
];
