import React from 'react'
import {Form, FormGroup, FormInput} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
    return (
        <Form unstackable>
            <FormGroup>
                <FormInput
                    icon='tags'
                    width={12}
                    label='Description'
                    placeholder='New shinny thing'
                />
                <FormInput
                    width={4}
                    label='value'
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                ></FormInput>
                <ButtonSaveOrCancel />
            </FormGroup>
        </Form>
    )
}

export default NewEntryForm
