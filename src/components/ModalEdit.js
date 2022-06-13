import {Button, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({isOpen, setIsOpen, description, value, setValue, setDescription, setIsExpense, isExpense}) => {
    return (
        <Modal open={isOpen}>
            <ModalHeader>Edit entry</ModalHeader>
            <ModalContent>
                <EntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setValue={setValue}
                    setDescription={setDescription}
                    setIsExpence={setIsExpense}
                />
            </ModalContent>
            <ModalActions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalEdit
