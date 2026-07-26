export interface VideoEntry {
  id: string;
  title: string;
  /** YouTube URL (any format, incl. Shorts). Paste new links here. */
  url: string;
  client?: string;
  views?: string;
}

// Remaining 3 slots are PLACEHOLDER — REPLACE with real short-form edits before launch.
export const VIDEOS: VideoEntry[] = [
  {
    id: "v1",
    title: "SaaS Product Showcase Ad",
    // PLACEHOLDER — stock video, not a real edit
    url: "https://www.youtube.com/shorts/8_sWFbQDtdU",
    client: "Aura AI Labs",
    views: "2.1M",
  },
  {
    id: "v2",
    title: "Viral Fashion Reel",
    url: "https://youtube.com/shorts/8_sWFbQDtdU",
    client: "SYN/CT Streetwear",
    views: "3.2M",
  },
  {
    id: "v3",
    title: "High-Converting E-Commerce Ad",
    // PLACEHOLDER — stock video, not a real edit
    url: "https://www.youtube.com/shorts/aqz-KE-bpKQ",
    client: "Lumina Tech Accessories",
    views: "1.8M",
  },
  {
    id: "v4",
    title: "Fitness Creator Shorts",
    // PLACEHOLDER — stock video, not a real edit
    url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    client: "Sarah Hayes Fitness",
    views: "5.4M",
  },
];
