# RWA Judgment Continuity

A long-term product view of the capability being prototyped for the [Chiang Mai Build Lab 2026](../../competitions/chiang-mai-build-lab-2026/) competition.

## The idea

Tokenized real-world assets can carry a live onchain price while the professional judgment behind them quietly goes stale. This demo explores what it looks like to keep that judgment connected to reality instead of frozen at the moment it was made.

```text
Reality changes
      |
      v
MatterTurn evaluates materiality
      |
      v
Affected prior judgments reopen  ·  Unaffected judgments remain valid
      |
      v
Current judgment state becomes machine-consumable
```

The same real-world event can be immaterial to one asset and decision-changing for another — the system's job is to tell the two apart, not to alert on every change.

## Status

**This is a prototype-stage, in-development capability — not a production system.** Full cross-time judgment continuity (continuous evidence ingestion, automatic materiality assessment across many judgment types, and durable onchain publication) does not exist yet as a general product. What exists today is the frozen demo scope described in the [Build Lab materials](../../competitions/chiang-mai-build-lab-2026/): two deterministic test assets, one shared event, and the expected-outcome contract the event-day build is measured against.

No production Solana program, live judgment engine integration, or working end-to-end pipeline is included in this repository ahead of the competition.

## Related

- [Competition entry: Chiang Mai Build Lab 2026](../../competitions/chiang-mai-build-lab-2026/)
- [Company capabilities](../../company/capabilities.md)
