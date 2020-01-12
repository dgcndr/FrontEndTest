import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Select from 'react-select';

const Edit = (photo, label) => {
    const imageLabel = (
        <Container>
            <Row>
                <Col lg="0" sm="0" xs="0">
                    <img src={photo} alt="label" width="25px" height="25px" /> 
                </Col>
                <Col>
                    {label}
                </Col>
            </Row>
        </Container>
    )
    
    return (
        <React.Fragment>
            <Col xs="9">
                <Select
                    defaultValue={{ label: imageLabel }}
                    option={label}
                />
            </Col>
        </React.Fragment>
    )
}

export default Edit;