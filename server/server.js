const { GraphQLServer, PubSub } = require('graphql-yoga');

const messages = [];
const subscribers = [];
const onMessageUpdate = (notify) => subscribers.push(notify);

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
                const channel = Math.random().toString(36).slice(2,15);
                // Add a notify callback ready to the pool of subscribers
                onMessageUpdate(() => notify(channel));
                // Notify the subscriber upon subscription for the first time
                setTimeout(() => notify(channel), 0);
                return pubsub.asyncIterator(channel);
            }
        }
    }
}

const notify = (channel) => {
    pubsub.publish(channel, {messages});
};

const notifyAllSubscribers = () => {
    subscribers.forEach(notify => notify());
};

const pubsub = new PubSub();
const context = {pubsub};
const server = new GraphQLServer({typeDefs, resolvers, context});


server.start(({port}) => {
    console.log(`Server started on port http://localhost:${port}/`);
});