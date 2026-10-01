# MatterTurn RWA Judgment Continuity for Solana

**Chiang Mai Build Lab · Superteam Thailand · 2026-10-02**

Tokenized real-world assets can have live onchain prices while the professional judgment behind them quietly becomes stale.

MatterTurn is testing a simple idea:

> **When reality changes, decide whether the prior judgment still holds — and publish the current judgment state to Solana.**

## Core demo

Two tokenized assets receive the same real-world event:

**Anchor tenant will not renew.**

- Asset A: anchor tenant contributes ~5% of NOI → **CHANGE OBSERVED / JUDGMENT CURRENT**
- Asset B: anchor tenant contributes ~45% of NOI → **MATERIAL CHANGE / REASSESSMENT REQUIRED**

The point is not to alert on every change. The point is to decide whether the change is material to the prior judgment.

## Build Lab scope

Existing MatterTurn capabilities provide the professional judgment foundation. The Build Lab prototype focuses on the new public integration layer:

1. cross-time judgment continuity adapter;
2. material-change state projection;
3. Solana state publication;
4. compact demo UI;
5. frozen, auditable test cases.

## Public / private boundary

This repository contains public-safe project material and the competition-facing integration layer.

The proprietary MatterTurn judgment runtime, private case evidence, internal orchestration, and reconstruction-enabling professional assets remain private.

See:
- [Architecture](ARCHITECTURE.md)
- [Demo scenario](DEMO_SCENARIO.md)
- [Existing vs Build Lab scope](EXISTING_VS_BUILD_LAB.md)
- [Audit plan](AUDIT_PLAN.md)

## Intended state model

```text
JUDGMENT_CURRENT
CHANGE_OBSERVED
REASSESSMENT_REQUIRED
JUDGMENT_REFRESHED
```

**MatterTurn doesn't alert on change. It decides whether the change matters.**
