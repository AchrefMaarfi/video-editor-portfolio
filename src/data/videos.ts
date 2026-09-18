export interface VideoEntry {
  id: string;
  title: string;
  /** YouTube URL (any format, incl. Shorts). Paste new links here. */
  url: string;
  client?: string;
  views?: string;
  /** Video aspect ratio. Defaults to "portrait" (Shorts/Reels style). */
  orientation?: "portrait" | "landscape";
}

export interface VideoCategory {
  id: string;
  title: string;
  videos: VideoEntry[];
}

export const VIDEO_CATEGORIES: VideoCategory[] = [
  {
    id: "talking-heads",
    title: "Talking Heads",
    videos: [
      {
        id: "th-1",
        title: "Talking Heads Edit 1",
        url: "https://youtu.be/8_sWFbQDtdU",
      },
      {
        id: "th-2",
        title: "Talking Heads Edit 2",
        url: "https://youtu.be/hcBCBSky0F8",
      },
      {
        id: "th-3",
        title: "Talking Heads Edit 3",
        url: "https://youtu.be/CuSdw3G1a2k",
      },

      {
        id: "th-5",
        title: "Talking Heads Edit 5",
        url: "https://youtu.be/s08GZBes6BU",
      },
      {
        id: "th-6",
        title: "Talking Heads Edit 6",
        url: "https://youtu.be/UYgldopKIS8",
      },
      {
        id: "th-7",
        title: "Talking Heads Edit 7",
        url: "https://youtu.be/fRwO3V26aCA",
      },
      {
        id: "th-8",
        title: "Talking Heads Edit 8",
        url: "https://youtu.be/95J23NXsBYI",
      },
      {
        id: "th-9",
        title: "Talking Heads Edit 9",
        url: "https://youtu.be/VmtSpCU76ns",
      },
    ],
  },
  {
    id: "ecom-faceless",
    title: "Ecom Faceless",
    videos: [
      {
        id: "ef-12",
        title: "Ecom Faceless Edit 12",
        url: "https://youtube.com/shorts/WQEajn3zCOA",
      },
      {
        id: "ef-13",
        title: "Ecom Faceless Edit 13",
        url: "https://youtube.com/shorts/OqMGrQH40Dw",
      },
      {
        id: "ef-14",
        title: "Ecom Faceless Edit 14",
        url: "https://youtube.com/shorts/H629wnA77nM",
      },
      {
        id: "ef-15",
        title: "Ecom Faceless Edit 15",
        url: "https://youtube.com/shorts/fP7rphZpwdU",
      },
    ],
  },
  {
    id: "company-work",
    title: "Company Work",
    videos: [
      {
        id: "cw-17",
        title: "Company Work Edit 17",
        url: "https://youtu.be/0t17W2L9qkQ",
        orientation: "landscape",
      },
      {
        id: "cw-18",
        title: "Company Work Edit 18",
        url: "https://youtu.be/h__eT2Bq9fs",
        orientation: "landscape",
      },
    ],
  },
];
