"use client";

import { useCallback, useRef, useState } from "react";

export default function SeekBar({
  currentTime,
  duration,
  onSeek,
}: {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [dragRatio, setDragRatio] = useState<number | null>(null);

  const ratio = duration > 0 ? currentTime / duration : 0;
  const displayRatio = dragging && dragRatio !== null ? dragRatio : ratio;

  const ratioFromEvent = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      (e.target as Element).setPointerCapture(e.pointerId);
      setDragging(true);
      setDragRatio(ratioFromEvent(e.clientX));
    },
    [ratioFromEvent]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      setDragRatio(ratioFromEvent(e.clientX));
    },
    [dragging, ratioFromEvent]
  );

  const commit = useCallback(() => {
    if (dragRatio !== null) onSeek(dragRatio * duration);
    setDragging(false);
    setDragRatio(null);
  }, [dragRatio, duration, onSeek]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const step = e.shiftKey ? 10 : 3;
      if (e.key === "ArrowRight") onSeek(Math.min(duration, currentTime + step));
      if (e.key === "ArrowLeft") onSeek(Math.max(0, currentTime - step));
    },
    [currentTime, duration, onSeek]
  );

  return (
    <div
      ref={trackRef}
      role="slider"
      tabIndex={0}
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(currentTime)}
      data-dragging={dragging}
      className="seek-track group/seek relative flex h-6 w-full cursor-pointer items-center"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={commit}
      onPointerCancel={commit}
      onKeyDown={onKeyDown}
    >
      <div className="seek-rail relative h-[3px] w-full overflow-visible rounded-full">
        <div
          className="seek-fill absolute inset-y-0 left-0 rounded-full"
          style={{ width: `${displayRatio * 100}%` }}
        />
        <div
          className="seek-knob absolute top-1/2 h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full"
          style={{ left: `${displayRatio * 100}%` }}
        />
      </div>
    </div>
  );
}
