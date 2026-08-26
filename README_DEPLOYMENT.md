# euNICE Apparel & Branding — Fixed Deployment Package

## What was fixed
- Simplified the Vite configuration by removing the Cloudflare/Netlify TanStack Start deployment plugin chain that was causing platform-specific build problems.
- Configured the project as a standard Vite static website.
- Updated `netlify.toml` to use `npm run build` and publish `dist`.
- Corrected the Nigeria country code in the phone and WhatsApp links to `+234`.
- Kept the existing contact numbers and WhatsApp functionality.

## Deploy on Netlify
1. Upload this project ZIP to your repository or deployment service.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Node version: `22`

## Deploy on Cloudflare Pages
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22

If the host automatically detects the old pnpm lockfile and gives a package-manager error, either deploy from a fresh Git repository using the included package files or set the build package manager to npm.
