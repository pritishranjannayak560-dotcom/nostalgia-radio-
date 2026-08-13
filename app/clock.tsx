"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    // Avoid a server/client mismatch — render nothing until mounted.
    return <div className="text-[13px] tabular-nums text-white/70 sm:text-sm" />;
  }

  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  const day = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex flex-col leading-tight text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
      <span className="text-[15px] font-semibold tabular-nums sm:text-base">
        {time}
      </span>
      <span className="text-[10.5px] uppercase tracking-[0.14em] text-white/55">
        {day}
      </span>
    </div>
  );
}
