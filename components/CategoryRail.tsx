"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link, { type Route } from "next/link";
import clsx from "clsx";
import styles from "./CategoryRail.module.scss";

// Use your path alias if you have `@/*` in tsconfig. Otherwise: "../lib/products"
import { products } from "@/lib/products";

/** Types */
type Item = {
  title: string;
  caption?: string;
  href: Route;
  img: string;
  tag?: string;
};
type Dataset = Record<"products" | "services" | "capabilities", Item[]>;

type CategoryRailProps = {
  data?: Dataset;
  title?: string;
  subtitle?: string;
  autoScroll?: boolean; // enable infinite auto-scrolling
  scrollStep?: number; // pixels per tick
  scrollInterval?: number; // ms between ticks
};

/** Build dataset from a single source of truth (products map) */
const productItems: Item[] = Object.values(products).map((p) => ({
  title: p.title,
  caption: p.subtitle,
  href: `/products/${p.slug}` as Route,
  img: p.image ?? "/images/placeholder.jpg",
}));

const defaultData: Dataset = {
  products: productItems,
  services: [
    {
      title: "Deep Hole Drilling",
      caption: "Up to 6m",
      href: "/services" as Route,
      img: "/images/services/deep-hole-drilling.jpeg",
    },
    {
      title: "Deep Hole Honing",
      caption: "Mirror finish",
      href: "/services" as Route,
      img: "/images/services/deep-hole-honing.jpg",
    },
    {
      title: "Port & End-Cap Welding",
      caption: "Fabrication",
      href: "/services" as Route,
      img: "/images/services/port-end-cap-welding.jpg",
    },
  ],
  capabilities: [
    {
      title: "ISO 9001:2015",
      caption: "QA discipline",
      href: "/about#quality" as Route,
      img: "/images/demo/cap-iso.jpg",
    },
    {
      title: "Large Inventory",
      caption: "500+ MT",
      href: "/about#scale" as Route,
      img: "/images/demo/cap-inventory.jpg",
    },
  ],
};

export default function CategoryRail({
  data = defaultData,
  title = "A library you’ll want to get lost in.",
  subtitle = "Browse our products, services, and capabilities.",
  autoScroll = true,
  scrollStep = 1.5,
  scrollInterval = 16,
}: CategoryRailProps) {
  const [tab, setTab] = useState<keyof Dataset>("products");
  const railRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const userScrolled = useRef(false);
  const idleReset = useRef<number | null>(null);

  const items = useMemo(() => data[tab] ?? [], [data, tab]);
  // duplicate list to enable seamless looping
  const renderItems = useMemo(() => [...items, ...items], [items]);

  /** Button helpers — DO NOT call window.scrollBy */
  const scrollRailBy = (dx: number) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dx, behavior: "smooth" });
  };

  /** Infinite auto-scroll loop that resets when reaching mid-point */
  useEffect(() => {
    if (!autoScroll) return;
    const r = railRef.current;
    if (!r) return;

    let timer: number | null = null;

    const tick = () => {
      if (!railRef.current) return;

      if (hovering.current || userScrolled.current) {
        timer = window.setTimeout(tick, scrollInterval) as unknown as number;
        return;
      }

      const half = r.scrollWidth / 2; // because we duplicated the list
      if (r.scrollLeft >= half) {
        r.scrollLeft = r.scrollLeft - half; // snap back to start of first half
      } else {
        r.scrollBy({ left: scrollStep, behavior: "auto" });
      }

      timer = window.setTimeout(tick, scrollInterval) as unknown as number;
    };

    timer = window.setTimeout(tick, scrollInterval) as unknown as number;

    const onUserStart = () => {
      userScrolled.current = true;
      if (idleReset.current) window.clearTimeout(idleReset.current);
      idleReset.current = window.setTimeout(
        () => (userScrolled.current = false),
        600
      );
    };

    r.addEventListener("wheel", onUserStart, { passive: true });
    r.addEventListener("touchstart", onUserStart, { passive: true });
    r.addEventListener("mousedown", onUserStart);

    return () => {
      if (timer) window.clearTimeout(timer);
      r.removeEventListener("wheel", onUserStart);
      r.removeEventListener("touchstart", onUserStart);
      r.removeEventListener("mousedown", onUserStart);
    };
  }, [autoScroll, scrollStep, scrollInterval, tab, items]);

  return (
    <section className={styles.block} aria-labelledby="cat-rail-title">
      <div className={clsx("container", styles.inner)}>
        <header className={styles.head}>
          <h2 id="cat-rail-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.sub}>{subtitle}</p>

          <div className={styles.tabs} role="tablist" aria-label="Category">
            {(["products", "services", "capabilities"] as const).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                className={clsx(styles.tab, tab === key && styles.active)}
                onClick={() => setTab(key)}
                type="button"
              >
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </header>

        <div className={styles.railWrap}>
          <button
            className={clsx(styles.arrow, styles.left)}
            aria-label="Scroll left"
            type="button"
            onClick={() => scrollRailBy(-360)}
          >
            ‹
          </button>

          <div
            ref={railRef}
            className={styles.rail}
            onMouseEnter={() => (hovering.current = true)}
            onMouseLeave={() => (hovering.current = false)}
            onWheel={() => (userScrolled.current = true)}
          >
            {renderItems.map((it, i) => (
              <Link key={`${tab}-${i}`} href={it.href} className={styles.card}>
                <div className={styles.thumb}>
                  <img src={it.img} alt={it.title} loading="lazy" />
                  {it.tag && <span className={styles.badge}>{it.tag}</span>}
                </div>
                <div className={styles.meta}>
                  <div className={styles.cardTitle}>{it.title}</div>
                  {it.caption && (
                    <div className={styles.caption}>{it.caption}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <button
            className={clsx(styles.arrow, styles.right)}
            aria-label="Scroll right"
            type="button"
            onClick={() => scrollRailBy(+360)}
          >
            ›
          </button>

          <div className={clsx(styles.fade, styles.leftFade)} />
          <div className={clsx(styles.fade, styles.rightFade)} />
        </div>
      </div>
    </section>
  );
}
