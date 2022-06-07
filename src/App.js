import {
    Container
} from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import {useState} from "react";

const initialEntries = [
    {
        id: 1,
        description:'Work income',
        value:'$1000,00',
        isExpense:false
    },
    {
        id: 2,
        description:'Water bill',
        value:'$20,00',
        isExpense:true
    },
    {
        id: 3,
        description:'Rent',
        value:'$300,00',
        isExpense:true
    }
];

function App() {
    const [entries, setEntries] = useState(initialEntries)

    const deleteEntry = id => {
        const result = entries.filter(entry => entry.id !== id)
        setEntries(result)
    }

    return (
        <Container>
            <MainHeader title='Budget' type='h1'/>
            <DisplayBalance size='small' label='Your Balance' value='2,267.53'/>

            <DisplayBalances columns='2' textAlign='center' divided />

            <MainHeader title='History' type='h3' />
            <EntryLines entries={entries} deleteEntry={deleteEntry}/>

            <MainHeader title='Add new transaction' type='h3' />
            <NewEntryForm />
        </Container>
    );
}

export default App;
