const { GraphQLServer } = require('graphql-yoga');

const messages = [];
let greet = "Hello";

const typeDefs = `
    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
        sendMessage(user: String!, content: String!) : ID!
    }
`;

const resolvers = {
    Query: {
        messages: () => messages,
    },
    Mutation: {
        sendMessage: (parent, {user, content}) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            return id;
        },
    }
}

const server = new GraphQLServer({typeDefs, resolvers});

server.start(({port}) => {
    console.log(`Server started on port http://localhost:${port}/`);
});