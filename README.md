# MatterTurn Ai

MatterTurn builds judgment systems that keep professional decisions connected to changing reality.

Generic AI gives answers. MatterTurn is built around a narrower, harder question: after reality changes — a new event, a new piece of evidence, a new market condition — does a professional's prior judgment still hold? If not, what specifically needs re-judging, and what action follows? The goal isn't to alert on every change; it's to decide whether the change actually matters to a decision someone already made.

## In this repository

- [**Company**](company/) — vision, principles, capabilities, and how we work.
- [**Systems**](systems/) — public-safe index of MatterTurn's judgment system categories.
- [**Competitions**](competitions/) — active public competition entries, e.g. [Chiang Mai Build Lab 2026](competitions/chiang-mai-build-lab-2026/).
- [**Demos**](demos/) — long-term product concepts shown publicly ahead of full production, e.g. [RWA Judgment Continuity](demos/rwa-judgment-continuity/).
- [**Cases**](cases/) — public case studies (none published yet; see [`cases/README.md`](cases/README.md)).
- [**Research**](research/) — public research write-ups (none published yet; see [`research/README.md`](research/README.md)).
- [**Website**](website/) — the live product website, built from this repository (see [`website/README.md`](website/README.md) for current layout).

## What's public vs. private

This repository shows MatterTurn's public-facing company material, system descriptions, competition entries, and demo concepts. It deliberately does **not** include MatterTurn's core judgment runtime, private case evidence, internal orchestration, or any reconstruction-enabling professional assets — those stay in private repositories. Where a capability shown here is still a prototype or a plan rather than a verified, production capability, that status is stated explicitly rather than implied away. See [`company/capabilities.md`](company/capabilities.md).

## Development

The website is a Next.js app at the repository root. Use Node 24, run `npm ci`, then `npm run dev`. Validate with `npm run typecheck` and `npm run build`. See [`website/README.md`](website/README.md) for the current repository-layout note, and the sections below (preserved from the previous README) for deployment and migration details.

## Private deployment

Keep Vercel Authentication enabled for **all deployments**, including production aliases. Do not attach an unprotected custom domain. The noindex header is supplementary and is not access control. Intended project name: `matterturn-ai`.

## Intake migration limitation

The original Sites-era intake used ChatGPT authenticated identity headers and Cloudflare R2 storage, neither available on Vercel. The original source is preserved in `migration/`. The submissions endpoint returns 503 and never claims to save files. Persistent authenticated storage must be configured before intake is re-enabled. This migration does not copy existing submissions.

## Preserved assets

Nine languages, pages, layout, contact details, video and poster are retained. Video/poster filenames retain their historical names; their bytes are unchanged. Main brand text is MatterTurn Ai.
