import React from 'react'
import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({incomeTotal, expenseTotal}) {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <DisplayBalance size='tiny' color='green' style={{textAlign: 'left'}} label='Income:' value={incomeTotal} />
                    </GridColumn>
                    <GridColumn>
                        <DisplayBalance size='tiny' color='red' style={{textAlign: 'left'}} label='Expenses:' value={expenseTotal} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances
