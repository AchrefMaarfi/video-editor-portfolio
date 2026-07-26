import { lazy } from 'react';
import { createReactPlayer } from 'react-player/ReactPlayer';
import { canPlay } from 'react-player/patterns';
import HtmlPlayer from 'react-player/HtmlPlayer';
import type { PlayerEntry } from 'react-player/players';

// react-player's default entry statically registers all 10 players, which pulls
// hls.js (~524 kB) and dash.js (~857 kB) into the build even though this site
// only ever embeds YouTube. Registering just the players we need drops both.
const youtubePlayer: PlayerEntry = {
  key: 'youtube',
  name: 'YouTube',
  canPlay: canPlay.youtube,
  // Cast narrows an upstream variance mismatch: youtube-video-element types
  // `preload` as a literal union, react-player's VideoElementProps as string.
  // react-player's own players.js does the same thing in untyped JS.
  player: lazy(() => import('youtube-video-element/react')) as PlayerEntry['player'],
};

// Fallback so a direct .mp4 URL pasted into videos.ts still plays.
const htmlPlayer: PlayerEntry = {
  key: 'html',
  name: 'html',
  canPlay: canPlay.html,
  canEnablePIP: () => true,
  player: HtmlPlayer,
};

export default createReactPlayer([youtubePlayer, htmlPlayer], htmlPlayer);
