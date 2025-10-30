import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.columns}>
          <div>
            <h4 className={styles.title}>Lasani Fluid Power LLP</h4>
            <p className="muted">
              Industrial hydraulic solutions — engineering, design,
              commissioning, and lifecycle support.
            </p>
          </div>

          <div>
            <h4 className={styles.title}>Contact</h4>
            <address className={styles.address}>
              Doha, Qatar
              <br />
              <a href="tel:+97455555555">+974 5555 5555</a>
              <br />
              <a href="mailto:info@la-sani.com">info@la-sani.com</a>
            </address>
          </div>

          <nav aria-label="Website">
            <h4 className={styles.title}>Website</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/insight">Insight</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          © 2025 Lasani Fluid Power LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
