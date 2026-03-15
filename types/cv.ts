export interface CvHeader {
  name: string;
  title: string;
  summary: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface CvExperienceEntry {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export interface CvEducationEntry {
  school: string;
  degree: string;
  date: string;
}

export interface CvProjectEntry {
  name: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export interface CvRatedItem {
  label: string;
  rating: number;
  detail?: string;
}

export interface CvDocument {
  locale: 'en' | 'fr';
  fileName: string;
  labels: {
    experiences: string;
    projects: string;
    skills: string;
    languages: string;
    education: string;
  };
  header: CvHeader;
  experiences: CvExperienceEntry[];
  education: CvEducationEntry;
  projects: CvProjectEntry[];
  skills: CvRatedItem[];
  languages: CvRatedItem[];
}
