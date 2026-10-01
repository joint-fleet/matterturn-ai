/**
 * GEO-oriented, problem-first pages: one independently-understandable page
 * per concrete client problem, answering what the brief calls for — "What
 * problem does this solve? Who is it for? What does MatterTurn analyze?
 * What does the user receive? Which capabilities are included? What are
 * the limits? Which real cases support it? Which system contains it?" —
 * densely enough that a page stands on its own if an AI crawler only reads
 * this one page.
 *
 * English-only for this round (see PR notes). Populated only where real
 * case or documented-capability evidence exists — no thin pages for
 * concept-stage systems.
 */
export type ProblemPage = {
  systemSlug: string;
  problemSlug: string;
  title: string; // the concrete client problem, as a question-shaped or task-shaped phrase
  summary: string; // one-sentence answer to "what problem does this solve"
  who: string;
  inputs: string[];
  analyzes: string[];
  receives: string[];
  relatedCapabilities: string[];
  limits: string;
  cases: {title: string; href: string; note: string}[];
};

const GH_CASES = "https://github.com/joint-fleet/matterturn-ai/tree/main/cases/library";

export const problemPages: ProblemPage[] = [
  {
    systemSlug: "real-estate",
    problemSlug: "asset-valuation",
    title: "Estimate a Property's Value Under an Acquisition Model",
    summary:
      "MatterTurn builds a scenario-based valuation (downside / base / upside DCF, NPV, implied maximum purchase price) bound to the specific deal's actual assumptions, and preserves the gap between a correct investment direction and a trustworthy number.",
    who: "Acquisition teams, investment committees, and asset managers evaluating whether a specific property or deal is worth pursuing at a given price.",
    inputs: ["Asset and transaction documents", "Market comparables and evidence", "Financing and capital-structure assumptions", "Hold-period and exit assumptions"],
    analyzes: ["Cash-flow and NOI assumptions against supporting evidence", "Downside / base / upside scenario ranges", "Rollover, tenancy, and concentration risk inside the hold period", "Terminal-value and exit-cap-rate sensitivity"],
    receives: ["A scenario-based valuation range, not a single point estimate presented as certain", "The specific assumptions the valuation depends on, stated explicitly", "Flags on any input the system could not verify or support"],
    relatedCapabilities: ["Underwriting", "Finance & debt analysis", "Market analysis", "Senior investment judgment"],
    limits:
      "Valuation direction (buy / don't buy) has been validated against a real historical outcome; precise point-valuation accuracy has not — a known defect (terminal-value robustness) is on record and the model was not promoted into production pending a fix.",
    cases: [{title: "1740 Broadway — Historical Blind Validation", href: `${GH_CASES}/1740-broadway-blind-validation.md`, note: "Two outcome-blind runs correctly rejected a deal that later failed — and a real model defect was preserved on record rather than hidden."}],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "rent-analysis",
    title: "Analyze Comparable Rent for Office, Retail, or Warehouse Space",
    summary:
      "Rent and comparable-lease analysis is part of MatterTurn's Market capability — the same evidence discipline that feeds every other real estate judgment, not a standalone calculator.",
    who: "Owners, operators, and investors who need a defensible rent range for a specific space — office, retail, industrial/warehouse, or residential.",
    inputs: ["Property and space characteristics", "Comparable lease and listing data", "Location and submarket context", "Operating-expense and lease-structure assumptions"],
    analyzes: ["Comparable evidence against the subject property's actual characteristics", "Market demand and absorption signals for the asset type and submarket", "Gaps between available comparables and what the conclusion actually needs"],
    receives: ["A rent range tied to stated comparables, not a single confident figure", "Explicit flags where comparable evidence is thin or conflicting", "How the rent conclusion feeds into related valuation or investment questions"],
    relatedCapabilities: ["Market analysis", "Asset valuation", "Operations review"],
    limits:
      "This capability is part of the documented Market domain used across the system's published cases; it has not yet been the sole subject of its own dedicated public case, so treat its depth as consistent with — not independently proven beyond — the system's other market-analysis evidence.",
    cases: [{title: "Select-Service Hotel Acquisition — Blocked Pending Diligence", href: `${GH_CASES}/hotel-acquisition-screening.md`, note: "Market capability contributed confirmed work product toward an underwriting review on the same evidence discipline used for rent analysis."}],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "debt-analysis",
    title: "Test Debt Capacity and Debt-Service Coverage",
    summary:
      "MatterTurn calculates debt-service coverage and leverage against a deal's actual cash-flow assumptions, and tests whether those assumptions survive scrutiny before a debt conclusion is produced.",
    who: "Borrowers, sponsors, and lenders checking whether a deal's proposed debt load is supportable under its own underlying assumptions.",
    inputs: ["Proposed loan terms and structure", "Projected operating cash flows", "Reserve and covenant assumptions", "Comparable debt-market terms"],
    analyzes: ["Debt-service coverage under the deal's own cash-flow scenarios", "Reliance on reserves during stabilization or lease-up periods", "Structural debt elements (e.g., mezzanine tranches) that headline coverage ratios can understate"],
    receives: ["A debt-capacity read bound to stated cash-flow assumptions, not a generic rule of thumb", "Explicit flags where debt coverage depends on thin or reserve-dependent assumptions"],
    relatedCapabilities: ["Finance & debt analysis", "Asset valuation", "Senior investment judgment"],
    limits:
      "Debt analysis has been directly exercised inside full acquisition reviews (see cases); it has not yet been independently validated as a standalone lending product.",
    cases: [
      {title: "1740 Broadway — Historical Blind Validation", href: `${GH_CASES}/1740-broadway-blind-validation.md`, note: "Debt-service coverage was calculated as part of the full acquisition model."},
      {title: "A-03 — When the Right Answer Hides a Bad Process", href: `${GH_CASES}/a03-failure-decomposition.md`, note: "Flagged thin current debt coverage and reserve reliance that later proved material — while also preserving the run's own input-quality failures."},
    ],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "refinance-analysis",
    title: "Test Whether a Refinancing or Capital-Recycling Assumption Holds Up",
    summary:
      "MatterTurn can move the real decision question upstream — from whether the numbers reconcile to whether the refinancing or capital-recycling assumption underpinning the whole deal thesis is actually achievable.",
    who: "Sponsors and investors whose deal thesis depends on a future refinancing, recapitalization, or capital-recycling event.",
    inputs: ["Current capital structure and debt terms", "Projected stabilized operating performance", "Assumed future financing-market terms", "The thesis's stated exit or recycling assumption"],
    analyzes: ["Whether the refinancing assumption is supportable given current and projected fundamentals", "Sponsor return-math and arithmetic consistency", "Whether the controlling risk in the deal is actually the one the thesis names"],
    receives: ["A direct read on whether the refinancing assumption is achievable — not just whether the stated math is internally consistent", "An explicit refusal to run a full model on unsupported inputs, where that's the honest answer"],
    relatedCapabilities: ["Investment analysis & problem diagnosis", "Finance & debt analysis", "Senior investment judgment"],
    limits:
      "The clearest evidence for this capability is a single same-case, two-run comparison — real and reproducible, but not yet a general effectiveness claim across many deals.",
    cases: [{title: "A-05 — Refusing to Compute Rather Than Guess", href: `${GH_CASES}/a05-controlled-comparison.md`, note: "A diagnosis-first step reframed the controlling question from arithmetic consistency to refinancing achievability, on the same case."}],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "development-feasibility",
    title: "Review Development Cost and Feasibility — Teardown, Renovate, or Hold",
    summary:
      "MatterTurn compares development paths (teardown-and-rebuild, renovation, hold-as-is) against cost, market, and financing evidence together, inside one integrated run rather than as separate disconnected estimates.",
    who: "Owners and developers deciding between redevelopment, renovation, and continued holding of a site or asset.",
    inputs: ["Site and existing-improvement characteristics", "Construction and development cost assumptions", "Market demand evidence for the resulting use", "Financing assumptions for the development path"],
    analyzes: ["Highest-and-best-use comparison across development paths", "Cost assumptions against market and construction evidence", "Inconsistencies in seller- or sponsor-provided cost and valuation figures"],
    receives: ["A comparison across the real development paths available, not a single default recommendation", "Cost and feasibility conclusions traceable to the evidence behind them"],
    relatedCapabilities: ["Development & cost review", "Market analysis", "Asset valuation"],
    limits:
      "This capability's flagship case completed successfully but has not yet been independently reviewed by a human evaluator — treat it as real, executed engineering work, not yet externally validated.",
    cases: [{title: "Real Estate systems README", href: "https://github.com/joint-fleet/matterturn-ai/tree/main/systems/real-estate", note: "See the Public Case Library for the fuller, currently-published case set; a small-commercial teardown-vs-renovate run exercised this capability alongside six others in one integrated session."}],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "market-analysis",
    title: "Review Market Demand and Competitive Positioning",
    summary:
      "MatterTurn's Market capability produces demand and positioning evidence that other judgments (valuation, underwriting, development) depend on — and it is built to block an unsupported valuation shortcut rather than let a thin market read pass silently.",
    who: "Investors and operators who need a market-demand read behind a valuation, underwriting, or development decision — not a standalone market report.",
    inputs: ["Asset type and submarket context", "Comparable transaction and demand evidence", "Competitive-supply information"],
    analyzes: ["Demand and absorption signals specific to the asset type and location", "Whether available market evidence actually supports the precision a valuation or underwriting conclusion wants to claim"],
    receives: ["A market read that explicitly states what it can and cannot support", "A block on downstream valuation claims the market evidence doesn't justify"],
    relatedCapabilities: ["Asset valuation", "Underwriting", "Development & cost review"],
    limits: "Market analysis has been exercised as a contributing capability inside larger case runs; it has not yet been published as a standalone market-report product.",
    cases: [{title: "Select-Service Hotel Acquisition — Blocked Pending Diligence", href: `${GH_CASES}/hotel-acquisition-screening.md`, note: "Market capability produced confirmed work product as part of a blocked underwriting review."}],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "underwriting",
    title: "Prepare an Underwriting Conclusion — or Learn Why It Isn't Supportable Yet",
    summary:
      "MatterTurn runs a full underwriting review and will return a formal MORE DILIGENCE REQUIRED / BLOCKED determination with every unresolved material fact preserved, rather than forcing a premature accept or reject.",
    who: "Acquisition and credit teams who need an honest underwriting read on a specific deal before committing capital or time to full diligence.",
    inputs: ["Seller- or sponsor-provided property and operating information", "Transaction assumptions", "Available financing terms"],
    analyzes: ["Operating history, financing terms, and physical-condition evidence against what underwriting actually requires", "Franchise, licensing, or transfer obligations where relevant", "Every material fact the available evidence leaves unresolved"],
    receives: ["A formal underwriting status — proceed, more diligence required, or blocked — not a forced yes/no", "A traceable list of exactly what's unresolved and what action each gap implies (continue, reprice, restructure, decline)", "A client-readable deliverable bound to the underlying decision record"],
    relatedCapabilities: ["Market analysis", "Legal & regulatory review", "Operations review", "Senior investment judgment"],
    limits: "This is the system's most independently re-verified public case — re-checked end-to-end against a newer code version with no regression. It remains screening-level, not a substitute for closing diligence.",
    cases: [{title: "Select-Service Hotel Acquisition — Blocked Pending Diligence", href: `${GH_CASES}/hotel-acquisition-screening.md`, note: "MORE DILIGENCE REQUIRED, underwriting BLOCKED, 11 material unresolved facts preserved rather than forced to a conclusion."}],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "operations-review",
    title: "Review Operating Performance for an Income-Producing Asset",
    summary:
      "MatterTurn reviews operating performance as part of a full acquisition or asset review — including an asset-specific lens for hospitality and other operating-intensive property types.",
    who: "Owners and operators checking whether reported operating performance supports a valuation, refinancing, or hold/sell decision.",
    inputs: ["Operating statements and historical performance", "Franchise, licensing, or management-agreement terms where relevant", "Comparable operating benchmarks"],
    analyzes: ["Reported performance against supporting documentation", "Operating-asset-specific risk factors (e.g., franchise transfer obligations for hospitality assets)", "Gaps between trailing performance data and what the decision requires"],
    receives: ["An operations read integrated into the broader investment judgment, not an isolated metric dump", "Explicit flags where trailing financial or operating data is missing or unconfirmed"],
    relatedCapabilities: ["Underwriting", "Asset valuation", "Senior investment judgment"],
    limits: "Operations review has been exercised specifically in a hospitality context in the system's one fully public case; depth in other operating-asset types (multifamily, industrial, etc.) is a named capability area without its own dedicated public case yet.",
    cases: [{title: "Select-Service Hotel Acquisition — Blocked Pending Diligence", href: `${GH_CASES}/hotel-acquisition-screening.md`, note: "Missing trailing financials and operating-history gaps were identified as material unresolved facts."}],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "investment-review",
    title: "Prepare an Investment-Committee-Style Synthesis",
    summary:
      "MatterTurn's senior-judgment capability integrates every other capability — valuation, underwriting, debt, development, market, legal, operations — into one synthesis, and is built to preserve conflicts and unresolved facts rather than smooth them into a single confident number.",
    who: "Investment committees and senior decision-makers who need the full picture before a capital commitment, not just one capability's isolated output.",
    inputs: ["Everything gathered across the other capability areas for a given deal", "The specific decision the committee actually needs to make"],
    analyzes: ["Whether conclusions across capability areas are mutually consistent", "Where the strongest unresolved risk to the decision actually sits", "Whether a directionally correct call rests on a trustworthy calculation path"],
    receives: ["An integrated judgment with the underlying tensions and gaps still visible — not a single polished number that hides them", "A record that separates 'the direction was right' from 'the process that produced it was reliable,' since the two are not the same claim"],
    relatedCapabilities: ["All nine Real Estate capabilities"],
    limits: "No formal with-system / without-system uplift study exists yet — don't read any case as a quantified performance-improvement claim. A correct final direction in a published case did not, on its own, validate every number behind it, and that distinction is preserved on the record rather than smoothed over.",
    cases: [
      {title: "1740 Broadway — Historical Blind Validation", href: `${GH_CASES}/1740-broadway-blind-validation.md`, note: "Correct accept/reject direction on a real historical failure, with the model's own valuation-precision defects preserved rather than hidden."},
      {title: "A-03 — When the Right Answer Hides a Bad Process", href: `${GH_CASES}/a03-failure-decomposition.md`, note: "A directionally correct recommendation was decomposed into four distinct process failures in the same run."},
    ],
  },
  {
    systemSlug: "financial-markets",
    problemSlug: "event-impact-analysis",
    title: "Evaluate How a Real-World Event Changes an Investment Thesis",
    summary:
      "MatterTurn separates a news event's actual scope from the market's reaction to it, and reopens only the specific assumption the event bears on — not the whole thesis.",
    who: "Analysts and investors who need to know whether a headline (a regulatory action, a competitor claim, a credit event) genuinely changes a security's investment case, and by how much.",
    inputs: ["The event itself (filing, disclosure, competitor claim, credit action)", "The prior investment thesis and its stated assumptions", "Market price reaction, kept as a separate, clearly-labeled fact"],
    analyzes: ["What the event is actually evidence for, versus what it is not", "Whether the event's scope is regional/product-specific or genuinely global to the thesis", "Which specific assumption the event bears on, versus which parts of the thesis are untouched"],
    receives: ["A judgment that reopens only the affected part of the thesis, with everything else carried forward unchanged and the reasoning trail kept", "The market's price reaction recorded as a separate fact, not folded into the fundamental judgment before it's supposed to be"],
    relatedCapabilities: ["Evidence intake with sourcing discipline", "Time-horizon awareness", "Selective, auditable reassessment"],
    limits: "This is engineering/research validation on historical, public-record events — not investment advice, a trading signal, or a performance claim. The system explicitly disclaims being a price-prediction tool.",
    cases: [
      {title: "Nvidia, 2025 — Two Shocks, Two Different Reassessments", href: `${GH_CASES}/nvidia-selective-reassessment.md`, note: "An export-control shock and a competitor efficiency claim each reopened only the specific assumption they actually bore on."},
    ],
  },
  {
    systemSlug: "banking-frontline",
    problemSlug: "multi-issue-customer-review",
    title: "Evaluate a Customer Who Raises Several Problems at Once",
    summary:
      "MatterTurn tracks multiple customer issues in parallel, keeping each one's evidence, policy gates, and conflicts separate — demonstrated today on a synthetic, non-production case, not real customer data.",
    who: "Frontline bank staff and service-design teams evaluating whether a judgment system can handle a realistic, multi-issue customer case without collapsing it into one blended response.",
    inputs: ["The customer's own statement (captured as a transcript only)", "Confirmed bank records relevant to each issue raised", "Applicable policy and eligibility rules"],
    analyzes: ["Which issues can proceed, which are blocked, and why — by name, not as a black-box no", "Where two goals or pieces of evidence genuinely conflict", "What's confirmed versus merely customer-reported"],
    receives: ["A per-issue status with the specific unmet condition or policy rule named for anything blocked", "Explicit conflicts surfaced rather than silently resolved", "A structured handoff package if the case needs specialist review"],
    relatedCapabilities: ["Structured fact intake", "Multi-issue state tracking", "Policy and eligibility gating", "Conflict surfacing"],
    limits:
      "SYNTHETIC DEMONSTRATION ONLY. No real customer, account, or institution is involved — the repo's own words: \"not connected to a bank and not suitable for real customer decisions.\" This shows engineering capability, not a production banking integration.",
    cases: [{title: "A Customer With Four Problems at Once (synthetic)", href: `${GH_CASES}/bank-composite-case.md`, note: "A synthetic composite case — card loss, two disputed transactions, a payment-continuity need, and a repayment difficulty — tracked in parallel without one issue's resolution overriding the others."}],
  },
];

export const problemPagesFor = (systemSlug: string) => problemPages.filter((p) => p.systemSlug === systemSlug);
export const problemPage = (systemSlug: string, problemSlug: string) =>
  problemPages.find((p) => p.systemSlug === systemSlug && p.problemSlug === problemSlug);
