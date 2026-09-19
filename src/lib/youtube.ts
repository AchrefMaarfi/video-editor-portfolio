// Matches react-player's own YouTube pattern (dist/patterns.js) so any URL
// react-player can play, this module can also identify.
const MATCH_URL_YOUTUBE =
  /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})/;

export function getYouTubeId(url: string): string | null {
  const match = url.match(MATCH_URL_YOUTUBE);
  return match ? match[1] : null;
}

export function isYouTubeUrl(url: string): boolean {
  return MATCH_URL_YOUTUBE.test(url);
}

// youtube-video-element (used internally by react-player) picks the
// privacy-respecting embed domain by checking whether the URL string itself
// contains "-nocookie" — it is not a config option, so the URL must carry it.
export function toNoCookieUrl(url: string): string {
  const id = getYouTubeId(url);
  if (!id) return url;
  return `https://www.youtube-nocookie.com/watch?v=${id}`;
}

// Passing a thumbnail URL string (rather than light={true}) to react-player
// skips its default oEmbed fetch to noembed.com entirely.
//
// sddefault.jpg is a legacy 640x480 (4:3) crop — using it for a 16:9 landscape
// video makes react-player's `background-size: cover` crop the top/bottom off
// the frame, so the preview reads as "squared" instead of widescreen.
// maxresdefault.jpg is the true 1280x720 source frame but isn't generated for
// every video, so it's verified with a preload and hqdefault.jpg (320x180,
// also true 16:9, always available) is used as the fallback.
export function getYouTubeThumbnail(url: string): string | undefined {
  const id = getYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined;
}

/** Best-available 16:9 thumbnail: maxresdefault if it exists, else hqdefault. */
export function getBestYouTubeThumbnail(url: string): Promise<string | undefined> {
  const id = getYouTubeId(url);
  if (!id) return Promise.resolve(undefined);

  const hqUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const maxresUrl = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      // YouTube serves a 120x90 grey placeholder for maxresdefault when the
      // real image doesn't exist, instead of a 404.
      resolve(img.naturalWidth > 120 ? maxresUrl : hqUrl);
    };
    img.onerror = () => resolve(hqUrl);
    img.src = maxresUrl;
  });
}
