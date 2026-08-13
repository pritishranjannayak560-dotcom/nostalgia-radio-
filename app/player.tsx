"use client";

import type { Track } from "./playlist";
import { usePlayer } from "./use-player";
import DesktopPlayer from "./desktop-player";
import MobilePlayer from "./mobile-player";

export default function Player({ tracks }: { tracks: Track[] }) {
  const state = usePlayer(tracks);

  return (
    <div className="pointer-events-auto w-full max-w-xl px-4 animate-fade-up">
      <audio ref={state.audioRef} src={state.track?.src} preload="metadata" />
      <DesktopPlayer state={state} />
      <MobilePlayer state={state} />
    </div>
  );
}
