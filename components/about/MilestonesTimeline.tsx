"use client";

import { Tile } from "@carbon/react";
import styles from "./MilestonesTimeline.module.scss";

const milestones = [
  {
    year: "1978",
    title: "Trading Roots",
    blurb: "Founded as a specialty tube and metals trading house in Mumbai.",
  },
  {
    year: "1990s",
    title: "Hydraulic Focus",
    blurb: "Expanded into hydraulic tube stocking and processing services.",
  },
  {
    year: "2017",
    title: "Lasani Fluid Power LLP",
    blurb: "Rebranded with dedicated machining and service infrastructure.",
  },
  {
    year: "2024",
    title: "ISO & Capacity Expansion",
    blurb: "ISO 9001:2015 certification and large-format machining upgrades.",
  },
];

export default function MilestonesTimeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.line} aria-hidden="true" />
      {milestones.map((m, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.dot} aria-hidden="true" />
          <Tile className={`card ${styles.card}`}>
            <div className="eyebrow">{m.year}</div>
            <h4>{m.title}</h4>
            <p className="muted">{m.blurb}</p>
          </Tile>
        </div>
      ))}
    </div>
  );
}
