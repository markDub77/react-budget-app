import React from 'react';
import {Grid, GridColumn, GridRow, Icon, Segment} from "semantic-ui-react";

const EntryLine = ({id ,description, amount, isExpense = false, deleteEntry}) => (
    <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
            <GridRow>
                <GridColumn width={10} textAlign='left'>{description}</GridColumn>
                <GridColumn width={3} textAlign='right'>{amount}</GridColumn>
                <GridColumn width={3}>
                    <Icon name='edit' bordered/>
                    <Icon name='trash' bordered onClick={() => deleteEntry(id)}/>
                </GridColumn>
            </GridRow>
        </Grid>
    </Segment>
);

export default EntryLine;
