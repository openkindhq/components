import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";
import { DarkView, LightView } from "./View";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView className="flex space-x-12">
    <Button>Click me</Button>
    <Button variant="destructive">Click me</Button>
    <Button variant="outline">Click me</Button>
    <Button variant="subtle">Click me</Button>
    <Button variant="ghost">Click me</Button>
    <Button variant="link">Click me</Button>
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView className="flex space-x-12">
    <Button>Click me</Button>
    <Button variant="destructive">Click me</Button>
    <Button variant="outline">Click me</Button>
    <Button variant="subtle">Click me</Button>
    <Button variant="ghost">Click me</Button>
    <Button variant="link">Click me</Button>
  </DarkView>
);
