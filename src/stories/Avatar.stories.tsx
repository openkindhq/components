import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import { DarkView, LightView } from "./View";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView className="flex space-x-12">
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/75499121" />
      <AvatarFallback>SW</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>SW</AvatarFallback>
    </Avatar>
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView className="flex space-x-12">
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/75499121" />
      <AvatarFallback>SW</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>SW</AvatarFallback>
    </Avatar>
  </DarkView>
);
