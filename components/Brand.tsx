import Image from "next/image";
import Link from "next/link";

export default function Brand({ invert = false }: { invert?: boolean }) {
  return (
    <Link className={`brand brand-image${invert ? " invert" : ""}`} href="/" aria-label="InfiO2 Travel home">
      <Image
        src="/infio2-logo.png"
        alt="InfiO2 Travel — Infinite Experiences. One Journey."
        width={820}
        height={300}
        priority
        className="brand-logo"
      />
    </Link>
  );
}
