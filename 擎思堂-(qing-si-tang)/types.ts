export enum Subject {
  MATH = '数学',
  PHYSICS = '物理',
  ENGLISH = '英语',
  CODING = '编程',
  CHEMISTRY = '化学'
}

export interface Course {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  gradeLevel: string;
  image: string;
  price: string;
  features: string[];
  longDescription?: string;
  syllabus?: string[];
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  bio: string;
  subject: Subject;
  image: string;
  education: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export type ViewState = 'home' | 'courses' | 'tutor' | 'faculty' | 'contact' | 'course-detail';