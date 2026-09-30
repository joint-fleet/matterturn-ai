import {ProductView} from "@/components/product-view";
import {products} from "@/lib/products";
import type {Metadata} from "next";
export function generateStaticParams(){return products.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const product=products.find(p=>p.slug===slug);return product?{title:`${product.title} | MatterTurn Ai`,description:slug==="morocco-life"?"Morocco life assistance research: a bounded prototype and synthetic case, with no live service.":product.summary}:{};}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ProductView locale="en" slug={slug}/>;}
