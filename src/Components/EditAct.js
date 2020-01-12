import React, { useState } from 'react'
import { Button, Col } from 'reactstrap';
import Edit from "./Content/Edit";
import Default from "./Content/Default";

const EditAct = (props) => {

    const [edit, setEdit] = useState(false);
    const {
        buttonLabel,
        label,
        photo,
        value
    } = props
    const toggle = () => setEdit(!edit);

    return (
        <React.Fragment>
            {!edit ? Default(photo, label, value) : Edit(photo, label)}
            <Col xs="0" sm="0">
                <Button color="primary" size="sm" onClick={toggle}>{!edit ? buttonLabel : "Simpan"}</Button>{" "}
            </Col>
        </React.Fragment>
    )
}


export default EditAct
