import {readFileSync,writeFileSync,mkdirSync} from "node:fs";
import {createHash} from "node:crypto";
const manifest=JSON.parse(readFileSync(new URL("../assets/film.json",import.meta.url),"utf8"));
const encoded=manifest.parts.map(p=>readFileSync(new URL("../assets/"+p,import.meta.url),"utf8")).join("");
const film=Buffer.from(encoded,"base64");
if(film.length!==manifest.bytes || createHash("sha256").update(film).digest("hex")!==manifest.sha256) throw new Error("Original film integrity check failed");
mkdirSync(new URL("../public/",import.meta.url),{recursive:true});
writeFileSync(new URL("../public/clarity-world-film.mp4",import.meta.url),film);
console.log("Original film restored and verified");
