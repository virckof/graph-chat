import React from "react";
import {FormInput, Row, Col, Button} from "shards-react";

export const Controls = ({user, content, onUserChange, onContentChange, onSend}) => {

    const controlStyle = {paddingLeft:10};
    const sendButtonStyle = {width: "100%"};

    const handleEnterHit = (e) => {
        if(e.keyCode === 13) {
            onSend();
        }
    };

    return(
        <Row>
            <Col xs={2} style={controlStyle}>
                <FormInput
                    label="User"
                    value={user}
                    onChange={(e)=> onUserChange(e.target.value)}
                />
            </Col>
            <Col xs={8} style={controlStyle}>
                <FormInput
                    label="Content"
                    value={content}
                    onChange={(e)=> onContentChange(e.target.value)}
                    onKeyUp={handleEnterHit}
                />
            </Col>
            <Col xs={2} style={controlStyle}>
                <Button style= {sendButtonStyle} onClick={onSend}> Send </Button>
            </Col>
        </Row>
    );

};