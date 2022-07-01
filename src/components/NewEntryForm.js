import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function NewEntryForm() {
    const {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry
    } = useEntryDetails()

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
