import React, {useState} from 'react'
import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function NewEntryForm({addEntry}) {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    return (
        <Form unstackable>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpence={setIsExpense}
                addEntry={addEntry}
            />
        </Form>
    )
}

export default NewEntryForm
