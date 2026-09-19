"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Settings, 
  RotateCcw, 
  RotateCw, 
  Volume1, 
  PictureInPicture, 
  Check
} from "lucide-react";

export const PresentationVideo = ({ src }: { src: string }) => {
  // ==========================================
  // REFS & DOM ELEMENTS
  // ==========================================
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); 
  const [buffered, setBuffered] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Scrubbing & Interactions
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [scrubTime, setScrubTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Menus & UI States
  const [showSettings, setShowSettings] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [skipIndicator, setSkipIndicator] = useState<'left' | 'right' | null>(null);
  
  const lastTapRef = useRef<{ time: number; x: number }>({ time: 0, x: 0 });

  // ==========================================
  // UTILITIES
  // ==========================================
  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds) || !isFinite(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const showControlsTemporarily = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying && hasInteracted) {
      controlsTimeoutRef.current = setTimeout(() => {
        if (!showSettings && !isScrubbing) setShowControls(false);
      }, 3000); 
    }
  }, [isPlaying, hasInteracted, showSettings, isScrubbing]);

  // ==========================================
  // VIDEO EVENT LISTENERS & LIFECYCLE
  // ==========================================
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!isScrubbing) setCurrentTime(video.currentTime);
    };

    const updateDuration = () => {
      if (video.duration && isFinite(video.duration)) {
        setDuration(video.duration);
      }
    };

    const onProgress = () => {
      if (video.buffered.length > 0) {
        setBuffered(video.buffered.end(video.buffered.length - 1));
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("durationchange", updateDuration);
    video.addEventListener("progress", onProgress);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    // Grab duration instantly if cached
    if (video.readyState >= 1) updateDuration();

    // Silent autoplay attempt
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => setIsPlaying(false));
    }

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("durationchange", updateDuration);
      video.removeEventListener("progress", onProgress);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [isScrubbing]);

  useEffect(() => {
    showControlsTemporarily();
    return () => { if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current); };
  }, [isPlaying, showControlsTemporarily]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || (document as any).webkitFullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  // ==========================================
  // KEYBOARD SHORTCUTS
  // ==========================================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName.toLowerCase() === 'input') return;
      showControlsTemporarily();
      const video = videoRef.current;
      if (!video) return;

      switch (e.key.toLowerCase()) {
        case ' ':
        case 'k': e.preventDefault(); togglePlay(); break;
        case 'f': e.preventDefault(); toggleFullscreen(); break;
        case 'm': e.preventDefault(); toggleMute(); break;
        case 'arrowleft': e.preventDefault(); skip(-10); break;
        case 'arrowright': e.preventDefault(); skip(10); break;
        case 'arrowup': e.preventDefault(); handleVolumeChange(Math.min(volume + 0.1, 1)); break;
        case 'arrowdown': e.preventDefault(); handleVolumeChange(Math.max(volume - 0.1, 0)); break;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [volume, showControlsTemporarily]);

  // ==========================================
  // SCRUBBING LOGIC
  // ==========================================
  const handleScrubMove = useCallback((e: PointerEvent) => {
    if (!progressContainerRef.current) return;
    const rect = progressContainerRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.clientX - rect.left), rect.width) / rect.width;
    setScrubTime(percent * duration);
    if (videoRef.current) videoRef.current.currentTime = percent * duration;
  }, [duration]);

  const handleScrubEnd = useCallback(() => {
    setIsScrubbing(false);
    document.removeEventListener("pointermove", handleScrubMove);
    document.removeEventListener("pointerup", handleScrubEnd);
  }, [handleScrubMove]);

  const handleScrubStart = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsScrubbing(true);
    setHasInteracted(true);
    const rect = progressContainerRef.current?.getBoundingClientRect();
    if (rect) {
      const percent = Math.min(Math.max(0, e.clientX - rect.left), rect.width) / rect.width;
      setScrubTime(percent * duration);
      if (videoRef.current) videoRef.current.currentTime = percent * duration;
    }
    document.addEventListener("pointermove", handleScrubMove);
    document.addEventListener("pointerup", handleScrubEnd);
  };

  // ==========================================
  // PLAYBACK & FULLSCREEN
  // ==========================================
  const togglePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setHasInteracted(true);
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted && volume === 0) {
        setVolume(1);
        videoRef.current.volume = 1;
      }
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };

  const skip = (amount: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
      setHasInteracted(true);
    }
  };

  const changePlaybackRate = (rate: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
      setShowSettings(false);
    }
  };

