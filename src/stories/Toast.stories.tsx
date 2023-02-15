import * as React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toaster } from "../components/Toaster";
import { Button } from "../components/Button";

import { useToast } from "../hooks//use-toast";

import { DarkView, LightView } from "./View";

export default {
  title: "Toast",
  component: Toaster,
} as ComponentMeta<typeof Toaster>;

export const Light: ComponentStory<typeof LightView> = () => {
  const { toast } = useToast();
  return (
    <LightView>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </LightView>
  );
};

export const Dark: ComponentStory<typeof DarkView> = () => {
  const { toast } = useToast();
  return (
    <DarkView>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </DarkView>
  );
};
