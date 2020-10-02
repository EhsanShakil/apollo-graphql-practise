const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

let data = [
  {
    name: "John",
    age: 20,
  },
];

const resolvers = {
  Query: {
    user: () => data,
  },
  Mutation: {
    addUser: (e, { input }) => {
      data.push({
        name: input.name,
        age: input.age,
      });
      return {
        name: input.name,
        age: input.age,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
