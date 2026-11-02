import Image from "next/image";
import styles from "./Craft.module.css";

const materials = [
  { name: "POLISHED", marker: "01 / REFLECTION", image: "/images/details/polished-case-edge.webp", copy: "Edges catch the room and release it again. A polished plane is never one color for long." },
  { name: "BRUSHED", marker: "02 / DIRECTION", image: "/images/details/brushed-case-edge.webp", copy: "Microscopic lines quiet the light, giving a case direction, grain, and a more architectural presence." },
  { name: "LEATHER", marker: "03 / PATINA", image: "/images/details/leather-stitch-macro.webp", copy: "Grain, stitch, and edge paint make the strap the most human surface of the watch." },
  { name: "LUMINOUS", marker: "04 / AFTERGLOW", image: "/images/details/vanta-lume-macro.webp", copy: "When the room recedes, the essential geometry remains: hour, minute, orientation." },
];

export function MaterialOfTime() {
  return (
    <section id="craft" className={styles.materials} aria-labelledby="materials-title">
      <div className={styles.materialHead}><span>13 / CRAFT</span><h2 id="materials-title">THE MATERIAL<br /><i>OF TIME.</i></h2><p>Finishing changes not only how a watch looks, but how it receives the world around it.</p></div>
      <div className={styles.materialList}>
        {materials.map((material, index) => (
          <article key={material.name} className={styles.material}>
            <figure><Image src={material.image} alt={`${material.name.toLowerCase()} watch material macro study`} width={1600} height={1200} sizes="(max-width: 767px) 92vw, 45vw" /></figure>
            <span>{material.marker}</span><h3>{material.name}</h3><p>{material.copy}</p><b>{String(index + 1).padStart(2, "0")}</b>
          </article>
        ))}
      </div>
    </section>
  );
}
