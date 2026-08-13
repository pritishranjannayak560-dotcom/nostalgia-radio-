import Clock from "./clock";
import ListenerCount from "./listener-count";
import SocialLinks from "./social-links";
import Player from "./player";
import { playlist } from "./playlist";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      {/* Background */}
      <div className="hero-bg fixed inset-0 -z-20 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />
      </div>

      {/* Grain */}
      <div className="grain-overlay animate-grain fixed inset-0 -z-10" aria-hidden />

      {/* Top row */}
      <div className="fixed safe-t safe-l z-10">
        <Clock />
      </div>
      <div className="fixed safe-t left-1/2 z-10 -translate-x-1/2">
        <ListenerCount />
      </div>
      <div className="fixed safe-t safe-r z-10">
        <SocialLinks />
      </div>

      {/* Player */}
      <div className="fixed safe-b left-1/2 z-10 flex w-full -translate-x-1/2 justify-center">
        <Player tracks={playlist} />
      </div>
    </main>
  );
}
