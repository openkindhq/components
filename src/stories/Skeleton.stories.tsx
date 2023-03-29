import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skeleton } from "../components/Skeleton";
import { DarkView, LightView } from "./View";

export default {
  title: "Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView className="flex flex-col space-y-2">
    <Skeleton loading={true} className="h-24 w-24 rounded-full" />
    <Skeleton loading={true} className="w-full h-4 rounded-full" />
    <Skeleton loading={true} className="w-full h-4 rounded-full" />
    <Skeleton loading={true} className="w-full h-4 rounded-full" />
    <Skeleton loading={true} className="w-2/3 h-4 rounded-full" />
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView className="flex flex-col space-y-2">
    <Skeleton loading={true} className="h-24 w-24 rounded-full" />
    <Skeleton loading={true} className="w-full h-4 rounded-full" />
    <Skeleton loading={true} className="w-full h-4 rounded-full" />
    <Skeleton loading={true} className="w-full h-4 rounded-full" />
    <Skeleton loading={true} className="w-2/3 h-4 rounded-full" />
  </DarkView>
);
