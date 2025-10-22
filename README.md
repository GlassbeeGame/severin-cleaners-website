# Severin Cleaners Website

## Development Commands

### Normal Development
```bash
npm run dev
```
Starts the dev server on http://localhost:3000

### Clean Development (Recommended when site won't load)
```bash
npm run dev:clean
```
This command:
- Kills any zombie Next.js processes
- Clears corrupted cache files
- Starts fresh dev server

### Full Cache Clear
```bash
npm run clean
```
Completely removes the `.next` directory for a fresh start.

---

## Troubleshooting "Site Not Loading"

If the site stops loading or shows errors:

1. **Quick Fix (90% of cases):**
   ```bash
   npm run dev:clean
   ```

2. **Nuclear Option (if above doesn't work):**
   ```bash
   pkill -f "next dev"
   npm run clean
   npm run dev
   ```

3. **Check for port conflicts:**
   ```bash
   lsof -ti:3000
   ```

### Common Issues

**"SyntaxError: Unexpected end of JSON input"**
- This is a cache corruption issue
- Run `npm run dev:clean` to fix
- Not harmful but indicates cache needs clearing

**Port 3000 already in use**
- Old dev server didn't terminate properly
- Run: `pkill -f "next dev"`
- Then restart with `npm run dev`

**Site loads blank/404s**
- Webpack compilation might have failed
- Check terminal for compilation errors
- Try `npm run dev:clean`

---

## Tech Stack

- **Framework:** Next.js 15.5.3
- **React:** 19.1.0
- **Styling:** Tailwind CSS 3.4
- **TypeScript:** 5.x

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── [service-pages]/   # Individual service pages
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
└── ...
```

## Performance Optimizations

The `next.config.ts` includes:
- Image optimization (WebP/AVIF)
- Memory leak prevention (`onDemandEntries`)
- Compression enabled
- Optimized build settings
