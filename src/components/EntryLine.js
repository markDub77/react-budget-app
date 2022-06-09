import React, {Fragment, useState} from 'react';
import { Grid, GridColumn, GridRow, Icon, Segment } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

const EntryLine = ({id ,description, value, isExpense = false, deleteEntry}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (<Fragment>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <GridRow>
                        <GridColumn width={10} textAlign='left'>{description}</GridColumn>
                        <GridColumn width={3} textAlign='right'>{value}</GridColumn>
                        <GridColumn width={3}>
                            <Icon name='edit' bordered onClick={() => setIsOpen(true)} />
                            <Icon name='trash' bordered onClick={() => deleteEntry(id)} />
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment>
            <ModalEdit isOpen={isOpen}/>
        </Fragment>
    )
};

export default EntryLine;
