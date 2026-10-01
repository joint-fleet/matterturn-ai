# Capability Evolution & the Central Capability Library

MatterTurn does not rebuild every mechanism from zero for each new domain. Real work on one system feeds a central capability library — a second growth chain, alongside judgment continuity — that later systems check before building something new:

```text
New problem
   │
   ▼
Check existing assets in the Central Capability Library
   │
   ▼
Reuse
   │
   ▼
Adapt
   │
   ▼
Domain-local
   │
   ▼
Build a new candidate only if necessary
```

This is a meaningful part of why one founder, working with agents and domain experts (see [`company/operating-model.md`](operating-model.md)), can keep entering new domains instead of starting over each time.

## What the library holds

Internally, MatterTurn tracks this through a central capability-asset mechanism with at least four kinds of record, organized by expert-role families (see [`company/expert-workflows.md`](expert-workflows.md)), with reuse-before-build as a standing rule:

- **Reusable capabilities** — mechanisms proven out in one system and available to the next.
- **Candidate capabilities** — mechanisms built for one system, not yet proven elsewhere, available to try.
- **Capability combinations** — capabilities that have been composed together for a specific kind of problem.
- **Failure memory** — preserved negative results (see [`company/case-and-failure-history.md`](case-and-failure-history.md) and [`company/principles.md`](principles.md)).

Each record also carries provenance (where it came from), use/test history, known limitations, and reuse boundaries (where it stops applying). **This repository does not publish the registry's internal identifiers, exact counts, or internal structure** — those are reconstruction-enabling implementation detail. Publishing that this library exists and roughly what it holds is not the same as publishing it.

**This page describes engineering practice and a governing design rule, not a demonstrated public instance.** No source-system → candidate-capability → receiving-system example is published or linked from this repository yet. Treat the flow and the reuse/never-reuse lists below as a statement of how MatterTurn intends to and internally reports working, not as independently verified evidence of a specific capability moving between two named systems.

## What actually gets reused

- Evidence discipline — how a claim is traced back to its source and kept auditable.
- State management — how a judgment's state is tracked and versioned over time.
- Selective reopening — the mechanism for finding and reopening only the affected part of a judgment.
- Provenance — where a piece of evidence or a conclusion came from.
- Evaluation — how a system's output is checked against an expected result.
- Execution / readback separation — doing a thing and independently confirming what actually happened are kept as separate checks.
- Failure memory — a documented wrong assumption, integration failure, environment failure, model failure, evaluation leakage, or unsupported conclusion is preserved, not discarded, so later systems can check for the same failure earlier.
- Capability selection / combination — choosing and combining existing reusable pieces instead of writing new ones by default.

## What never gets reused across domains

- Legal conclusions.
- Industry-specific thresholds.
- Commercial rules.
- Professional judgment conclusions themselves.

Real estate underwriting rules do not become banking rules. A capability moving between domains carries engineering discipline with it — not another domain's substantive answer.

## Failure as an asset

If a system produces a wrong assumption, an integration failure, an environment failure, a model failure, evaluation leakage, or an unsupported conclusion, MatterTurn keeps that record rather than quietly discarding it. The next system built is checked against that failure history, so the same failure can be checked for before it is rediscovered from scratch — this reduces the risk of repeating it, it does not guarantee a failure can never recur. This is a meaningful part of MatterTurn's credibility: a system that only shows successes hasn't shown you how it handles being wrong.
