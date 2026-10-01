# Engineering Evidence

Public-safe engineering facts, organized by system. Every fact below is either linked to a public-safe source document in this repository or in a linked sibling public repository, or is stated here directly because it is already safe to disclose (no private source code, private case evidence, or internal capability-registry identifiers are included or linked). Where a fact is unverified or still in progress, it is labeled as such rather than implied as done.

## Real Estate

**Formal / Main:**
- Package-first canonical execution — professional work is organized around a packaged, repeatable execution path rather than ad-hoc prompting.
- Nine professional capabilities covering investment, underwriting, valuation, finance, development, market, legal, operations, and senior-management judgment (see [`joint-fleet/real-estate-expert-system`](https://github.com/joint-fleet/real-estate-expert-system)).
- Dynamic capability discovery / routing, evidence admission, knowledge activation, model execution, selective reopening, synthesis and receipts.
- Tests and CI exist for the runtime.
- A formal runtime / authority mechanism distinguishes an approved conclusion from a draft one.
- One published, public-safe real-case result: a U.S. select-service hotel acquisition screening (MORE DILIGENCE REQUIRED, underwriting BLOCKED, 11 material unresolved facts preserved). See [`cases/`](../cases/).

**Candidate / research:**
- Japan legal routing and candidate integration with official Japanese regulatory sources.
- PLATEAU / CityGML (Yokohama) research integration — MatterTurn has connected to real Japanese spatial/regulatory data sources and built an observation / identity-candidate / evidence-boundary mechanism around them.

**Explicitly not claimed:** MatterTurn has **not** verified the legal status of any Japanese asset, has **not** completed formal commercial real-estate due diligence in Japan, and PLATEAU data does **not** feed automatically into a formal investment conclusion. Spatial evidence today has an explicit admission and identity-matching boundary — it is candidate-stage, not formal.

## Banking Frontline

**Synthetic institutional engineering system — not connected to a real bank, not approved for real customer decisions.** This limitation is stated here, not buried in a footnote, because it is itself part of what makes the engineering credible.

Public-safe engineering facts:
- ObservedFact / Proposition structuring for customer questions, with multiple concurrent issues tracked per case.
- Policy applicability and conflict handling across decision contexts.
- Action prerequisites and a human-approval gate before any action is taken.
- Execution kept separate from independent readback (what the system did vs. what actually happened are checked independently).
- World-state versioning and selective reevaluation (only the affected state is reassessed when something changes).
- Durable state with persistence, restart recovery, and idempotency — engineering work targeting Phase 10 of this synthetic system's development, including a red-team acceptance pass.

## Travel

Real device and pipeline facts that are already true, stated honestly alongside what is still incomplete:
- Mobile-first decision workflow built with React Native / Expo, run on a real device with a released APK.
- Backend on FastAPI with a PostgreSQL database; session, storage, and intake handling are implemented.
- Evidence capture, a domain pack, and external connectors exist.
- A 10-device end-to-end acceptance pass has been run against the pipeline.

**What is still incomplete:** the professional judgment layer — the part that actually decides which travel options are sound for a given traveler — is still under development. The device-and-pipeline plumbing runs end to end; the judgment it's meant to carry does not yet.

## Financial Securities

Public-safe engineering facts, framed around state rather than a trade call:

```text
Evidence → State → Horizon → Transmission → Judgment
```

A single real-world event can simultaneously change fundamental reality, market information, time horizon, valuation assumptions, risk, and optionality — the system is built to keep these distinguishable rather than collapsing them into one "bullish / bearish" label.

Historical fixtures exist for testing this structure. Their existence is disclosed; their output is **not** a performance claim.

**Explicitly not claimed:** no trading bot, no buy/sell automation, no alpha claim, no investment advice. This is research / engineering validation only.

## Sales Opportunity

Not a mature sales product. Its strongest public-safe engineering fact is a self-correction case — see [`cases/`](../cases/) for the Engineering / Learning Case: a research-and-capture pipeline hit a real failure, preserved the failure instead of hiding it, had its classifier fixed, reran, and still concluded `0 verified opportunity`. The system is allowed to conclude there is no opportunity — that is a design property, not a defect.

## International Market & Brand, Morocco Local Life, Medical Business

No additional public-safe engineering facts beyond what is already stated in [`systems/`](../systems/) for these systems at this time. Their maturity labels there (active engineering/validation, and design/research respectively) stand as the current public-safe status.
