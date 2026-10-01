# Sales Opportunity

**Maturity: Active engineering / validation.** Not a mature sales product — its strongest public-safe value right now is showing how MatterTurn researches and self-corrects, not a working "AI finds you customers" pipeline.

**Problem addressed:** Whether an inbound or prospected sales opportunity is worth pursuing, and what would need to be true to responsibly move it forward.

**Engineering / Learning Case:**

```text
Research action
     │
     ▼
Reservation / capture
     │
     ▼
Result integrity check
     │
     ▼
Failure detected
     │
     ▼
Original failure preserved (not hidden)
     │
     ▼
Classifier fixed
     │
     ▼
Fresh rerun
     │
     ▼
Result: still HOLD — 0 valid candidate, 0 verified opportunity
```

MatterTurn describes an internal run that reached `0 valid candidate` / `0 verified opportunity`, and kept that result rather than discarding it. **No independent run date, log, or source artifact is linked from this repository for this case** — it is disclosed as a description, not demonstrated with an attached record. **The system is allowed to conclude there is no opportunity** — that is a design property, not a failure of the demo. See [`cases/`](../../cases/) for this as an Engineering / Learning Case, distinct from a client case.

**Current public status:** Early / active engineering. No dedicated product page on the website yet.

**Link:** None on the website yet. See [`company/engineering-evidence.md`](../../company/engineering-evidence.md) and [`cases/`](../../cases/) for what's public-safe today.
