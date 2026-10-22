export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  highlightMetric?: {
    value: string;
    label: string;
  };
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
  keyLearnings?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level?: string;
    detail?: string;
  }[];
}

export interface Language {
  name: string;
  level: string;
  cefr: string;
  percentage: number;
}
