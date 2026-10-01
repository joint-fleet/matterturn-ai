# Engineering Evidence

Public-safe engineering facts, organized by system. A fact-by-fact breakdown by engineering status currently exists only for Real Estate — the system with the most mature internal audit trail. For every other system, the facts below describe internal engineering work; unless a public source link is given, they are **not independently verifiable from outside MatterTurn** and should be read as a disclosed description, not as externally-audited proof. No private source code, private case evidence, or internal capability-registry identifiers are included or linked.

## Real Estate

**Established Engineering (source-side):** what has been built and is running as code, independent of any approval mechanism.
- Package-first canonical execution — professional work is organized around a packaged, repeatable execution path rather than ad-hoc prompting.
- Nine professional capabilities covering investment, underwriting, valuation, finance, development, market, legal, operations, and senior-management judgment (see [`joint-fleet/real-estate-expert-system`](https://github.com/joint-fleet/real-estate-expert-system)).
- Dynamic capability discovery / routing, evidence admission, knowledge activation, model execution, selective reopening, synthesis and receipts.
- Tests and CI exist for the runtime.
- One published, public-safe real-case result: a U.S. select-service hotel acquisition screening (MORE DILIGENCE REQUIRED, underwriting BLOCKED, 11 material unresolved facts preserved). See [`cases/`](../cases/).

**Formal runtime / authority mechanism:** a separate, specific fact about how a conclusion gets approved — not a status of the source code itself.
- A formal runtime / authority mechanism exists and distinguishes an approved conclusion from a draft one. This is a statement about execution authority (what counts as approved), not about which source branch or build the engineering above lives on.

**Candidate / Research frontier:**
- Japan legal routing and candidate integration with official Japanese regulatory sources.
- PLATEAU / CityGML (Yokohama) research integration — MatterTurn has connected to real Japanese spatial/regulatory data sources and built an observation / identity-candidate / evidence-boundary mechanism around them. No public source record (dataset snapshot, query log, or output sample) is linked from this repository yet — this claim rests on internal description only, pending a public-safe artifact to link.

**Explicitly not claimed:** MatterTurn has **not** verified the legal status of any Japanese asset, has **not** completed formal commercial real-estate due diligence in Japan, and PLATEAU data does **not** feed automatically into a formal investment conclusion. Spatial evidence today has an explicit admission and identity-matching boundary — it is candidate-stage, not formal.

## Banking Frontline

**Synthetic institutional engineering system — not connected to a real bank, not approved for real customer decisions.** This limitation is stated here, not buried in a footnote, because it is itself part of what makes the engineering credible.

**Candidate (internally described, not independently sourced from this repository):**
- ObservedFact / Proposition structuring for customer questions, with multiple concurrent issues tracked per case.
- Policy applicability and conflict handling across decision contexts.
- Action prerequisites and a human-approval gate before any action is taken.
- Execution kept separate from independent readback (what the system did vs. what actually happened are checked independently).
- World-state versioning and selective reevaluation (only the affected state is reassessed when something changes).
- Durable state with persistence, restart recovery, and idempotency — engineering work targeting a "Phase 10" milestone of this synthetic system's development, including a red-team acceptance pass. No public build log, test report, or acceptance record is linked here yet.

## Travel

**Candidate (internally described, not independently sourced from this repository):**
- Mobile-first decision workflow built with React Native / Expo.
- A Release-configuration APK was built and run on a real physical device — this refers to a release build artifact used for internal testing, not a public app-store release.
- Backend on FastAPI with a PostgreSQL database; session, storage, and intake handling are implemented.
- Evidence capture, a domain pack, and external connectors exist.
- Ten end-to-end acceptance test cases (identified internally as E2E-01 through E2E-10) were run against the pipeline on a real device. This is **ten test cases on real-device hardware, not ten separate devices** — an earlier draft of this page incorrectly said "10-device end-to-end acceptance," which has been corrected.

**What is still incomplete:** the professional judgment layer — the part that actually decides which travel options are sound for a given traveler — is still under development. The device-and-pipeline plumbing runs end to end; the judgment it's meant to carry does not yet.

## Financial Securities

Public-safe engineering facts, framed around state rather than a trade call:

```text
Evidence → State → Horizon → Transmission → Judgment
```

A single real-world event can simultaneously change fundamental reality, market information, time horizon, valuation assumptions, risk, and optionality — the system is built to keep these distinguishable rather than collapsing them into one "bullish / bearish" label.

**Candidate (internally described, not independently sourced from this repository):** historical fixtures exist internally for testing this evidence/state/horizon structure. No fixture file, dataset, or test-run output is published or linked from this repository — their existence is disclosed as a description, not demonstrated here. Their output is in any case **not** a performance claim.

**Explicitly not claimed:** no trading bot, no buy/sell automation, no alpha claim, no investment advice. This is research / engineering validation only.

## Cross-border Goods Trade

**Candidate (internally described, not independently sourced from this repository):** the system compares seller-platform evidence and supplier claims against destination-market requirements and delivery economics; it is in synthetic testing, meaning it has been exercised against constructed rather than live-platform data. No public test record is linked from this repository yet.

## Sales Opportunity

Not a mature sales product. Its strongest public-safe fact is a self-correction case described in [`cases/`](../cases/) as an Engineering / Learning Case: a research-and-capture pipeline hit a result-integrity failure, the failure was preserved rather than hidden, the classifier that caused it was fixed, the pipeline was rerun, and the result was still `0 verified opportunity`. **This description currently has no independent run date, log, or source artifact linked from this repository** — it is disclosed as a description of real internal engineering work, not demonstrated with an attached record. The system being allowed to conclude there is no opportunity is a design property, not a defect.

## International Market & Brand, Morocco Local Life, Medical Business

No additional public-safe engineering facts beyond what is already stated in [`systems/`](../systems/) for these systems at this time. Their maturity labels there (active engineering/validation, and design/research respectively) stand as the current public-safe status.
