import {gql} from '@apollo/client';


const GET_MESSAGES = gql`
    query {
        messages {
            id
            content
            user
        }
    }
`;

const SEND_MESSAGE = gql`
    mutation($user: String!, $content: String!){
        sendMessage(user: $user, content: $content)
    }
`;

const SUBSCRIBE_TO_MESSAGES = gql`
    subscription {
        messages {
            id
            content
            user
        }
    }
`;

export {
    GET_MESSAGES,
    SEND_MESSAGE,
    SUBSCRIBE_TO_MESSAGES
}