import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Popover, PopoverTrigger, PopoverContent } from "../components/Popover";
import { DarkView, LightView } from "./View";

export default {
  title: "Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  </DarkView>
);
