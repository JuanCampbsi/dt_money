import { Container } from "./styles";
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean ;
    handleCloseNewTransactionModal: () => void ;
}

export function NewTransactionModal({
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal
}: NewTransactionModalProps) {
    return (
        <Container>
            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            >
                <h2>Cadastrar informação</h2>
            </Modal>
        </Container>
    );
}