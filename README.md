# MatterTurn Ai

Private product demonstration migrated from Sites version 26, source commit c6a3b380e23a5666e7b1c96f99522332bc029711.

## Chiang Mai Build Lab 2026

Public competition material for **MatterTurn RWA Judgment Continuity for Solana** is available in [`build-lab/`](build-lab/).

> Tokenized assets can have live onchain prices while the professional judgment behind them becomes stale. MatterTurn tests whether new real-world evidence materially changes the prior judgment, then publishes the current judgment state to Solana.

The Build Lab material is public-safe. The proprietary MatterTurn judgment runtime, private case evidence, and reconstruction-enabling professional assets remain private.

## Development
Use Node 24 and run `npm ci`, `npm run dev`. Validate with `npm run typecheck` and `npm run build`.

## Private deployment
Keep Vercel Authentication enabled for **all deployments**, including production aliases. Do not attach an unprotected custom domain. The noindex header is supplementary and is not access control. Intended project name: `matterturn-ai`.

## Intake migration limitation
Sites used ChatGPT authenticated identity headers and Cloudflare R2 storage. These are not available on Vercel. The original source is preserved in `migration/`. The submissions endpoint returns 503 and never claims to save files. Persistent authenticated storage must be configured before intake is re-enabled. This migration does not copy existing submissions.

## Preserved assets
Nine languages, pages, layout, contact details, video and poster are retained. Video/poster filenames retain their historical names; their bytes are unchanged. Main brand text is MatterTurn Ai.
