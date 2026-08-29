import Brand from "./Brand";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Brand invert />
        <p>Colorful holidays, thoughtfully planned.</p>
        <a className="btn accent" href="/#plan">Plan a trip</a>
      </div>
      <div className="footer-grid">
        <div><h4>Explore</h4><a href="/#destinations">Destinations</a><a href="/#travel-styles">Travel styles</a><Link href="/travel">Trips & Packages</Link><Link href="/build-my-trip">Build my trip</Link><Link href="/visa-assistance">Visa assistance</Link><a href="/#ideas">Travel ideas</a></div>
        <div><h4>Company</h4><Link href="/about">About InfiO2</Link><Link href="/mission">Our Mission</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        <div><h4>Contact</h4><a href="mailto:info@infio2.com">info@infio2.com</a><span>Travel inquiries by appointment</span></div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} InfiO2 Travel. All rights reserved.</span>
        <span>Travel availability, pricing and entry requirements are subject to change.</span>
      </div>
    </footer>
  );
}
