import React from 'react'
import { css as emotionCss } from "emotion";
import { Container, Col, Row } from 'reactstrap';


const Profile = ({
    cx,
    getStyles,
    selectProps,
    data,
    isDisabled,
    className,
    ...props
}) => {
    return (
        <div
            className={cx(
                emotionCss(getStyles("singleValue", props)),
                {
                    "single-value": true,
                    "single-value--is-disabled": isDisabled
                },
                className
            )}
        >
            <Container>
                <Row>
                    <Col xs="0">
                        <img src={data.photo} alt={data.photo} width="25px" height="25px" />
                    </Col>
                    <Col>
                        <div style={{ fontSize: "15px" }}>
                            {selectProps.getOptionLabel(data)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Profile;