const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const resolvers = {
  Query: {
    user: () => {
      return {
        name: "John",
        age: 20,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
