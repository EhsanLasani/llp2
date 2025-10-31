// components/about/ValuesAndCerts.tsx
"use client";

import { Tag, Tile } from "@carbon/react";

export default function ValuesAndCerts() {
  return (
    <>
      <div className="grid-3">
        <Tile className="card" style={{ padding: 20 }}>
          <h4>Mission</h4>
          <p>
            Engineer reliability, deliver value, and simplify supply for every
            hydraulic application.
          </p>
        </Tile>
        <Tile className="card" style={{ padding: 20 }}>
          <h4>Vision</h4>
          <p>
            To be India’s most trusted OEM partner for precision tubes and
            hydraulic components.
          </p>
        </Tile>
        <Tile className="card" style={{ padding: 20 }}>
          <h4>Values</h4>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Tag type="cool-gray">Challenge</Tag>
            <Tag type="blue">Collaboration</Tag>
            <Tag type="teal">Pride</Tag>
            <Tag type="green">Commitment</Tag>
            <Tag type="purple">Dedication</Tag>
          </div>
        </Tile>
      </div>

      <div style={{ height: 24 }} />

      <h3>Accreditations & certifications</h3>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag type="blue">ISO 9001:2015</Tag>
        <Tag type="cool-gray">MSME</Tag>
        <Tag type="teal">PAN</Tag>
        <Tag type="green">GST</Tag>
      </div>
    </>
  );
}
