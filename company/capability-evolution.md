# Capability Evolution & the Central Capability Library

MatterTurn does not rebuild every mechanism from zero for each new domain. A private central capability library exists: real work on one system — including its lessons and failures — feeds it, and later systems check it before starting from scratch.

**This page describes engineering practice and a governing design rule, not a demonstrated public instance, and does not describe the library's internal structure.** No source-system → candidate-capability → receiving-system example, and no internal classification, decision path, or registry detail, is published or linked from this repository.

## What actually gets reused

- Evidence and traceability patterns.
- Judgment-state and review patterns.
- Engineering lessons and failure knowledge.

## What never gets reused across domains

- Legal conclusions.
- Industry-specific thresholds.
- Commercial rules.
- Professional judgment conclusions themselves.

Real estate underwriting rules do not become banking rules. A capability moving between domains carries engineering discipline with it — not another domain's substantive answer.

## Failure as an asset

MatterTurn keeps the record of a system's engineering failures rather than quietly discarding it. A later system can check that history, so a known failure can be caught earlier instead of being rediscovered from scratch — this reduces the risk of repeating it, it does not guarantee a failure can never recur. A system that only shows successes hasn't shown you how it handles being wrong. See [`company/case-and-failure-history.md`](case-and-failure-history.md) and [`company/principles.md`](principles.md).
