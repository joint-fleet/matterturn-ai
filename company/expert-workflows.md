# Expert Workflows

Each MatterTurn system is built as a multi-role expert workflow — organized around the judgment types a real professional actually works through — not a single prompt. Which roles are consulted is selected per question, not run in full every time; the exact sequencing and routing logic are internal implementation and aren't published here.

## What each system covers

- **Real Estate** (Advanced Engineering / Controlled Validation) — investment, legal, market, finance, development and operations judgment.
- **Banking Frontline** (Active Engineering — synthetic, not connected to a real bank) — customer context, policy applicability, action control, and outcome verification.
- **Financial Securities** (Active Engineering — research/engineering validation only) — evidence, state, horizon, and market-transmission judgment.
- **Sales Opportunity** (Active Engineering — not a mature sales product) — market sensing, qualification, and evidence-based opportunity judgment.

See [`systems/`](../systems/) for the public-safe per-system status and [`company/engineering-evidence.md`](engineering-evidence.md) for what's independently sourced versus internally described.

**These are multi-role expert workflows, not a roster of long-term, individually-named human employees.** Some roles are carried out by AI agents operating inside a defined workflow boundary; others require human expert input.

## What's deliberately not shown here

Step-by-step execution order, routing or dynamic-selection logic, internal skill/capability registry identifiers, and any other reconstruction-enabling implementation detail. What's shown is that a multi-role expert workflow exists per system and roughly what kind of judgment it covers — not how to rebuild it.
