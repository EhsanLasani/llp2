// app/about/page.tsx
import Link from "next/link";
import Section from "@/components/Section";
import HistoryAccordion from "@/components/about/HistoryAccordion";
import ValuesAndCerts from "@/components/about/ValuesAndCerts";
import MilestonesTimeline from "@/components/about/MilestonesTimeline";
import LeadershipGrid from "@/components/about/LeadershipGrid";
import Hero from "@/components/Hero"; // reuse your existing hero component
export const metadata = {
  title: "About — Lasani Fluid Power LLP",
  description:
    "Four decades of hydraulic tubes and precision machining expertise, built to perform under pressure.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Steered by Experience, Focused on Excellence"
        subtitle="For over four decades, Lasani Fluid Power LLP has combined engineering precision, global sourcing, and ISO 9001:2015 discipline to deliver reliability in every hydraulic solution."
        align="center"
        variant="light"
      />
      {/* Intro */}
      {/* <Section
        title="Four decades of hydraulic expertise"
        subtitle="Partnering with OEMs and MROs to deliver materials and components that meet global performance standards."
        tone="raised"
      >
        <p className="lead">
          Lasani Fluid Power LLP unites inventory strength with integrated
          machining to deliver dependable results for hydraulic systems.
        </p>
        <div className="actions" style={{ marginTop: 12 }}>
          <Link href="/products" className="cta primary">
            Explore Products
          </Link>
          <Link href="/contact" className="cta secondary">
            Contact Us
          </Link>
        </div>
      </Section> */}

      {/* History — client Carbon accordion */}
      {/* <Section title="Our history & evolution">
        <HistoryAccordion />
      </Section> */}
      <Section
        id="milestones"
        title="Our history & evolution - Milestones"
        subtitle="Decades of steady progress"
      >
        <MilestonesTimeline />
      </Section>
      {/* Mission / Vision / Values + Certifications — client Carbon tiles/tags */}
      <Section title="Mission, vision & values">
        <ValuesAndCerts />
      </Section>

      {/* Leadership — keep simple server markup for consistency */}
      <Section
        title="Leadership"
        subtitle="Steered by experience, focused on excellence"
        tone="raised"
      >
        <LeadershipGrid />
      </Section>
      {/* <Section
        title="Leadership team"
        subtitle="Experience that guides execution."
      >
        <div className="grid-3">
          <div className="card" style={{ padding: 20 }}>
            <h4>Abdul Rehman Khan</h4>
            <p className="muted">
              Managing Director — Strategy execution and business expansion.
            </p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4>Ehsan Ahmad Khan</h4>
            <p className="muted">
              Director — Supply chain & manufacturing leadership.
            </p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4>Dr. Abdul Mannan Khan</h4>
            <p className="muted">
              Director — Quality stewardship and governance.
            </p>
          </div>
        </div>
      </Section> */}

      {/* Infrastructure */}
      <Section
        title="Infrastructure & location"
        subtitle="Navi Mumbai hub with port and airport connectivity."
      >
        <div className="card" style={{ padding: 20 }}>
          <ul>
            <li>Proximity to JNPT Port and key industrial corridors.</li>
            <li>
              Connectivity to highways/rail; upcoming Navi Mumbai International
              Airport.
            </li>
            <li>
              Integrated inventory, machining and QA for predictable turnaround.
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="raised" title="Partner with India’s trusted OEM supplier">
        <p className="lead">
          Let’s engineer reliability together — from material selection to
          precision machining and on-time delivery.
        </p>
        <div className="actions" style={{ gap: 10 }}>
          <Link href="/products" className="cta primary">
            Explore Products
          </Link>
          <Link href="/contact" className="cta secondary">
            Contact Us
          </Link>
        </div>
      </Section>
    </>
  );
}
