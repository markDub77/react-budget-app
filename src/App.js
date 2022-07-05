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
import {useSelector} from 'react-redux'

function App() {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [entryId] = useState()
    const [incomeTotal, setIncomeTotal] = useState(0)
    const [expenseTotal, setExpenseTotal] = useState(0)
    const [total, setTotal] = useState(0)
    const entries = useSelector(state => state.entries)
    const isOpenRedux = useSelector(state => state.modals.isOpen)

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries]
            newEntries[index].description = description
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
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

    const editEntry = id => {
        const index = entries.findIndex(entry => entry.id === id)
        const entry = entries[index]
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
                isOpen={isOpenRedux}
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
