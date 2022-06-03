import {
    Container
} from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
        <MainHeader title='Budget' type='h1'/>
        <DisplayBalance size='small' label='Your Balance' value='2,267.53'/>
        <DisplayBalances columns='2' textAlign='center' divided />
        <MainHeader title='History' type='h3' />
        <EntryLine description='Income' amount='$10.00'/>
        <EntryLine description='Expense' amount='$10.00' isExpense />
        <MainHeader title='Add new transaction' type='h3' />
        <NewEntryForm />
    </Container>
  );
}

export default App;
