import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from '@apollo/client';
import React, {useState} from "react";
import {Messages} from "./Messages";
import {Container} from "shards-react";
import {Controls} from "./Controls";
import {SEND_MESSAGE} from "./Queries";

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
      sendMessage({variables:control})
      setControl({...control, content: ""})
    }


    return (
        <Container>
          <Messages user={control.user}/>
          <Controls 
            user={control.user} 
            content={control.content} 
            onUserChange={handleUserChange}
            onContentChange={handleContentChange}
            onSend={handleSendMessage}
          />
        </Container>
    );
}

export default () => {
    return (
        <ApolloProvider client={client}>
          <Chat/>
        </ApolloProvider>
      );
}

