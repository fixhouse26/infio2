"use client";

import Link from "next/link";
import { useState } from "react";
import Brand from "./Brand";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Brand />
      <button className="menu-btn" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
      <nav className={`nav${open ? " open" : ""}`} aria-label="Primary navigation" onClick={() => setOpen(false)}>
        <Link href="/#destinations">Destinations</Link>
        <Link href="/#travel-styles">Travel Styles</Link>
        <Link href="/travel">Trips & Packages</Link>
        <Link href="/visa-assistance">Visa Assistance</Link>
        <Link href="/about">About</Link>
        <Link href="/mission">Mission</Link>
        <Link className="nav-cta" href="/#plan">Plan My Trip</Link>
      </nav>
    </header>
  );
}
