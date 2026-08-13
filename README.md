# Classic — an evening radio

A single-page nostalgia radio site. Next.js App Router + TypeScript + Tailwind v4.

This copy is deliberately **flat** — only two folders, `app/` and `public/`,
both with no subfolders — so it can be uploaded through GitHub's mobile
"upload files" screen without any nested-folder structure getting lost.

## Uploading from your phone

1. On github.com, open your empty repo → the "uploading an existing file" link.
2. Select every file from **inside the `app` folder** on your phone and upload
   them. Before hitting commit, edit the destination path for each one so it
   reads `app/page.tsx`, `app/layout.tsx`, etc. — this makes GitHub create the
   `app` folder for you.
3. Repeat for the files inside `public` — target path `public/scene-wide.png`,
   `public/cover-itna-na-mujhse.jpg`, and so on.
4. Upload the remaining root files (`package.json`, `tsconfig.json`, etc.)
   with no folder prefix — they belong at the very top of the repo.
5. Commit. Then import the repo into Vercel — it should build.

## Run it locally (if you get access to a computer)

```
npm install
npm run dev
```

## Assets

- `public/scene-wide.png` — landscape background (placeholder using the
  street-scene image you shared is already here)
- `public/scene-tall.png` — portrait background (currently a rough crop —
  swap for a real separately-composed portrait shot)
- `public/audio-<slug>.mp3` — one file per track; see the `src` field in
  `app/playlist.ts` for exact filenames
- `public/cover-<slug>.jpg` — placeholder cover art already generated for
  all 17 tracks

## Structure

```
app/
  layout.tsx, page.tsx, globals.css
  clock.tsx, listener-count.tsx, social-links.tsx
  player.tsx, use-player.ts, desktop-player.tsx, mobile-player.tsx,
  vinyl.tsx, seek-bar.tsx, transport-icons.tsx
  playlist.ts, format-time.ts
public/
  scene-wide.png, scene-tall.png, cover-*.jpg
```

No file here creates its own route — only `page.tsx` and `layout.tsx` are
special to Next.js — so keeping everything else flat inside `app/` is safe.
