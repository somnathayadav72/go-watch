import { Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const display = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const tech = Space_Grotesk({ subsets: ["latin"], variable: "--font-tech", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://orvyn.example"),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: "A concept watch group exploring six collections and twenty-four original expressions of time.",
  applicationName: site.fullName,
  keywords: ["ORVYN", "concept watches", "horology", "watch design", "mechanical watches", "temporal observatory"],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], apple: [{ url: "/apple-icon.png", type: "image/png" }] },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: "Six collections. Twenty-four watches. One view of time.",
    url: "/",
    siteName: site.name,
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "ORVYN — Time, Made Physical. Six collections, twenty-four watches." }],
  },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.tagline}`, description: site.descriptor, images: ["/opengraph-image.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} ${tech.variable}`}>
      <body>{children}</body>
    </html>
  );
}
