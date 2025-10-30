import type { Meta, StoryObj } from "@storybook/react";
import FeatureCard from "../FeatureCard";
import { Truck, ShieldCheck, Factory, Settings } from "lucide-react";

const meta: Meta<typeof FeatureCard> = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    title: "Quality Assured",
    badge: "ISO 9001:2015",
    icon: <ShieldCheck size={20} />,
    children:
      "Tier-one sourcing, ISO 9001:2015 aligned QA with full traceability.",
  },
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(2, 1fr)",
        maxWidth: 700,
      }}
    >
      <FeatureCard
        title="Stock & Scale"
        badge="Ready at Dispatch"
        icon={<Factory size={20} />}
      >
        500 MT+ stocking program with rapid dispatch capabilities.
      </FeatureCard>
      <FeatureCard
        title="Engineering Precision"
        badge="Machining"
        icon={<Settings size={20} />}
      >
        Deep hole drilling, honing, and trepanning in one facility.
      </FeatureCard>
      <FeatureCard
        title="Quality Assured"
        badge="ISO 9001:2015"
        icon={<ShieldCheck size={20} />}
      >
        Tier-one sourcing and QA traceability.
      </FeatureCard>
      <FeatureCard
        title="On-Time Delivery"
        badge="Logistics"
        icon={<Truck size={20} />}
      >
        Pan-India & export logistics with predictable ETAs.
      </FeatureCard>
    </div>
  ),
};
