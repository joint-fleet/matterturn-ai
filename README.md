# MatterTurn Ai

## 1. What MatterTurn is

MatterTurn builds judgment systems that keep professional decisions connected to changing reality. It is not a general chatbot or a generic autonomous agent. Each system organizes real evidence, professional assumptions, and expert review around one real decision, and keeps checking — after the first answer — whether that decision still holds.

## 2. The flow: Reality → Evidence → Judgment → Action → Result → New Reality

```text
Reality  →  Evidence  →  Judgment  →  Action  →  Result  →  New Reality
   ^                                                              |
   └──────────────────────  Re-judgment  ────────────────────────┘
```

MatterTurn doesn't answer once and stop. A judgment produces an action and a result, but reality keeps moving — and the new reality becomes the next input, not a one-time output.

## 3. Selective reopening

```text
Reality changes
      │
      ▼
Find the evidence / assumption the prior judgment depended on
      │
      ▼
Is the change material?
      │
      ├── No  → leave the judgment as is
      ▼
Yes
      │
      ▼
Reopen only the affected part — unaffected parts are preserved
      │
      ▼
Human review
      │
      ▼
Updated judgment / action
```

MatterTurn doesn't alert on every change. It decides whether a change is material to a judgment someone already made, and if so, reopens only what that change actually affects.

## 4. What exists today

Alongside Judgment Continuity, MatterTurn has a second real capability-growth chain: **Real Case → Learning → Preserve → Reuse / Adapt → Next System**. Work on one system — including its failures — doesn't stay siloed; it feeds a central capability layer that later systems can build on, without copying domain-specific legal, regulatory, or commercial conclusions across domains. See [`company/capability-evolution.md`](company/capability-evolution.md).

## 5. System evidence

A per-system, honestly-labeled index — not nine equal "products." See [`systems/`](systems/) for the full maturity map, and [`company/engineering-evidence.md`](company/engineering-evidence.md) for what each system's public-safe engineering facts actually are.

## 6. Public cases

Published, public-safe case results — client/professional cases, engineering/learning cases, and historical fixtures are kept clearly distinct. Not every entry has an independently linked source record; where one doesn't, that's stated on the entry itself rather than implied. See [`cases/`](cases/).

## 7. Engineering evidence

Public-safe engineering facts per system. Only Real Estate currently has a fact-by-fact Formal / Candidate / Research-only breakdown with public source links; other systems' facts are disclosed as internal description unless a source link is given. No private source code. See [`company/engineering-evidence.md`](company/engineering-evidence.md).

## 8. Capability reuse & failure memory

How MatterTurn avoids rebuilding every mechanism from zero for each new domain, and why a documented failure is itself an asset. See [`company/capability-evolution.md`](company/capability-evolution.md).

## 9. Maturity map

These are system-level stages, not fact-level labels — they say how far a system is overall, not that every fact about it is independently verified. Only Real Estate currently has the finer Formal / Candidate / Research-only breakdown (see [`company/engineering-evidence.md`](company/engineering-evidence.md)). Real Estate's "proven" status itself reflects engineering verification — tests, CI, a formal runtime, one published case — not independently verified professional effectiveness or commercial ROI, which remain unestablished for every system here.

- **Proven / advanced engineering** — Real Estate Judgment System.
- **Active engineering / validation** — Banking Frontline, Travel, Financial Securities, Cross-border Goods Trade, International Market & Brand, Morocco Local Life, Sales Opportunity.
- **Design / research** — Medical Business and other early-stage systems.

Full per-system detail: [`systems/README.md`](systems/README.md).

## 10. Public / private boundary

This repository shows MatterTurn's public-facing company material, system descriptions, competition entries, demo concepts, and linked public cases. It deliberately does **not** include MatterTurn's core judgment runtime, private case evidence, internal orchestration, reconstruction-enabling schemas, or internal capability-registry identifiers. Where a capability shown here is still a prototype or a plan rather than a verified, production capability, that status is stated explicitly. See [`company/capabilities.md`](company/capabilities.md) and [`company/principles.md`](company/principles.md).

## 11. Where to start

- New here? Start with [`company/vision.md`](company/vision.md) and [`company/capabilities.md`](company/capabilities.md).
- Want proof, not just concept? Go straight to [`company/engineering-evidence.md`](company/engineering-evidence.md) and [`cases/`](cases/).
- Looking for a specific system? [`systems/`](systems/).
- Here for the competition? [`competitions/chiang-mai-build-lab-2026/`](competitions/chiang-mai-build-lab-2026/) and [`demos/rwa-judgment-continuity/`](demos/rwa-judgment-continuity/).
- Here for the live product? [`website/README.md`](website/README.md).
