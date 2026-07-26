import { ProjectItem, ServiceItem, TestimonialItem } from '../types';

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Viral Fashion Reel',
    category: 'Short-Form Social',
    description: 'Retention-optimized edit for TikTok and IG Reels. Fast kinetic cuts, animated subtitles, and synchronized audio transitions.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/shorts/8_sWFbQDtdU',
    duration: '0:30',
    views: '3.2M',
    retentionRate: '72%',
    clientName: 'SYN/CT Streetwear',
    tags: ['TikTok', 'Reels', 'Kinetic Captions', 'Sound Design'],
    featuresList: [
      'Hook retention optimization in the first 3 seconds',
      'Punchy auto-styled kinetic captions',
      'Dynamic beat-synced optical flow transitions',
      'High-energy audio master with sound effects'
    ]
  },
  {
    id: 'project-2',
    title: 'High-Converting E-Commerce Ad',
    category: 'Performance Video Ads',
    description: 'Direct-response TikTok & Meta ad built for max ROAS. Pattern interrupts, hook testing, and clear call-to-action triggers.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    duration: '0:30',
    views: '1.8M',
    retentionRate: '68%',
    clientName: 'Lumina Tech Accessories',
    tags: ['Meta Ad', 'TikTok Ad', 'UGC Edit', 'High ROAS'],
    featuresList: [
      '3 distinct hook variations tested for top CTR',
      'Problem-Agitate-Solve video framework',
      'Custom glassmorphism overlay graphics & price tags',
      'Subtle voiceover enhancement & background score'
    ]
  },
  {
    id: 'project-3',
    title: 'Fitness Creator Shorts',
    category: 'Creator Content',
    description: 'Dynamic storytelling for personal brand channels. High-contrast atmosphere with high-octane sound design and heavy graphics.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ErmfiF67q4D9l536DQTzZpFofFVW0By7_cT--JX7VY1owEQjoqwNYkTSdJRaGEhbJhIRymgu2HjvtDBtTowl9tfoJQfVBw4dAj1xIiO0Sh9aftJqce0cWbnY9g5saSHDaP9ywvyFKGRPVh0RQK5hUbh9NzrILa4DTtlviZq1CAYk6bypd9hsWOymI1KOQUmuaKGyHy0lLFLZTDUNa54esFc2y5r3PUuvhOHkb4OWA48dtPsZK5NkMjw4JSVCY1X3R3jcXOuueIXk',
    videoUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    duration: '0:45',
    views: '5.4M',
    retentionRate: '78%',
    clientName: 'Sarah Hayes Fitness',
    tags: ['YouTube Shorts', 'Sound Design', 'Speed Ramping'],
    featuresList: [
      'Bold word-by-word highlighted captions',
      'Custom impact SFX and whoosh transitions',
      'Speed ramping for exercise movement emphasis',
      'Optimized 9:16 vertical framing'
    ]
  },
  {
    id: 'project-4',
    title: 'SaaS Product Showcase Ad',
    category: 'Performance Video Ads',
    description: 'Sleek motion graphics and screen breakdown for SaaS software ad campaign. Makes complex tools easy and exciting.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    duration: '0:42',
    views: '2.1M',
    retentionRate: '65%',
    clientName: 'Aura AI Labs',
    tags: ['Motion FX', 'SaaS Ad', 'UI Callouts'],
    featuresList: [
      'Animated cursor clicks and zoom callouts',
      'High-converting social proof popups',
      'Custom branded motion graphics and lower thirds',
      'Strong end card with offer CTA'
    ]
  }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'service-1',
    icon: 'movie_edit',
    title: 'Short-Form Video Editing',
    description: 'Tailored for TikTok, Instagram Reels, and YouTube Shorts. Fast-paced cuts, captions, sound FX, and pacing engineered for viral watch time.',
    accentColor: '#FF6600',
    features: ['TikTok, IG Reels & YT Shorts', 'Custom animated typography & captions', 'Micro-jump cuts & retention pacing', 'Full SFX & audio mastering'],
    turnaroundTime: '24-48 Hours'
  },
  {
    id: 'service-2',
    icon: 'tactic',
    title: 'High-Converting Video Ads',
    description: 'Specialized performance ads for Meta, TikTok, and YouTube. Focused on strong hooks, UGC polish, direct response triggers, and high ROAS.',
    accentColor: '#ffb380',
    features: ['Hook A/B testing variations', 'E-commerce & SaaS ad strategy', 'UGC video polish & formatting', 'CTR & conversion focused CTA'],
    turnaroundTime: '24-48 Hours'
  },
  {
    id: 'service-3',
    icon: 'animation',
    title: 'Motion Graphics & VFX',
    description: 'Custom graphics, animated callouts, lower thirds, and screen enhancements that make your content look ultra-professional.',
    accentColor: '#ff8800',
    features: ['Animated UI & product callouts', '3D motion elements & overlays', 'Logo stings & sound design', 'Brand style kit integration'],
    turnaroundTime: '48 Hours'
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: '"Akrem completely transformed our TikTok and Reels strategy. Our average retention doubled and our organic views exploded by 300% in weeks."',
    clientName: 'Marcus Chen',
    clientRole: 'Marketing Director',
    company: 'Apex Digital',
    rating: 5,
    metric: '+300% Organic Reach'
  },
  {
    id: 'test-2',
    quote: '"Akrem Maarfi is our go-to editor for performance video ads. His hook variations boosted our ad CTR significantly and dropped our CPA."',
    clientName: 'Sarah Jenkins',
    clientRole: 'E-commerce Founder',
    company: 'Lumina Brand',
    rating: 5,
    metric: '4.2x Avg Ad ROAS'
  },
  {
    id: 'test-3',
    quote: '"Super fast 24-hour turnaround, top-notch communication, and incredible attention to detail on sound FX and captions. Highly recommended!"',
    clientName: 'David Kolar',
    clientRole: 'Content Creator',
    company: '1.5M Followers',
    rating: 5,
    metric: '24h Delivery'
  }
];

