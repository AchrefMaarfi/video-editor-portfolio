export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string; // Supabase video URL or direct MP4 link
  duration: string;
  views: string;
  retentionRate: string;
  clientName: string;
  tags: string[];
  featuresList: string[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  accentColor: string;
  features: string[];
  turnaroundTime: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatarUrl?: string;
  rating: number;
  metric: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Turnaround' | 'Workflow' | 'Pricing' | 'Revisions';
}

export interface InquiryFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  estimatedBudget: string;
}

export interface SupabaseVideoConfig {
  [projectId: string]: string;
}
