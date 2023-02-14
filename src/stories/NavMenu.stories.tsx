import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/NavMenu";

import { DarkView, LightView } from "./View";

export default {
  title: "NavMenu",
  component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </DarkView>
);
