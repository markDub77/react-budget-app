import {Button, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import EntryForm from "./EntryForm";
import {useDispatch} from "react-redux";
import {closeEditModal} from "../actions/modals.actions";

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
    const dispatch = useDispatch();
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
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
            </ModalActions>
        </Modal>
    )
}

export default ModalEdit
