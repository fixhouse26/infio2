"use client";

import { useState } from "react";

export default function HeroFinder() {
  const [where, setWhere] = useState("");
  const [style, setStyle] = useState("Any holiday");
  const [when, setWhen] = useState("");

  function findTrip() {
    const params = new URLSearchParams();
    if (where) params.set("destination", where);
    if (style !== "Any holiday") params.set("style", style);
    if (when) params.set("when", when);
    window.location.href = `/build-my-trip${params.toString() ? `?${params.toString()}` : ""}`;
  }

  return (
    <div className="search-card" role="group" aria-label="Start a custom trip">
      <label>Where do you want to go?<input value={where} onChange={(e) => setWhere(e.target.value)} placeholder="Japan, Maldives, Europe…" /></label>
      <label>Travel style<select value={style} onChange={(e) => setStyle(e.target.value)}><option>Any holiday</option><option>Family</option><option>Honeymoon</option><option>Cruise</option><option>Luxury</option><option>Adventure</option></select></label>
      <label>When<input value={when} onChange={(e) => setWhen(e.target.value)} type="month" /></label>
      <button type="button" className="btn accent" onClick={findTrip}>Build my trip</button>
    </div>
  );
}