const toggleFullscreen = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    try {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
        // Desktop / Android Chrome
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if ((container as any).webkitRequestFullscreen) {
          await (container as any).webkitRequestFullscreen();
        } 
        // iOS iPhone strict fallback
        else if ((video as any).webkitEnterFullscreen) {
          (video as any).webkitEnterFullscreen();
          return; // Native iOS player takes over, so exit here
        }
        
        // Auto-Rotate to Landscape on Mobile (TypeScript 'any' bypass)
        const screenOrientation: any = window.screen?.orientation;
        if (screenOrientation?.lock) {
          try { await screenOrientation.lock("landscape"); } catch (err) {}
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
        
        const screenOrientation: any = window.screen?.orientation;
        if (screenOrientation?.unlock) screenOrientation.unlock();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  const togglePip = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (videoRef.current) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (error) {}
  };

  const handleGestureClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    const timeDiff = now - lastTapRef.current.time;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (timeDiff < 300) {
      if (clickX < rect.width / 3) {
        skip(-10);
        setSkipIndicator('left');
        setTimeout(() => setSkipIndicator(null), 500);
      } else if (clickX > (rect.width * 2) / 3) {
        skip(10);
        setSkipIndicator('right');
        setTimeout(() => setSkipIndicator(null), 500);
      }
    } else {
      togglePlay();
      setShowSettings(false);
    }
    lastTapRef.current = { time: now, x: clickX };
  };

  const handleInitialUnmute = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      setIsMuted(false);
      setVolume(1);
      setHasInteracted(true);
      videoRef.current.play().catch(() => {});
    }
  };

  // ==========================================
  // CALCULATED VALUES
  // ==========================================
  const displayedTime = isScrubbing ? scrubTime : currentTime;
  const safeDuration = duration > 0 ? duration : 1; 
  const progressPercent = Math.min(100, Math.max(0, (displayedTime / safeDuration) * 100));
  const bufferedPercent = Math.min(100, Math.max(0, (buffered / safeDuration) * 100));

  return (
    <div 
      ref={containerRef}
      className={`relative w-full mx-auto overflow-hidden bg-black group transition-all duration-300 ${
        isFullscreen ? "w-full h-full rounded-none" : "rounded-3xl shadow-2xl border border-gray-200/20 aspect-video max-w-5xl"
      }`}
      onMouseMove={showControlsTemporarily}
      onMouseLeave={() => { if (isPlaying && !showSettings) setShowControls(false); }}
    >
      {/* 🔴 FIXED STRETCHING: Strictly object-contain globally */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain bg-black"
        playsInline
      />

      {/* Touch Gesture Area */}
      <div 
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={handleGestureClick}
      />

      {/* Double Tap Skip Indicators */}
      {skipIndicator === 'left' && (
        <div className="absolute inset-y-0 left-0 w-1/3 bg-white/10 flex flex-col items-center justify-center animate-pulse pointer-events-none rounded-r-[100%] blur-md z-20 transition-all">
          <RotateCcw className="w-10 h-10 md:w-14 md:h-14 text-white opacity-90 mb-2" />
          <span className="text-white font-extrabold text-sm md:text-lg">-10s</span>
        </div>
      )}
      {skipIndicator === 'right' && (
        <div className="absolute inset-y-0 right-0 w-1/3 bg-white/10 flex flex-col items-center justify-center animate-pulse pointer-events-none rounded-l-[100%] blur-md z-20 transition-all">
          <RotateCw className="w-10 h-10 md:w-14 md:h-14 text-white opacity-90 mb-2" />
          <span className="text-white font-extrabold text-sm md:text-lg">+10s</span>
        </div>
      )}

      {/* Center Play Button */}
      {!isPlaying && hasInteracted && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none bg-black/20 backdrop-blur-sm transition-opacity duration-300">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transform hover:scale-110 transition-transform">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1.5" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Tap to Unmute Overlay */}
      {!hasInteracted && isMuted && (
        <div 
          className="absolute inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-md transition-opacity duration-500 cursor-pointer"
          onClick={handleInitialUnmute}
          onTouchEnd={handleInitialUnmute}
        >
          <button 
            type="button"
            className="flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full font-extrabold shadow-[0_0_50px_rgba(var(--brand-primary-rgb),0.6)] hover:scale-105 transition-transform duration-300 pointer-events-none"
          >
            <Volume2 className="w-6 h-6 animate-pulse" />
            Tap anywhere to Unmute & Watch
          </button>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className="absolute bottom-20 right-4 sm:right-6 z-50 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-48 shadow-2xl animate-in slide-in-from-bottom-4">
          <div className="text-white/60 text-xs font-extrabold uppercase tracking-widest px-4 py-3 border-b border-white/10 mb-2 flex items-center gap-2">
            <Settings size={14} /> Playback Speed
          </div>
          {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
            <button
              key={speed}
              type="button"
              onClick={(e) => changePlaybackRate(speed, e)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-colors text-white hover:bg-white/15 focus:outline-none focus:bg-white/20"
            >
              <span>{speed === 1 ? "Normal" : `${speed}x`}</span>
              {playbackRate === speed && <Check size={16} className="text-brand-primary" />}
            </button>
          ))}
        </div>
      )}

      {/* Control Bar */}
      <div 
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent z-40 transition-all duration-300 ${
          showControls ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="px-3 md:px-5 pb-3 pt-6">
          
          {/* Custom Scrubber */}
          <div 
            ref={progressContainerRef}
            className="relative w-full h-3 md:h-2 group cursor-pointer flex items-center mb-4 md:mb-3 touch-none"
            onPointerDown={handleScrubStart}
          >
            <div className="absolute inset-x-0 -top-4 -bottom-4 z-0" />
            <div className="absolute w-full h-1.5 md:h-1.5 bg-white/30 rounded-full overflow-hidden transition-all duration-200 group-hover:h-2.5">
              <div 
                className="absolute h-full bg-white/50 transition-all duration-300"
                style={{ width: `${bufferedPercent}%` }}
              />
              <div 
                className="absolute h-full bg-brand-primary"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div 
              className="absolute h-4 w-4 md:h-5 md:w-5 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] opacity-100 md:opacity-0 scale-100 md:scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 transform -translate-x-1/2 pointer-events-none"
              style={{ left: `${progressPercent}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-white">
            
            <div className="flex items-center gap-1 md:gap-3 shrink-0">
              <button 
                type="button" 
                onClick={togglePlay} 
                className="hover:text-brand-primary transition-colors p-2 focus:outline-none rounded-xl hover:bg-white/10 shrink-0"
              >
                {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
              </button>
              
              <button 
                type="button" 
                onClick={(e) => skip(-10, e)} 
                className="hover:text-brand-primary transition-colors p-2 focus:outline-none rounded-xl hover:bg-white/10 shrink-0 hidden sm:block"
              >
                <RotateCcw size={18} />
              </button>
              
              <button 
                type="button" 
                onClick={(e) => skip(10, e)} 
                className="hover:text-brand-primary transition-colors p-2 focus:outline-none rounded-xl hover:bg-white/10 shrink-0 hidden sm:block"
              >
                <RotateCw size={18} />
              </button>
              
              <div className="flex items-center group/volume ml-1 relative shrink-0">
                <button 
                  type="button" 
                  onClick={toggleMute} 
                  className="hover:text-brand-primary transition-colors p-2 focus:outline-none rounded-xl hover:bg-white/10 shrink-0"
                >
                  {isMuted || volume === 0 ? <VolumeX size={20} /> : volume < 0.5 ? <Volume1 size={20} /> : <Volume2 size={20} />}
                </button>
                <div className="w-0 overflow-hidden md:group-hover/volume:w-24 transition-all duration-300 ease-in-out flex items-center origin-left hidden md:flex">
                  <input 
                    type="range" 
                    min="0" max="1" step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white hover:accent-brand-primary transition-all ml-2"
                  />
                </div>
              </div>

              {/* Time Display with Theme Fonts */}
              <div className="text-xs md:text-sm font-bold tabular-nums ml-2 tracking-wide flex items-center opacity-90 shrink-0">
                <span>{formatTime(displayedTime)}</span>
                <span className="mx-1 opacity-40">/</span>
                <span className="opacity-70">{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); setShowSettings(!showSettings); }} 
                className={`transition-colors p-2 focus:outline-none rounded-xl shrink-0 ${showSettings ? "text-brand-primary rotate-45 bg-white/10" : "hover:text-brand-primary hover:bg-white/10"} duration-300`}
              >
                <Settings size={20} />
              </button>
              
              <button 
                type="button" 
                onClick={togglePip} 
                className="hover:text-brand-primary transition-colors p-2 focus:outline-none rounded-xl hover:bg-white/10 shrink-0 hidden md:block"
              >
                <PictureInPicture size={20} />
              </button>

              <button 
                type="button" 
                onClick={toggleFullscreen} 
                className="hover:text-brand-primary transition-colors p-2 focus:outline-none rounded-xl hover:bg-white/10 shrink-0 mr-1"
              >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};