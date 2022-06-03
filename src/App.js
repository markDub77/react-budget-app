import {
    Container,
    Grid,
    GridColumn,
    Icon,
    Segment
} from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";

function App() {
  return (
    <Container>
        <MainHeader title='Budget' type='h1'/>
        <DisplayBalance size='small' label='Your Balance' value='2,267.53'/>
        <DisplayBalances columns='2' textAlign='center' divided />
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
