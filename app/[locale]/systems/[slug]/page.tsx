import {notFound} from "next/navigation";
import {ProductView} from "@/components/product-view";
import {locales,validLocale} from "@/lib/i18n";
import {products} from "@/lib/products";
import {translatedProduct} from "@/lib/product-i18n";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
export function generateStaticParams(){return locales.filter(x=>x!=="en").flatMap(locale=>products.map(({slug})=>({locale,slug})));}
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{const {locale,slug}=await params;if(!validLocale(locale))return {};const product=translatedProduct(locale,slug);if(!product)return {};const description=product.summary;return pageMetadata({locale,path:`/systems/${slug}`,title:product.title,description});}
export default async function LocalProduct({params}:{params:Promise<{locale:string;slug:string}>}){const {locale,slug}=await params;if(!validLocale(locale))notFound();return <ProductView locale={locale} slug={slug}/>;}
