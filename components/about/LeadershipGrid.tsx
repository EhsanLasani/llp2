"use client";

import Image from "next/image";
import { Tile } from "@carbon/react";
import styles from "./LeadershipGrid.module.scss";

type Leader = {
  name: string;
  role: string;
  bio: string;
  photo?: string; // /public path, e.g. "/images/team/abdul-rehman.png"
  initials?: string; // fallback if no photo
};

const leaders: Leader[] = [
  {
    name: "Abdul Rehman",
    role: "Managing Director",
    bio: "Driving operational excellence and strategic expansion since 2012.",
    photo: "/images/team/abdul-rehman.jpg",
  },
  {
    name: "Ehsan Ahmad",
    role: "Director",
    bio: "Veteran in supply chain and manufacturing with 25+ years of experience.",
    photo: "/images/team/ehsan-ahmad.jpg",
  },
  {
    name: "Dr. Abdul Mannan",
    role: "Director",
    bio: "Strategic advisor bringing analytical precision to business direction.",
    photo: "/images/team/abdul-mannan.jpg",
  },
];

export default function LeadershipGrid() {
  return (
    <div className={styles.grid}>
      {leaders.map((p) => (
        <Tile key={p.name} className={`card ${styles.card}`}>
          <div className={styles.avatarWrap}>
            {p.photo ? (
              <Image
                src={p.photo}
                alt={`${p.name} portrait`}
                width={96}
                height={96}
                className={styles.avatar}
              />
            ) : (
              <div className={styles.avatarFallback}>
                {p.initials ?? p.name[0]}
              </div>
            )}
          </div>

          <h3 className={styles.name}>{p.name}</h3>
          <div className={`eyebrow ${styles.role}`}>{p.role.toUpperCase()}</div>
          <p className="muted" style={{ margin: 0 }}>
            {p.bio}
          </p>
        </Tile>
      ))}
    </div>
  );
}
