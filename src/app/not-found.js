import Link from "next/link";

export default function NotFound() {
  return <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "8vw", background: "#090A0C", color: "#FAF8F4", textAlign: "center" }}><div><span style={{ font: "700 .65rem/1 var(--font-tech)", letterSpacing: ".15em" }}>ORVYN / OUTSIDE THE DIAL</span><h1 style={{ margin: "24px 0", font: "400 clamp(5rem,16vw,14rem)/.8 var(--font-display)" }}>NO HOUR<br />FOUND.</h1><Link href="/" style={{ borderBottom: "1px solid", paddingBottom: 8 }}>Return to Zero Hour</Link></div></main>;
}
