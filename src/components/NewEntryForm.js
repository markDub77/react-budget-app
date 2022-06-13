import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function NewEntryForm({addEntry, description, value, setValue, setDescription, setIsExpense, isExpense}) {
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
