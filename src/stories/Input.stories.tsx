import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "../components/Input";
import { DarkView, LightView } from "./View";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <Input placeholder="Input component" />
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <Input placeholder="Input component" />
  </DarkView>
);
