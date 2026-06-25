export interface Equipment {
  id: string;
  category: 'audio' | 'video' | 'lighting' | 'power';
  name: string;
  specs: string[];
  brand: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
}

export interface Hotspot {
  id: string;
  title: string;
  description: string;
  x: number; // percentage from left
  y: number; // percentage from top
}

export interface LogisticsHub {
  id: string;
  name: string;
  region: string;
  distanceFromSalvador: string;
  experience: string;
  description: string;
  coordinates: { x: number; y: number }; // Relative SVG positions
}
