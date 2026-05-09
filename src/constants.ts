import { Project, Experience, Skill, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ahaar',
    title: 'AHAAR',
    description: 'Advanced Hyperlocal App for Automated Restaurants. A futuristic ecosystem for hyperlocal dining.',
    longDescription: 'AHAAR revolutionizes the dining experience with automated kitchen integration, real-time hyperlocal tracking, and AI-driven demand forecasting for modern restaurants.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=2070&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'Socket.io', 'Hyperlocal APIs', 'Express'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 'drishti',
    title: 'DRISHTI',
    description: 'Deep Review Intelligence System for Technical Inspection. AI-powered code auditing.',
    longDescription: 'DRISHTI provides deep-level semantic analysis of codebases, identifying logical flaws and security risks using advanced neural inspection techniques.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    tech: ['Next.js', 'Gemini AI', 'TypeScript', 'Tailwind', 'Python'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 'dhan',
    title: 'DHAN',
    description: 'Digital Hub for Analytics & Net-worth. A comprehensive financial intelligence dashboard.',
    longDescription: 'DHAN serves as a central intelligence hub for tracking personal net-worth, analyzing investment trends, and providing real-time digital asset performance metrics.',
    image: 'https://images.unsplash.com/photo-1611974714405-b1a1ba08b3a0?q=80&w=2070&auto=format&fit=crop',
    tech: ['React', 'D3.js', 'Firebase', 'Financial APIs', 'TypeScript'],
    github: '#',
    demo: '#',
    featured: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'FirstVidya',
    role: 'Software Developer Intern',
    duration: 'Feb 2026 – June 2026',
    description: [
      'Engineered and maintained production-level full-stack applications.',
      'Optimized frontend performance reducing load times by 40%.',
      'Collaborated with cross-functional teams to deliver scalable APIs.',
      'Solved complex architectural problems in a fast-paced environment.'
    ]
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    duration: '2025 – Present',
    description: [
      'Delivered 10+ custom web applications for international clients.',
      'Specialized in building high-performance modern user interfaces.',
      'Integrated AI capabilities into legacy systems to improve efficiency.',
      'Managed end-to-end development lifecycles from architecture to deployment.'
    ],
    isFreelance: true
  }
];

export const SKILLS: Skill[] = [
  { name: 'React.js', category: 'Frontend', level: 95 },
  { name: 'Next.js', category: 'Frontend', level: 90 },
  { name: 'TypeScript', category: 'Frontend', level: 88 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 98 },
  { name: 'Node.js', category: 'Backend', level: 92 },
  { name: 'Express.js', category: 'Backend', level: 90 },
  { name: 'REST APIs', category: 'Backend', level: 95 },
  { name: 'MongoDB', category: 'Database', level: 85 },
  { name: 'Firebase', category: 'Database', level: 88 },
  { name: 'MySQL', category: 'Database', level: 82 },
  { name: 'AI Integration', category: 'Other', level: 85 },
  { name: 'Git & GitHub', category: 'Other', level: 92 }
];

export const STATS: Stat[] = [
  { label: 'Projects Built', value: '15', suffix: '+' },
  { label: 'Technologies Learned', value: '20', suffix: '+' },
  { label: 'Client Satisfaction', value: '100', suffix: '%' },
  { label: 'Code Commits', value: '2k', suffix: '+' }
];
