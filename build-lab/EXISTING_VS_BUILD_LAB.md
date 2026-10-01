# Existing foundation vs Build Lab work

## Existing MatterTurn foundation

Before Chiang Mai Build Lab, MatterTurn already had private professional-judgment infrastructure for:

- structured professional opinions;
- professional impact messages;
- assumption invalidation;
- reassessment-required states;
- selective cross-domain impact;
- routing acknowledgment before re-opening affected work;
- material-change handling;
- case continuity and evidence-version controls.

These capabilities are **not** presented as work created during the Build Lab.

## Build Lab prototype scope

The competition build is intended to add a thin, public-facing integration layer:

```text
previous judgment snapshot
        +
new real-world event
        |
        v
judgment continuity adapter
        |
        v
current judgment state
        |
        v
Solana
```

Planned Build Lab deliverables:

1. a minimal previous-judgment snapshot format;
2. new-event ingestion for the frozen demo cases;
3. continuity-state projection;
4. Solana devnet state update;
5. demo UI;
6. audit surface showing expected vs actual outcomes.

## What is deliberately not public

- production runtime source;
- private customer or case evidence;
- internal professional assets;
- proprietary routing / orchestration details;
- reconstruction-enabling schemas.

This separation is intentional: the competition demonstrates the new integration without exposing the proprietary judgment engine.
