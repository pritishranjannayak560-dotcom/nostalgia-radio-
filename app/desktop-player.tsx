"use client";

import Vinyl from "./vinyl";
import SeekBar from "./seek-bar";
import { IconNext, IconPause, IconPlay, IconPrev } from "./transport-icons";
import { formatTime } from "./format-time";
import type { PlayerState } from "./use-player";

export default function DesktopPlayer({ state }: { state: PlayerState }) {
  const { track, isPlaying, currentTime, duration, toggle, next, prev, seek } =
    state;
  if (!track) return null;

  return (
    <div className="glass hidden w-full max-w-xl items-center gap-4 rounded-full p-3 pr-5 sm:flex">
      <Vinyl cover={track.cover} alt={track.title} playing={isPlaying} size={56} />

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <p className="truncate text-[15px] font-semibold text-white">
            {track.title}
          </p>
          <p className="truncate text-[12.5px] text-white/78">{track.artist}</p>
        </div>

        <div className="mt-0.5 flex items-center gap-2">
          <SeekBar currentTime={currentTime} duration={duration} onSeek={seek} />
        </div>

        <div className="-mt-1 flex justify-between text-[10.5px] tabular-nums text-white/55">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          aria-label="Previous track"
          onClick={prev}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-glow"
        >
          <IconPrev className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={toggle}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink shadow-[0_4px_16px_rgba(232,163,61,0.45)] transition hover:bg-accent-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          {isPlaying ? (
            <IconPause className="h-[18px] w-[18px]" />
          ) : (
            <IconPlay className="h-[18px] w-[18px]" />
          )}
        </button>
        <button
          type="button"
          aria-label="Next track"
          onClick={next}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-glow"
        >
          <IconNext className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
