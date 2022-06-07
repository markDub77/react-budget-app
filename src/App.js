import {
    Container
} from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import {useState} from "react";

const initialEntries = [
    {
        description:'Work income',
        value:'$1000,00',
        isExpense:false
    },
    {
        description:'Water bill',
        value:'$20,00',
        isExpense:true
    },
    {
        description:'Rent',
        value:'$300,00',
        isExpense:true
    }
];

function App() {
    const [entries, setEntries] = useState(initialEntries)
  return (
    <Container>
        <MainHeader title='Budget' type='h1'/>
        <DisplayBalance size='small' label='Your Balance' value='2,267.53'/>

        <DisplayBalances columns='2' textAlign='center' divided />
        <MainHeader title='History' type='h3' />

        {entries.map((entry) => (
            <EntryLine
            description={entry.description}
            amount={entry.value}
            isExpense={entry.isExpense}
            />
            ))}


        <MainHeader title='Add new transaction' type='h3' />
        <NewEntryForm />
    </Container>
  );
}

export default App;
