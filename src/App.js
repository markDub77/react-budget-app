import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Icon,
    Segment
} from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";

function App() {
  return (
    <Container>
        <MainHeader title='Budget' type='h1'/>
        <DisplayBalance size='small' label='Your Balance' value='2,267.53'/>
        <Segment textAlign='center'>
            <Grid columns={2} divided>
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

        <MainHeader title='History' type='h3' />
        <Segment color='green'>
            <Grid columns={3} textAlign='right'>
                <GridColumn width={10} textAlign='left'>Something</GridColumn>
                <GridColumn width={3} textAlign='right'>$10.00</GridColumn>
                <GridColumn width={3}>
                    <Icon name='edit' bordered/>
                    <Icon name='trash' bordered/>
                </GridColumn>
            </Grid>
        </Segment>
        <MainHeader title='Add new transaction' type='h3' />
        <NewEntryForm />
    </Container>
  );
}

export default App;
