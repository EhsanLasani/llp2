import type { Meta, StoryObj } from "@storybook/react";
import Section from "../Section";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Section>;

export const Light: Story = {
  render: () => (
    <Section
      title="Light Section"
      subtitle="Shows surface token backgrounds"
      variant="light"
    >
      <div className="grid-2">
        <div className="card">Card one content</div>
        <div className="card">Card two content</div>
      </div>
    </Section>
  ),
};

export const Dark: Story = {
  render: () => (
    <Section
      title="Dark Section"
      subtitle="For brand dark surfaces"
      variant="dark"
    >
      <div className="grid-2">
        <div className="card invert">Dark content one</div>
        <div className="card invert">Dark content two</div>
      </div>
    </Section>
  ),
};

export const Raised: Story = {
  render: () => (
    <Section title="Raised Surface" subtitle="Elevation example" tone="raised">
      <div className="grid-3">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
    </Section>
  ),
};
