// import Link from "next/link";
// import styles from "./Hero.module.scss";

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
//       <div className="container">
//         <h1 className={styles.title}>
//           Hydraulic tubes, chrome plated bars, and machining expertise trusted
//           for 40+ years.
//         </h1>
//         <p className={styles.lead}>
//           Specialty pipes, tubes & CNC-led engineering services with end-to-end
//           logistics coverage for OEMs, MRO teams, and export customers.
//         </p>
//         <div className={styles.actions}>
//           <Link className="cta" href="/products">
//             Explore products
//           </Link>
//           <Link className="cta secondary" href="/contact">
//             Speak to an expert
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={`${styles.hero} ${styles.center}`}>
      {/* Optional VFX:
      <div className={styles.bgVfx} />
      */}
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>
            Reliability. Commitment. Value. Engineered into Every Tube.
          </h1>
          <p className={styles.lead}>
            Lasani Fluid Power LLP is India’s OEM partner of choice for over
            four decades — combining globally sourced materials, in-house
            precision super-finish machining, and an efficient supply-chain
            network to deliver unmatched reliability and value across every
            cylinder tube supply.
          </p>
          <div className={styles.actions}>
            <Link className="cta primary" href="/products">
              Explore products
            </Link>
            <Link className="cta secondary" href="/contact">
              Speak to an expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
