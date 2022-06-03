import React from 'react';
import {Grid, GridColumn, Icon, Segment} from "semantic-ui-react";

const EntryLine = ({description, amount, isExpense = false}) => (
    <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
            <GridColumn width={10} textAlign='left'>{description}</GridColumn>
            <GridColumn width={3} textAlign='right'>{amount}</GridColumn>
            <GridColumn width={3}>
                <Icon name='edit' bordered/>
                <Icon name='trash' bordered/>
            </GridColumn>
        </Grid>
    </Segment>
);

export default EntryLine;
