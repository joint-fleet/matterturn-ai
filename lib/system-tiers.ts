import {type Locale} from "./i18n";
import {type Product} from "./products";

export type Tier = "advanced" | "active" | "research";

const tierBySlug: Record<string,Tier> = {
  "real-estate":"advanced",
  "international-brand":"active","banking-frontline":"active","travel":"active","cross-border":"active","morocco-life":"active","financial-markets":"active","sales-opportunity":"active",
  "medical-business":"research"
};

export const tierOf = (slug: string): Tier => tierBySlug[slug] ?? "research";

export const tierOrder: Tier[] = ["advanced","active","research"];

export const tierLabel = (locale: Locale, tier: Tier, m: Record<string,string>) =>
  tier==="advanced" ? m.tierAdvanced : tier==="active" ? m.tierActive : m.tierResearch;

export const groupByTier = (products: Product[]) => {
  const groups = new Map<Tier,Product[]>();
  for(const tier of tierOrder) groups.set(tier,[]);
  for(const p of products) groups.get(tierOf(p.slug))!.push(p);
  return groups;
};
