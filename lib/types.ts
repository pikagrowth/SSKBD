// lib/types.ts

export interface LeadData {
  name: string;
  mobile: string;
  email?: string;
  purpose?: string;
  message?: string;
}

export type Project = {
  title: string;
  slug: string;
  category: string;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  location: string;
  priceRange?: string;
  configuration?: string;
  fastSelling?: boolean;
  description: string;
  highlights: string[];
  images: string[];
  tags?: string[];
};

export type Testimonial = { 
  name: string; 
  role: string; 
  quote: string; 
  rating: number; 
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};