export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  isFreelance?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Other';
  level: number; // 1-100
  icon?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
