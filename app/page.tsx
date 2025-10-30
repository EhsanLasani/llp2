import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
export default function Page() {
  return (
    <>
      <Hero />
      <Section
        // eyebrow="Why Lasani"
        title="Why Lasani is the preferred partner for OEMs and MROs"
        subtitle=" At Lasani Fluid Power LLP, our edge lies in the synergy of engineering precision, high-volume inventory, and on-time delivery.
                  With ISO 9001:2015–certified systems and fully integrated machining expertise, we ensure every project meets uncompromising standards of accuracy, traceability, and performance."
        tone="raised"
      >
        <div className="grid-4">
          <FeatureCard
            title="Stock & Scale"
            badge="Ready at Dispatch"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M3 7h18v10H3zM3 5h18v2H3zM6 9h5v6H6z"
                />
              </svg>
            }
          >
            500 MT+ stocking program with rapid dispatch capabilities.
          </FeatureCard>

          <FeatureCard
            title="Engineering Precision"
            badge="End-to-End Machining"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M3 12l7-7 4 4-7 7H3v-4zM14 5l5 5-9 9H5v-5z"
                />
              </svg>
            }
          >
            Deep hole drilling, honing, trepanning, boring, and grinding in one
            facility.
          </FeatureCard>

          <FeatureCard
            title="Quality Assured"
            badge="ISO 9001:2015"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 1l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7z"
                />
              </svg>
            }
          >
            Tier-one sourcing, ISO 9001:2015 aligned QA with full traceability.
          </FeatureCard>

          <FeatureCard
            title="On-Time Delivery"
            badge="Logistics Assurance"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 8v5l4 2 .9-1.8-3.4-1.7V8zM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
                />
              </svg>
            }
          >
            Pan-India & export logistics with predictable ETAs.
          </FeatureCard>
        </div>
      </Section>
      {/* <Section
        title="Why Lasani is the preferred partner for OEMs and MROs"
        tone="raised"
        subtitle="Scale & stock • Engineering precision • Quality assured • On-time delivery"
      >
        <div className="grid-4">
          <div className="card">
            <strong>Stock & Scale</strong>
            <br />
            500 MT stocking program with rapid dispatch capabilities.
          </div>
          <div className="card">
            <strong>Engineering Precision</strong>
            <br />
            Deep-hole drilling, honing, trepanning, boring, grinding.
          </div>
          <div className="card">
            <strong>Quality Assured</strong>
            <br />
            ISO 9001:2015 aligned QA and full traceability.
          </div>
          <div className="card">
            <strong>On-Time Delivery</strong>
            <br />
            Pan-India & export logistics with reliable ETAs.
          </div>
        </div>
      </Section> */}
      <Section title="Core offerings">
        <div className="grid-2">
          <div className="card">
            <strong>Professional Tube Source</strong>
            <br />
            We supply specialty pipes & tubes, raw materials & components for
            the hydraulic cylinder industry.
          </div>
          <div className="card">
            <strong>Integrated Machining & Services</strong>
            <br />
            Comprehensive machining programs that keep hydraulic systems running
            with predictable turnaround.
          </div>
        </div>
      </Section>
    </>
  );
}
