import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sample from '@react-component-boilerplate/component'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

const defaultHeaders = [{
  key: 'ms',
  title: 'microsoft'
}, {
  key: 'amzn',
  title: 'amazon'
}, {
  key: 'goog',
  title: 'google'
}]

const data2 = [
  {
    name: 'john',
    age: 34,
  },
  {
    name: 'jason',
    age: 40,
  },
]

export const NoData = Template.bind({
});
NoData.args = {
  headers: defaultHeaders,
  data: []
}


export const ExistData = Template.bind({
});
ExistData.args = {
  headers: defaultHeaders,
  data: [{
    ms: 200,
    amzn: 2400,
    goog: 2000
  }, {
    ms: 350,
    amzn: 3800,
    goog: 2700
  }]
}