import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Switch } from "../components/Switch";
import { DarkView, LightView } from "./View";

export default {
  title: "Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <Switch />
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <Switch />
  </DarkView>
);
