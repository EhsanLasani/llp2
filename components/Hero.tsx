// components/Hero.tsx
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import styles from "./Hero.module.scss";

type Media = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

type HeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark" | "brandDark";
  size?: "normal" | "tall" | "xtall";
  media?: Media;
  mediaPlacement?: "left" | "right" | "top";
  className?: string;
  children?: React.ReactNode; // CTAs
};

export default function Hero({
  title,
  subtitle,
  align = "center",
  variant = "light",
  size = "tall",
  media,
  mediaPlacement = "right",
  className,
  children,
}: HeroProps) {
  const hasMedia = Boolean(media);
  const isTop = hasMedia && mediaPlacement === "top";

  // Map placement to CSS Module classes
  const placementClass = hasMedia
    ? mediaPlacement === "top"
      ? styles.withMediaTop
      : mediaPlacement === "left"
      ? styles.withMediaLeft
      : styles.withMediaRight
    : undefined;

  const mediaBlock = hasMedia ? (
    <div className={styles.media}>
      <Image
        src={media!.src}
        alt={media!.alt}
        width={media!.width ?? 720}
        height={media!.height ?? 540}
        className={styles.img}
        priority={media!.priority}
      />
    </div>
  ) : null;

  return (
    <section
      className={clsx(styles.hero, styles[variant], styles[size], className)}
      data-align={align}
    >
      <div
        className={clsx(
          "container",
          styles.wrap,
          hasMedia && styles.withMedia,
          styles[align],
          placementClass
        )}
      >
        {isTop && mediaBlock}
        <div className={styles.copy}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.lead}>{subtitle}</p>}
          {children ? <div className={styles.actions}>{children}</div> : null}
        </div>
        {!isTop && mediaBlock}
      </div>
    </section>
  );
}
