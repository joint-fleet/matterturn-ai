/**
 * GEO-oriented, problem-first pages: one independently-understandable page
 * per concrete client problem, answering what the brief calls for — "What
 * problem does this solve? Who is it for? What does MatterTurn analyze?
 * What does the user receive? Which capabilities are included? What are
 * the limits? Which real cases support it? Which system contains it?" —
 * densely enough that a page stands on its own if an AI crawler only reads
 * this one page.
 *
 * English-only for this round (see PR notes). A real, early-stage
 * capability gets a page too — maturity labeled honestly on the page
 * itself — rather than being hidden until it's case-backed. What's not
 * done: a page for a capability with no real engineering evidence at all.
 */
import type {Maturity} from "./capability-bundles";

export type ProblemPage = {
  systemSlug: string;
  problemSlug: string;
  title: string; // the concrete client problem, as a question-shaped or task-shaped phrase
  summary: string; // one-sentence answer to "what problem does this solve"
  maturity: Maturity;
  who: string;
  inputs: string[];
  analyzes: string[];
  receives: string[];
  relatedCapabilities: string[];
  limits: string;
  cases: {title: string; href: string; note: string}[];
  /**
   * Cross-system adjacency — a different MatterTurn system whose capability
   * is relevant to THIS problem, with the specific business reason why.
   * Added selectively, only where there's a real reason, not on every page
   * as a mechanical cross-sell list.
   */
  adjacentSystems?: {systemSlug: string; systemTitle: string; problemHref: string; reason: string}[];
};

const GH_CASES = "https://github.com/joint-fleet/matterturn-ai/tree/main/cases/library";

