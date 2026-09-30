import {notFound} from "next/navigation";
import {ProductView} from "@/components/product-view";
import {locales,validLocale} from "@/lib/i18n";
import {products} from "@/lib/products";
import {translatedProduct} from "@/lib/product-i18n";
import type {Metadata} from "next";
export function generateStaticParams(){return locales.filter(x=>x!=="en").flatMap(locale=>products.map(({slug})=>({locale,slug})));}
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{const {locale,slug}=await params;if(!validLocale(locale))return {};const product=translatedProduct(locale,slug);if(!product)return {};return {title:`${product.title} | MatterTurn Ai`,description:slug==="morocco-life"?({"zh-CN":"摩洛哥生活助理研发介绍：通过模拟案例研究证据、未知事项与行动前核实，尚未提供实时办理服务。","zh-TW":"摩洛哥生活助理研發介紹：以模擬案例研究證據、未知事項與行動前核實，尚未提供即時辦理服務。",fr:"Recherche sur l'assistance à la vie au Maroc : prototype et cas fictif, sans service opérationnel.",en:"Morocco life assistance research: a bounded prototype and synthetic case, with no live service."} as Record<string,string>)[locale]??"Morocco life assistance research prototype; no live service.":product.summary};}
export default async function LocalProduct({params}:{params:Promise<{locale:string;slug:string}>}){const {locale,slug}=await params;if(!validLocale(locale))notFound();return <ProductView locale={locale} slug={slug}/>;}
