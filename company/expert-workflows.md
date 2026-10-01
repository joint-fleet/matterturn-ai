# Expert Workflows

MatterTurn's systems aren't "many products." Each one is an abstracted version of how a specific professional actually works through a decision — organized into a workflow of expert roles, not a single prompt. This page shows the shape of that workflow per system, without publishing the internal skill/capability registry behind it.

**These are not fixed pipelines that run in full every time.** Steps are selected dynamically based on the question — a system doesn't call every expert role on every question, the same way a human team doesn't convene everyone for every question either.

## Real Estate (Advanced Engineering / Controlled Validation)

```text
Investment question
      │
      ▼
Evidence review
      │
      ▼
Legal / land / market / finance / development / operations
      │
      ▼
Model selection
      │
      ▼
Gap detection
      │
      ▼
Risk / opportunity
      │
      ▼
Senior synthesis
      │
      ▼
Decision
      │
      ▼
Reopen when reality changes
```

## Banking Frontline (Active Engineering — synthetic, not connected to a real bank)

```text
Customer situation
      │
      ▼
Observed facts
      │
      ▼
Propositions
      │
      ▼
Multiple concurrent issues
      │
      ▼
Policy applicability
      │
      ▼
Action prerequisites
      │
      ▼
Human approval
      │
      ▼
Execution
      │
      ▼
Independent readback
      │
      ▼
World-state update
```

## Financial Securities (Active Engineering — research/engineering validation only)

```text
Real-world event
      │
      ▼
Evidence
      │
      ▼
State
      │
      ▼
Horizon
      │
      ▼
Transmission
      │
      ▼
Fundamental / market separation
      │
      ▼
Judgment
      │
      ▼
Reassessment
```

## Sales Opportunity (Active Engineering — not a mature sales product)

```text
World sensing
      │
      ▼
Problem discovery
      │
      ▼
Buying behavior
      │
      ▼
Change trigger
      │
      ▼
Access node
      │
      ▼
Qualification
      │
      ▼
Falsification
      │
      ▼
Opportunity / HOLD / no opportunity
```

This is not an automated "AI finds you customers" pipeline — see [`cases/`](../cases/) and [`company/case-and-failure-history.md`](case-and-failure-history.md) for the real run that concluded `0 verified opportunity` and why that's a feature of the workflow, not a failure of the demo.

## Expert role families

Each system's workflow is built from a family of expert roles — not one generalist model asked everything at once. Roles are abstracted here, not enumerated as internal identifiers:

- **Real Estate:** investment, underwriting, finance, development, legal / regulation, market, land, operations, senior synthesis.
- **Banking Frontline:** frontline service, policy applicability, risk / escalation, action / readback.
- **Financial Securities:** evidence / state, fundamental analysis, horizon / transmission, valuation / capital judgment.
- **International Market & Brand:** market sensing, consumer / local reality, positioning, narrative, activation, measurement / feedback.

**These are expert roles and workflows, not a roster of long-term, individually-named human employees.** Some roles are carried out by AI agents operating inside a defined workflow boundary; others require human expert input, especially at senior synthesis, approval, and review points. Where a role requires a human expert, that's stated as part of the workflow (e.g., "human approval," "senior synthesis") rather than left implicit.

## What's deliberately not shown here

Internal skill/capability registry identifiers, routing thresholds, prompt content, and the reconstruction-enabling detail of how a step is implemented. What's shown is the shape of the workflow — which roles exist and in what order they're typically consulted — not how to rebuild it.
