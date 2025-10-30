// import { ReactNode } from "react";
// import styles from "./Section.module.scss";

// export default function Section({
//   title,
//   subtitle,
//   tone = "default",
//   children,
// }: {
//   title?: string;
//   subtitle?: string;
//   tone?: "default" | "raised";
//   children?: ReactNode;
// }) {
//   return (
//     <section
//       className={`${styles.section} ${tone === "raised" ? styles.raised : ""}`}
//     >
//       <div className="container">
//         {title && <h2 style={{ margin: "0 0 8px" }}>{title}</h2>}
//         {subtitle && (
//           <p className="muted" style={{ margin: "0 0 16px" }}>
//             {subtitle}
//           </p>
//         )}
//         {children}
//       </div>
//     </section>
//   );
// }
import { ReactNode } from "react";
import styles from "./Section.module.scss";

export default function Section({
  title,
  subtitle,
  tone = "default",
  variant,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  tone?: "default" | "raised";
  variant?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  const classes = [
    styles.section,
    tone === "raised" ? styles.raised : "",
    variant === "light" ? styles.light : "",
    variant === "dark" ? styles.dark : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className="container">
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
