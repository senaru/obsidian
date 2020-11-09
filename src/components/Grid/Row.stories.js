import React from 'react';
import { Row } from './Row';
import PropTypes from 'prop-types';

export default {
    title: 'Example/Grid/Row',
    component: Row,
};

const Template = ({ children, ...args }) => <Row {...args} >{children}</Row>;

export const Default = Template.bind({});
Default.args = {

};

