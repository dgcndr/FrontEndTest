import React from 'react'
import { Col } from 'reactstrap';

const Default = (photo, label, value) => {
    return (
        <React.Fragment>
            <Col xs="0" >
                <img src={photo} alt={value} width="25px" height="25px" />
            </Col>
            <Col lg="9"  >
                <div style={{ fontSize: "15px" }}>{label}</div>
            </Col>
        </React.Fragment>
    )
}

export default Default;