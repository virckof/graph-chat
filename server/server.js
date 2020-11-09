const { GraphQLServer, PubSub } = require('graphql-yoga');
const { v4 : uuidv4 } = require ('uuid');


const messages = [];
const subscribers = [];
const onMessageUpdate = (notify) => subscribers.push(notify);

// ------------------------------------------------------------------
// Schema
// ------------------------------------------------------------------

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

    type Subscription {
        messages: [Message!]
    }
`;

// ------------------------------------------------------------------
// Resolvers
// ------------------------------------------------------------------

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
            notifyAllSubscribers();
            return id;
        },
    },
    Subscription: {
        messages: {
            subscribe: (parent, args, {pubsub}) => {
                // Get a channel id for this subscription request
                const channel = uuidv4();
                // Add a notify callback ready to the pool of subscribers
                onMessageUpdate(() => notify(channel));
                // Notify the subscriber upon subscription for the first time
                setTimeout(() => notify(channel), 0);
                return pubsub.asyncIterator(channel);
            }
        }
    }
}

// ------------------------------------------------------------------
// Publish and Subscriber Utilities
// ------------------------------------------------------------------

const notify = (channel) => {
    pubsub.publish(channel, {messages});
};

const notifyAllSubscribers = () => {
    subscribers.forEach(notify => notify());
};

// ------------------------------------------------------------------
// Main Server Initialization
// https://github.com/apollographql/graphql-subscriptions
// ------------------------------------------------------------------

const pubsub = new PubSub();
const server = new GraphQLServer({typeDefs, resolvers, context: {pubsub}});
const options = {
    subscriptions: {
        onDisconnect: (webSocket, context) => {
            console.log(JSON.stringify(context));
        }
    }
};
server.start(options, ({port}) => {
    console.log(`Server started on port http://localhost:${port}/`);
});

