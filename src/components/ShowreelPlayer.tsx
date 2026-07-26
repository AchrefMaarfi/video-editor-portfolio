import React, { Suspense, lazy, useState } from 'react';
import { Play, Eye } from 'lucide-react';
import { toNoCookieUrl, getYouTubeThumbnail, isYouTubeUrl } from '../lib/youtube';

const ReactPlayer = lazy(() => import('../lib/player'));

interface ShowreelPlayerProps {
  url: string;
  title: string;
  views?: string;
  client?: string;
  className?: string;
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
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!url) {
    return (
      <div className={`aspect-9/16 ${className} flex items-center justify-center bg-surface-raised border border-border rounded-2xl text-text-faint text-xs uppercase tracking-widest text-center px-4`}>
        Video coming soon
      </div>
    );
  }

  const playableUrl = isYouTubeUrl(url) ? toNoCookieUrl(url) : url;
  const thumbnail = isYouTubeUrl(url) ? getYouTubeThumbnail(url) : undefined;

  return (
    <div className={`aspect-9/16 ${className} relative rounded-2xl overflow-hidden bg-black`}>
      <Suspense fallback={<PlayerFallback />}>
        <ReactPlayer
          src={playableUrl}
          title={title}
          width="100%"
          height="100%"
          controls
          playing={isPlaying}
          playsInline
          onClickPreview={() => setIsPlaying(true)}
          light={thumbnail ?? true}
          playIcon={
            <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-accent/40">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
          }
        />
      </Suspense>

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
