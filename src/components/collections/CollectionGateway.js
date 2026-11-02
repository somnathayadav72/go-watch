import Image from "next/image";
import { collections } from "@/data/collections";
import { watchesByCollection } from "@/data/watches";
import styles from "./CollectionGateway.module.css";

export default function CollectionGateway() {
  return (
    <section id="collections" className={styles.gateway} aria-labelledby="gateway-title">
      <div className={styles.heading}>
        <span>02 / COLLECTION GATEWAY</span>
        <h2 id="gateway-title">SIX DOORS.<br />SIX DIRECTIONS.</h2>
        <p>Enter through the relationship with time that feels most like your own.</p>
      </div>
      <div className={styles.strips}>
        {collections.map((collection) => {
          const featured = watchesByCollection[collection.id][0];
          return (
            <a key={collection.id} href={`#${collection.id}`} className={styles.strip} style={{ "--base": collection.colors.base, "--ink": collection.colors.ink, "--accent": collection.colors.accent }}>
              <span className={styles.number}>{collection.number}</span>
              <div className={styles.name}><small>{collection.category}</small><strong>{collection.name}</strong></div>
              <p>{collection.tagline}</p>
              <span className={styles.rule} />
              <Image src={featured.image} alt={featured.alt} width={1800} height={1800} sizes="(max-width: 767px) 78vw, 28vw" />
              <span className={styles.enter}>ENTER / {featured.reference}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
