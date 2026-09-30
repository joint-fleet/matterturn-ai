# MatterTurn Ai

Private product demonstration migrated from Sites version 26, source commit c6a3b380e23a5666e7b1c96f99522332bc029711.

## Development
Use Node 24 and run `npm ci`, `npm run dev`. Validate with `npm run typecheck` and `npm run build`.

## Private deployment
Keep Vercel Authentication enabled for **all deployments**, including production aliases. Do not attach an unprotected custom domain. The noindex header is supplementary and is not access control. Intended project name: `matterturn-ai`.

## Intake migration limitation
Sites used ChatGPT authenticated identity headers and Cloudflare R2 storage. These are not available on Vercel. The original source is preserved in `migration/`. The submissions endpoint returns 503 and never claims to save files. Persistent authenticated storage must be configured before intake is re-enabled. This migration does not copy existing submissions.

## Preserved assets
Nine languages, pages, layout, contact details, video and poster are retained. Video/poster filenames retain their historical names; their bytes are unchanged. Main brand text is MatterTurn Ai.
