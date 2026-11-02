import Image from "next/image";
import styles from "./BrandStatement.module.css";

export default function BrandStatement() {
  return (
    <section id="statement" className={styles.statement} aria-labelledby="statement-title">
      <div className={styles.index}><span>01 / BRAND STATEMENT</span><span>TIME AS MATERIAL</span></div>
      <div className={styles.copy}>
        <h2 id="statement-title"><span>TIME HAS</span><span>MORE THAN</span><span>ONE SHAPE.</span></h2>
        <p>ORVYN is imagined as six watch worlds—formal, nocturnal, aquatic, performance-driven, exploratory, and expressive—each built around a different relationship with time.</p>
      </div>
      <figure className={styles.macro}>
        <Image src="/images/watches/aether-meridian-38.webp" alt="Polished edge and ivory dial of the ORVYN Meridian concept watch" width={1800} height={1800} sizes="(max-width: 767px) 85vw, 38vw" />
        <figcaption>POLISHED / BRUSHED<br />A STUDY IN CONTRAST</figcaption>
      </figure>
      <div className={styles.tickLine} aria-hidden="true">{Array.from({ length: 48 }, (_, index) => <i key={index} className={index % 6 === 0 ? styles.long : ""} />)}</div>
    </section>
  );
}
