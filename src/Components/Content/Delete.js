import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Delete = (props) => {
    const {buttonLabel,className} = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <React.Fragment>
            <Button color="danger" size="sm" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Hapus data personalia</ModalHeader>
                <ModalBody>
                    Anda yakin ingin menghapus data ini?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" size="sm" onClick={toggle}>Ya</Button>{' '}
                    <Button color="danger" size="sm" onClick={toggle}>Tidak</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
}

export default Delete;