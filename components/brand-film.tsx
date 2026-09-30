"use client";
import {useState} from "react";
import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages} from "@/lib/i18n";

export function BrandFilm({locale}:{locale:Locale}){
  const [playing,setPlaying]=useState(false);
  const m=messages(locale);
  return <section className="film-section shell" id="film" aria-labelledby="film-title">
    <div className="film-heading"><div><p className="overline">{m.filmKicker}</p><h2 id="film-title">{m.filmTitle}</h2></div><p>{m.filmText}</p></div>
    <div className="film-frame">
      {playing
        ? <video className="film-video" src="/clarity-world-film.mp4" poster="/clarity-world-poster.jpg" controls autoPlay playsInline preload="metadata" aria-label={m.filmAria} />
        : <button type="button" className="film-poster" onClick={()=>setPlaying(true)} aria-label={m.playFilm}><img src="/clarity-world-poster.jpg" alt="" width="1280" height="720"/><span className="film-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" focusable="false"><path d="M9 6.5 17 12l-8 5.5V6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg></span><span className="film-caption">{m.watch} <ArrowIcon/></span><span className="film-length">00:58</span></button>}
    </div>
  </section>;
}
