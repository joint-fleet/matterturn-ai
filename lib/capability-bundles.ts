/**
 * "What You Actually Get" + client-problem content, for every system that
 * has real, inspectable evidence of some kind — not just the systems with
 * a finished public case. The distinguishing fact per capability is its
 * maturity label, not whether it gets shown at all: hiding a real
 * capability because it isn't case-backed yet is its own kind of dishonesty
 * (it understates what MatterTurn has actually built), so the rule here is
 * "show it, label it accurately" rather than "only show the finished ones."
 *
 * Maturity labels, in descending order of evidence strength:
 * - Validated / Case-backed: a published, re-verified public case backs it.
 * - Engineering Validated: real, tested, CI-passing engineering work exists
 *   (including synthetic-data end-to-end validation), but no independently
 *   reviewed real-world case is published for it yet.
 * - Active Engineering: real, running code and real-case falsification
 *   testing exist (often in open, unmerged Draft PRs), but the system
 *   itself has not reached a completed, authorized judgment or formal
 *   runtime promotion.
 * - Research / Experimental: real design, data, or early experimentation
 *   exists, but no tested, running capability yet.
 * - Planned / Not Yet Available: named because it's part of the system's
 *   own stated scope, but no engineering work on it has started.
 *
 * Sourced from a re-read of each repo's CURRENT state — default branch
 * plus open Draft PRs and active branches, not README-only snapshots.
 * English-only this round (see PR notes).
 */

export type Maturity = "validated" | "engineering-validated" | "active-engineering" | "research" | "planned";

export const maturityLabel: Record<Maturity, string> = {
  validated: "Validated / Case-backed",
  "engineering-validated": "Engineering Validated",
  "active-engineering": "Active Engineering",
  research: "Research / Experimental",
  planned: "Planned / Not Yet Available",
};

export type Capability = {name: string; note: string; maturity: Maturity};

export type CapabilityBundle = {
  slug: string;
  intro: string;
  problems: string[]; // "What you can use this for" — tied to capabilities at Active Engineering or above
  capabilities: Capability[];
  oneLiner: string;
  evidenceNote: string; // what the maturity labels above are actually based on, for this system
};

