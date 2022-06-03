import React from 'react'
import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({columns, textAlign, divided}) {
    return (
        <Segment textAlign={textAlign}>
            <Grid columns={columns} divided={divided}>
                <GridRow>
                    <GridColumn>
                        <DisplayBalance size='tiny' color='green' style={{textAlign: 'left'}} label='Income:' value='2,245.34'/>
                    </GridColumn>
                    <GridColumn>
                        <DisplayBalance size='tiny' color='red' style={{textAlign: 'left'}} label='Expenses:' value='267.53'/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances
