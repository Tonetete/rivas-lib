import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Dropdown, { Props } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<Props> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  forLabel: "data",
  titleLabel: "Select an option: ",
  options: [
    { display: "Value 1", value: "value1" },
    { display: "Value 2", value: "value2" },
    { display: "Value 3", value: "value3" },
  ],
  onChangeCb: (value: string) => console.log("value", value),
};
