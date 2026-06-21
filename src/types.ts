export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  technologies: {
    category: string;
    items: string[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  imageUrl?: string;
}

export interface Education {
  university: string;
  logoUrl?: string;
  major: string;
  degree: string;
  gpa: string;
  gradYear: string;
  thesisTitle: string;
  features: string[];
}

export interface Certification {
  id: string;
  title: string;
  org: string;
  description: string;
  type: 'technical' | 'soft';
  statusLabel: string;
}

export interface Achievement {
  title: string;
  value: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  achievements: string[];
}

export interface CompetencyCategory {
  id: string;
  title: string;
  items: string[];
}
