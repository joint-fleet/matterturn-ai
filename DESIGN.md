# MatterTurn Ai — Design contract

This is the design reference for future websites, demos, customer pages and event exhibits. It records the existing MatterTurn visual language and adds explicit rules for surfaces not yet established. It does not change the production site or authorize publishing.

## Brand character

MatterTurn Ai builds professional judgment systems connecting real-world evidence, expert workflows and changing conditions. Present clarity, responsibility and uncertainty honestly. The current voice is “See the world. Judge with clarity.” Use editorial restraint, substantial typography, monochrome surfaces and real evidence. The site should read like a professional practice with inspectable work.

Do not promise autonomous expertise, investment returns, production readiness or client outcomes without evidence. A registered capability, demo, engineering test and professional validation are different claims. Keep their labels visible.

## Existing source of truth

This abstraction was checked against `main` SHA `7caf6c34498247060c4a0b75b535b56938ea3b8e` on 2026-10-04 UTC:

- `lib/site-config.ts`: brand definition, title, evidence-oriented description and indexing boundary.
- `app/globals.css`: ink/paper tokens, serif display/body stacks, shell, borders, section rhythm, responsive rules and maturity badges.
- `components/home-view.tsx`: photographic cover → editorial statement → brand film → systems → trust flow → responsibility → evidence hub → cases → next step.
- `components/site-header.tsx`, `systems-catalog.tsx`, `case-library.tsx`, `trust-flow.tsx`, `responsibility-section.tsx`, `evidence-hub.tsx`: navigation and proof hierarchy.
- `components/workspace-view.tsx`, `projects-view.tsx`, `product-view.tsx` and `lib/i18n.ts`: intake, projects, problem/detail pages and locale behavior.

The repository was inspected; pixel parity with the currently deployed website was not independently browser-verified in this documentation change. Do not assume a deployment matches this SHA.

## Color and light/dark behavior

| Token | Existing value | Use |
| --- | --- | --- |
| ink | `#171717` | Primary text, strong rules, primary actions |
| paper | `#ffffff` | Default canvas |
| line | `#d7d7d7` | Dividers, card and input boundaries |
| soft | `#f0f0f0` | Neutral secondary surface |
| muted | `#606060` | Secondary descriptions |
| accent | `#525252` | Restrained emphasis; not a neon brand color |

The current site is light-first. Dark sections are intentional narrative contrast (`#1b1b1b`, white text), not evidence of a complete dark-mode system. Keep data and screenshots in their native color context. Do not auto-invert assets or switch the whole site with OS dark preference. A future full dark theme requires separately checked text, focus, chart and status contrast.

The photographic cover's black transparency gradient is a readability treatment. It does not authorize decorative gradient meshes. Keep status meaning in text and shape as well as color.

## Typography

- Body: existing stack `Candara, Avenir Next, Trebuchet MS, Noto Sans, sans-serif`; baseline 16px / 1.55.
- Display: `Palatino Linotype, Book Antiqua, Palatino, Noto Serif, serif`; weight 400, restrained negative tracking for Latin display headings.
- Large editorial headings use fluid `clamp()` sizing, approximately 3.8–8.7rem for the main statement, with tight display leading. Supporting titles scale down rather than copying hero size everywhere.
- Body copy, labels and numeric data must remain readable. Use tabular figures when supported for comparable numbers, timestamps and money; include units and timezone.
- Preserve locale-specific line wrapping. Existing RTL display fallback uses Tahoma/Arial with zero negative tracking and more leading. Do not apply Latin tracking or force English line breaks to Arabic/CJK.
- Use small uppercase overlines sparingly for Latin section context; no all-caps body paragraphs. Do not require proprietary fonts from external brand examples.

## Spacing and layout

Existing desktop shell is `min(100% - 96px, 1432px)`. Preserve its wide editorial rhythm, then reduce gutters on small screens according to the existing CSS. Use a simple proposed spacing vocabulary of 8, 12, 16, 24, 32, 48, 64 and 96px for new UI; it is a convenience scale, not a claim that current CSS is tokenized.

Major sections have about 96–120px vertical separation on desktop. Separate ideas with white space and thin horizontal rules. Use asymmetric two-column layouts for questions and explanations; collapse to a single reading sequence on mobile. Constrain prose to a comfortable measure rather than filling a wide data shell.

## Page hierarchy and navigation

- One meaningful H1. Then the decision/problem, system scope, evidence, limitations and next step.
- Home retains the existing sequence listed above. New pages may use only the parts needed for their purpose.
- Systems catalogue links to a specific professional problem and evidence, not to generic AI feature promises.
- Detail pages show the question, what the system does, what it cannot establish and relevant cases before asking for a commitment.
- Customer pages lead with the customer's authorized problem, relevant deliverable and responsible reviewer. Event pages lead with the demonstrated workflow and its maturity.
- Preserve locale-aware links and the distinction between English root routes and `app/[locale]` routes. Respect RTL direction and semantic heading order.

## Data display and tables

Use tables for comparison, capability status and evidence mapping. Include caption/context, source/as-of, units, denominator and any unavailable values. Align numeric columns consistently; allow wrapping for evidence text. UNKNOWN, missing, not applicable and zero are different values. Do not render missing evidence as a zero, a success badge or a fabricated chart point.

