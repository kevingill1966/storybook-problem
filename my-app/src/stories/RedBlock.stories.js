import Vue from "vue";

import RedBlock from "../RedBlock.vue";
Vue.component("red-block", RedBlock);

export default {
  title: 'RedBlock',
  component: RedBlock,
};

const Template = () => ({
  template:
    '<red-block />',
});

export const RedBlock1 = Template.bind({});

