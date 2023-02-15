import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";
import { DarkView, LightView } from "./View";

export default {
  title: "Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <Accordion type="single" collapsible>
      <AccordionItem value="type-1">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Opened</AccordionContent>
      </AccordionItem>

      <AccordionItem value="type-2">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Opened</AccordionContent>
      </AccordionItem>

      <AccordionItem value="type-3">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Opened</AccordionContent>
      </AccordionItem>

      <AccordionItem value="type-4">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Opened</AccordionContent>
      </AccordionItem>
    </Accordion>
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <Accordion type="single" collapsible>
      <AccordionItem value="type-1">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Opened</AccordionContent>
      </AccordionItem>

      <AccordionItem value="type-2">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Opened</AccordionContent>
      </AccordionItem>

      <AccordionItem value="type-3">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Opened</AccordionContent>
      </AccordionItem>

      <AccordionItem value="type-4">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>Opened</AccordionContent>
      </AccordionItem>
    </Accordion>
  </DarkView>
);
