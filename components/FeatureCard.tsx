import { ReactNode } from "react";
import styles from "./FeatureCard.module.scss";

export default function FeatureCard({
  icon,
  title,
  badge,
  children,
}: {
  icon?: ReactNode; // pass an inline SVG or <img/>
  title: string;
  badge?: string;
  children?: ReactNode; // the short description
}) {
  return (
    <article className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      {badge && <span className={styles.badge}>{badge}</span>}
      <p className={styles.desc}>{children}</p>
    </article>
  );
}
