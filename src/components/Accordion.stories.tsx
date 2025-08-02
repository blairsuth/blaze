import type { Meta, StoryObj } from "@storybook/react-vite";
import Accordion from "./Accordion";
import type { AccordionItemData } from "./Accordion.types";
import "./Accordion.css";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const sampleItems: AccordionItemData[] = [
  {
    title: "Accordion Item 1",
    content: "This is the content for item 1.",
  },
  {
    title: "Accordion Item 2",
    content: "Here's what's inside item 2.",
  },
  {
    title: "Accordion Item 3",
    content: (
      <div>
        <p>
          Item 3 can also contain <strong>JSX content</strong>.
        </p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};