export const capabilityBundles: CapabilityBundle[] = [
  {
    slug: "real-estate",
    intro:
      "A real estate engagement is not one output. Every investment, development, or operating-asset judgment this system produces draws on the same underlying bundle of professional capabilities — not a single calculator bolted onto a chat interface.",
    problems: [
      "Estimate a property's value under an acquisition model",
      "Review an acquisition and decide whether it deserves further capital and time",
      "Test debt capacity and debt-service coverage",
      "Test whether a refinancing or capital-recycling assumption is actually achievable",
      "Review development feasibility and cost on a teardown, renovation, or new-build decision",
      "Review market demand and competitive positioning for a property or asset type",
      "Prepare an underwriting conclusion — or identify why one isn't supportable yet",
      "Review operating performance for an income-producing or hospitality asset",
      "Prepare an integrated, investment-committee-style synthesis across all of the above",
    ],
    capabilities: [
      {name: "Investment analysis & problem diagnosis", note: "frames the real decision question before any model runs", maturity: "validated"},
      {name: "Asset valuation", note: "DCF / NPV / scenario modeling bound to the decision's actual assumptions", maturity: "validated"},
      {name: "Underwriting", note: "a formal BLOCKED / MORE DILIGENCE REQUIRED / proceed determination, not a forced answer", maturity: "validated"},
      {name: "Finance & debt analysis", note: "debt-service coverage, leverage, and lender-constraint testing", maturity: "validated"},
      {name: "Development & cost review", note: "feasibility, cost, and highest-and-best-use comparison", maturity: "validated"},
      {name: "Market analysis", note: "demand and positioning evidence behind a valuation or underwriting call", maturity: "validated"},
      {name: "Legal & regulatory review", note: "jurisdiction-aware constraint checking (current coverage includes the US, UK, China, and Japan)", maturity: "validated"},
      {name: "Operations review", note: "operating-asset and hospitality-specific performance reading", maturity: "validated"},
      {name: "Model selection", note: "decides whether a calculation is useful and which model family fits — exercised inside every case, no dedicated standalone case yet", maturity: "engineering-validated"},
      {name: "Senior investment judgment", note: "the integrated synthesis across every capability above, with conflicts and gaps preserved rather than smoothed over", maturity: "validated"},
    ],
    oneLiner: "One system. Ten professional capabilities. One integrated judgment.",
    evidenceNote: "Based on five published/re-verified public cases (1740 Broadway, A-03, A-05, the hotel acquisition case, and Murray Hill) plus the system's own tested runtime and capability registry.",
  },
  {
    slug: "financial-markets",
    intro:
      "A securities judgment from this system is the output of several distinct disciplines working together — not a single sentiment score reacting to a headline.",
    problems: [
      "Evaluate how a single real-world event changes a specific company or security — without letting one regional or product-line fact bleed into the whole thesis",
      "Stress-test whether a dramatic headline actually changes the current investment thesis, or only reopens one specific assumption",
      "Decompose a bond or credit instrument's price move into its separate real causes (issuer credit, market-wide liquidity, risk-free rate, sector shock) instead of assuming price-down means credit-worse",
      "Determine how one company's default or bankruptcy affects different claims on it differently — a parent company, its subsidiaries, and different debt classes do not automatically share the same outcome",
    ],
    capabilities: [
      {name: "Evidence intake with sourcing discipline", note: "every input is tagged by source type and by when it became public", maturity: "validated"},
      {name: "State tracking per company or security", note: "distinct aspects of a thesis can be flagged unresolved or conflicted independently", maturity: "validated"},
      {name: "Time-horizon awareness", note: "a judgment states which timeframe it applies to, so a near-term shock isn't mistaken for a long-term verdict", maturity: "validated"},
      {name: "Explicit cause-and-effect linking", note: "a stated mechanism is required to connect an event to a financial effect", maturity: "validated"},
      {name: "Separation of business judgment from market reaction", note: "a machine-enforced freeze point keeps fundamental analysis from being contaminated by the stock's own price move", maturity: "validated"},
      {name: "Selective, auditable reassessment", note: "when new evidence arrives, only the directly affected parts of a judgment update — the rest is provably left untouched", maturity: "validated"},
      {name: "Cross-asset credit-event decomposition", note: "separating issuer credit, liquidity, rate, and sector causes on the same instrument — exercised on real cases, drafted for public release, not yet independently reviewed", maturity: "engineering-validated"},
    ],
    oneLiner: "One system. Several disciplines. One traceable securities judgment.",
    evidenceNote: "Based on four real historical cases run through the system (Nvidia H20, Nvidia DeepSeek, Boeing bonds, Hertz default) and the system's own documented engineering-status tracking, which labels its overall stage M0 / exploration with no formal runtime authority.",
  },
  {
    slug: "banking-frontline",
    intro:
      "A bank frontline review of one customer case draws on several capabilities working in parallel — this is demonstrated today only on a synthetic, non-production scenario, not on real customer data.",
    problems: [
      "Evaluate a customer who raises several problems at once, keeping each one's decision logic genuinely separate",
      "Determine what can proceed immediately versus what is blocked by missing evidence, unmet policy conditions, or missing staff authority — with the specific reason named",
      "Distinguish what a customer reported from what is actually confirmed, preserving the record rather than silently overwriting it",
      "Reassess after human approval and real-world execution diverge from the original plan",
    ],
    capabilities: [
      {name: "Structured fact intake", note: "every piece of information is recorded with its source — customer statement vs. confirmed record vs. staff review", maturity: "engineering-validated"},
      {name: "Multi-issue state tracking", note: "several open issues can be tracked in parallel rather than forced into one linear workflow", maturity: "engineering-validated"},
      {name: "Policy and eligibility gating", note: "actions are blocked, pending staff authority, or allowed, with the specific unmet condition named", maturity: "engineering-validated"},
      {name: "Conflict surfacing", note: "tension between two goals or pieces of evidence is exposed explicitly rather than silently resolved", maturity: "engineering-validated"},
      {name: "Separation of approval, execution, and verification", note: "these are three distinct recorded steps — approval alone never closes a case", maturity: "engineering-validated"},
      {name: "Communication guardrails", note: "a factual statement to the customer is checked against what's actually confirmed before it's allowed out", maturity: "engineering-validated"},
    ],
    oneLiner: "One system. Several capabilities working in parallel on one customer case.",
    evidenceNote: "Based on one synthetic, multi-phase engineering case (the repo's own words: \"not connected to a bank and not suitable for real customer decisions\"). No real-bank or real-customer validation exists.",
  },
  {
    slug: "international-brand",
    intro:
      "This system's real work today is market and brand evidence research and a minimal judgment engine — tested against real, named companies' public records — not yet a finished market-entry or positioning product.",
    problems: [
      "Research a cross-border market-entry or brand-expansion question against real, sourced evidence rather than assumption",
      "Track what's confirmed, contested, or still missing about a specific market-entry question as research proceeds",
      "Reopen only the specific part of a judgment that new evidence actually affects, rather than restarting the whole assessment",
    ],
    capabilities: [
      {name: "Market research & evidence capture", note: "sourced, dated evidence intake tested against three real cases (a historical backtest and two live prospective market-entry research efforts)", maturity: "active-engineering"},
      {name: "Claim tracking & residual-need assessment", note: "a real, tested judgment engine (64/64 tests passing in its current Draft) that tracks what's confirmed vs. contested per case", maturity: "active-engineering"},
      {name: "Selective reassessment", note: "replayed on real evidence updates in two different real shapes (new evidence reopening unresolved work; rebutting evidence closing it) in the system's open Draft runtime", maturity: "active-engineering"},
      {name: "Consumer insight", note: "named in the system's long-term scope; no research or engineering work has started", maturity: "planned"},
      {name: "Market prioritization", note: "named in the system's long-term scope; no research or engineering work has started", maturity: "planned"},
      {name: "Positioning", note: "named in the system's long-term scope; no research or engineering work has started", maturity: "planned"},
      {name: "Naming", note: "named in the system's long-term scope; no research or engineering work has started", maturity: "planned"},
      {name: "Messaging", note: "named in the system's long-term scope; no research or engineering work has started", maturity: "planned"},
      {name: "Channel activation", note: "explicitly deferred to a separate, not-yet-built market-access domain", maturity: "planned"},
      {name: "Go-to-market planning", note: "explicitly deferred to a separate, not-yet-built market-access domain", maturity: "planned"},
    ],
    oneLiner: "Real evidence-based research and judgment engineering today; brand and go-to-market capabilities are planned, not yet built.",
    evidenceNote: "Based on the system's own currently open Draft PRs (not yet merged to main): a minimal judgment runtime tested against real evidence from three market-entry research efforts, none of which has reached a completed commercial judgment. No formal runtime authority, promotion, or cutover exists yet.",
  },
  {
    slug: "sales-opportunity",
    intro:
      "This system's real work today is bounded, auditable opportunity-research engineering — tested against real public records — with an explicit, enforced boundary against any live selling action.",
    problems: [
      "Research whether a real, named prospect's public signals actually indicate a commercial problem worth pursuing",
      "Qualify or disqualify an opportunity against explicit evidence of need, budget, and authority rather than a guess",
      "Track exactly which research actions were taken, what they found, and what remains unresolved",
    ],
    capabilities: [
      {name: "Problem discovery", note: "source observations and competing explanations tracked against real public signals, with an explicit 'no further research justified' stop state", maturity: "active-engineering"},
      {name: "Opportunity qualification", note: "a tested expert-judgment layer that checks purchase authority, budget, and evidence coverage before admitting a candidate", maturity: "active-engineering"},
      {name: "Buyer / authority analysis", note: "part of the same qualification layer — explicitly refuses to assume authority or budget without supporting evidence", maturity: "active-engineering"},
      {name: "Commercial validation", note: "residual-need and willingness-to-pay checks; current real runs have returned HOLD / zero verified opportunities, which the system treats as a valid outcome, not a failure to patch over", maturity: "active-engineering"},
      {name: "Research action ledger & falsification", note: "every research action (search, page read) is reconciled against a hard budget and an auditable outcome — including a real engineering defect this discipline caught and fixed", maturity: "active-engineering"},
      {name: "Autonomous outreach / CRM execution", note: "explicitly and repeatedly out of scope in the system's own boundary documents", maturity: "planned"},
    ],
    oneLiner: "Real, bounded opportunity-research engineering — not a production CRM, and no autonomous outreach.",
    evidenceNote: "Based on the system's own currently open Draft PRs (not on its minimal main branch): 80+ passing unit tests, multiple real research runs against real public companies, and one real engineering defect (a research-result misclassification) found and fixed on the record. The repository's own status label is PHASE 0 / RESEARCH / PRE-IMPLEMENTATION; no production behavior, outreach, or CRM write exists.",
  },
  {
    slug: "morocco-life",
    intro:
      "This system's most tested work today is two specific engineering capabilities — official-source legal/regulatory research and spatial identity-boundary matching — not yet a finished everyday-life assistant.",
    problems: [
      "Check an official legal or regulatory question (e.g., a residency or benefits procedure) against primary government sources, with conflicts and version gaps preserved rather than guessed past",
      "Determine whether two location records likely refer to the same real place, or only look alike — without ever auto-merging on proximity alone",
    ],
    capabilities: [
      {name: "Legal & regulatory research", note: "tested against real official Moroccan government sources, including currentness and version conflicts between legal texts", maturity: "active-engineering"},
      {name: "Spatial / identity-boundary evidence matching", note: "an entity-resolution engine tested against real public mapping-service queries, explicitly refusing to treat coordinate proximity as identity", maturity: "active-engineering"},
      {name: "Everyday-service procedure guidance", note: "housing, banking, transport, and civil-document guidance across many procedure types is referenced in the project's own planning record; not yet built and tested to the same bar as the two capabilities above", maturity: "research"},
    ],
    oneLiner: "Two real, tested engineering capabilities today; broader everyday-life guidance is still research-stage.",
    evidenceNote: "Based on the system's own currently open Draft PR (not yet merged): 300+ passing tests across legal-research and geo-identity capabilities, including real one-off live queries against official sources and a public mapping service. The repo's own label is Phase 0 / experimental / not a product.",
  },
  {
    slug: "cross-border",
    intro:
      "This system has a complete, tested synthetic engineering validation of its core judgment mechanics — evidence intake, gap detection, selective reassessment, and replay — but no real-world case run yet.",
    problems: [
      "Model how a cross-border purchase or sourcing judgment should track identity, evidence, and unresolved gaps as a case develops",
      "Verify that a judgment system correctly reopens only the work a new piece of evidence actually affects, and can replay a case deterministically",
    ],
    capabilities: [
      {name: "Identity & context resolution", note: "resolves who's buying, what's being bought, and the use case before a suitability judgment forms", maturity: "engineering-validated"},
      {name: "Evidence admission & fact ledger", note: "separates source material from usable evidence and tracks it in an auditable ledger", maturity: "engineering-validated"},
      {name: "Gap detection & selective capability routing", note: "automatically identifies what's missing and routes only the relevant follow-up work", maturity: "engineering-validated"},
      {name: "Bounded judgment, synthesis & deterministic replay", note: "produces a judgment and can replay the full case deterministically for verification", maturity: "engineering-validated"},
    ],
    oneLiner: "A fully tested synthetic engineering validation of the core judgment mechanics — no real-world case yet.",
    evidenceNote: "Based on the system's own open Draft PR implementing a complete synthetic (not real-case) judgment chain: 46 passing tests, CI running the full suite plus end-to-end replay, covering 18 required negative test scenarios. The repo's own maturity label for this work is SYNTHETIC_E2E_VERIFIED — explicitly no live case, production runtime, formal authority, or real transactions.",
  },
  {
    slug: "travel",
    intro:
      "This system has real, device-tested data-capture infrastructure for a specific traveler-decision problem; the judgment/recommendation logic itself is designed in detail but not yet built.",
    problems: [
      "Capture a traveler's decision problem (in text and photos) reliably, with context, for later professional judgment to act on",
    ],
    capabilities: [
      {name: "Problem intake & session capture", note: "a real, installable mobile app and backend tested on real devices across 10 documented acceptance scenarios (permissions, retries, data integrity)", maturity: "active-engineering"},
      {name: "Judgment / recommendation engine", note: "professional judgment criteria are drafted as structured data, but the code that would apply them is an explicit placeholder, not yet implemented", maturity: "planned"},
    ],
    oneLiner: "Real, tested intake infrastructure today; the judgment engine itself is designed but not yet built.",
    evidenceNote: "Based on the system's own milestone tracking: milestone M0 (intake/session plumbing) is complete and real-device tested; the judgment engine (milestones M2–M5) is explicitly not started. No recommendation has ever been produced by this system.",
  },
];

export const capabilityBundleFor = (slug: string) => capabilityBundles.find((b) => b.slug === slug);
