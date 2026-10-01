/**
 * Validation / research activity layer for the Projects page.
 *
 * Every entry here is backed by a direct inspection of the named system's
 * own source repository (README and, where noted, its case/fixture files)
 * during this work — not memory or assumption. Only facts the repository
 * itself states, and that its own README already frames as public-safe,
 * are used. No private governance internals, prompts, architecture,
 * security controls, customer identities or commercial terms are
 * reproduced; repository URLs are intentionally not linked (the source
 * repositories are not public).
 *
 * `relatedSlug` must match a slug in lib/products.ts.
 */
export type ResearchActivity = {
  id: string;
  relatedSlug: string;
  classification: string;
  title: string;
  investigated: string;
  source: string;
  completed: string;
  unresolved: string;
  stage: string;
};

export const researchActivities: ResearchActivity[] = [
  {
    id: "real-estate-hotel-screening",
    relatedSlug: "real-estate",
    classification: "Internal validation",
    title: "U.S. select-service hotel acquisition screening",
    investigated: "Whether an acquisition thesis for a U.S. select-service hotel was supported by the available diligence materials.",
    source: "A real acquisition-screening case, using the seller package and diligence materials for that deal.",
    completed: "The system decomposed the seller's thesis, preserved 11 material unresolved facts, and built an evidence-to-decision matrix linking each open fact to a next action (continue, reprice, restructure, reopen, decline). A client-readable decision package was produced and traced back to its source evidence.",
    unresolved: "Underwriting was marked blocked, pending further diligence — the available evidence did not support a responsible acquisition conclusion at this stage. Independent professional-effectiveness and ROI validation are still in progress.",
    stage: "Internal validation — real case, human-reviewed, not yet independently audited",
  },
  {
    id: "financial-markets-historical-blind-test",
    relatedSlug: "financial-markets",
    classification: "Historical blind test",
    title: "Discipline-regression testing against historical market events",
    investigated: "Whether the system keeps distinct state changes, evidence provenance and time horizons separate — rather than silently merging them — when applied to real historical events.",
    source: "Historical case fixtures built from public market events, including NVIDIA's H20 export-license event, the NVIDIA/DeepSeek episode, SpaceX's private-valuation event and a Coca-Cola \"slow state\" case.",
    completed: "Each case is encoded as a discipline-regression fixture that tests whether the evidence/state/transmission kernel preserves these distinctions under real-world complexity.",
    unresolved: "The system is explicitly staged \"M0 / exploration\" with no production runtime authority. It makes no claim of prediction accuracy, trading signal value, or investment advice.",
    stage: "Historical blind test — exploration stage (M0), code-level regression fixtures only",
  },
  {
    id: "morocco-life-phase-0-kernel",
    relatedSlug: "morocco-life",
    classification: "Research prototype",
    title: "Case-driven local-life judgment kernel",
    investigated: "Whether a case-driven judgment kernel can structure everyday Morocco life decisions — documents, housing, transport and local services.",
    source: "The system's own repository, which describes itself as a Phase 0 experimental kernel validation.",
    completed: "An early, self-described Phase 0 validation of the judgment kernel, consistent with the research-prototype status already shown for this system.",
    unresolved: "Explicitly pre-product. The source repository states this directly: a kernel validation, not a product.",
    stage: "Research prototype — Phase 0 experimental",
  },
];
