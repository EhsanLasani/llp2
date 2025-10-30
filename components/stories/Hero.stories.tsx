import type { Meta, StoryObj } from "@storybook/react";
import Hero from "../Hero";
import { ArrowRight } from "lucide-react";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
  render: () => <Hero />,
};

export const BrandDark: Story = {
  render: () => (
    <div data-theme="dark">
      <Hero />
    </div>
  ),
};