export const problemPages: ProblemPage[] = [
  {
    systemSlug: "real-estate",
    problemSlug: "asset-valuation",
    maturity: "engineering-validated",
    title: "Estimate a Property's Value Under an Acquisition Model",
    summary:
      "MatterTurn builds a scenario-based valuation (downside / base / upside DCF, NPV, implied maximum purchase price) bound to the specific deal's actual assumptions, and preserves the gap between a correct investment direction and a trustworthy number.",
    who: "Acquisition teams, investment committees, and asset managers evaluating whether a specific property or deal is worth pursuing at a given price.",
    inputs: ["Asset and transaction documents", "Market comparables and evidence", "Financing and capital-structure assumptions", "Hold-period and exit assumptions"],
    analyzes: ["Cash-flow and NOI assumptions against supporting evidence", "Downside / base / upside scenario ranges", "Rollover, tenancy, and concentration risk inside the hold period", "Terminal-value and exit-cap-rate sensitivity"],
    receives: ["A scenario-based valuation range, not a single point estimate presented as certain", "The specific assumptions the valuation depends on, stated explicitly", "Flags on any input the system could not verify or support"],
    relatedCapabilities: ["Underwriting", "Finance & debt analysis", "Market analysis", "Senior investment judgment"],
    limits:
      "ENGINEERING VALIDATED, NOT A CLEAN PROOF POINT. Valuation direction (buy / don't buy) matched a real historical outcome, but the valuation itself had a disclosed terminal-value defect and a mislabeled return metric, and the model was explicitly denied promotion. A correct direction does not validate the valuation output — this capability was exercised by a real case, not cleared by one.",
    cases: [{title: "1740 Broadway — Historical Blind Validation", href: `${GH_CASES}/1740-broadway-blind-validation.md`, note: "Two outcome-blind runs correctly rejected a deal that later failed — and a real model defect was preserved on record rather than hidden."}],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "rent-analysis",
    maturity: "active-engineering",
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
    adjacentSystems: [
      {
        systemSlug: "international-brand",
        systemTitle: "International Market & Brand",
        problemHref: "/systems/international-brand/market-entry-research",
        reason:
          "A rent read for a retail or mixed-use space often sits inside a bigger question — is this submarket actually right for the tenant mix or brand being planned there. International Market & Brand's market-entry research tests that broader demand/competition question with the same sourced-evidence discipline, instead of treating the rent figure as if it answers it alone.",
      },
    ],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "debt-analysis",
    maturity: "engineering-validated",
    title: "Test Debt Capacity and Debt-Service Coverage",
    summary:
      "MatterTurn calculates debt-service coverage and leverage against a deal's actual cash-flow assumptions, and tests whether those assumptions survive scrutiny before a debt conclusion is produced.",
    who: "Borrowers, sponsors, and lenders checking whether a deal's proposed debt load is supportable under its own underlying assumptions.",
    inputs: ["Proposed loan terms and structure", "Projected operating cash flows", "Reserve and covenant assumptions", "Comparable debt-market terms"],
    analyzes: ["Debt-service coverage under the deal's own cash-flow scenarios", "Reliance on reserves during stabilization or lease-up periods", "Structural debt elements (e.g., mezzanine tranches) that headline coverage ratios can understate"],
    receives: ["A debt-capacity read bound to stated cash-flow assumptions, not a generic rule of thumb", "Explicit flags where debt coverage depends on thin or reserve-dependent assumptions"],
    relatedCapabilities: ["Finance & debt analysis", "Asset valuation", "Senior investment judgment"],
    limits:
      "ENGINEERING VALIDATED, NOT A CLEAN PROOF POINT. The debt-service figures produced so far come from the same 1740 Broadway model that had a disclosed valuation-integrity defect, and from the A-03 run, which is itself flagged for using invented/unsupported lease dates to force-fit the model's inputs. Real and tested, but neither case gives debt analysis a defect-free result to point to yet.",
    cases: [
      {title: "1740 Broadway — Historical Blind Validation", href: `${GH_CASES}/1740-broadway-blind-validation.md`, note: "Debt-service coverage was calculated as part of the full acquisition model."},
      {title: "A-03 — When the Right Answer Hides a Bad Process", href: `${GH_CASES}/a03-failure-decomposition.md`, note: "Flagged thin current debt coverage and reserve reliance that later proved material — while also preserving the run's own input-quality failures."},
    ],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "refinance-analysis",
    maturity: "validated",
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
    maturity: "engineering-validated",
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
    maturity: "validated",
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
    adjacentSystems: [
      {
        systemSlug: "international-brand",
        systemTitle: "International Market & Brand",
        problemHref: "/systems/international-brand/market-entry-research",
        reason:
          "When the demand question behind a property is really about whether an industry or brand is expanding into the area at all (e.g., a logistics asset's tenant base, a hospitality brand's regional footprint), that's a market-entry question, not just a real estate one. International Market & Brand's evidence discipline tests that question directly instead of being inferred from real estate comparables alone.",
      },
    ],
  },
  {
    systemSlug: "real-estate",
    problemSlug: "underwriting",
    maturity: "validated",
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
    maturity: "validated",
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
    maturity: "engineering-validated",
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
    adjacentSystems: [
      {
        systemSlug: "sales-opportunity",
        systemTitle: "Sales Opportunity",
        problemHref: "/systems/sales-opportunity/opportunity-research",
        reason:
          "When an investment thesis depends on filling a space — finding a tenant, an operating partner, or a B2B buyer for the asset — that's a separate research question from the real estate synthesis itself. Sales Opportunity can research which candidate organizations actually show evidence of relevant need, budget, and decision authority, rather than the real estate synthesis assuming a counterparty exists because the thesis needs one to.",
      },
    ],
  },
  {
    systemSlug: "financial-markets",
    problemSlug: "event-impact-analysis",
    maturity: "validated",
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
    adjacentSystems: [
      {
        systemSlug: "real-estate",
        systemTitle: "Real Estate",
        problemHref: "/systems/real-estate/investment-review",
        reason:
          "The same discipline this page demonstrates for a security — don't let one event's real scope get overstated into a change nothing in it actually supports — applies directly when a macro or credit event (a rate move, a sector shock) is being used to argue a real estate investment thesis should change. Real Estate's investment-review synthesis applies the same selective-reassessment principle, built and tested separately for its own domain, not a shared implementation between the two systems.",
      },
    ],
  },
  {
    systemSlug: "banking-frontline",
    problemSlug: "multi-issue-customer-review",
    maturity: "engineering-validated",
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
  {
    systemSlug: "international-brand",
    problemSlug: "market-entry-research",
    maturity: "active-engineering",
    title: "Research a Cross-Border Market-Entry Question Against Real Evidence",
    summary:
      "MatterTurn's active engineering work tracks sourced, dated evidence for a specific market-entry question and reopens only the part of the judgment new evidence actually affects — tested on real companies, not yet a finished market-entry product.",
    who: "Teams evaluating whether a market-entry judgment engine can be trusted to track real, sourced evidence rather than assumption — not yet a client-ready market-entry deliverable.",
    inputs: ["A specific market-entry question (product, candidate market, candidate counterparties)", "Public filings, partnership records, and financing disclosures", "A decision mandate describing what's actually being decided"],
    analyzes: ["Whether claimed evidence holds up against primary sources, not just a summary", "Which specific residual-need or feasibility question remains open", "Whether new evidence resolves, worsens, or leaves untouched the open question"],
    receives: ["A tracked judgment state — confirmed, contested, or missing — not a finished recommendation", "An explicit refusal to proceed past what the evidence supports", "A reassessment that touches only the specific question new evidence bears on"],
    relatedCapabilities: ["Market research & evidence capture", "Claim tracking & residual-need assessment", "Selective reassessment"],
    limits:
      "ACTIVE ENGINEERING, NOT A FINISHED PRODUCT. This runs in the system's open, unmerged Draft work. No completed commercial judgment has been reached on any real case yet, and no formal runtime authority, promotion, or cutover exists. Brand capabilities often associated with 'market entry' — positioning, go-to-market, and channel activation have real documented design (Research/Experimental); consumer insight, naming, messaging, and creative direction have no real work started at all (see the system's own page for the exact split).",
    cases: [],
  },
  {
    systemSlug: "sales-opportunity",
    problemSlug: "opportunity-research",
    maturity: "active-engineering",
    title: "Research and Qualify a Sales Opportunity Against Real Public Evidence",
    summary:
      "MatterTurn's active engineering work researches a prospect's real public signals, qualifies or disqualifies the opportunity against explicit evidence, and keeps an auditable ledger of every research action taken — with no live outreach capability at all.",
    who: "Teams evaluating whether a sales-judgment engine can be trusted to research and qualify real opportunities honestly, including returning zero opportunities when that's the correct answer.",
    inputs: ["A prospect or target-account identity", "Public signals (hiring activity, public filings, news, vendor coverage)", "A bounded research budget (search and page-read limits)"],
    analyzes: ["Whether public signals actually indicate a commercial problem, versus looking like one", "Evidence of budget, authority, and residual need before admitting a candidate", "Whether further research is justified, or should explicitly stop"],
    receives: ["A qualification outcome bound to stated evidence — including a HOLD or zero-opportunity result where that's honest", "A full, auditable record of which research actions were taken and what each one found", "No outreach, contact, or CRM action of any kind"],
    relatedCapabilities: ["Problem discovery", "Opportunity qualification", "Buyer / authority analysis", "Research action ledger & falsification"],
    limits:
      "ACTIVE ENGINEERING, NOT PRODUCTION. This runs in the system's open, unmerged Draft work; the repository's own status label is PHASE 0 / RESEARCH / PRE-IMPLEMENTATION. No autonomous outreach, CRM write, or commercial offer exists, and commercial maturity has not been established.",
    cases: [],
  },
  {
    systemSlug: "morocco-life",
    problemSlug: "official-source-verification",
    maturity: "active-engineering",
    title: "Check an Official Legal, Regulatory, or Location Question Against Primary Sources",
    summary:
      "MatterTurn's active engineering work checks a specific legal/regulatory question against real official government sources, and separately tests whether two location records likely refer to the same real place — refusing to merge or conclude past what the evidence supports.",
    who: "Teams evaluating whether a research engine can be trusted to use primary official sources honestly, including surfacing version conflicts and refusing identity claims it can't support.",
    inputs: ["A specific legal, regulatory, or benefits-procedure question", "Primary official government source documents", "For location questions: two or more candidate location records"],
    analyzes: ["What a primary official source actually currently says, including version and currentness conflicts between related legal texts", "Whether two location records' proximity, naming, and identifiers actually establish they're the same place"],
    receives: ["A sourced answer bound to what the primary document supports, with unresolved conflicts stated rather than guessed past", "For location matching: an explicit match-confidence state, never an automatic merge on proximity alone"],
    relatedCapabilities: ["Legal & regulatory research", "Spatial / identity-boundary evidence matching"],
    limits:
      "ACTIVE ENGINEERING, NOT A FINISHED ASSISTANT. This runs in the system's own open, unmerged Draft work; the repository's own label is Phase 0 / experimental / not a product. Broader everyday-life guidance (housing, transport, civil documents) is still research-stage, not built and tested to this bar yet.",
    cases: [],
  },
  {
    systemSlug: "cross-border",
    problemSlug: "judgment-mechanics-validation",
    maturity: "engineering-validated",
    title: "Verify a Judgment Engine's Evidence-Tracking and Selective-Reassessment Mechanics",
    summary:
      "MatterTurn has a fully tested, synthetic end-to-end validation of the core mechanics a cross-border purchase or sourcing judgment needs — identity resolution, evidence admission, gap detection, and deterministic replay — with no real-world case run yet.",
    who: "Teams evaluating the engineering soundness of a judgment system's core mechanics before any real-world case is attempted.",
    inputs: ["A structured request describing a cross-border purchase or sourcing scenario", "Synthetic evidence rounds, including deliberately conflicting or incomplete evidence"],
    analyzes: ["Whether identity and context resolve correctly before a suitability judgment forms", "Whether gaps are detected and routed to only the relevant follow-up work", "Whether the same case replays deterministically to the same result"],
    receives: ["A bounded judgment with supporting and conflicting evidence tracked separately", "A deterministic replay of the full case for verification", "Explicit negative-case handling across 18 required failure scenarios"],
    relatedCapabilities: ["Identity & context resolution", "Evidence admission & fact ledger", "Gap detection & selective capability routing", "Bounded judgment, synthesis & deterministic replay"],
    limits:
      "SYNTHETIC VALIDATION ONLY. The repository's own maturity label is SYNTHETIC_E2E_VERIFIED — no live case, production runtime, formal authority, or real transactions exist. This demonstrates engineering mechanics, not a real sourcing or purchase judgment.",
    cases: [],
  },
  {
    systemSlug: "travel",
    problemSlug: "trip-problem-intake",
    maturity: "active-engineering",
    title: "Capture a Traveler's Decision Problem Reliably for Later Judgment",
    summary:
      "MatterTurn has real, device-tested infrastructure for capturing a traveler's decision problem in text and photos, with context — the professional judgment logic that would act on it is designed but not yet built.",
    who: "Teams evaluating whether a travel-decision product's data-capture layer is solid enough to build a judgment engine on top of.",
    inputs: ["A traveler's text description of their decision problem", "Up to five photos", "Location and timestamp context"],
    analyzes: ["Whether the submission was captured completely and durably, including under network loss or app backgrounding", "Data integrity via checksum cross-check"],
    receives: ["A reliably captured, durable session record ready for professional judgment to act on", "Confirmation across 10 documented real-device acceptance scenarios (permissions, retries, double-submit protection, network drop, integrity checks)"],
    relatedCapabilities: ["Problem intake & session capture"],
    limits:
      "INTAKE ONLY — NO JUDGMENT YET. The code that would analyze the captured problem and produce a recommendation is an explicit placeholder; no recommendation has ever been produced by this system. Do not read this as a working travel-recommendation product.",
    cases: [],
  },
];

export const problemPagesFor = (systemSlug: string) => problemPages.filter((p) => p.systemSlug === systemSlug);
export const problemPage = (systemSlug: string, problemSlug: string) =>
  problemPages.find((p) => p.systemSlug === systemSlug && p.problemSlug === problemSlug);
