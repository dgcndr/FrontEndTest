import React from 'react'
import { Container, Col, Row } from 'reactstrap';
import Delete from "./Content/Delete";
import EditAct from "./EditAct";

const DeleteAct = ({ value, label, photo }) => {
    return (
        <Container>
            <Row>
                <EditAct buttonLabel="Edit" label={label} photo={photo} value={value} />
                <Col>
                    <Delete buttonLabel="Delete" className={"modalDelete"} />
                </Col>
            </Row>
        </Container>
    );
};

export default DeleteAct;