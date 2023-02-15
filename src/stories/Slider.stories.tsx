import * as React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Slider } from "../components/Slider";
import { DarkView, LightView } from "./View";

export default {
  title: "Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <Slider defaultValue={[33]} max={100} step={1} />
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <Slider defaultValue={[33]} max={100} step={1} />
  </DarkView>
);
