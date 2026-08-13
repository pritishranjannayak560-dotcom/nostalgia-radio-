"use client";

import Vinyl from "./vinyl";
import SeekBar from "./seek-bar";
import { IconNext, IconPause, IconPlay, IconPrev } from "./transport-icons";
import { formatTime } from "./format-time";
import type { PlayerState } from "./use-player";

export default function MobilePlayer({ state }: { state: PlayerState }) {
  const { track, isPlaying, currentTime, duration, toggle, next, prev, seek } =
    state;
  if (!track) return null;

  return (
    <div className="glass flex w-full max-w-xl flex-col items-center gap-3 rounded-[28px] p-4 sm:hidden">
      <Vinyl cover={track.cover} alt={track.title} playing={isPlaying} size={84} />

      <div className="min-w-0 text-center">
        <p className="truncate text-[16px] font-semibold text-white">
          {track.title}
        </p>
        <p className="truncate text-[13px] text-white/78">{track.artist}</p>
      </div>

      <div className="w-full">
        <SeekBar currentTime={currentTime} duration={duration} onSeek={seek} />
        <div className="-mt-1 flex justify-between text-[10.5px] tabular-nums text-white/55">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous track"
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-glow"
        >
          <IconPrev className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={toggle}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ink shadow-[0_4px_16px_rgba(232,163,61,0.45)] transition active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          {isPlaying ? (
            <IconPause className="h-5 w-5" />
          ) : (
            <IconPlay className="h-5 w-5" />
          )}
        </button>
        <button
          type="button"
          aria-label="Next track"
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-glow"
        >
          <IconNext className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
