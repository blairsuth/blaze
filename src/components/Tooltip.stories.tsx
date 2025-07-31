import React from "react";
import Tooltip from "./ToolTip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
  },
};

import type { ComponentProps } from "react";
import { StoryFn } from "@storybook/react-vite";
const Template: StoryFn<ComponentProps<typeof Tooltip>> = (args) => (
  <Tooltip {...args}>
    <button>Hover me</button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  content: "This is a tooltip!",
  placement: "top",
};
