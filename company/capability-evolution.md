# Capability Evolution

MatterTurn does not rebuild every mechanism from zero for each new domain. Real work on one system feeds a second growth chain, alongside judgment continuity:

```text
Real work
   │
   ▼
Reusable capability / candidate
   │
   ▼
Evidence & failure history
   │
   ▼
Reuse / adapt / domain-local
   │
   ▼
Next system
```

Internally, MatterTurn tracks this through a central capability-asset mechanism (capability, candidate, failure and composition records, organized by expert-role families, with reuse-before-build as a standing rule). This repository does not publish that registry's internal identifiers, counts, or structure — those are reconstruction-enabling implementation detail. What's below is the public-safe shape of how it works.

## What actually gets reused

- Evidence discipline — how a claim is traced back to its source and kept auditable.
- State management — how a judgment's state is tracked and versioned over time.
- Selective reopening — the mechanism for finding and reopening only the affected part of a judgment.
- Provenance — where a piece of evidence or a conclusion came from.
- Evaluation — how a system's output is checked against an expected result.
- Execution / readback separation — doing a thing and independently confirming what actually happened are kept as separate checks.
- Failure memory — a documented wrong assumption, integration failure, environment failure, model failure, evaluation leakage, or unsupported conclusion is preserved, not discarded, so the next system doesn't repeat it.
- Capability selection / combination — choosing and combining existing reusable pieces instead of writing new ones by default.

## What never gets reused across domains

- Legal conclusions.
- Industry-specific thresholds.
- Commercial rules.
- Professional judgment conclusions themselves.

Real estate underwriting rules do not become banking rules. A capability moving between domains carries engineering discipline with it — not another domain's substantive answer.

## Failure as an asset

If a system produces a wrong assumption, an integration failure, an environment failure, a model failure, evaluation leakage, or an unsupported conclusion, MatterTurn keeps that record rather than quietly discarding it. The next system built is checked against that failure history before it's allowed to repeat the same mistake. This is a meaningful part of MatterTurn's credibility: a system that only shows successes hasn't shown you how it handles being wrong.
