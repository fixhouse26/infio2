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
        <Link href="/">Home</Link>
        <Link href="/travel">Trips & Packages</Link>
        <Link href="/#destinations">Destinations</Link>
        <Link href="/visa-assistance">Visa Assistance</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/travel-news">Travel Updates</Link>
        <Link href="/about">About Us</Link>
        <Link href="/#plan">Contact</Link>
        <Link className="nav-cta" href="/build-my-trip">Build My Trip</Link>
      </nav>
    </header>
  );
}
