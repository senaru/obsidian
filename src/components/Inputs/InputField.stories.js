import React from 'react';
import { InputField } from './InputField';

export default {
    title: 'Example/Input Field',
    component: InputField,
};

const Template = ({ children, ...args }) => <InputField {...args} >{children}</InputField>;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Placeholder",
    label: "Label"
};

