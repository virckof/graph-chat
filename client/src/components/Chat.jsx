import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from '@apollo/client';
import React, {useState} from "react";
import {Messages} from "./Messages";
import {Container} from "shards-react";
import {Controls} from "./Controls";
import {SEND_MESSAGE} from "./Queries";
import {Card, CardHeader, CardBody} from "shards-react";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});


const Chat = () => {

    const [control, setControl] = useState(
      {
        user: "Pachi",
        content: ""
      }
    );

    const [sendMessage]= useMutation(SEND_MESSAGE);

    const handleUserChange = (user) => {
      setControl({...control, user});
    }

    const handleContentChange = (content) => {
        setControl({...control, content});
    }

    const handleSendMessage = () => {
      if(content && content !== "" ) {
        sendMessage({variables:control})
        setControl({...control, content: ""})
      }
    }

    const cardStyle = { 
      maxWidth: "700px", 
      width: "50%",
      height: "50%",
      marginTop: "10%",
      marginLeft: "25%",
    };

    const containerStyle = {
      overflow: "hidden"
  };


    return (
      <Card style={cardStyle}>
        <CardHeader>Graph Chat</CardHeader>
        <CardBody>
          <Container style={containerStyle}>
            <Messages style={{overflowY: "scroll"}} user={control.user}/>
            <Controls 
              user={control.user} 
              content={control.content} 
              onUserChange={handleUserChange}
              onContentChange={handleContentChange}
              onSend={handleSendMessage}
            />
          </Container>
        </CardBody>
      </Card>
    );
}

export default () => {
    return (
        <ApolloProvider client={client}>
          <Chat/>
        </ApolloProvider>
      );
}

