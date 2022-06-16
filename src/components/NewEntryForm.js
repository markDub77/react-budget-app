import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import React from "react";

function NewEntryForm({addEntry, description, value, setValue, setDescription, setIsExpense, isExpense}) {
    return (
        <Form unstackable>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
                addEntry={addEntry}
            />
            <ButtonSaveOrCancel
                addEntry={addEntry}
            />
        </Form>
    )
}

export default NewEntryForm
