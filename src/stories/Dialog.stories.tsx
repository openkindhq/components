import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/Dialog";
import { DarkView, LightView } from "./View";

export default {
  title: "Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </DarkView>
);
