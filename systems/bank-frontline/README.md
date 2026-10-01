# Banking Frontline Service

**Maturity: Active engineering / validation.**
**Synthetic institutional engineering system. Not connected to a real bank. Not approved for real customer decisions.** This is stated here directly, not in a footnote — the limit itself is part of what makes the rest of this page credible.

**Problem addressed:** What a bank service team can confirm for a customer's question right now, and what needs specialist review instead of a guess.

**Judgment supported:** ObservedFact / Proposition structuring across multiple concurrent issues, policy applicability and conflict handling across decision contexts, action prerequisites gated by human approval, execution kept separate from independent readback, world-state versioning with selective reevaluation, and durable state with persistence, restart recovery, and idempotency.

**Current public status:** In development, targeting a "Phase 10" engineering milestone including a red-team acceptance pass. These facts are disclosed as an internal description, not linked to a public build log or test report. See [`company/engineering-evidence.md`](../../company/engineering-evidence.md) for the full fact list and its Candidate labeling.

**What you can use this for:**

- Evaluate a customer who raises several problems at once, keeping each one's decision logic genuinely separate
- Determine what can proceed immediately versus what is blocked, with the specific reason named
- Distinguish what a customer reported from what is actually confirmed
- Reassess after human approval and real-world execution diverge from the plan

**What you actually get:** structured fact intake, multi-issue state tracking, policy and eligibility gating, conflict surfacing, separation of approval/execution/verification, and communication guardrails. Demonstrated today on one synthetic, non-production case — see [the case](../../cases/library/bank-composite-case.md).

**Link:** Product page on the [website](../../website/) (`/systems/banking-frontline`).