Use understated charts with explicit axes and source notes. A case diagram or trust-flow strip may clarify a process, but must not imply steps actually executed when they are planned. Wide tables use a locally scrollable, labelled container on mobile; preserve headers and row identity rather than compressing text to illegibility. Do not make the entire page scroll sideways.

## Case-study presentation

Present: problem → scope and historical/as-of boundary → evidence examined → judgment/action boundary → observed result → limitations and next review trigger. Separate engineering verification from professional validation and real-world outcome. Current case cards and maturity badges provide entry points; detail pages provide the proof.

Show date, source, relevant system and maturity. Link to inspectable evidence where authorized. Never infer a customer endorsement from a case, claim a historical replay was independently blind, or fabricate before/after results. If a case declined to make a judgment, show that as a professional boundary rather than hide it.

## Cards

Use cards only for comparable navigable objects: a system, a case or an evidence package. Existing cards are white, thin-bordered, with a serif title, muted explanation and explicit status. Maintain one clear primary link. Dense argumentation should use sections, rows or tables.

Existing hover movement is subtle (about -3px with a faint shadow over .2s). New cards should not add dramatic tilt, glass, glowing outlines or large decorative icons. Avoid nested grids of generic “AI-powered” benefits.

## Forms and CTA

Preserve the current case-intake/workspace orientation. Use explicit labels, helpful field descriptions, required/optional distinctions and accessible error summaries. Keep validation, consent and authorization visible. Attachment UI must state what was received and what can be inspected; a chosen filename is not proof of successful upload.

The current CTA language favors exploring systems, viewing evidence and starting a case. Use a single main action appropriate to the reader's stage, with restrained text links or ink-outline/solid controls. Do not add fake urgency, unverified “trusted by” logos, meaningless metrics or a default “Start free” funnel.

## Mobile and responsive behavior

Current rules use breakpoints around 900, 750 and 650px depending on component. Preserve content priority rather than forcing one global breakpoint. Case grids move 4 → 2 → 1 columns; evidence grids collapse at about 900px; prose/detail columns collapse earlier when necessary. Navigation wraps intentionally; do not silently hide essential routes.

For future controls, target at least 44px usable touch areas and visible keyboard focus. Check 320/375/390px widths, long localized titles, RTL, attachment names and table overflow. Make no mobile layout depend on hover. Preserve image crop intent while keeping headings and captions readable.

## Animation limits

Use motion only to explain a state change or acknowledge an interaction. Existing card transitions are short and subdued; preserve `prefers-reduced-motion`, including scroll behavior. No autoplay hero video, parallax, looping decorative particles, scroll-jacking, delayed text reveals or animated counters that imply unverified activity. Brand film must remain a user-controlled piece of content.

## Screenshots and evidence display

Use real screenshots of the relevant version, with caption, capture/as-of date, source and maturity. Crop to the decision being explained without hiding uncertainty, errors or boundary labels. Distinguish screenshots, illustrative mockups and generated images. Never fabricate a screenshot as proof of a working product.

Redact client data, credentials and restricted material before publication. Provide readable alt text and a larger view when detailed evidence matters. Decorative cover photography can have empty alt text; substantive evidence cannot. Frame screenshots with a neutral border and context, not invented browser chrome or futuristic glow.

## Professional enterprise presentation

Every material capability claim needs an evidence path and a scope. State who reviews/owns the decision and what triggers renewed review. Keep research, active engineering, engineering validation and professional validation distinct, following the existing maturity presentation. Do not use planned capabilities as current offer claims.

For demos and customer pages, show the actual inputs, scoped result, uncertainty and authorized next action. Prefer one useful, inspectable workflow to a wall of badges. External tooling remains replaceable; UI must not imply MatterTurn's expert identity depends on a vendor.

## Forbidden AI-looking patterns

- Excessive gradients, neon glow, glassmorphism and ornamental mesh backgrounds.
- Generic AI card stacks, robot/sparkle icons for every concept, or animated “intelligence” decorations.
- Template SaaS homepages dominated by inflated metrics, testimonial placeholders and interchangeable three-tier pricing.
- Copying Claude, Vercel, Lovable or another brand's palette, proprietary type or component identity.
- Screenshots presented as evidence without version/source; invented customer outcomes and misleading readiness badges.
- Simplifying away errors, validation, uncertainty or review responsibility to make a demo look successful.

## Method attribution and review

The DESIGN.md documentation method was studied in VoltAgent/awesome-design-md at SHA `f6961238d5cddcf8042a74a70fc400ec67181abb` (MIT; Copyright (c) 2026 VoltAgent). Apple and Stripe sample structures were inspected for token/typography/component organization only. Their brand language, assets, fonts and palettes are not adopted or copied. Upstream license: https://github.com/VoltAgent/awesome-design-md/blob/f6961238d5cddcf8042a74a70fc400ec67181abb/LICENSE

Before future implementation, read this file and the relevant existing component/CSS. Explain any deliberate deviation. Validate representative desktop/mobile/RTL/reduced-motion states and evidence labels. This document is a proposed additive reference under Draft PR review; no production change is included.
