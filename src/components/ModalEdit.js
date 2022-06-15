import {Button, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({
    isOpen,
    setIsOpen,
    description,
    value,
    setValue,
    setDescription,
    setIsExpense,
    isExpense
}) => {
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
                    setIsExpense={setIsExpense}
                />
            </ModalContent>
            <ModalActions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalEdit
