# Case & Failure History

One published client case does not mean one case exists in total — it means one case has cleared the bar for public, client-identifying-detail-free release. MatterTurn's systems are built and corrected through many more development, validation, and failure work than is publicly released at full case detail. This page gives the honest shape of that history per system.

**Category key**, used consistently below — a public client case is never mixed with internal development work:
- **Public client / professional case** — a real client/professional decision, generalized, released publicly.
- **Internal development work** — historical validation, engineering runs, synthetic exercises, and research integration, disclosed to show how a system was built, tested, or corrected — not a client result.
- **Negative result preserved** — a disclosed instance where a run concluded with no valid outcome, rather than that instance being hidden.

## Real Estate

- **Public client / professional case:** the U.S. select-service hotel acquisition screening (MORE DILIGENCE REQUIRED, BLOCKED, 11 unresolved facts) — see [`cases/`](../cases/).
- **Internal development work:** historical validation against real historical material, and research-stage integration with Japanese spatial/regulatory data (see [`company/engineering-evidence.md`](engineering-evidence.md) for its Candidate/Research labeling) are part of the system's development; no independent public record is linked from this repository yet.

## Banking Frontline

- **Internal development work:** a synthetic multi-issue customer scenario and ongoing engineering work toward a durable, auditable runtime (see [`company/engineering-evidence.md`](engineering-evidence.md) for its Candidate labeling).

## Financial Securities

- **Internal development work:** historical fixtures exist internally to validate the system's structure — disclosed as a description, not linked to a public fixture file (see [`cases/`](../cases/)).

## Travel

- **Internal development work:** end-to-end acceptance testing on one real device against the mobile/backend pipeline (see [`systems/travel/`](../systems/travel/)).
- **Known limitation:** the professional judgment layer — the part that decides which travel options are actually sound — is explicitly incomplete. The pipeline runs end to end; the judgment it's meant to carry does not yet.

## Sales Opportunity

- **Negative result preserved:** a described internal run concluded `0 valid candidate` / `0 verified opportunity` after an earlier issue in the pipeline was found and fixed. No independent run date or log is linked from this repository (see [`cases/`](../cases/)).
- The system being allowed to conclude there is no opportunity is a design property: a workflow that can only ever report "opportunity found" has not been meaningfully tested.

## Morocco Local Life

- **Internal development work:** early-stage research work exists for this system. No public case is released for it yet.

## International Market & Brand, Cross-border Goods Trade, Medical Business

No additional case or failure history beyond what's already stated in [`systems/`](../systems/) for these systems at this time.

## Why failures are kept, not deleted

See [`company/principles.md`](principles.md) for this as a standing company principle.
