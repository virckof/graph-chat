import React, {useEffect} from "react";
import { useSubscription} from '@apollo/client';
import {SUBSCRIBE_TO_MESSAGES} from "./Queries";


export const Messages = ({user}) => {

    const {data} = useSubscription(SUBSCRIBE_TO_MESSAGES);

    useEffect(() => {
        updateScroll();
     }, [data]);

    const updateScroll = () => {
        var element = document.getElementById("chatMessages");
        if(element){
            element.scrollTop = element.scrollHeight;
        }
    }

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
            maxWidth: "60%",
        };
    
        const userStyle = {
            height: 50,
            width: 50,
            marginRight: "0.5em",
            border: "2px solid #e5e6ea",
            borderRadius: 25,
            textAlign: "center",
            fontSize: "15pt",
            paddingTop: 8
        };

        return (
            <div style={messagesStyle}>
                <div style={userStyle}> {message.user.slice(0, 2).toUpperCase()}</div>
                <div style={messageStyle}> {message.content}</div>
            </div>
        );
    });

    const containerStyle = {
        overflowY: "scroll",
        maxHeight: 400,
        marginBottom: 10
    };

    return (
        <div style={containerStyle} id="chatMessages">
            {messages}
        </div>
    );
}