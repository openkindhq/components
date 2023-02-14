import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioGroup, RadioGroupItem } from "../components/RadioGroup";
import { DarkView, LightView } from "./View";

export default {
  title: "Radiogroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Light: ComponentStory<typeof LightView> = () => (
  <LightView>
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
      </div>
    </RadioGroup>
  </LightView>
);

export const Dark: ComponentStory<typeof DarkView> = () => (
  <DarkView>
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
      </div>
    </RadioGroup>
  </DarkView>
);
