import React from 'react';
import { Column } from './Column';
import PropTypes from 'prop-types';

export default {
    title: 'Example/Grid/Column',
    component: Column,
};

const Template = ({ children, ...args }) => <Column {...args} >{children}</Column>;

export const Default = Template.bind({});
Default.args = {

};

