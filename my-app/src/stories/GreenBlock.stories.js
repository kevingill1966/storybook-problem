import Vue from "vue";

import GreenBlock from "my-module";
Vue.component("green-block", GreenBlock);

export default {
  title: 'GreenBlock',
  component: GreenBlock,
};

const Template = () => ({
  template:
    '<green-block />',
});

export const GreenBlock1 = Template.bind({});

