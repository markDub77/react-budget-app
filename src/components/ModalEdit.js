import {Button, Modal, ModalActions, ModalContent, ModalDescription, ModalHeader} from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";

const ModalEdit = ({isOpen, setIsOpen}) => {
    return (
        <Modal open={isOpen}>
            <ModalHeader>Edit entry</ModalHeader>
            <ModalContent>
                <NewEntryForm />
            </ModalContent>
            <ModalActions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalEdit
