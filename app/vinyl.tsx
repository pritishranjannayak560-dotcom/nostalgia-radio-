import Image from "next/image";

export default function Vinyl({
  cover,
  alt,
  playing,
  size = 56,
}: {
  cover: string;
  alt: string;
  playing: boolean;
  size?: number;
}) {
  return (
    <div
      className="vinyl-spin relative shrink-0 overflow-hidden rounded-full ring-1 ring-white/25"
      data-playing={playing}
      style={{ width: size, height: size }}
    >
      <Image
        src={cover}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_2px_rgba(0,0,0,0.25)]" />
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 ring-2 ring-white/40" />
    </div>
  );
}
