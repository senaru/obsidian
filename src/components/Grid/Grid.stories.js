import React from 'react';
import { Grid } from './Grid';
import Row from './Row';
import Column from './Column';
import PropTypes from 'prop-types';


export default {
    title: 'Example/Grid/Grid',
    component: Grid,
};

const Template = ({ children, ...args }) => <Grid {...args} >{children}</Grid>;

export const Default = Template.bind({});
Default.args = {
    children: <Grid>
        <Row>
            <Column size="one">
                One
  </Column>
            <Column size="eleven">
                Eleven
  </Column>
        </Row>
    </Grid>
};

