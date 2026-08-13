export function IconPrev({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6 5a1 1 0 011 1v12a1 1 0 11-2 0V6a1 1 0 011-1zm3.7 7l9.15-6.86A1 1 0 0120.4 6v12a1 1 0 01-1.55.84L9.7 12.98a1.2 1.2 0 010-1.96z" />
    </svg>
  );
}

export function IconNext({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 5a1 1 0 00-1 1v12a1 1 0 102 0V6a1 1 0 00-1-1zm-3.7 7L5.15 5.14A1 1 0 003.6 6v12a1 1 0 001.55.84L14.3 12.98a1.2 1.2 0 000-1.96z" />
    </svg>
  );
}

export function IconPlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7.5 5.14a1 1 0 011.5-.87l11 6.86a1 1 0 010 1.74l-11 6.86a1 1 0 01-1.5-.87V5.14z" />
    </svg>
  );
}

export function IconPause({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7 4.5A1.5 1.5 0 018.5 3h1A1.5 1.5 0 0111 4.5v15a1.5 1.5 0 01-1.5 1.5h-1A1.5 1.5 0 017 19.5v-15zm8 0A1.5 1.5 0 0116.5 3h1A1.5 1.5 0 0119 4.5v15a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-15z" />
    </svg>
  );
}
