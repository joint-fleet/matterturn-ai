/**
 * Validation / research activity layer for the Projects page.
 *
 * matterturn-ai is a PUBLIC repository. An entry may only go here if its
 * factual substance is independently supported by an already-public
 * MatterTurn Ai page/repository, or a public official/open-data source the
 * project already references — never by a private sibling repository, even
 * one whose own README frames its content as "public-safe" for ITS OWN
 * eventual release. That framing is not publication authority for a
 * different, already-public repository.
 *
 * A previous pass populated this from real-estate-judgment-system,
 * financial-securities-decision-system and morocco-local-life-judgment-system
 * — all three are private GitHub repositories. Those entries have been
 * removed: their case details, fixture names and validation counts are not
 * publication-authorized here. No placeholder is left in their place.
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

export const researchActivities: ResearchActivity[] = [];
