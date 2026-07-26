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
export function getYouTubeThumbnail(url: string): string | undefined {
  const id = getYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined;
}
