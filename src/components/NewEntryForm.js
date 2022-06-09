import React, {useState} from 'react'
import {Checkbox, Form, FormGroup, FormInput, Segment} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm({addEntry}) {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    return (
        <Form unstackable>
            <FormGroup>
                <FormInput
                    icon='tags'
                    width={12}
                    label='Description'
                    placeholder='New shinny thing'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <FormInput
                    width={4}
                    label='value'
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                ></FormInput>
                <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense} />
            </FormGroup>
            <Segment compact>
                <Checkbox
                    toggle
                    label='is expense'
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </Form>
    )
}

export default NewEntryForm
