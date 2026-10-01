# Website

The MatterTurn Ai marketing/product website (Next.js app, deployed on Vercel as the `matterturn-ai` project) currently lives at the **repository root** (`app/`, `components/`, `lib/`, `public/`, etc.) rather than inside this `website/` directory.

**This round deliberately did not move it.** The live production deployment (`matterturn-ai.vercel.app`) is built directly from the repository root via `vercel.json`'s `buildCommand`/`installCommand` and Vercel's project Root Directory setting. Moving the app into `website/` would require updating the Vercel project's Root Directory and re-verifying the build, which carries real risk of breaking the current deployment if done without a verified, tested cutover.

**Recommendation for a future round:** move the Next.js app into `website/` as a path-preserving `git mv`, update the Vercel project's Root Directory to `website/`, and verify a full deploy (preview, then production) before relying on the new layout — as its own isolated change, not bundled with other restructuring.

Until that migration happens, treat the repository root as the website's source, and this directory as a placeholder/pointer only.

## Development

The website is a Next.js app at the repository root. Use Node 24, run `npm ci`, then `npm run dev`. Validate with `npm run typecheck` and `npm run build`.

## Private deployment

Deployment access policy is managed separately from application content. Production exposure must be verified against the current Vercel project configuration before authentication is treated as an access-control boundary. The noindex header is supplementary and is not access control. Intended project name: `matterturn-ai`.

## Intake migration limitation

The original Sites-era intake used ChatGPT authenticated identity headers and Cloudflare R2 storage, neither available on Vercel. The original source is preserved in `migration/` at the repository root. The submissions endpoint returns 503 and never claims to save files. Persistent authenticated storage must be configured before intake is re-enabled. This migration does not copy existing submissions.

## Preserved assets

Nine languages, pages, layout, contact details, video and poster are retained. Video/poster filenames retain their historical names; their bytes are unchanged. Main brand text is MatterTurn Ai.
