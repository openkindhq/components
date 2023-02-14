import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import { DarkView, LightView } from "./View";

export default {
  title: "Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  </DarkView>
);
