import React, { useState } from 'react';
import ReactPlayerModule from 'react-player';
import { ProjectItem } from '../types';
import { X, Play, Pause, Volume2, VolumeX, TrendingUp, Sparkles, Sliders } from 'lucide-react';

const ReactPlayer = ReactPlayerModule as unknown as React.ComponentType<any>;

interface VideoPlayerModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  project,
  onClose
}) => {
  if (!project) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showRetentionCurve, setShowRetentionCurve] = useState(false);
  const [isRawFootage, setIsRawFootage] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      {/* Container Modal */}
      <div className="relative w-full max-w-4xl bg-[#131313] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-[#1b1b1b] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse" />
            <div>
              <h3 className="font-outfit text-sm sm:text-lg font-bold text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#FF6600] font-jakarta tabular-nums">{project.category} • {project.clientName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Viewport Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 p-4 sm:p-6 items-center overflow-y-auto">
          {/* Vertical 9:16 Video Player Stage */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-white/10 group">
              {/* ReactPlayer Component (Supports YouTube Shorts, Unlisted YouTube links & MP4 files) */}
              <div
                className={`w-full h-full cursor-pointer transition-all duration-300 ${
                  isRawFootage ? 'grayscale contrast-75 brightness-75 blur-[1px]' : ''
                }`}
                onClick={togglePlay}
              >
                {/* @ts-ignore */}
                <ReactPlayer
                  url={project.videoUrl}
                  playing={isPlaying}
                  muted={isMuted}
                  loop
                  width="100%"
                  height="100%"
                  playsinline
                  onProgress={(state: any) => setProgress(state?.played ? state.played * 100 : 0)}
                  config={{
                    youtube: {
                      rel: 0,
                    },
                  }}
                />
              </div>

              {/* Raw Footage Overlay Tag if active */}
              {isRawFootage && (
                <div className="absolute top-4 left-4 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">
                  Raw Footage (Unedited)
                </div>
              )}

              {/* Retention Curve Graph Overlay */}
              {showRetentionCurve && (
                <div className="absolute inset-x-4 top-16 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-[#FF6600]/40 animate-in fade-in">
                  <div className="flex justify-between items-center text-[10px] font-bold text-[#FF6600] mb-1">
                    <span>AUDIENCE RETENTION CURVE</span>
                    <span>{project.retentionRate} AVG</span>
                  </div>
                  {/* Simulated retention curve SVG */}
                  <svg className="w-full h-12 text-[#FF6600]" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d="M0,5 Q15,2 30,12 T60,8 T100,18 L100,30 L0,30 Z"
                      fill="currentColor"
                      fillOpacity="0.25"
                    />
                    <path
                      d="M0,5 Q15,2 30,12 T60,8 T100,18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <p className="text-[9px] text-white/60 mt-1">
                    *Hook optimization at 0:03 prevents viewer swipe-away.
                  </p>
                </div>
              )}

              {/* Overlay Player Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                {/* Timeline Progress Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden">
                  <div
                    className="h-full bg-[#FF6600] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-white">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-white/10 hover:bg-[#FF6600] transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-[#FF6600]" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-[10px] font-mono text-white/70">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Project Details & Feature Toggles */}
          <div className="md:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#FF6600] bg-[#FF6600]/10 px-3 py-1 rounded-full border border-[#FF6600]/30 uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-xs text-white/50 font-mono">
                  {project.views} Views
                </span>
              </div>

              <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-6 font-inter">
                {project.description}
              </p>

              {/* Interactive Director Tools */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-bold text-white/50">
                  Director Tools & Analysis
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowRetentionCurve(!showRetentionCurve)}
                    className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all ${
                      showRetentionCurve
                        ? 'bg-[#FF6600] text-white border-[#FF6600]'
                        : 'bg-white/5 text-white/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      Retention Graph
                    </span>
                    <span className="text-[10px] opacity-75">{showRetentionCurve ? 'ON' : 'OFF'}</span>
                  </button>

                  <button
                    onClick={() => setIsRawFootage(!isRawFootage)}
                    className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all ${
                      isRawFootage
                        ? 'bg-yellow-500 text-black border-yellow-500'
                        : 'bg-white/5 text-white/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Sliders className="w-4 h-4" />
                      Compare Raw
                    </span>
                    <span className="text-[10px] opacity-75">{isRawFootage ? 'RAW' : 'EDITED'}</span>
                  </button>
                </div>
              </div>

              {/* Edit Highlights / Production Features */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-white/50 mb-2">
                  Production Enhancements
                </h4>
                <ul className="space-y-2">
                  {project.featuresList.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-white/80">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF6600] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 bg-[#FF6600] text-white font-bold text-xs uppercase tracking-widest rounded-xl btn-primary-glow"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
