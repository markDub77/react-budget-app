import {
    Container
} from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import React, {useEffect, useState} from "react";
import ModalEdit from "./components/ModalEdit";

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
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [entryId, setEntryId] = useState();

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries]
            newEntries[index].description = description
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
            setEntries(newEntries)
            resetEntry()
        }
    },[isOpen])

    const deleteEntry = id => {
        if (id) {
            const result = entries.filter(entry => entry.id !== id)
            setEntries(result)
        }
    }

    const editEntry = id => {
        const index = entries.findIndex(entry => entry.id === id)
        const entry = entries[index]
        setEntryId(id)
        setDescription(entry.description)
        setValue(entry.value)
        setIsExpense(entry.isExpense)
        setIsOpen(true)
    }

    const addEntry = () => {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense
        })
        setEntries(result)
        resetEntry()
    }

    const resetEntry = () => {
        setDescription('')
        setValue('')
        setIsExpense(true)
    }

    return (
        <Container>
            <MainHeader title='Budget' type='h1'/>
            <DisplayBalance size='small' label='Your Balance' value='2,267.53'/>

            <DisplayBalances columns='2' textAlign='center' divided />

            <MainHeader title='History' type='h3' />
            <EntryLines
                entries={entries}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
            />

            <MainHeader title='Add new transaction' type='h3' />
            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
            />
            <ModalEdit
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                editEntry={editEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
            />
        </Container>
    );
}

export default App;
