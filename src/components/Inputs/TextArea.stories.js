import React from 'react';
import { TextArea } from './TextArea';
import PropTypes from 'prop-types';

export default {
    title: 'Example/Text Area',
    component: TextArea,
};

const Template = ({ children, ...args }) => <TextArea {...args} >{children}</TextArea>;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Placeholder"
};

