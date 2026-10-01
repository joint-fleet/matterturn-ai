# Cases

Index of MatterTurn public-safe case material. Three kinds of entries live here, and they are never mixed together:

- **Client / Professional Case** — a real client or professional decision, generalized/redacted, never identifying the client, asset, or private evidence.
- **Engineering / Learning Case** — a described engineering run (including a failure and its fix) on synthetic or self-generated data, disclosed to demonstrate how MatterTurn builds and corrects itself — not a client result, and not necessarily independently sourced from this repository.
- **Historical Fixture** — a frozen test input/output used to validate a system's structure, disclosed as a fixture, never implied as a performance or returns result.

## Client / Professional Case

**Real Estate — U.S. select-service hotel acquisition screening.** The system returned **MORE DILIGENCE REQUIRED**, kept underwriting **BLOCKED**, and preserved **11 material unresolved facts** rather than forcing a premature investment conclusion. The case does not identify the client, asset, address, or private evidence, and explicitly does not claim autonomous investment authority, universal expert-level equivalence, independently validated professional effectiveness, or commercial ROI.

Source: [`joint-fleet/real-estate-expert-system`](https://github.com/joint-fleet/real-estate-expert-system) — see [`CASES.md`](https://github.com/joint-fleet/real-estate-expert-system/blob/main/CASES.md).

## Engineering / Learning Case

**Sales Opportunity — a described self-correction run.** MatterTurn describes a research-and-capture pipeline that hit a result-integrity failure, preserved that original failure instead of hiding it, had its classifier fixed, reran, and still concluded `0 valid candidate` / `0 verified opportunity`. **No independent run date, log, or source artifact is linked from this repository** — this is disclosed as a description of real internal engineering work, not demonstrated with an attached record. It exists to show that the system is allowed to conclude there is no opportunity, and that a failure gets fixed and kept on record rather than quietly discarded. See [`systems/sales-opportunity/`](../systems/sales-opportunity/).

## Historical Fixture

**Financial Securities — evidence/state/horizon test fixtures.** MatterTurn describes historical fixtures used internally to validate the Evidence → State → Horizon → Transmission → Judgment structure in [`systems/financial-securities/`](../systems/financial-securities/). **No fixture file or test-run output is linked from this repository** — their existence is disclosed, not demonstrated here. In any case their output would be a structural test result, not a trading performance or returns claim.

---

No other public-safe cases are published yet. When a new case is cleared for public release, it will be added here under the correct category, with consent where required, and without copying private evidence into this repository.
