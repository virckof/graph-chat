import React from "react";
import { useQuery} from '@apollo/client';
import {GET_MESSAGES} from "./Queries";


export const Messages = ({user}) => {

    const {data} = useQuery(GET_MESSAGES, {
        pollInterval: 500
    });

    if(!data){
        return null;
    }

    const messages = data.messages.map(message  => {

        const messagesStyle = {
            display: "flex",
            justifyContent: user === message.user ? "flex-end" : "flex-start",
            paddingBottom: "1em",
        };
    
        const messageStyle = {
            background: user === message.user ? '#58bf56' : '#e5e6ea',
            color: user === message.user ? 'white' : 'black',
            padding: "1em",
            borderRadius: "1em",
            maxWidth: "60%"
        };
    
        const userStyle = {
            height: 50,
            width: 50,
            marginRight: "0.5em",
            border: "2px solid #e5e6ea",
            borderRadius: 25,
            textAlign: "center",
            fontSize: "18pt",
            paddingTop: 5
        };

        return (
            <div style={messagesStyle}>
                <div style={userStyle}> {message.user.slice(0, 2).toUpperCase()}</div>
                <div style={messageStyle}> {message.content}</div>
            </div>
        );
    });

    return messages;
}