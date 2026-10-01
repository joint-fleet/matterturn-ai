/**
 * "What You Actually Get" + client-problem content for systems with real,
 * case-backed evidence (see cases/library/ and company/engineering-evidence.md).
 * English-only for this round — see the PR notes for why. A system not
 * listed here gets no capability-bundle section; its product page keeps the
 * honest, modest framing it already has (concept/design/research stage).
 */
export type CapabilityBundle = {
  slug: string;
  intro: string;
  problems: string[]; // "What you can use this for" — low-jargon, real-evidence-backed only
  capabilities: {name: string; note: string}[]; // "What you actually get"
  oneLiner: string;
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
      {name: "Investment analysis & problem diagnosis", note: "frames the real decision question before any model runs"},
      {name: "Asset valuation", note: "DCF / NPV / scenario modeling bound to the decision's actual assumptions"},
      {name: "Underwriting", note: "a formal BLOCKED / MORE DILIGENCE REQUIRED / proceed determination, not a forced answer"},
      {name: "Finance & debt analysis", note: "debt-service coverage, leverage, and lender-constraint testing"},
      {name: "Development & cost review", note: "feasibility, cost, and highest-and-best-use comparison"},
      {name: "Market analysis", note: "demand and positioning evidence behind a valuation or underwriting call"},
      {name: "Legal & regulatory review", note: "jurisdiction-aware constraint checking (current coverage includes the US, UK, China, and Japan)"},
      {name: "Operations review", note: "operating-asset and hospitality-specific performance reading"},
      {name: "Senior investment judgment", note: "the integrated synthesis across every capability above, with conflicts and gaps preserved rather than smoothed over"},
    ],
    oneLiner: "One system. Nine professional capabilities. One integrated judgment.",
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
      {name: "Evidence intake with sourcing discipline", note: "every input is tagged by source type and by when it became public"},
      {name: "State tracking per company or security", note: "distinct aspects of a thesis can be flagged unresolved or conflicted independently"},
      {name: "Time-horizon awareness", note: "a judgment states which timeframe it applies to, so a near-term shock isn't mistaken for a long-term verdict"},
      {name: "Explicit cause-and-effect linking", note: "a stated mechanism is required to connect an event to a financial effect"},
      {name: "Separation of business judgment from market reaction", note: "a machine-enforced freeze point keeps fundamental analysis from being contaminated by the stock's own price move"},
      {name: "Selective, auditable reassessment", note: "when new evidence arrives, only the directly affected parts of a judgment update — the rest is provably left untouched"},
    ],
    oneLiner: "One system. Several disciplines. One traceable securities judgment.",
  },
  {
    slug: "banking-frontline",
    intro:
      "A bank frontline review of one customer case draws on several capabilities working in parallel — this is demonstrated today only on a synthetic, non-production scenario (see the case below), not on real customer data.",
    problems: [
      "Evaluate a customer who raises several problems at once, keeping each one's decision logic genuinely separate",
      "Determine what can proceed immediately versus what is blocked by missing evidence, unmet policy conditions, or missing staff authority — with the specific reason named",
      "Distinguish what a customer reported from what is actually confirmed, preserving the record rather than silently overwriting it",
      "Reassess after human approval and real-world execution diverge from the original plan",
    ],
    capabilities: [
      {name: "Structured fact intake", note: "every piece of information is recorded with its source — customer statement vs. confirmed record vs. staff review"},
      {name: "Multi-issue state tracking", note: "several open issues can be tracked in parallel rather than forced into one linear workflow"},
      {name: "Policy and eligibility gating", note: "actions are blocked, pending staff authority, or allowed, with the specific unmet condition named"},
      {name: "Conflict surfacing", note: "tension between two goals or pieces of evidence is exposed explicitly rather than silently resolved"},
      {name: "Separation of approval, execution, and verification", note: "these are three distinct recorded steps — approval alone never closes a case"},
      {name: "Communication guardrails", note: "a factual statement to the customer is checked against what's actually confirmed before it's allowed out"},
    ],
    oneLiner: "One system. Several capabilities working in parallel on one customer case.",
  },
];

export const capabilityBundleFor = (slug: string) => capabilityBundles.find((b) => b.slug === slug);
