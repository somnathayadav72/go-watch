import Image from "next/image";
import styles from "./CampaignEditorial.module.css";

const chapters = [
  { number: "01", title: "MORNING", collection: "AETHER", image: "/images/campaign/wrist-aether.webp", copy: "First light finds every polished edge." },
  { number: "02", title: "NIGHT", collection: "VANTA", image: "/images/campaign/wrist-vanta.webp", copy: "The dial keeps only what matters after dark." },
  { number: "03", title: "BELOW", collection: "TIDAL", image: "/images/campaign/wrist-tidal.webp", copy: "Legibility, descending with the light." },
  { number: "04", title: "MOTION", collection: "VECTOR", image: "/images/campaign/wrist-vector.webp", copy: "A red hand makes a second feel physical." },
  { number: "05", title: "DISTANCE", collection: "ALTUS", image: "/images/campaign/wrist-altus.webp", copy: "Read the line where ground becomes horizon." },
  { number: "06", title: "COLOR", collection: "LUMA", image: "/images/campaign/wrist-luma.webp", copy: "One hour, seen through six different hues." },
];

export default function CampaignEditorial() {
  return (
    <section className={styles.editorial} aria-labelledby="editorial-title">
      <div className={styles.head}><span>16 / CAMPAIGN EDITORIAL</span><h2 id="editorial-title">SIX WAYS<br /><i>TO WEAR A DAY.</i></h2></div>
      <div className={styles.layout}>
        {chapters.map((chapter, index) => (
          <article key={chapter.collection} className={styles.chapter} data-layout={index % 3}>
            <figure><Image src={chapter.image} alt={`${chapter.collection} ${chapter.title.toLowerCase()} campaign still with an original ORVYN watch`} width={1800} height={1400} sizes="(max-width: 767px) 92vw, 52vw" /></figure>
            <div><span>{chapter.number} / {chapter.collection}</span><h3>{chapter.title}</h3><p>{chapter.copy}</p></div>
          </article>
        ))}
      </div>
      <figure className={styles.workshop}><Image src="/images/campaign/watchmakers-bench.webp" alt="Fictional ORVYN watchmaker's bench with tools and unfinished components" width={2000} height={1200} sizes="94vw" /><figcaption>THE TEMPORAL OBSERVATORY / GENEVA</figcaption></figure>
    </section>
  );
}
