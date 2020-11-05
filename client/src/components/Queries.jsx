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

export {
    GET_MESSAGES,
    SEND_MESSAGE
}