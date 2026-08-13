"use client";

import { useEffect, useState } from "react";

const BASE = 214;

export default function ListenerCount() {
  const [count, setCount] = useState(BASE);

  useEffect(() => {
    // Gentle, believable drift — not a real websocket count, just ambience.
    const id = setInterval(() => {
      setCount((c) => {
        const delta = Math.round((Math.random() - 0.48) * 5);
        const next = c + delta;
        return Math.min(260, Math.max(180, next));
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-glow" />
      </span>
      <span className="text-[11px] tracking-wide sm:text-[12.5px]">
        <span className="font-semibold tabular-nums">{count}</span>{" "}
        <span className="text-white/60">listening now</span>
      </span>
    </div>
  );
}
