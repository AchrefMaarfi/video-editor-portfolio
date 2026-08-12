import React, { Suspense, lazy, useEffect, useId, useRef, useState } from 'react';
import { Play, Eye } from 'lucide-react';
import { toNoCookieUrl, getYouTubeThumbnail, isYouTubeUrl } from '../lib/youtube';
import { setActivePlayer, subscribeActivePlayer, clearActivePlayerIfSelf } from '../lib/activePlayer';

const ReactPlayer = lazy(() => import('../lib/player'));

interface ShowreelPlayerProps {
  url: string;
  title: string;
  views?: string;
  client?: string;
  className?: string;
  /** Skip the viewport-entry gate and mount immediately — for the first video. */
  priority?: boolean;
  orientation?: "portrait" | "landscape";
}

function PlayerFallback() {
  return <div className="w-full h-full bg-surface-raised animate-pulse" />;
}

export const ShowreelPlayer: React.FC<ShowreelPlayerProps> = ({
  url,
  title,
  views,
  client,
  className = '',
  priority = false,
  orientation = 'portrait',
}) => {
  const aspectClass = orientation === 'landscape' ? 'aspect-video' : 'aspect-9/16';
  const playerId = useId();
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause this player whenever a different one becomes the active (playing) one.
  useEffect(() => {
    return subscribeActivePlayer((activeId) => {
      if (activeId !== playerId) setIsPlaying(false);
    });
  }, [playerId]);

  const play = () => {
    setActivePlayer(playerId);
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
    clearActivePlayerIfSelf(playerId);
  };

  // Thumbnails render as CSS background-images, not <img>, so the browser
  // can't lazy-load them natively — every card would fetch its thumbnail
  // immediately on mount. Defer mounting the player (and its thumbnail
  // fetch) until the card is about to scroll into view.
  useEffect(() => {
    if (hasEnteredView) return;

    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasEnteredView(true);
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEnteredView]);

  // Pause once the card scrolls out of view (mobile carousel / long scroll) or
  // the tab loses focus — playback shouldn't keep running off-screen.
  useEffect(() => {
    if (!isPlaying) return;

    const node = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) pause();
      },
      { threshold: 0.4 }
    );
    if (node) observer.observe(node);

    const onVisibilityChange = () => {
      if (document.hidden) pause();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [isPlaying]);

  if (!url) {
    return (
      <div className={`${aspectClass} ${className} flex items-center justify-center bg-surface-raised border border-border rounded-2xl text-text-faint text-xs uppercase tracking-widest text-center px-4`}>
        Video coming soon
      </div>
    );
  }

  const playableUrl = isYouTubeUrl(url) ? toNoCookieUrl(url) : url;
  const thumbnail = isYouTubeUrl(url) ? getYouTubeThumbnail(url) : undefined;

  return (
    <div ref={containerRef} className={`${aspectClass} ${className} relative rounded-2xl overflow-hidden bg-black`}>
      {hasEnteredView && (
        <Suspense fallback={<PlayerFallback />}>
          <ReactPlayer
            src={playableUrl}
            title={title}
            width="100%"
            height="100%"
            controls
            playing={isPlaying}
            playsInline
            onClickPreview={play}
            light={thumbnail ?? true}
            playIcon={
              <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-accent/40">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            }
          />
        </Suspense>
      )}
      {!hasEnteredView && <PlayerFallback />}

      {/* Reels-style info overlay — hidden once playback starts */}
      {!isPlaying && (
        <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between pointer-events-none bg-linear-to-t from-black/70 via-black/10 to-transparent">
          {views && (
            <span className="flex items-center gap-1 text-white text-xs font-bold drop-shadow">
              <Eye className="w-3.5 h-3.5" />
              {views}
            </span>
          )}
          {client && (
            <span className="text-white/90 text-xs font-semibold drop-shadow truncate max-w-[55%] text-right">
              {client}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
