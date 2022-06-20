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
import {createStore} from 'redux';

const initialEntries = [
    {
        id: 1,
        description:'Work income',
        value: 1000.00,
        isExpense:false
    },
    {
        id: 2,
        description:'Water bill',
        value: 20.00,
        isExpense:true
    },
    {
        id: 3,
        description:'Rent',
        value: 300.00,
        isExpense:true
    }
];

function App() {
    const [entries, setEntries] = useState(initialEntries)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [entryId, setEntryId] = useState()
    const [incomeTotal, setIncomeTotal] = useState(0)
    const [expenseTotal, setExpenseTotal] = useState(0)
    const [total, setTotal] = useState(0)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isOpen])

    useEffect(() => {
        let totalIncomes = 0
        let totalExpenses = 0
        entries.map(entry => {
            if (entry.isExpense) {
                return  totalExpenses += Number(entry.value)
            }
            return  totalIncomes += Number(entry.value)
        })
        setTotal(totalIncomes - totalExpenses)
        setExpenseTotal(totalExpenses)
        setIncomeTotal(totalIncomes)

    }, [entries])

    const store = createStore((state = initialEntries, action) => {
        console.log('action', action)
        switch (action.type) {
            case 'ADD_ENTRY':
                return state.concat({...action.payload})
            default:
                return state
        }
    })

    store.subscribe(() => {
        console.log('store: ', store.getState())
    })

    const payload = {
        id: 5,
        description: 'Hello from Redux',
        value: 100,
        isExpense: false
    }

    store.dispatch({type: 'ADD_ENTRY', payload})
    store.dispatch({type: 'ADD_ENTRY', payload})

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
            <DisplayBalance size='small' label='Your Balance' value={total} />

            <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

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
