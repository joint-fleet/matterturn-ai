# Pre-build technical baseline

This directory freezes the **pre-event** technical contract for the Chiang Mai Build Lab prototype.

It deliberately does **not** contain a working Solana integration or a completed judgment-continuity runtime.

## What is frozen before the event

- state vocabulary;
- public-safe input/output contract;
- two deterministic demo assets;
- one shared real-world event;
- expected outcomes;
- minimal Solana state shape;
- acceptance tests.

## What remains Build Lab work

- executable continuity adapter;
- connection to the MatterTurn judgment engine boundary;
- Solana devnet write/read;
- transaction signature capture;
- demo UI;
- automated test runner and audit surface.

This separation makes the event-day engineering increment auditable in Git history.

## Minimal runtime path

```text
fixture / new event
      |
      v
continuity adapter
      |
      v
materiality result
      |
      +--> affected judgments
      +--> preserved judgments
      |
      v
judgment continuity state
      |
      v
Solana devnet
```

## Acceptance rule

The prototype is not complete merely because it produces an alert.

It must demonstrate all of the following:

1. the same event can produce different outcomes for different asset exposure;
2. an irrelevant or immaterial change does not force reassessment;
3. affected judgment areas are identified;
4. unrelated judgment areas are preserved;
5. the resulting state is independently readable from Solana devnet.
