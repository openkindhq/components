import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "../components/Checkbox";
import { DarkView, LightView } from "./View";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <Checkbox />
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <Checkbox />
  </DarkView>
);
