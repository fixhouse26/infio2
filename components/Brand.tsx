import Link from "next/link";

export default function Brand({ invert = false }: { invert?: boolean }) {
  return (
    <Link className={`brand${invert ? " invert" : ""}`} href="/" aria-label="InfiO2 Travel home">
      <span>Infi</span><b>O2</b><em>travel</em>
    </Link>
  );
}
