# Case & Failure History

One published client case does not mean one case exists in total — it means one case has cleared the bar for public, client-identifying-detail-free release. MatterTurn's systems are built and corrected through many more development, validation, and failure cases than are publicly released. This page gives the honest shape of that history per system, categorized correctly rather than lumped together as "cases."

**Category key**, used consistently below:
- **Public client / professional case** — a real client/professional decision, generalized, released publicly.
- **Historical validation** — a backtest or blind validation run against real historical material, not a live client engagement.
- **Engineering case** — a real internal build/run, disclosed to show how the system was built or corrected, not a client result.
- **Synthetic case** — exercised against constructed, not live, data.
- **Research case** — exploratory integration work, not yet a tested capability.
- **Failure record** — a preserved negative result: wrong assumption, integration/environment/model failure, evaluation leakage, unsupported conclusion, or a zero/negative outcome.

## Real Estate

- **Public client / professional case:** the U.S. select-service hotel acquisition screening (MORE DILIGENCE REQUIRED, BLOCKED, 11 unresolved facts) — see [`cases/`](../cases/).
- **Historical validation:** blind validation work against historical material exists as part of the system's internal development; no independent public record is linked from this repository yet.
- **Research case:** Japan public-asset research, including PLATEAU / CityGML (Yokohama) spatial-data integration — candidate-stage, not verified legal status (see [`company/engineering-evidence.md`](engineering-evidence.md)).
- **Failure record:** candidate/blocked/rejected underwriting outcomes are part of normal system operation, not hidden exceptions; evidence-integrity and contamination lessons (e.g., distinguishing a source's own claim from independently verified fact) have shaped the evidence-admission mechanism described in engineering evidence.

## Banking Frontline

- **Synthetic case:** a multi-issue customer scenario exercising ObservedFact/Proposition structuring, policy applicability, and concurrent-issue handling.
- **Engineering case:** persistence, restart-recovery, and independent-readback behavior have been exercised as part of the system's internal "Phase 10" engineering work (see [`company/engineering-evidence.md`](engineering-evidence.md) for its Candidate labeling).

## Financial Securities

- **Historical fixture:** evidence/state/horizon test fixtures exist internally to validate the system's structure — disclosed as a description, not linked to a public fixture file (see [`cases/`](../cases/)).
- **Research case:** distinguishing slow-moving fundamental state from fast market-event transmission is an active area of the system's design, not a finished capability.

## Travel

- **Engineering case:** ten end-to-end acceptance test cases (E2E-01–E2E-10) run on one real device against the mobile/backend pipeline (see [`systems/travel/`](../systems/travel/)).
- **Failure record / known limitation:** the professional judgment layer — the part that decides which travel options are actually sound — is explicitly incomplete. The pipeline runs end to end; the judgment it's meant to carry does not yet.

## Sales Opportunity

- **Engineering case / failure record:** a described self-correction run — a research-and-capture pipeline hit a result-integrity failure, the failure was preserved rather than hidden, the classifier was fixed, the pipeline was rerun, and the result was still `0 valid candidate` / `0 verified opportunity`. No independent run date or log is linked from this repository (see [`cases/`](../cases/)).
- The system being allowed to conclude there is no opportunity is a design property: a workflow that can only ever report "opportunity found" has not been meaningfully tested.

## Morocco Local Life

- **Research case:** residency and administrative-process (e.g., AMO-equivalent) scenarios, and legal-timing / geographic-boundary edge cases, are part of the system's early research work. No public case is released for this system yet.

## International Market & Brand, Cross-border Goods Trade, Medical Business

No additional case or failure history beyond what's already stated in [`systems/`](../systems/) for these systems at this time.

## Why failures are kept, not deleted

See [`company/principles.md`](principles.md) for this as a standing company principle. In short: a system that only shows successes hasn't shown you how it handles being wrong, and a documented failure lets later systems check for the same failure earlier instead of rediscovering it from scratch — a reduction in repeat-failure risk, not a guarantee against recurrence.
